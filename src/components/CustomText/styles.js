import styled from 'styled-components/native';

/*export const Container = styled.View`
   top: ${props => props.top};
   left: ${props => props.left};
`;
*/

export const TextCustom = styled.Text`
   color: ${props => props.color};
   font-size: ${props => `${props.fontSize}px`};
   font-weight: ${props => props.fontWeight};
   text-align: ${props => props.textAlign};
`;
