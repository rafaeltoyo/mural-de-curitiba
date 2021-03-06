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
import { TouchableOpacity } from "react-native-gesture-handler";

export default class LocationList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            locations: LocationService.list()
        }
    }

    renderData() {
        return this.state.locations.map((location, idx) => {
            const { bairro, endereco, descricao, img } = location;

            const itemAction = () => this.props.onPressItem(idx);

            return (
                <TouchableOpacity key={idx} onPress={itemAction} style={{flex:1, width: 100, height: 100}}>
                    <Image source={img} style={{width: 100, height: 100}} />
                    <Text>{bairro}</Text>
                </TouchableOpacity>
            );
        });
    }

    render() {
        return (
            <View>
                <Icon style={{ padding: 10 }} name={'ios-image'} size={100} />
                <ScrollView horizontal style={{width: 400, flexDirection: 'row'}}>
                    {this.renderData()}
                </ScrollView>
            </View>
        );
    }
}
