import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
export default function ProfileScreen() {

  const openLink = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      alert(`Não é possível abrir o link: ${url}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre a loja</Text>
      <Text style={styles.address}>
        Endereço: Av. Governador Leonel de Moura Brizola, 1452 - Centro, Duque de Caxias - RJ, 25010-002
      </Text>
      <Image 
        source={{ uri: 'https://lh3.googleusercontent.com/p/AF1QipMY4iFr4sZ7iwAe9AuVdbMHKKMsO4rvyw8-A_OH=w507-h240-k-no' }} 
        style={styles.image} 
      />
      <Text style={styles.title}>Redes Sociais</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={() => openLink('https://www.instagram.com/mundodosanimaispet/?hl=pt')}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/174/174855.png' }} // Ícone Instagram
            style={styles.socialIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openLink('https://www.facebook.com/mundodosanimaiscaxias')}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/733/733547.png' }} // Ícone Facebook
            style={styles.socialIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openLink('https://wa.me/5511999999999')}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/733/733585.png' }} // Ícone WhatsApp
            style={styles.socialIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openLink('https://www.tiktok.com/@sualoja')}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3046/3046122.png' }} // Ícone TikTok
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  address: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 350,
    height: 300,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
});