import { Dimensions, StyleSheet } from 'react-native';

const { width  : WIDTH, height  : HEIGHT } = Dimensions.get('window');

export const styles = StyleSheet.create({
    location_banner: {
        width: 320,
        height: 320,
        flexDirection: 'row',
        alignItems: "center",
        margin: 0,
        borderRadius: 30,
        overflow: "hidden",
        shadowColor: "rgba(0, 0, 0, .7)",
        shadowOffset: { height: 5, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 4,    
    },
    location_banner_image: {
        flex: 1,
        margin: 0,
    },
    location_info: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    location_info_container: {
        flex: 1,
    },
    location_info_district: {
        textAlign: 'right',
        fontSize: 30,
    },
    location_info_address: {
        textAlign: 'right',
        fontSize: 15,
    },
    location_info_icon: {
        textAlign: 'right',
        marginLeft: 10,
        marginRight: 10,
    },
});
