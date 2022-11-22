import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import Perfil from '../pages/Perfil';
import Favoritos from '../pages/Favoritos';
import Receitas from '../pages/Receita';
import TodasReceitas from '../pages/TodasReceitas';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="Feed">
      <Drawer.Screen
        name="Coach de Cozinha"
        component={Home}
        options={{ drawerLabel: 'Home' }}
      />

<Drawer.Screen
        name="TodasReceitas"
        component={TodasReceitas}
        options={{ drawerLabel: 'Todas as Receitas' }}
      />

      
<Drawer.Screen
        name="Favoritos"
        component={Favoritos}
        options={{ drawerLabel: 'Favoritas' }}
      />
      <Drawer.Screen
        name="Receitas"
        component={Receitas}
        options={{ drawerLabel: 'Receitas' }}
      />
     
    </Drawer.Navigator>
     
    
    
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
