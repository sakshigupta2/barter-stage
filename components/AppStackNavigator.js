import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Exchange from '../screens/Exchange';
import RecieverDetailsScreen  from '../screens/RecieverDetailsScreen';




export const AppStackNavigator = createStackNavigator({
  Exchange : {
    screen : Exchange,
    navigationOptions:{
      headerShown : false
    }
  },
  RecieverDetails : {
    screen : RecieverDetailsScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'BookDonateList'
  }
);
