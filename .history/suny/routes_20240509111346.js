import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './telas/path/to/HomeScreen'; // Importe o componente HomeScreen

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Aqui você adicionaria outras telas */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
