import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './style';

export default function Duvida(props) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.logo}>
                    <Text style={styles.tituloDuvida}>Duvidas Frequentes</Text>
                </View>
                <View>
                    <Text style={styles.tituloPergunta}>Pergunta 001</Text>
                </View>
                <View>
                    <Text style={styles.resposta}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}