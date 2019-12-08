import React from "react";
import {
    ImageBackground,
    View,
    Image,
    Text,
    Platform,
    ScrollView
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

import LocationPreview from '../../components/Location/Preview';
import LocationList from '../../components/Location/List';
import StatusBar from '../../components/StatusBar';
import { styles } from "./styles.js";

import { TouchableOpacity } from "react-native-gesture-handler";

export default class MainScreen extends React.Component {

    locationId = 2;

    static navigationOptions = ({ navigation }) => {
        return {}
    };

    details = () => {
        this.props.navigation.navigate("Details", { locationId: this.locationId });
    };

    render() {
        return (
            <View style={styles.backgroundContainer}>
                <ScrollView vertical>
                    <TouchableOpacity onPress={this.details} style={{alignItems: 'center'}}>
                        <LocationPreview key={this.locationId} location={this.locationId} />
                    </TouchableOpacity>


                    <View style={styles.moreItems}>
                        <ScrollView horizontal>
                            {/* Inside the next view theres a bunch of random shit just to test the scrollview */}
                            <View style={{ flexDirection: "row" }}>
                                <Icon style={{ padding: 10 }} name={'ios-image'} size={100} />
                                <Icon style={{ padding: 10 }} name={'ios-image'} size={100} />
                                <Icon style={{ padding: 10 }} name={'ios-image'} size={100} />
                                <Icon style={{ padding: 10 }} name={'ios-image'} size={100} />
                                <Icon style={{ padding: 10 }} name={'ios-image'} size={100} />
                                <Icon style={{ padding: 10 }} name={'ios-image'} size={100} />
                                <Icon style={{ padding: 10 }} name={'ios-image'} size={100} />
                                <Icon style={{ padding: 10 }} name={'ios-image'} size={100} />
                                <Icon style={{ padding: 10 }} name={'ios-image'} size={100} />
                            </View>
                        </ScrollView>
                    </View>

                    <LocationList onPressItem={(id) => this.locationId = id} />

                    {/* Use this footer for the details page if you don't want to do it again  */}
                </ScrollView>
                <StatusBar />
            </View>
        );
    }
}
