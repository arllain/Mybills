import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Gerenciar from '../../pages/Gerenciar/Gerenciar';
import Acompanhar from '../../pages/Acompanhar/Acompanhar';
import Sobre from '../../pages/Sobre/Sobre';
import TabBar from './TabBar';

const activeTintLabelColor = '#346beb';
const inactiveTintLabelColor = '#999';

const TabScreen = createMaterialTopTabNavigator(
   {
      Gerenciar: { screen: Gerenciar },
      Acompanhar: { screen: Acompanhar },
      Sobre: { screen: Sobre }
   },

   {
      tabBarPosition: 'top',
      swipeEnabled: true,
      animationEnabled: true,
      tabBarOptions: {
         activeTintColor: activeTintLabelColor,
         inactiveTintColor: inactiveTintLabelColor,
         style: {
            backgroundColor: '#d4d4d4'
         },
         labelStyle: {
            textAlign: 'center'
         },
         indicatorStyle: {
            borderBottomColor: '#fff',
            borderBottomWidth: 1
         }
      }
   }
);

const TabNavigator = createStackNavigator({
   TabScreen: {
      screen: TabScreen,
      navigationOptions: {
         headerStyle: {
            backgroundColor: '#e6e6e6'
         },
         headerTintColor: '#999',
         title: 'Mais Opções',
         textAlign: 'center'
      }
   }
});

export default createAppContainer(TabNavigator);
