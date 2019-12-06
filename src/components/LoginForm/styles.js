import { Dimensions, StyleSheet } from 'react-native';

const { width  : WIDTH } = Dimensions.get('window');
const { height  : HEIGHT } = Dimensions.get('window');

export const styles = StyleSheet.create({
    loginContainer: {
        alignItems: 'center',
        marginTop: 10
    },
    loginInput: {
        width: WIDTH - 55,
        height: 45,
        fontSize: 20,
        alignItems: 'center',
        paddingLeft: 45,
        backgroundColor: 'rgba(0,0,0, 0.12)',
        color: 'rgba(255,255,255,0.8)',
        marginHorizontal: 25,
        marginBottom: 5,
        borderRadius: 25
    },
    buttonEye: {
        position: 'absolute',
        top: 10,
        right: 40
    },
    loginButton: {
        width: WIDTH - 55,
        height: 45,
        fontSize: 20,
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0, 0.12)',
        color: 'rgba(255,255,255,0.8)',
        paddingTop: 10,
        marginTop: 50,
        marginHorizontal: 25,
        marginBottom: 5,
        borderRadius: 30
    },
    brunoGay: {
        fontSize: 20
    },
    logoText: {
        color: 'gray',
        fontSize: 30,
        fontWeight: '500',
        padding: 0,
        margin: 0,
        opacity: 0.8
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 80
    },
    logo: {
        width: 200,
        height: 200,
        margin: 0
    },
    inputIcon: {
        position: 'absolute',
        top: 10,
        left: 40
    }
});
