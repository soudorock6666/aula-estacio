import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PeixesScreen from '../screens/PeixesScreen';
import RoedoresScreen from '../screens/RoedoresScreen';
import AquariosScreen from '../screens/AquariosScreen';
import PassarosScreen from '../screens/PassarosScreen';
import RaçaoScreen from '../screens/RaçaoScreen';
import RemedioScreen from '../screens/RemedioScreen';
import SobreScreen from '../screens/SobreScreen';
import loginScreen from '../screens/loginScreen';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="login">
      <Drawer.Screen name="Início" component={HomeScreen} />
      <Drawer.Screen name="Usuário" component={ProfileScreen} />
      <Drawer.Screen name="Peixes" component={PeixesScreen} />
      <Drawer.Screen name="Roedores" component={RoedoresScreen} />
      <Drawer.Screen name="Aquários" component={AquariosScreen} />
      <Drawer.Screen name="Passáros" component={PassarosScreen} />
      <Drawer.Screen name="Ração" component={RaçaoScreen} />
      <Drawer.Screen name="Remédios" component={RemedioScreen} />
      <Drawer.Screen name="Sobre Nós" component={SobreScreen} />
      <Drawer.Screen name="login" component={loginScreen} />
    </Drawer.Navigator>
  );
}
