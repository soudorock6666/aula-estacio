import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';

const produtos = [
  { id: '1', nome: 'Remédio' },
  
];

const numColumns = 2;
const tamanhoQuadrado = Dimensions.get('window').width / numColumns - 30;

const RemedioScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.imagemPlaceholder} />
      <Text style={styles.nomeProduto}>{item.nome}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}></Text>
      <FlatList
        data={produtos}
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
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  lista: {
    alignItems: 'center',
  },
  card: {
    width: tamanhoQuadrado,
    height: tamanhoQuadrado + 40,
    backgroundColor: '#f2f2f2',
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagemPlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  nomeProduto: {
    textAlign: 'center',
    fontSize: 14,
  },
});

export default RemedioScreen;