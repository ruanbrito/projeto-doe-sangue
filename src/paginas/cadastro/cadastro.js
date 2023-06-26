import React from "react";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, Image } from "react-native";
import styles from '../cadastro/style';

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { app, auth } from "../../service/firebaseConfig";

import { addDoc, collection, getFirestore } from 'firebase/firestore';



export default function Cadastro({ navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [tipo, setTipo] = useState('');
    const [senha, setSenha] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const db = getFirestore(app);
    const userCollectionRef = collection(db, "usuarios/");

    //metodo para criar login e cadastro no banco
    async function createUser() {
        try {
            createUserWithEmailAndPassword(email, senha);
            addDoc(userCollectionRef, {
                nome,
                email,
                cpf,
                tipo,
                senha,
            });
            Alert.alert('Usuário cadastrado com sucesso');
            navigation.navigate('Login');
        } catch (e) {
            Alert.alert('Erro no cadastro, verifique os campos.');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image
                    style={styles.logoImg}
                    source={require('../../../assets/logo.png')}
                />
            </View>
            <ScrollView
                style={styles.scrol}
            >
                <View style={styles.cadastro}>
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
            </ScrollView>
        </View>
    );

}
