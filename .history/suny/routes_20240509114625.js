import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen'; // Importe o componente HomeScreen
import CartScreen from './CartScreen'; // Importe o componente CartScreen
import { TabBar } from './TabBar'; // Importe o componente TabBar

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      {/* Adicione outras telas aqui, se necessário */}
    </Tab.Navigator>
  );
}

export default TabNavigator;
