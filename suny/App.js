import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './routes'; // Importe o componente Routes

const Stack = createStackNavigator();

const App = () => {
  return <Routes />;
}

export default App;
