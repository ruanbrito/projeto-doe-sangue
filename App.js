import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/paginas/home/home';
import PerfilUser from './src/paginas/perfil/perfil';
import Duvida from './src/paginas/duvida/duvidas';
import Campanha from './src/paginas/campanha/campanha';
import Login from './src/paginas/login';
import Cadastro from './src/paginas/cadastro/cadastro';
import Recuperar from './src/paginas/recuperarSenha/recuperarSenha';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Perfil' component={PerfilUser} />
        <Stack.Screen name='Duvida' component={Duvida} />
        <Stack.Screen name='Campanha' component={Campanha} />
        <Stack.Screen name='Cadastro' component={Cadastro} />
        <Stack.Screen name='RecuperarSenha' component={Recuperar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

