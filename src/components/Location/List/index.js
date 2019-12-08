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

export default function LocationList() {
    locations = LocationService.list();

    return (
        <ScrollView horizontal>
        </ScrollView>
    );
}
