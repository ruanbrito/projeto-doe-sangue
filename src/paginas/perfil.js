import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';


export default function PerfilUser({route, navigation}) {
    const {name, tipo, dataDoacao} = route.params;
    return (
        <View style={styles.fundo}>
            <View style={styles.user}>
                <Text style={styles.txtUser}>{JSON.parse(JSON.stringify(name))}</Text>
            </View>
            <View>
                <Text style={styles.txtUser}>Tipo Sanguineo: {JSON.parse(JSON.stringify(tipo))}</Text>
                <Text style={styles.txtUser}>Última Doação: {JSON.parse(JSON.stringify(dataDoacao))}</Text>
            </View>
        </View>
    );
}