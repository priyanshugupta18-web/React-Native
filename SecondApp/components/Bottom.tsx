import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { House, Search, Send, SquarePlay } from 'lucide-react-native';

export default function Bottom() {
  return (
    <View
      style={[
        styles.container,
        {
          paddingVertical: 10,
          marginHorizontal: 15,
          justifyContent: 'space-between',
          alignItems:'center'
        },
      ]}
    >
      <View>
        <House size={30} />
      </View>
      <View>
        <SquarePlay size={30} />
      </View>
      <View>
        <Send size={30} />
      </View>
      <View>
        <Search size={30} />
      </View>
      <View>
        <Image
          source={{
            uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.H3S-oQHMw9okOwSMHmb0jQHaLH%3Fpid%3DApi&f=1&ipt=567bdb4c7b95eee8f48450df7fa4bb6a04db83b142ce830364cabaccaedf6efb&ipo=images',
          }}
          style={{height:30, width:30, borderRadius:15}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: 60,
    flexDirection: 'row',
  },
});
