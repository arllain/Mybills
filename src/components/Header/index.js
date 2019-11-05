import React from 'react';
import { Container, Top, Logo, Title } from './styles';
import logo from '../../assets/Mybills_Logo.png';

export default function Header() {
   return (
      <Container>
         <Top>
            <Logo source={logo} />
         </Top>
         <Title>Mybills</Title>
      </Container>
   );
}
