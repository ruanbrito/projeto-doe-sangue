import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../duvida/style';

export default function Duvida() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.logo}>
                    <Text style={styles.tituloDuvida}>DÚVIDAS FREQUENTES</Text>
                </View>
                <View>
                    <Text style={styles.tituloPergunta}>CRITÉRIOS BÁSICOS PARA DOAÇÃO</Text>
                </View>
                <View>
                    <Text style={styles.resposta}>
                        Ter idade entre 16 e 69 anos, desde que a primeira doação tenha sido feita até 60 anos.
                        Obs: menores de 18 anos devem possuir consentimento formal do responsável legal.
                    </Text>
                    <Text style={styles.resposta}>
                        Pessoas com idade entre 60 e 69 anos só poderão doar sangue se já o tiverem feito antes dos 60 anos.
                    </Text>
                    <Text style={styles.resposta}>
                        Apresentar documento de identificação com foto emitido por órgão oficial, serão aceitos documentos digitais com foto.
                    </Text>
                    <Text style={styles.resposta}>
                        Pesar no mínimo 50 kg.
                    </Text>
                    <Text style={styles.resposta}>
                        Estar alimentado. Evitar alimentos gordurosos nas 3 horas que antecedem a doação de sangue.
                        Caso seja após o almoço, aguardar 2 horas.
                    </Text>
                </View>
                <View>
                    <Text style={styles.tituloPergunta}>QUAL O INTERVALO ENTRE AS DOAÇÕES?</Text>
                </View>
                <View>
                    <Text style={styles.resposta}>
                        Homens podem doar sangue de 2 em 2 meses, sendo, no máximo, 4 vezes ao ano.
                        Mulheres podem doar sangue 3 em 3 meses, sendo, no máximo, 3 doações anuais.
                    </Text>
                </View>
                <View>
                    <Text style={styles.tituloPergunta}>QUEM TEM TATUAGEM PODE DOAR SAGUE?</Text>
                </View>
                <View>
                    <Text style={styles.resposta}>
                        As pessoas que fizeram tatuagem precisam esperar um ano para doarem sangue novamente.
                        porém, em alguns serviços de coleta de sangue, pela capacidade de avaliação das condições
                        de realização destes procedimentos na região/município, o período de inaptidão é de 6 meses.
                    </Text>
                </View>
                <View>
                    <Text style={styles.tituloPergunta}>É NECESSÁRIO ESTAR EM JEJUM PARA DOAR SANGUE?</Text>
                </View>
                <View>
                    <Text style={styles.resposta}>
                        O doador não deve estar em jejum, pelo contrário,
                        deve estar alimentado e descansado, evitando alimentação gordurosa nas 3 horas que antecedem a doação.
                    </Text>
                </View>
                <View>
                    <Text style={styles.tituloPergunta}>DOAÇÃO DE SANGUE: PÓS-PARTO AMAMENTAÇÃO</Text>
                </View>
                <View>
                    <Text style={styles.resposta}>
                        Após um ano de amamentação, você pode voltar a doar sangue. Antes disso, não é recomendável,
                        porque para a produção do leite materno, a mulher necessita de grande quantidade de vitaminas e minerais.
                        A doação de sangue nesse período pode precipitar a ocorrência de anemia ou carência de vitaminas.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}