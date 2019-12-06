import { Dimensions, StyleSheet } from 'react-native';

const { width  : WIDTH } = Dimensions.get('window');
const { height  : HEIGHT } = Dimensions.get('window');

export const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        opacity: 0.8
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
    }
});