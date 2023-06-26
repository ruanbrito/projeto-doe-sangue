import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from '../campanha/style';



export default function Campanha({ route, navigation }) {
  const { id, src, titulo, data, descricao } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imgCampanha}>
          <Image
            style={styles.imgCamp}
            source={{ uri: JSON.parse(JSON.stringify(src)) }}
          />
        </View>
        <View>
          
          <Text style={styles.titulo}>{JSON.parse(JSON.stringify(titulo))}</Text>
          <Text style={styles.data}>{JSON.parse(JSON.stringify(data))}</Text>
          <Text style={styles.descricao}>
            {JSON.parse(JSON.stringify(descricao))}
          </Text>
        </View>
      </ScrollView>

    </View>
  );
}