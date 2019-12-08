import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    ImageBackground,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import LocationPost from '../../components/Location/Post';
import StatusBar from '../../components/StatusBar';
import { styles } from "./styles.js";

export default class DetailsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.locationId = this.props.navigation.getParam('locationId', '0');
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <LocationPost location={this.locationId} />
                <StatusBar />
            </View>
        );
    }
}
