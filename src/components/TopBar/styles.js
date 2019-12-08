import { Dimensions, StyleSheet } from 'react-native';

const { width  : WIDTH, height  : HEIGHT } = Dimensions.get('window');

export const styles = StyleSheet.create({
    topbar_root: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
    },
    topbar_text: {
        flex: 1, 
        fontSize: 18, 
        fontWeight: 'bold',
        color: '#002064',
    },
    topbar_right_icon: {
        color: '#002064',
    },
});
