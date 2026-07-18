import { StyleSheet, Text, View, Image } from 'react-native';
import { Plus, Heart } from 'lucide-react-native';
import React from 'react';

export default function () {
  return (
    <View
      style={[
        styles.container,
        { justifyContent: 'space-between', alignItems: 'center', paddingHorizontal:10},
      ]}
    >
      <View>
        <Plus size={30} />
      </View>
      <View>
        <Image source={require('./logo.png')} style={{height: 55, width:130}} />
      </View>
      <View>
        <Heart size={30} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    height:60,
    flexDirection: 'row',
  },
});
