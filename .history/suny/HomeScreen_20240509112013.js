import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons'; // Certifique-se de instalar o pacote expo-vector-icons

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log("Menu clicked")}>
          <AntDesign name="menu-fold" size={24} color="white" />
        </TouchableOpacity>
        <Image source={require('./path/to/your/logo.png')} style={styles.logo} />
        <TouchableOpacity onPress={() => console.log("Hamburger clicked")}>
          <FontAwesome name="bars" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar produtos"
        />
        <TouchableOpacity onPress={() => console.log("Filter clicked")}>
          <FontAwesome name="filter" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Category Carousel */}
      <ScrollView horizontal style={styles.carousel}>
        {/* Render your 7 category images here */}
      </ScrollView>

      {/* Product Cards */}
      <ScrollView style={styles.productContainer}>
        {/* Render your product cards here */}
      </ScrollView>

      {/* Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => console.log("Home clicked")} style={styles.tabItem}>
          <AntDesign name="home" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Add clicked")} style={styles.tabItem}>
          <AntDesign name="pluscircleo" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Cart clicked")} style={styles.tabItem}>
          <AntDesign name="shoppingcart" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6F0D15',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  logo: {
    width: 130,
    height: 50,
    paddingRight
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  carousel: {
    marginTop: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  productContainer: {
    paddingHorizontal: 20,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#5A1217',
    paddingVertical: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
});

export default HomeScreen;
