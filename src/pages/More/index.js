import React from 'react';
import { View, Text } from 'react-native';
import TabNavigator from '../../components/TabNavigator/TabNavigator';
import { Container } from './styles';

export default function More(props) {
   return (
      <Container>
         <TabNavigator></TabNavigator>
      </Container>
   );
}
