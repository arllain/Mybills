import React from 'react';
import styled, { css } from 'styled-components';

const CustomButton = props => (
   <ButtonContainer
      backgroundColor={props.backgroundColor}
      buttonWidth={props.buttonWidth}
      buttonTop={props.buttonTop}
   >
      <ButtonText textColor={props.textColor}>{props.text}</ButtonText>
   </ButtonContainer>
);

export default CustomButton;

const ButtonContainer = styled.TouchableOpacity`
   top: ${props => props.buttonTop};
   width: ${props => props.buttonWidth};
   height: 40px;
   padding: 10px;
   border-radius: 20px;
   background-color: ${props => props.backgroundColor};
`;

const ButtonText = styled.Text`
   font-size: 16px;
   color: ${props => props.textColor};
   text-align: center;
`;
