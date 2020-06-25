import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen'
import Exchange from './screens/Exchange';
import SettingScreen from './screens/SettingScreen.js';
import CustomSideBarMenu from './components/CustomSideBarMenu.js';
import MyDonationScreen from './screens/MyDonationScreen';
import NotificationScreen from './screens/NotificationScreen';


export default function App() {
  return (
    <AppContainer/>
  );
}

const TabNavigator = createBottomTabNavigator({
    HomeScreen: {screen: HomeScreen},
    Exchange: {screen: Exchange},
  },
  {
    defaultNavigationOptions: ({navigation})=>({
      tabBarIcon: ()=>{
        const routeName = navigation.state.routeName;
        if(routeName === "HomeScreen"){
          return(
            <Image
            source={require("./assets/home.png")}
            style={{width:25, height:25}}
          />
          )

        }
        else if(routeName === "Exchange"){
          return(
            <Image
            source={require("./assets/exchange.png")}
            style={{width:25, height:25,}}
          />)

        }
      }
    })
  }
);

const AppDrawNavigator = createDrawerNavigator({
  Home : {
    screen : TabNavigator
    },
    MyDonations : {
      screen: MyDonationScreen
    },
    Notification: {
      screen: NotificationScreen
    },
  Settings : {
    screen : SettingScreen
    }
  },
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  AppDrawNavigator : AppDrawNavigator,
})

const AppContainer =  createAppContainer(switchNavigator);

 