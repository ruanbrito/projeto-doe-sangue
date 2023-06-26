import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import styles from '../perfil/style';

import { auth } from '../../service/firebaseConfig';
import { FirebaseUser } from 'firebase/app';

export default function PerfilUser({ navigation }) {

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);


    if (initializing) return null;

    
    return (
        <View style={styles.fundo}>
            <View style={styles.user}>
                <Text style={styles.txtUser}>{JSON.parse(JSON.stringify(user.email))}</Text>
            </View>
            <View>
                <Text style={styles.txtUser}>Tipo Sanguineo: </Text>
                <Text style={styles.txtUser}>Última Doação: </Text>
            </View>
        </View>
    );
}