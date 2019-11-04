import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import CustomButton from './src/components/custom-button/custom-button.styles';

export default function App() {
   return (
      <View style={styles.container}>
         <Image
            style={styles.logo}
            resizeMode={'contain'}
            source={require('./assets/logo/mybills-logo.png')}
         />
         <Text style={styles.titleText}>Mybills</Text>
         <CustomButton
            text="Autenticar"
            textColor="#fff"
            backgroundColor="#3363FF"
            buttonWidth="200px"
            buttonTop="420"
         />
         <Text style={styles.sairText}>Sair do aplicativo</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center'
   },

   logo: {
      top: 150,
      left: 0,
      bottom: 0,
      right: 0
   },

   titleText: {
      top: 155,
      fontSize: 45,
      fontWeight: 'bold',
      color: '#000'
   },

   sairText: {
      top: 440,
      fontSize: 16,
      fontWeight: 'bold',
      color: '#4785E2'
   }
});
