import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import VisibilityIcon from 'react-native-vector-icons/MaterialIcons';
import CustomText from '../../components/CustomText';

import {
   Container,
   Content,
   Card,
   CardHeader,
   CardContent,
   Description,
   CardFooter,
   Receitas,
   Despesas
} from './styles';

export default function Home(props) {
   return (
      <Container>
         <Content>
            <Card>
               <CardHeader></CardHeader>
               <CardContent>
                  <CustomText
                     color="#999"
                     fontSize="12"
                     fontWeight="normal"
                     textAlign="center"
                     text="Saldo atual em contas"
                  />
                  <Description>R$ 25.800,62</Description>
                  <VisibilityIcon name="visibility" size={18} color="#666" />
               </CardContent>
               <CardFooter>
                  <Icon name="arrow-up-circle" size={50} color="#1dab4a" />
                  <Receitas>
                     <CustomText
                        color="#999"
                        fontSize="12"
                        fontWeight="normal"
                        textAlign="left"
                        text="Receitas"
                     />
                     <CustomText
                        color="#087014"
                        fontSize="18"
                        fontWeight="bold"
                        textAlign="left"
                        text="R$ 6.280,30"
                     />
                  </Receitas>
                  <Icon name="arrow-down-circle" size={50} color="#ff0000" />
                  <Despesas>
                     <CustomText
                        color="#999"
                        fontSize="12"
                        fontWeight="normal"
                        textAlign="left"
                        text="Despesas"
                     />
                     <CustomText
                        color="#ff0000"
                        fontSize="18"
                        fontWeight="bold"
                        textAlign="left"
                        text="R$ 2.973,45"
                     />
                  </Despesas>
               </CardFooter>
            </Card>
         </Content>
      </Container>
   );
}
