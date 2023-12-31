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

    //estilo tela de login
    login: {
        width: '100%',
        justifyContent: 'center',
        marginBottom: 20,
        //backgroundColor: 'white'
    },

    txtInput: {
        height: 40,
        borderWidth: 1,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 10,
        borderColor: 'white',
        color: 'white',
        padding: 10,
    },

    botao: {
        alignItems: 'center'
    },

    btn: {
        margintop: 10,
        marginBottom: 20,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        width: "40%",
        backgroundColor: "#f6f6f6",
    },

    txtbtn: {
        margin: 12,
        fontSize: 22,
        color: '#008000',
    },

    texto: {
        margin: 12,
        fontSize: 20,
        color: '#E1F2DA',
        fontWeight:'500'
    },
});

export default styles;