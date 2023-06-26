import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    //pagina inicial
    scrol: {
        flex: 1,
    },

    imgLogin: {
        marginTop: 5,
        width: 50,
        height: 65,
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
        margin: 20,
        backgroundColor: '#E1F2DA'
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
        width: 320,
        height: 250,
        margin: 10,
        backgroundColor: '#3B6CD4',
        borderRadius: 10,
    },

    //Perfil Usuario
    fundo: {
        flex: 1,
        backgroundColor: '#008000',
    },

    user: {
        marginTop: 10,
        marginLeft: 20,
        marginBottom: 40,
    },

    txtUser: {
        fontSize: 22,
        color: '#E1F2DA',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
    },

    btn: {
        width: 100,
        marginTop: 20,
        marginLeft: 10,
    },

    voltar: {
        marginTop: 20,
        marginBottom: 5,
    },

    txtVoltar: {
        fontSize: 22,
        color: '#E1F2DA',
        marginTop: 10,
        marginLeft: 20,
    },
});

export default styles;