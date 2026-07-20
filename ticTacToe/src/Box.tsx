import { Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import useData from '../contexts/contexts';
import { X } from 'lucide-react-native';
import { Circle } from 'lucide-react-native';
export default function Box({ name }: { name: string }) {
  let { turn, setTurn, players, setPatterns} = useData();
  const [localTurn, setLocalTurn] = React.useState('');
  const [pressedOnce, setPressedOnce] = React.useState(false);
  return (
    <Pressable
      style={styles.container}
      disabled={pressedOnce}
      onPress={() => {
        setPatterns(prev => ({...prev, [name]: turn}))
        setLocalTurn(turn);
        setPressedOnce(true);
        setTurn(prev => {
          if (prev === players.player1) {
            return players.player2;
          } else {
            return players.player1;
          }
        });
      }}
    >
      <View
        style={
          localTurn === players.player1 && localTurn !== ''
            ? { display: 'flex' }
            : { display: 'none' }
        }
      >
        <X size={40} color="#204ae5" />
      </View>
      <View
        style={
          localTurn !== players.player1 && localTurn !== ''
            ? { display: 'flex' }
            : { display: 'none' }
        }
      >
        <Circle size={40} color="#e5cb20" />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'gray',
  },
});
