import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Linking } from "react-native";

import styles from './style';

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../service/firebaseConfig";


export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (error) {
        alert('usuario ou senha incorreto')
        return
    }

    if (user) {
        //console.log('Login efetuado')
        Linking.openURL('src/paginas/home.js')
        return
    }


    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Text style={styles.textoLogo}>My App</Text>
            </View>
            <View style={styles.login}>
                <Text style={styles.texto}>Usuário</Text>
                <TextInput
                    style={styles.txtInput}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <Text style={styles.texto}>Senha</Text>
                <TextInput
                    style={styles.txtInput}
                    onChangeText={setSenha}
                    value={senha}
                    secureTextEntry
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.botao}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        signInWithEmailAndPassword(email, senha);
                    }}
                >
                    <Text style={styles.txtbtn}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.login}>
                <Text style={styles.texto}
                    onPress={() => {
                        navigation.navigate('RecuperarSenha');
                    }}
                >
                    Recuperar senha</Text>
                <Text style={styles.texto}
                    onPress={() => {
                        navigation.navigate('Cadastro');
                    }}
                >
                    Cadastre-se</Text>
            </View>
        </View>
    );
}
