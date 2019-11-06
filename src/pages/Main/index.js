import React from 'react';
import Header from '../../components/Header';
import { Container } from './styles';
import CustomButton from '../../components/CustomButton';

export default function Main() {
   return (
      <Container>
         <Header />
         <CustomButton
            top="300px"
            width="200"
            height="40px"
            padding="10px"
            radius="20px"
            color="#FFFFFF"
            text="Autenticar"
            background="#3734eb"
         ></CustomButton>
         <CustomButton
            top="320px"
            width="150"
            height="40px"
            padding="10px"
            radius="20px"
            color="#3734eb"
            text="Sair do aplicativo"
            background="#FFFFFF"
         ></CustomButton>
      </Container>
   );
}
