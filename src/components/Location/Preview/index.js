import React from "react";
import {
    ImageBackground,
    View,
    Image,
    Text,
    Platform,
    ScrollView,
} from "react-native";

import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from "./styles.js";

import LocationService from '../../../services/location';

export default function LocationPreview({ location }) {
    this.bairro = '';
    this.endereco = '';
    this.descricao = '';
    this.image = null;
    
    this.load = (location) => {
        location = LocationService.search(location);
    
        this.bairro = location ? location.bairro : '';
        this.endereco = location ? location.endereco : '';
        this.descricao = location ? location.descricao : '';
    
        this.image = location ? location.img : require('../../../../assets/logo.jpg');
    };

    this.load(location);

    return (
        <>
            <View style={styles.location_banner}>
                <Image source={this.image} style={styles.location_banner_image} />
            </View>
            <View style={styles.location_info}>
                <View style={styles.location_info_container}>
                    <Text style={styles.location_info_district}>{this.bairro}</Text>
                    <Text style={styles.location_info_address}>{this.endereco}</Text>
                </View>
                <Icon style={styles.location_info_icon} name={'ios-pin'} size={50}/>
            </View>
        </>
    );
}
