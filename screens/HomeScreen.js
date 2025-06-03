import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Button,
  useColorScheme,
  Animated,
  Text,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  const scheme = useColorScheme();
  const styles = createStyles(scheme);

  const openWhatsApp = () => {
    const phoneNumber = '5521992030460';
    const message = 'Olá! Gostaria de saber mais sobre a loja.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    Linking.openURL(url).catch(err =>
      console.error('Erro ao abrir o WhatsApp:', err)
    );
  };

  // Imagens do carrossel
  const images = [
    require('/run/media/gui/Novo volume/Trabalho bugado/bug/app/assets/img1.png'),
    require('/run/media/gui/Novo volume/Trabalho bugado/bug/app/assets/img4.jpg'),
    require('/run/media/gui/Novo volume/Trabalho bugado/bug/app/assets/img3.jpg'),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [fadeAnim]);

  // Lista de animais clicáveis com novo animal adicionado
  const animais = [
    {
      nome: 'Roedores',
      imagem: require('/run/media/gui/Novo volume/Trabalho bugado/bug/app/assets/adorable-hamster-cartoon-character-cute-face-animal-illustration-cut-out-transparent-.png'),
      destino: 'Roedores',
    },
    {
      nome: 'Peixes',
      imagem: require('/run/media/gui/Novo volume/Trabalho bugado/bug/app/assets/Colorful-Gold-Fish-Swimming-Gracefully-PNG.png'),
      destino: 'Peixes',
    },
    {
      nome: 'Pássaros',
      imagem: require('/run/media/gui/Novo volume/Trabalho bugado/bug/app/assets/birdo.png'),
      destino: 'Passáros',
    },
    {
      nome: 'Ração',
      imagem: require('/run/media/gui/Novo volume/Trabalho bugado/bug/app/assets/dog-bowl-clipart-design-illustration-free-png.png'), // Novo animal
      destino: 'Ração',
    },
  ];

  const irParaDetalhes = (animal) => {
    navigation.navigate(animal.destino, { nome: animal.nome });
  };

  return (
    <View style={styles.container}>
      {/* Carrossel de Imagens com Fade */}
      <Animated.Image
        source={images[currentIndex]}
        style={[styles.carouselImage, { opacity: fadeAnim }]}
        resizeMode="cover"
      />

      {/* Botão Sobre Nós */}
      <Button
        title="Quem é O Mundo dos Animais?"
        onPress={() => navigation.navigate('Sobre Nós')}
        color=""
      />

      {/* Galeria de Animais */}
      <View style={styles.animalGallery}>
        {animais.map((animal, index) => (
          <TouchableOpacity
            key={index}
            style={styles.animalItem}
            onPress={() => irParaDetalhes(animal)}
          >
            <Image source={animal.imagem} style={styles.animalImage} />
            <Text style={styles.animalText}>{animal.nome}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Botão WhatsApp */}
      <TouchableOpacity onPress={openWhatsApp} style={styles.whatsappButton}>
        <Image
          source={require('/run/media/gui/Novo volume/Trabalho bugado/bug/app/assets/zap.png')}
          style={styles.whatsappIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

// Estilos
const createStyles = (scheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    carouselImage: {
      width: '100%',
      height: 200,
      marginBottom: 10,
      borderRadius: 10,
    },
    animalGallery: {
      flexDirection: 'row',
      flexWrap: 'wrap',       // Permite múltiplas linhas
      justifyContent: 'space-around',
      gap: 20,                // Espaçamento entre os itens (Android pode não suportar, nesse caso pode usar margin nos items)
      marginTop: 50,
    },
    animalItem: {
      alignItems: 'center',
      marginBottom: 20,       // Espaço vertical entre as linhas
      width: 100,             // Ajuste para controlar quantos cabem por linha
    },
    animalImage: {
      width: 80,
      height: 80,
      borderRadius: 10,
    },
    animalText: {
      marginTop: 5,
      fontSize: 14,
    },
    whatsappButton: {
      position: 'absolute',
      bottom: 30,
      right: 30,
    },
    whatsappIcon: {
      width: 50,
      height: 50,
    },
  });