import React from 'react';
import Header from '../../components/Header';
import { Container } from './styles';
import CustomButton from '../../components/CustomButton';

export default function Login(props) {
   return (
      <Container>
         <Header />
         <CustomButton
            top="300px"
            width="200"
            height="40"
            padding="10"
            radius="20"
            color="#FFFFFF"
            text="Autenticar"
            textAlign="center"
            background="#3734eb"
            fontWeight="bold"
            fontSize="16"
            onPress={() => props.navigation.navigate('Home')}
         ></CustomButton>
         <CustomButton
            top="320px"
            width="170"
            height="40"
            padding="10"
            radius="20"
            color="#3734eb"
            text="Sair do aplicativo"
            textAlign="center"
            background="#FFFFFF"
            fontWeight="bold"
            fontSize="16"
         ></CustomButton>
      </Container>
   );
}
