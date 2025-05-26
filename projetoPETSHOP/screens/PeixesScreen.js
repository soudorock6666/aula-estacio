import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';

const peixes = [
  { id: '1', nome: 'Barbo ouro' },
  { id: '2', nome: 'Acará Bandeira' },
  { id: '3', nome: 'Dourado Japonẽs' },
  { id: '4', nome: 'Tetra preto' },
  { id: '5', nome: 'Peixe Beta' },
];

const numColumns = 2;
const tamanhoQuadrado = Dimensions.get('window').width / numColumns - 30;

const PeixesScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.imagemPlaceholder} />
      <Text style={styles.nomeProduto}>{item.nome}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Venda de Peixes</Text>
      <FlatList
        data={peixes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e0f7fa', // Azul claro, para lembrar água
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#006064',
  },
  lista: {
    alignItems: 'center',
  },
  card: {
    width: tamanhoQuadrado,
    height: tamanhoQuadrado + 40,
    backgroundColor: '#ffffff',
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  imagemPlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: '#b2ebf2',
    borderRadius: 5,
    marginBottom: 10,
  },
  nomeProduto: {
    textAlign: 'center',
    fontSize: 14,
    color: '#00796b',
  },
});

export default PeixesScreen;