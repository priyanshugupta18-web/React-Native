import { StyleSheet, Text, View, Pressable } from 'react-native'
import useData from '../contexts/contexts';

export default function DrawFeedback() {
  const { setTurn, setDraw, setPatterns, players } = useData()
  return (
    <View style={[styles.container, StyleSheet.absoluteFill]}>
          <View style={styles.cardLayout}>
            <View>
              <Text
                style={{
                  ...styles.text,
                  fontSize: 24,
                  marginBottom: 20,
                  fontWeight: 500,
                }}
              >
                🎮 Game Over!
              </Text>
              <Text style={{ ...styles.text, fontSize: 18, fontWeight: '500' }}>
                It's a draw 😪!
              </Text>
            </View>
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
                setDraw(false);
              }}
              style={({ pressed }) => [
                styles.button,
                pressed && { transform: [{ translateY: 2 }] },
              ]}
            >
              <Text style={[styles.btnText, { textTransform: 'uppercase' }]}>
                new game
              </Text>
            </Pressable>
          </View>
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 50,
  },
  cardLayout: {
    display: 'flex',
    rowGap: 15,
    padding: 20,
    backgroundColor: 'white',
    elevation: 5,
    width: 300,
    height: 160,
  },
  button: {
    backgroundColor: '#0c54f2',
    elevation: 5,
    width: 260,
    paddingVertical: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    letterSpacing: 1,
    fontWeight: '600',
    color: 'white',
  },
  text: {
    fontSize: 17,
    textAlign: 'center',
    letterSpacing: 0.75,
    lineHeight: 20,
  },
});
