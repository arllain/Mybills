import React from 'react';
import { Text } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import Login from './pages/Login';
import Home from './pages/Home';
import Transactions from './pages/Transactions';
import Planning from './pages/Planning';
import More from './pages/More';

const activeTintLabelColor = '#346beb';
const inactiveTintLabelColor = '#999';
const iconSize = 20;

const activeColor = focused => {
   focused ? activeTintLabelColor : inactiveTintLabelColor;
};

const AuthenticationNavigator = createStackNavigator({
   Login: {
      screen: Login,
      navigationOptions: {
         header: null
      }
   }
});

const BottomTabNavigator = createMaterialBottomTabNavigator(
   {
      Principal: {
         screen: Home,
         navigationOptions: ({ focused }) => ({
            tabBarLabel: (
               <Text style={{ fontSize: 10, color: activeColor(focused) }}>
                  {' '}
                  Principal{' '}
               </Text>
            ),
            tabBarIcon: ({ focused }) => (
               <FeatherIcon
                  name="home"
                  size={iconSize}
                  color={
                     focused ? activeTintLabelColor : inactiveTintLabelColor
                  }
               />
            )
         })
      },
      Transações: {
         screen: Transactions,
         navigationOptions: ({ focused }) => ({
            tabBarLabel: (
               <Text style={{ fontSize: 10, color: activeColor(focused) }}>
                  {' '}
                  Transações{' '}
               </Text>
            ),
            tabBarIcon: ({ focused }) => (
               <EntypoIcon
                  name="list"
                  size={iconSize}
                  color={
                     focused ? activeTintLabelColor : inactiveTintLabelColor
                  }
               />
            )
         })
      },
      Planejamento: {
         screen: Planning,
         navigationOptions: ({ focused }) => ({
            tabBarLabel: (
               <Text style={{ fontSize: 10, color: activeColor(focused) }}>
                  {' '}
                  Planejamento{' '}
               </Text>
            ),
            tabBarIcon: ({ focused }) => (
               <AntDesignIcon
                  name="profile"
                  size={iconSize}
                  color={
                     focused ? activeTintLabelColor : inactiveTintLabelColor
                  }
               />
            )
         })
      },
      Mais: {
         screen: More,
         navigationOptions: ({ focused }) => ({
            tabBarLabel: (
               <Text style={{ fontSize: 10, color: activeColor(focused) }}>
                  {' '}
                  Mais{' '}
               </Text>
            ),
            tabBarIcon: ({ focused }) => (
               <AntDesignIcon
                  name="ellipsis1"
                  size={iconSize}
                  color={
                     focused ? activeTintLabelColor : inactiveTintLabelColor
                  }
               />
            )
         })
      }
   },
   {
      initialRouteName: 'Principal',
      activeColor: '#346beb',
      inactiveColor: '#999',
      barStyle: {
         backgroundColor: '#fff'
      },
      shifting: false
   }
);

const AppNavigator = createSwitchNavigator({
   Auth: AuthenticationNavigator,
   Home: BottomTabNavigator
});

export default Routes = createAppContainer(AppNavigator);
