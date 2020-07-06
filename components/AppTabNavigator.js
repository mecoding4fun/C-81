import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ExchangeScreen from '../Screens/ExchangeScreen';
import HomeScreen from '../Screens/HomeScreen';



export const AppTabNavigator = createBottomTabNavigator({
  Exchange : {
    screen: ExchangeScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/trade.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Exchange",
    }
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/Home.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Home",
    }
  }
});