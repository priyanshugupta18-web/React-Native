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
import { object } from 'yup';
import Box from './Box';

export default function App() {
  const [players, setPlayers] = React.useState({
    player1: '',
    player2: '',
  });
  const [winner, setWinner] = React.useState({
    winner: '',
  });
  const [patterns, setPatterns] = React.useState({
    box1: 'box1',
    box2: 'box2',
    box3: 'box3',
    box4: 'box4',
    box5: 'box5',
    box6: 'box6',
    box7: 'box7',
    box8: 'box8',
    box9: 'box9',
  });
  const [turn, setTurn] = React.useState("");
  const [draw, setDraw] = React.useState<boolean | null>(false);

  useEffect(() => {
    if(players.player1) {
      setTurn(players.player1)
    }
  }, [players])

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

      if (b1 === b2 && b2 === b3) {
        setWinner({ winner: b1 });
      }
    });
    function avail() {
      return Object.values(patterns).every(pattern => {
        (pattern !== '');
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
            <View>
              <View></View>
            </View>
            <View></View>
            <View></View>
            <View>
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
            <View>
              <View></View>
              <View></View>
            </View>
          </SafeAreaView>
        </SafeAreaProvider>
      </DataProvider>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dee2e8',
    display: 'flex',
  },
  game: {
    display: 'flex',
    flexDirection: 'row',
  },
});
