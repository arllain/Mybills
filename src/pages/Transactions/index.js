import React from 'react';
import { View, Text } from 'react-native';
import { Container } from './styles';
import CustomText from '../../components/CustomText';

export default function Transactions(props) {
   return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Text>Transações</Text>
      </View>
   );
}
