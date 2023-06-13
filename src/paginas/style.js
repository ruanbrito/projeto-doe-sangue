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

    logo: {
        alignItems: 'center'
    },

    c1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },

    textoLogo: {
        fontSize: 30,
        color: '#E1F2DA',
    },

    texto: {
        fontSize: 22,
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

    //Estilo campanha
    imgCampanha: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },

    imgCamp: {
        width: 330,
        height: 250,
        marginTop: 10,
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
    //Pagina Duvidas
    tituloDuvida: {
        justifyContent: 'flex-start',
        alignContent: 'center',
        fontSize: 30,
        color: '#E1F2DA'
    },

    tituloPergunta: {
        marginTop: 20,
        marginLeft: 10,
        color: '#E1F2DA',
        fontSize: 25,
    },

    resposta: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'justify',
        color: '#E1F2DA',
        fontSize: 20,
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
    },
});

export default styles;