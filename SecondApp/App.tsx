import { StyleSheet, ScrollView, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import Header from './components/header/Header';
import Post from './components/Post';
import Story from './components/story/Story';
import Bottom from './components/Bottom';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar  backgroundColor="#ffffff" barStyle="dark-content"/>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Header />
          <Story />
          <Post />
        </ScrollView>
        <Bottom />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
