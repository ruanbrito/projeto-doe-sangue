import React, { useEffect, useState } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import styles from '../home/style';

import { useSignOut } from 'react-firebase-hooks/auth';

import { app, auth, storage } from "../../service/firebaseConfig";
import { collection, getDocs, getFirestore } from 'firebase/firestore';


export default function Home({ navigation }) {
  const [campanha, setCampanhas] = useState([]);
  const db = getFirestore(app);
  const userCollectionRef = collection(db, "campanhas");

  //const storageRef = ref(storage, 'campanhas');

  //metodo para atualizar as campanhas na pagina home
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000)
  })

  //LOGOUT DA CONTA NO FIREBASE
  const [signOut, loading, error] = useSignOut(auth);

  //Metodo para trazer as campanhas do firebase
  useEffect(() => {
    const getCampanhas = async () => {
      const dados = await getDocs(userCollectionRef);
      setCampanhas(dados.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getCampanhas();
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.c1}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Perfil')
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
            signOut();
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
            campanha.map((item) => {
              console.log(item.src)
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
