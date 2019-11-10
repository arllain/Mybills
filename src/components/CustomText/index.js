import React from 'react';
import { Container, TextCustom } from './styles';

/*const CustomText = props => (
   <Container>
      <TextCustom
         color={props.color}
         fontSize={props.fontSize}
         fontWeight={props.fontWeight}
         textAlign={props.textAlign}
      >
         {props.text}
      </TextCustom>
   </Container>
);*/

const CustomText = props => (
   <TextCustom
      color={props.color}
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
      textAlign={props.textAlign}
   >
      {props.text}
   </TextCustom>
);

export default CustomText;
