import React from 'react';

import { Text, View, StyleSheet, useColorScheme, Appearance, useWindowDimensions, Pressable } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

function AppPro() {
    const isDark =  useColorScheme() === 'dark';
    const { height } = useWindowDimensions();

    return(
        <SafeAreaView style={{height, backgroundColor:(isDark?"black":"white")}}>
            <View style={styles.container}>
                <Text style={isDark? styles.whiteText : styles.darkText}>Hello World!</Text>
                <Pressable style={{backgroundColor:"skyblue", borderRadius: 10, padding:10, borderWidth:1, borderColor:(isDark?"white":"gray"), marginTop:20}} onPress={() => (Appearance.setColorScheme(isDark?'light':'dark'))}>
                    <Text style={{color:(isDark?"gray":"white")}}>Change Theme</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteText: {
        color: "#FFFFFF",
        fontSize: 50,
    },
    darkText: {
        color: "#000000",
        fontSize: 50,
    }
})

export default AppPro;