import React from "react";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";

import styles from './style';

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../service/firebaseConfig";


export default function Cadastro({ navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [tipo, setTipo] = useState('');
    const [senha, setSenha] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    function createUser() {
        createUserWithEmailAndPassword(email, senha);
    }

    if (error) {
        Alert('Erro ao criar cadastro!')
        navigation.navigate('Login')
        return
    }


    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Text style={styles.textoLogo}>My App</Text>
            </View>
            <View style={styles.login}>
                <Text style={styles.texto}>Nome e Sobrenome</Text>
                <TextInput
                    style={styles.txtInput}
                    value={nome}
                    onChangeText={setNome}
                    keyboardType="name-phone-pad"
                />
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
                <Text style={styles.texto}>Tipo Sanguíneo</Text>
                <TextInput
                    style={styles.txtInput}
                    onChangeText={setTipo}
                    value={tipo}
                    keyboardType="name-phone-pad"
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
                        createUser();
                    }}
                >
                    <Text style={styles.txtbtn}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}
