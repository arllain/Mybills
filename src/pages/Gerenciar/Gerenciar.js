import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Container, Content, Card, CardContent } from './styles';

export default class Gerenciar extends React.Component {
   render() {
      return (
         <Container>
            <Content>
               <Card>
                  <View style={styles.container}>
                     <FlatList
                        data={[
                           { key: 'Contas' },
                           { key: 'Cartões de Crédito' },
                           { key: 'Objetivos' },
                           { key: 'Investimentos' },
                           { key: 'Categorias' },
                           { key: 'Tags' },
                           { key: 'Importar dados' },
                           { key: 'Importar SMS' },
                           { key: 'Exportar Relatórios' },
                           { key: 'Ferramentas' },
                           { key: 'Modo Viagem' },
                           { key: 'Configurações' },
                           { key: 'Cards da Tela Inicial' }
                        ]}
                        renderItem={({ item }) => (
                           <Text style={styles.item}>{item.key}</Text>
                        )}
                     />
                  </View>
               </Card>
            </Content>
         </Container>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: 22
   },
   item: {
      padding: 10,
      fontSize: 18,
      height: 44
   }
});

/*
import CustomText from '../../components/CustomText';
import {
   Container,
   Content,
   Header,
   Card,
   CardHeader,
   CardContent
} from './styles';

export default function More(props) {
   return (
      <Container>
         <Content>
            <Header>
               <CustomText
                  color="#868a87"
                  fontSize="16"
                  fontWeight="normal"
                  textAlign="center"
                  text="Mais Opções"
               />
            </Header>
            <Card>
               <View style={styles.container}>
                  <FlatList
                     data={[
                        { key: 'Contas' },
                        { key: 'Cartões de Crédito' },
                        { key: 'Objetivos' },
                        { key: 'Investimentos' },
                        { key: 'Categorias' },
                        { key: 'Tags' },
                        { key: 'Importar dados' },
                        { key: 'Importar SMS' },
                        { key: 'Exportar Relatórios' },
                        { key: 'Ferramentas' },
                        { key: 'Modo Viagem' },
                        { key: 'Configurações' },
                        { key: 'Cards da Tela Inicial' }
                     ]}
                     renderItem={({ item }) => (
                        <Text style={styles.item}>{item.key}</Text>
                     )}
                  />
               </View>
            </Card>
         </Content>
      </Container>
   );
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: 22
   },
   item: {
      padding: 10,
      fontSize: 18,
      height: 44
   }
});*/
