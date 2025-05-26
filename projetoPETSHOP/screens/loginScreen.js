
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


export default function CadastroScreen({ navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    const enviarDados = async () => {
        if (!nome || !email) {
            alert('Por favor, preencha todos os campos!');
            return;
        }
        try {
            await inserirUsuario(nome, email);
            alert('Usuário cadastrado com sucesso!');
            navigation.navigate('Consulta');
        } catch (error) {
            alert('Erro ao cadastrar usuário: ' + error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome:</Text>
            <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}
                placeholder="Digite seu nome"
            />
            <Text style={styles.label}>Email:</Text>
            <TextInput
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Digite seu email"
                  keyboardType="email-address"
              />
              <View style={styles.buttonContainer}>
                  <Button title="Voltar" onPress={() => navigation.goBack()} />
                  <Button title="Enviar" onPress={enviarDados} />
              </View>
          </View>
      );
  }
  
  const styles = StyleSheet.create({
      container: { padding: 20, justifyContent: 'center' },
      label: { fontSize: 18, marginBottom: 5 },
      input: {
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 20,
          borderRadius: 5
      },
      buttonContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20
      }
  });