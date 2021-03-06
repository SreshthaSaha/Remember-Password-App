import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
import {createSwitchNavigator , createAppContainer} from 'react-navigation';
import {AppTabNavigator} from './components/AppTabNavigator';

export default function App() {
  return (     
   <AppContainer/>    
  );
}
const switchNavigator = createSwitchNavigator({
  WelcomeScreen : {
    screen : WelcomeScreen 
  },
  BottomTab : {
    screen : AppTabNavigator
  }
})
const AppContainer = createAppContainer(switchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
