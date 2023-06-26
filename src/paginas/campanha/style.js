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

    //Estilo campanha
    imgCampanha: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },

    imgCamp: {
        width: 350,
        height: 250,
        marginTop: 10,
        borderRadius: 10,
    },

    titulo: {
        marginTop: 20,
        marginLeft: 15,
        color: '#E1F2DA',
        fontSize: 30,
    },

    data: {
        marginTop: 20,
        marginLeft: 15,
        color: '#E1F2DA',
        fontSize: 20,
    },

    descricao: {
        margin: 15,
        fontSize: 20,
        textAlign: 'justify',
        color: '#E1F2DA',
    },
});

export default styles;