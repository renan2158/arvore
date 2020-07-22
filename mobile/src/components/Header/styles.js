import { StyleSheet } from "react-native";

export default StyleSheet.create({
    header: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '5%',
        paddingTop: 40,
        width: '100%',
        backgroundColor: '#22BADD',
        justifyContent: "space-between"
    },
    titleStart: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    titleEnd: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    user: {
        marginRight: 15
    },
    background: {
        flexDirection: 'row',
        width: '100%',
        height: 105,
        backgroundColor: 'rgba(6, 125, 152, 0.69)'
    }
});