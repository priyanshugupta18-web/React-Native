import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useData from '../contexts/contexts';

export default function NewGame() {
  const { winner } = useData();
  return (
    <View style={[styles.container, StyleSheet.absoluteFill]}>
      <View style={styles.cardLayout}>
        <View><Text style={{ ...styles.text, fontSize: 24, marginBottom: 20, fontWeight: 500 }}>🎮 Game Over!</Text><Text style={{ ...styles.text, fontSize: 18, fontWeight: "500" }}> {winner.winner} wins 🥳!</Text></View>
        <Pressable style={({ pressed }) => [styles.button, pressed && { transform: [ {translateY: 2}] }]}><Text style={[styles.btnText, { textTransform: 'uppercase' }]}>new game</Text></Pressable>
    </View>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 50,
  },
  cardLayout: {
    display: "flex",
    rowGap: 15,
    padding: 20,
    backgroundColor: "white",
    elevation: 5,
    width: 300,
    height: 160,
  },
  button: {
    backgroundColor: '#0c54f2',
    elevation: 5,
    width: 260,
    paddingVertical: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  btnText: {
    letterSpacing: 1,
    fontWeight: "600",
    color: "white",
  },
  text: {
    fontSize: 17,
    textAlign: "center",
    letterSpacing: 0.75,
    lineHeight: 20,
  }
})