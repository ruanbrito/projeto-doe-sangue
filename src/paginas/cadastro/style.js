import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    //pagina inicial
    scrol: {
        flex: 1,
    },

    logoImg: {
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

    texto: {
        margin: 12,
        fontSize: 20,
        color: '#E1F2DA',
        fontWeight: '500'
    },

    cadastro: {
        width: '100%',
        justifyContent: 'center',
        marginBottom: 20,
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
});

export default styles;