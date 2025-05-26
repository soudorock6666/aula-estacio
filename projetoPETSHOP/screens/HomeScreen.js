import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View >
       <Button
        title="Sobre nós"
        onPress={() => navigation.navigate('Sobre Nós')} />
    </View>
  );
}