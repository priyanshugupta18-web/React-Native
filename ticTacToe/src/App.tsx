import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useEffect } from 'react';
import UserDialogue from './UserDialogue';
import FeedbackDialogue from './FeedbackDialogue';
import useData, { DataProvider } from '../contexts/contexts';
import { Shuffle, CircleUserRound, Zap } from 'lucide-react-native';
import Box from './Box';
import DrawFeedback from './DrawFeedback';

export default function App() {
  const [players, setPlayers] = React.useState({
    player1: '',
    player2: '',
  });
  const [winner, setWinner] = React.useState({
    winner: '',
  });
  const [patterns, setPatterns] = React.useState({
    box1: { pressed: false, turn: '' },
    box2: { pressed: false, turn: '' },
    box3: { pressed: false, turn: '' },
    box4: { pressed: false, turn: '' },
    box5: { pressed: false, turn: '' },
    box6: { pressed: false, turn: '' },
    box7: { pressed: false, turn: '' },
    box8: { pressed: false, turn: '' },
    box9: { pressed: false, turn: '' },
  });
  const [turn, setTurn] = React.useState('');
  const [draw, setDraw] = React.useState<boolean | null>(false);
  const [isEmpty, setIsEmpty] = React.useState(true);

  useEffect(() => {
    if (players.player1) {
      setTurn(players.player1);
    }
  }, [players]);

  useEffect(() => {
    setIsEmpty(Object.values(patterns).every(Pattern => !Pattern.pressed));
  }, [patterns]);

  useEffect(() => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winningPatterns.forEach(pattern => {
      const b1 = Object.values(patterns)[pattern[0]];
      const b2 = Object.values(patterns)[pattern[1]];
      const b3 = Object.values(patterns)[pattern[2]];

      if (b1.turn === b2.turn && b2.turn === b3.turn && b1.turn !== '') {
        setWinner({ winner: b1.turn });
      }
    });
    function avail() {
      return Object.values(patterns).every(pattern => {
        return pattern.pressed;
      });
    }
    if (winner.winner === '' && avail()) {
      setDraw(true);
    }
  }, [patterns]);
  const { height } = useWindowDimensions();
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <DataProvider
        value={{
          players,
          setPlayers,
          winner,
          setWinner,
          patterns,
          draw,
          setDraw,
          turn,
          setTurn,
          setPatterns,
        }}
      >
        <SafeAreaProvider>
          <SafeAreaView style={[styles.container, { height }]}>
            {players.player1 == '' && players.player2 == '' && <UserDialogue />}
            {winner.winner !== '' && <FeedbackDialogue />}
            {draw === true && <DrawFeedback />}
            <View style={styles.navLayout}>
              <Pressable disabled={!isEmpty} onPress={() => {
                setPlayers({
                  player1: "",
                  player2: "",
                });
              }}>
                <CircleUserRound color={isEmpty?"black":"gray"} size={30} />
              </Pressable>
              <View>
                <Text style={{ fontSize: 24, fontWeight: '600' }}>
                  𝑇𝑖𝑐𝑇𝑎𝑐𝑇𝑜𝑒
                </Text>
              </View>
              <Pressable
                disabled={!isEmpty}
                onPress={() => {
                  setPlayers(prev => ({
                    player1: prev.player2,
                    player2: prev.player1,
                  }));
                }}
              >
                <Shuffle color={isEmpty?"black":"gray"} size={30} />
              </Pressable>
            </View>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginBottom: 40,
                  padding: 10,
                  backgroundColor: 'white',
                  width: 300,
                  elevation: 5,
                }}
              >
                <View
                  style={{
                    width: 100,
                    height: 25,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{
                      textTransform: 'uppercase',
                      fontSize: 18,
                      fontWeight: '500',
                    }}
                  >
                    {players.player1 || 'Player 1'}
                  </Text>
                </View>
                <View>
                  <Zap color="#0c54f2" size={30} />
                </View>
                <View
                  style={{
                    width: 100,
                    height: 25,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{
                      textTransform: 'uppercase',
                      fontSize: 18,
                      fontWeight: '500',
                    }}
                  >
                    {players.player2 || 'Player 2'}
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Text
                style={{
                  textTransform: 'uppercase',
                  lineHeight: 25,
                  fontSize: 18,
                  fontWeight: '500',
                  letterSpacing: 1,
                  textAlign: 'center',
                  marginBottom: 20,
                  color: turn === players.player1 ? '#0c54f2' : '#e5cb20',
                }}
              >
                {turn || 'player 1'}'s turn
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 20,
                  backgroundColor: 'white',
                  elevation: 5,
                }}
              >
                <View style={styles.game}>
                  <Box name="box1" />
                  <Box name="box2" />
                  <Box name="box3" />
                </View>
                <View style={styles.game}>
                  <Box name="box4" />
                  <Box name="box5" />
                  <Box name="box6" />
                </View>
                <View style={styles.game}>
                  <Box name="box7" />
                  <Box name="box8" />
                  <Box name="box9" />
                </View>
              </View>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
              }}
            >
              <Pressable
                onPress={() => {
                  setTurn(players.player1);
                  setPatterns({
                    box1: { pressed: false, turn: '' },
                    box2: { pressed: false, turn: '' },
                    box3: { pressed: false, turn: '' },
                    box4: { pressed: false, turn: '' },
                    box5: { pressed: false, turn: '' },
                    box6: { pressed: false, turn: '' },
                    box7: { pressed: false, turn: '' },
                    box8: { pressed: false, turn: '' },
                    box9: { pressed: false, turn: '' },
                  });
                }}
                style={({ pressed }) => [
                  {
                    backgroundColor: '#0c54f2',
                    elevation: 5,
                    width: 300,
                    paddingVertical: 10,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 30,
                  },
                  pressed && { transform: [{ translateY: 2 }] },
                ]}
              >
                <Text
                  style={{
                    letterSpacing: 1,
                    fontWeight: '600',
                    color: 'white',
                    textTransform: 'uppercase',
                  }}
                >
                  reset game
                </Text>
              </Pressable>
            </View>
          </SafeAreaView>
        </SafeAreaProvider>
      </DataProvider>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F3F5',
    display: 'flex',
  },
  game: {
    display: 'flex',
    flexDirection: 'row',
  },
  navLayout: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 60,
    marginBottom: 70,
  },
});
