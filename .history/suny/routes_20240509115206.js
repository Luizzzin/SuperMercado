import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'; // Importe o componente HomeScreen

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
}

export default Routes;
