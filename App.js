import React from 'react';
import { StatusBar } from 'react-native';
import Login from './src/pages/Login';

const App = () => (
   <>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      <Login></Login>
   </>
);

export default App;
