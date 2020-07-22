import { StyleSheet } from "react-native";

export default StyleSheet.create({
    viewPrincipal: {
        flex: 1,
        justifyContent: 'center',
        padding: '4%',
        backgroundColor: '#25C5D3'
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
    viewNovoAvatar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#C19AC8',
        marginTop: 25,
        marginBottom: 25,
        elevation: 10,
    },
    viewCompartilhar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 35,
        borderRadius: 10,
        backgroundColor: '#C19AC8',
        elevation: 10,
    },
});