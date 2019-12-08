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

export default class LocationPreview {
    constructor(id) {
        const location = LocationService.search(id);

        this.bairro = location.bairro;
        this.endereco = location.endereco;
        this.imagem = require("../../../../assets/" + location.img);
    }

    render() {
        return (
            <>
                <View>
                    <Image source={this.imagem}/>
                </View>
                <View>
                    <View>
                        <Text></Text>
                        <Text></Text>
                    </View>
                    <Icon name={'ios-pin'} size={38}/>
                </View>
            </>
        );
    }
}


<Image source = {img} style={styles.logo}/>
<View style = {{flexDirection:"row", alignItems: 'center', justifyContent: 'center'}}>
    <View>
        <Text style = {styles.title1}>{location_data[location_id].bairro}</Text>
        <Text style = {styles.title2}>{location_data[location_id].endereco}</Text>
    </View>            
    <Icon 
        name= {'ios-pin'}            
        size = {38} 
        color = 'rgba(0,0,0,1)'
    />
</View>

<ScrollView>
    <Text style = {styles.description}>{location_data[location_id].descricao}</Text>
</ScrollView>


<View style={styles.imageContainer}>
    <Image source={c_image} style={styles.imageStyle} />
</View>
<View style={styles.itemDescription}>
    <Ionicons
        name={Platform.OS === "ios" ? "ios-pin" : "pin"}
        size={50}
        color="black"
    />
    <View style={{ paddingRight: 10 }}>
        <Text style={{ fontSize: 30, textAlign: "right" }}>Centro</Text>
        <Text style={{ fontSize: 15, textAlign: "right" }}>Av. Sete de Setembro, 1353</Text>
    </View>
</View>