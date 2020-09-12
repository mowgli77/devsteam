import 'react-native-gesture-handler';
import React from 'react';
import {View, SectionList, SafeAreaView, KeyboardAvoidingView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import styled from 'styled-components/native'
import AppNavigator from "./navigators/AppNavigator";
import {Provider} from "react-redux";
import store from "./redux/store";

export default function App() {

    return (
        <Provider store={store}>
            <NavigationContainer>
                <SafeAreaView style={styles.container}>
                    <KeyboardAvoidingView style={styles.keyboard}
                                          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                        <AppNavigator/>
                    </KeyboardAvoidingView>
                </SafeAreaView>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    keyboard: {
        flex: 1
    }
})
