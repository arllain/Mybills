import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
   top: ${props => props.top};
   width: ${props => props.width};
   height: ${props => `${props.height}px`};
   padding: ${props => `${props.padding}px`};
   border-radius: ${props => `${props.radius}px`};
   background-color: ${props => props.background};
`;

export const TextButton = styled.Text`
   color: ${props => props.color};
   font-size: ${props => `${props.fontSize}px`};
   font-weight: ${props => props.fontWeight};
   text-align: ${props => props.textAlign};
`;
