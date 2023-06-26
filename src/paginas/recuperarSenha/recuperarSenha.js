import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";


import styles from '../recuperarSenha/style';
import { useState } from "react";


export default function Recuperar({ navigation }) {
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image
                    style={styles.imgLogin}
                    source={require('../../../assets/logo.png')}
                />
            </View>
            <View style={styles.login}>
                <Text style={styles.texto}>E-mail</Text>
                <TextInput
                    style={styles.txtInput}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <Text style={styles.texto}>Cpf</Text>
                <TextInput
                    style={styles.txtInput}
                    onChangeText={setCpf}
                    value={cpf}
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.botao}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        console.log('Email de recuperação enviado')
                        navigation.navigate('Login')
                    }}
                >
                    <Text style={styles.txtbtn}>Recuperar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}
