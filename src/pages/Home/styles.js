import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   background: #d1d1d1;
`;

export const Content = styled.View`
   flex: 1;
   max-height: 250px;
   z-index: 5;
`;

export const Card = styled.View`
   flex: 1;
   background: #fff;
   border-bottom-left-radius: 20px;
   border-bottom-right-radius: 20px;
   height: 100%;
`;

export const CardHeader = styled.View`
   flex-direction: row;
   align-items: center;
`;

export const CardContent = styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;
   margin-top: 100px;
`;

export const Description = styled.Text`
   font-size: 32px;
   font-weight: bold;
   text-align: center;
`;

export const CardFooter = styled.View`
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   padding: 10px;
`;

export const Receitas = styled.View`
   flex-direction: column;
   justify-content: flex-start;
   left: -25px;
`;

export const Despesas = styled.View`
   flex-direction: column;
   justify-content: flex-start;
   left: -25px;
`;

export const Anotation = styled.Text``;
