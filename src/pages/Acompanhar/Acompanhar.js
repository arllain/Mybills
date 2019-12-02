import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Container, Content, Card, CardContent } from './styles';

export default class Acompanhar extends React.Component {
   render() {
      return (
         <Container>
            <Content>
               <Card>
                  <View style={styles.container}>
                     <FlatList
                        data={[
                           { key: 'Gráficos' },
                           { key: 'Mybills Edu' },
                           { key: 'Balanço mensal' },
                           { key: 'Calendário' },
                           { key: 'Categorias' }
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
