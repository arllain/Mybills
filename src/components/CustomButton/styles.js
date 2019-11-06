import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
   top: ${props => props.top};
   width: ${props => props.width};
   height: ${props => props.height};
   padding: ${props => props.padding};
   border-radius: ${props => props.radius};
   background-color: ${props => props.background};
`;

export const TextButton = styled.Text`
   font-size: 16px;
   color: ${props => props.color}
   text-align: center;
`;
