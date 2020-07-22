import { StyleSheet } from "react-native";

export default StyleSheet.create({
    viewPrincipal: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: '4%',
        backgroundColor: '#25C5D3'
    },
    chatBot: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'space-between',
        justifyContent: 'space-between',
    },
    messages: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: '4%',
        width: 226,
        height: 225,
        backgroundColor: '#FEECB4',
        borderRadius: 12,
        elevation: 10,
    },
    answers: {
        height: '30%',
        marginTop: '4%'
    },
    viewQuestions: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    viewArara: {
        right: '10%',
        elevation: 10
    },
    textInput: {
        width: '100%',
        height: '25%',
        fontSize: 12,
        marginTop: '5%',
        borderWidth: 1,
        borderColor: '#22BADD',
        borderRadius: 50,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50
    },
    viewLiga: {
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    viewBackground: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 40,
        borderRadius: 15,
        backgroundColor: '#FFDB6B',
        marginBottom: 25,
        elevation: 10,
    },
    viewDestaques: {
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    viewHistorico: {
        flexDirection: 'row',
        marginBottom: 25
    },
    viewIndicadosDesafios: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 45,
        borderRadius: 15,
        backgroundColor: '#C19AC8',
        elevation: 10,
    },
    viewPagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 25
    }
});