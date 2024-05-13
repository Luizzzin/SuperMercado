import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons'; // Certifique-se de instalar o pacote expo-vector-icons

const HomeScreen = () => {

  const categories = [
    { id: 1, name: 'Categoria 1', image: require('./path/to/image1.png') },
    { id: 2, name: 'Categoria 2', image: require('./path/to/image1.png') },
    { id: 3, name: 'Categoria 3', image: require('./path/to/image1.png') },
    { id: 4, name: 'Categoria 4', image: require('./path/to/image1.png') },
    { id: 5, name: 'Categoria 5', image: require('./path/to/image1.png') },
    { id: 6, name: 'Categoria 6', image: require('./path/to/image1.png') },
    { id: 7, name: 'Categoria 7', image: require('./path/to/image1.png') }
  ];

  const products = [
    { id: 1, name: 'Produto 1', price: 10, image: require('./path/to/image1.png') },
    { id: 2, name: 'Produto 2', price: 20, image: require('./path/to/image1.png') },
    { id: 3, name: 'Produto 3', price: 30, image: require('./path/to/image1.png') },
    { id: 4, name: 'Produto 4', price: 40, image: require('./path/to/image1.png') },
    { id: 5, name: 'Produto 5', price: 50, image: require('./path/to/image1.png') },
    { id: 6, name: 'Produto 6', price: 60, image: require('./path/to/image1.png') },
  ];

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
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryItem}>
            <Image source={category.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Product Cards */}
      <ScrollView style={styles.productContainer}>
        {products.map(product => (
          <TouchableOpacity key={product.id} style={styles.productCard}>
            <Image source={product.image} style={styles.productImage} />
            <View style={styles.productDescription}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>R$ {product.price.toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
        ))}
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
    paddingHorizontal: 10,
    paddingTop: 0,
  },
  logo: {
    width: 95,
    height: 50,
    right: 130,
    top: 40,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 75,
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
  categoryItem: {
    marginRight: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 7,
    alignItems: 'center',
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 7,
    marginBottom: 5,
  },
  categoryText: {
    color: '#6F0D15',
    fontSize: 16,
  },
  productContainer: {
    paddingHorizontal: 20,
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#B91723',
    borderRadius: 10,
    padding: 10,
  },
  productImage: {
    width: '45%',
    height: 190,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
},
  productName: {
  marginTop: 10,
  fontSize: 36,
  fontWeight: 'bold',
  color: 'yellow',
},
  productPrice: {
  marginTop: 5,
  fontSize: 24,
  fontWeight: 'bold',
  color: '#6F0D15',
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
  productDescription: {
  flex: 1,
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column',
}
});

export default HomeScreen;
