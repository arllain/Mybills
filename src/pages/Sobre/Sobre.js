import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Container, Content, Card, CardContent } from './styles';

export default class Sobre extends React.Component {
   render() {
      return (
         <Container>
            <Content>
               <Card>
                  <View style={styles.container}>
                     <FlatList
                        data={[
                           { key: 'Sobre' },
                           { key: 'Convide seus amigos' },
                           { key: 'Balanço mensal' },
                           { key: 'Siga-nos' },
                           { key: 'Ajuda' },
                           { key: 'Termos de Uso e Política de Privacidade' },
                           { key: 'Mybills Premium' },
                           { key: 'Avalie Mybills' }
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
