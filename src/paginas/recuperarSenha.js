import React from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";


import styles from './style';


export default function Recuperar({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Text style={styles.textoLogo}>My App</Text>
            </View>
            <View style={styles.login}>
                <Text style={styles.texto}>E-mail</Text>
                <TextInput
                    style={styles.txtInput}
                    //value={email}
                    //onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <Text style={styles.texto}>Cpf</Text>
                <TextInput
                    style={styles.txtInput}
                    //onChangeText={setCpf}
                    //value={cpf}
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
