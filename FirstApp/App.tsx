import React from 'react'

import {
  View,
  Text,
  Button
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useWindowDimensions } from 'react-native';
import { useState } from 'react';

function App() {
  const { height } = useWindowDimensions();
  const [visibility, setVisibility] = useState(false);

  return (
    <SafeAreaView style={{ display: 'flex', alignItems: 'center', justifyContent: "center", height }} >
      <View style={{height: 200, display:"flex", gap:10}}>
        <Text style={{ color: "red", fontSize: 50, textAlign: "center" }}>Hello World!</Text>
        <Text style={{ color: "white", textAlign: "center", fontSize: 15}}>A new App Developer is born today😅</Text>
        <Button title={visibility?"Say Bye!":"Say Hi!"} onPress={() => { setVisibility(!visibility) }} />
        <Text style={{ display: (visibility?"flex":"none"), color: "yellow", marginTop: 10, textAlign:"center"}}>hello there!</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;