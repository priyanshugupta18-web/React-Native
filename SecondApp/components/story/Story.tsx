import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { CircleFadingPlus } from 'lucide-react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';

export default function Story() {
  const users = [
    {
      userName: 'SweetGiggles',
      imageUri:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.2_m4ReZ5FTAGdVvvDTJjYgHaLH%3Fpid%3DApi&f=1&ipt=192f93a73a4722d04c84661022b58ca5eefaa2a6a216cfbcdec7129a85bf13cc&ipo=images',
    },
    {
      userName: 'LollipopLush',
      imageUri:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.xhTegI38jgv9c2c_-BAWlgHaE8%3Fr%3D0%26pid%3DApi&f=1&ipt=fd96e7c0db1258dfbaac35ea9520d1b7a82a771f0cf5c60da90e3f31eac1ba8c&ipo=images',
    },
    {
      userName: 'DewdropBabe',
      imageUri:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%2Fid%2FOIP.QpawPrmr9xMQUNag34zHUAHaLM%3Fr%3D0%26pid%3DApi&f=1&ipt=737641eaa38f68411d1cb61a21437c481d44538e5454bb755e0d43281060df46&ipo=images',
    },
    {
      userName: 'TwinkleFrost',
      imageUri:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.O5oT5A3t30NuvHz3_7Pt6AHaNL%3Fpid%3DApi&f=1&ipt=03b22a482cb18157ed0a57e671623aead04f019abb615d61348a16bb683b3b20&ipo=images',
    },
    {
      userName: 'WhimsyDream',
      imageUri:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.I7-Kp6ayUzLQuonE6-rrlAHaJW%3Fpid%3DApi&f=1&ipt=e0daa21791f5a5e31221f1f3938387f7ce4642f093605e2f8fa36cfca1e9358d&ipo=images',
    },
  ];
  return (
    <ScrollView horizontal={true}>
      <View
        style={[styles.container, {
          gap: 10,
          alignItems:'center',
          marginHorizontal: 10,
        }]}
      >
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            gap: 6,
            marginRight: 5,
          }}
        >
          <View>
            <Image
              source={{
                uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.H3S-oQHMw9okOwSMHmb0jQHaLH%3Fpid%3DApi&f=1&ipt=567bdb4c7b95eee8f48450df7fa4bb6a04db83b142ce830364cabaccaedf6efb&ipo=images',
              }}
              style={styles.profileImg}
            />
          </View>
          <View>
            <Text style={styles.text}>Your Story</Text>
          </View>
          <View
            style={{
              position: 'absolute',
              top: 43,
              left: 63,
              backgroundColor: 'white',
              borderRadius: 12,
            }}
          >
            <CircleFadingPlus size={24} />
          </View>
        </View>
        {users.map(user => {
          return (
            <View key={user.userName}>
              <LinearGradient 
              colors={['#ee2a7b','#f9ce34']}
              style={styles.storyRing}
              >
                <Image
                  source={{
                    uri: user.imageUri,
                  }}
                  style={[
                    styles.storyImg,
                    {borderWidth:4, borderColor:'white'}
                  ]}
                />
              </LinearGradient>
              <View>
                <Text style={styles.text}>{user.userName}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  profileImg: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  storyImg: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  storyRing:{
    padding:3,
    width:86,
    height:86,
    borderRadius:43,
  },
  text:{
    fontSize:12,
    letterSpacing:1,
  },
  container: {
    display:'flex',
    height:120,
    flexDirection: 'row',
  },
});
