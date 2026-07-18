import { StatusBar, StyleSheet, View, Pressable, Text } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import React from 'react'

function App() {
  const [colorB, setColorB] = React.useState("#ffffff");
  const [colorS1, setColorS1] = React.useState("#eb6434");
  const [colorS2, setColorS2] = React.useState("#eb9b34");
  const [colorS3, setColorS3] = React.useState("#a2eb34");
  const [colorS4, setColorS4] = React.useState("#34cdeb");

  const generateColor = (setPara : React.Dispatch<React.SetStateAction<string>>) => {
    let color = "#";
    let hexRange = "1234567890ABCDEF"

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)]
    }
    setPara(color);
  }

  return (
    <>
      <StatusBar barStyle="dark-content"/>
      <SafeAreaProvider>
        <SafeAreaView style={[styles.container, {backgroundColor: colorB}]}>
          <View style={styles.wrapper}>
            <View style={[styles.colorBlocks, {backgroundColor: colorS1}]} />
            <View style={[styles.colorBlocks, {backgroundColor: colorS2}]} />
          </View>
          <View style={[styles.wrapper]}>
            <Pressable style={{padding: 10, borderRadius: 5, backgroundColor:"green", elevation: 5, shadowColor:"black"}} onPress={() => {
              generateColor(setColorB);
              generateColor(setColorS1);
              generateColor(setColorS2);
              generateColor(setColorS3);
              generateColor(setColorS4);
              }}> 
              <Text style={{color: 'white', letterSpacing:0.5}}>New Color</Text>
            </Pressable>
          </View>
          <View style={styles.wrapper}>
            <View style={[styles.colorBlocks, {backgroundColor: colorS3}]} />
            <View style={[styles.colorBlocks, {backgroundColor: colorS4}]} />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    alignContent:"center",
  },
  colorBlocks: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  wrapper: {
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 30,
  }
});

export default App;
