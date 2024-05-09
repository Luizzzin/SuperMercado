import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'; // Importe o componente HomeScreen
import CartScreen from './CartScreen'; // Importe o componente CartScreen
import TabBar from './components/TabBar'; // Importe o componente TabBar

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
}

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <TabBar {...props} />}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Cart" component={CartStack} />
        {/* Adicione outras telas aqui, se necessário */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
