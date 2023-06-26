import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    //pagina inicial
    scrol: {
        flex: 1,
    },

    imgLogin: {
        marginTop: 5,
        width: 60,
        height: 75,
    },

    container: {
        flex: 1,
        backgroundColor: '#008000',
        //backgroundColor: '#3B6CD4',
    },

    logo: {
        alignItems: 'center'
    },

    c1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#E1F2DA',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
    },

    textoLogo: {
        fontSize: 30,
        color: '#E1F2DA',
    },

    imgView: {
        alignItems: 'center',
        flexDirection: 'column'
    },

    img: {
        width: 350,
        height: 250,
        margin: 10,
        backgroundColor: '#3B6CD4',
        borderRadius: 10,
    },

    texto: {
        padding:15,
        fontSize: 20,
        color: '#008000',
        fontWeight:'600',
    },
});

export default styles;