import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const HomeScreen = () => {

  const categories = [
    { id: 1, image: require('./path/to/image1.png') },
    { id: 2, image: require('./path/to/image2.png') },
    { id: 3, image: require('./path/to/image3.png') },
    { id: 4, image: require('./path/to/image4.png') },
    { id: 5, image: require('./path/to/image5.png') }
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

      {/* Carrossel de Categorias */}
      <ScrollView horizontal style={styles.carousel}>
        {categories.map(category => (
          <TouchableOpacity key={category.id} style={styles.categoryItem}>
            <Image source={category.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Product Cards */}
      <ScrollView style={styles.productContainer}>
        {products.map(product => (
          <View style={styles.quadradoLaranja}>
            <TouchableOpacity key={product.id} style={styles.productCard}>
              <Image source={product.image} style={styles.productImage} />
              <View style={styles.productDescription}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>R$ {product.price.toFixed(2)}</Text>
                <TouchableOpacity style={styles.TextoBotao}>
                  <Text style={styles.BotaoTexto}>
                    Adicionar Ao Carrinho
                  </Text>
                </TouchableOpacity>


              </View>
            </TouchableOpacity>
          </View>
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    // paddingHorizontal: 10,
    paddingTop: 10,
  },
  logo: {
    width: 115,
    height: 70,
    resizeMode: 'contain',
    marginLeft: 20,
    marginTop: 20,
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
    // marginRight: 10,
  },
  carousel: {
    marginTop: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
    height: 850,
  },
  categoryItem: {
    marginRight: 10,
    padding: 10,
    backgroundColor: '#B91723',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
  },
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  categoryText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  productContainer: {

  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B91723',
    borderRadius: 20,
    padding: 15,
    width: '95%',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 1,
  },
  productImage: {
    width: '45%',
    height: 185,
    marginRight: 10,
    borderRadius: 5,
  },  
  productName: {
    marginTop: 10,
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
  },

  productPrice: {
    marginTop: 5,
    fontSize: 34,
    fontWeight: 'bold',
    color: 'yellow',
    marginBottom: 30,
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
    height: '95%',
    marginTop: 60,
  },
  // quadrado em volta dos produtos para dar um destaque
  quadradoLaranja: {
    width: '100%',
    height: 270,
    backgroundColor: '#FF8517',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  // botao de compra
  TextoBotao: {
    width: '95%',
    height: '25%',
    backgroundColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    
  },
  BotaoTexto: {
    fontWeight: 'bold',
    color: 'yellow',
    textShadowColor: '#000',
    textShadowOffset: { width: 0.3, height: 0.3 },
    textShadowRadius: 2,

  }
});

export default HomeScreen;
