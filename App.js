import React from 'react';
import { StatusBar } from 'react-native';
import Main from './src/pages/Main';

const App = () => (
   <>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      <Main></Main>
   </>
);

export default App;
