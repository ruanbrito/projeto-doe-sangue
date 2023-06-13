import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import styles from './style';

import { auth } from "../service/firebaseConfig";
import { useSignOut } from 'react-firebase-hooks/auth';


const imagem = [
  {
    id: '123',
    src: 'https://encurtador.com.br/sPT06',
    titulo: 'Teste de Chamada 001',
    data: '29/05/2023',
    descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

  },
  {
    id: '13',
    src: 'https://encurtador.com.br/delCX',
    titulo: 'Teste de Chamada 002',
    data: '29/05/2023',
    descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

  },
  {
    id: '23',
    src: 'https://encurtador.com.br/ntBW7',
    titulo: 'Teste de Chamada 003',
    data: '29/05/2023',
    descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

  },
];

const usuario = [
  {
    id: '345',
    name: "Ruan Pablo",
    tipo: 'A+',
    dataDoacao: '03/03/2023',

  }
];


export default function Home({ navigation }) {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000)
  })

  const [signOut, loading, error] = useSignOut(auth);

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.textoLogo}>My App</Text>
      </View>
      <View style={styles.c1}>
        <TouchableOpacity
          key={usuario.id}
          onPress={() => {
            navigation.navigate('Perfil', {
              name: 'Ruan Pablo',
              tipo: 'A+',
              dataDoacao: '00/00/0000',
            })
          }}
        >
          <Text style={styles.texto}>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Duvida')
          }}
        >
          <Text style={styles.texto}>Duvidas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            signOut
            navigation.goBack();

          }}
        >
          <Text style={styles.texto}>Sair</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.scrol}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.imgView}>
          {
            imagem.map((item) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => {
                    navigation.navigate('Campanha', {
                      src: item.src,
                      titulo: item.titulo,
                      data: item.data,
                      descricao: item.descricao,
                    })
                  }}
                >
                  <Image
                    style={styles.img}
                    source={{ uri: item.src }}
                  />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </ScrollView>
    </View>
  );
}
