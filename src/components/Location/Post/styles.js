import { Dimensions, StyleSheet } from 'react-native';

const { width  : WIDTH, height  : HEIGHT } = Dimensions.get('window');

export const styles = StyleSheet.create({
    location_root: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    location_banner: {
        width: WIDTH,
        height: 300,
        alignItems: "center",
        justifyContent: 'center',
        margin: 0,
        overflow: "hidden",
        shadowColor: "rgba(0, 0, 0, .7)",
        shadowOffset: { height: 5, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 4,    
    },
    location_banner_image: {
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
    location_description: {
        color: 'gray',
        fontSize: 15,
        fontWeight: '200',
        padding: 0,
        margin: 10,
        opacity: 0.8,
        textAlign: "justify"
    },
});
