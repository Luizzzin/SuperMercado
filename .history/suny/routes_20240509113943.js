import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from './components/TabBar'; // Importe o componente TabBar

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <TabBar {...props} />}>
        {/* Adicione outras telas aqui, se necessário */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
