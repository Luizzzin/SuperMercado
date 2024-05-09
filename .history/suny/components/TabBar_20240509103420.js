import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importe os ícones que deseja usar

const TabBar = ({ state, descriptors, navigation }) => {
  const icons = {
    Home: 'home-outline',
    Cart: 'cart-outline',
    ShoppingList: 'list-outline',
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const icon = icons[label];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={[styles.tabButton, isFocused && styles.tabButtonFocused]}
          >
            <Icon name={icon} size={24} color={isFocused ? '#FF8517' : '#FFFFFF'} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    elevation: 2,
    backgroundColor: '#5A1217',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabButtonFocused: {
    backgroundColor: '#771616',
  },
});

export { TabBar };