import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CartScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log("Menu clicked")}>
          <AntDesign name="menu-fold" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Meu Carrinho</Text>
        <TouchableOpacity onPress={() => console.log("Back clicked")}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Cart items */}
      {/* Adicione a visualização dos produtos do carrinho aqui */}

      {/* Total amount */}
      <View style={styles.total}>
        <Text style={styles.totalText}>Total: R$ {totalAmount}</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={() => console.log("Cancelar compra")}>
          <Text style={styles.buttonText}>Cancelar Compra</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.confirmButton]} onPress={() => console.log("Concluir")}>
          <Text style={styles.buttonText}>Concluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6F0D15',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
  total: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 10,
    marginBottom: 20,
  },
  totalText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingVertical: 15,
  },
  cancelButton: {
    backgroundColor: '#771616',
    marginRight: 10,
  },
  confirmButton: {
    backgroundColor: '#FF8517',
    marginLeft: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CartScreen;
