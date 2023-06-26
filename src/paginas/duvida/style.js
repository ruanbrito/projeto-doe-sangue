import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    //pagina inicial
    scrol: {
        flex: 1,
    },

    container: {
        flex: 1,
        backgroundColor: '#008000',
        //backgroundColor: '#3B6CD4',
    },

    //Pagina Duvidas
    tituloDuvida: {
        justifyContent: 'flex-start',
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 30,
        color: '#E1F2DA'
    },

    tituloPergunta: {
        width: '95%',
        marginTop: 20,
        marginLeft: 12,
        color: '#E1F2DA',
        fontSize: 20,
        fontWeight: 'bold',
    },

    resposta: {
        marginTop: 10,
        marginLeft: 12,
        marginRight: 12,
        textAlign: 'justify',
        color: '#E1F2DA',
        fontSize: 20,
    },
});

export default styles;