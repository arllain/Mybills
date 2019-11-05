import React from 'react';
import { Container, TextButton } from './styles';

const CustomButton = props => (
   <Container
      top={props.top}
      width={props.width}
      height={props.height}
      padding={props.padding}
      radius={props.radius}
      background={props.background}
      onPress={props.onPress}
   >
      <TextButton color={props.color}>{props.text}</TextButton>
   </Container>
);

export default CustomButton;
