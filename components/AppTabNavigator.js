import React, { Component } from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import CreatePasswordScreen from '../screens/CreatePasswordScreen'
import ShowPasswordScreen from '../screens/ShowPasswordScreen'
import WelcomeScreen from '../screens/WelcomeScreen'

export const AppTabNavigator = createBottomTabNavigator({
  createPasswords : {
    screen :CreatePasswordScreen , 
    navigationOptions : {
        tabBarIcon : <Image source={require("../assets/createPasswords.png")} style={{width:20, height:20}}/>,            
        tabBarLabel : "Create Passwords"
    }
},
showPasswords : {
    screen : ShowPasswordScreen , 
    navigationOptions : {
        tabBarIcon : <Image source={require("../assets/showPasswords.png")} style={{width:20, height:20}}/>,
        tabBarLabel : "View Passwords"
        
    }
},
Logout:{
    screen : WelcomeScreen,
    navigationOptions : {
        tabBarIcon : <Image source={require("../assets/Logout.png")} style={{width:20, height:20}}/>,
        tabBarLabel : "Logout"
    }
}

})