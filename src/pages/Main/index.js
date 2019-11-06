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
            height="40"
            padding="10"
            radius="20"
            color="#FFFFFF"
            text="Autenticar"
            textAlign="center"
            background="#3734eb"
            fontWeight="bold"
            fontSize="16"
         ></CustomButton>
         <CustomButton
            top="320px"
            width="150"
            height="40"
            padding="10"
            radius="20"
            color="#3734eb"
            text="Sair do aplicativo"
            textAlign="center"
            background="#FFFFFF"
            fontWeight="bold"
            fontSize="16"
            onPress={() =>
               alert(
                  'Ao encerrar a sessão, todos os seus dados não sincronizados serão excluídos de seu dispositivo. Deseja realmente encerrar sua sessão neste dispositivo?'
               )
            }
         ></CustomButton>
      </Container>
   );
}
