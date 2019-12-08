import React from 'react';
import { 
    View, 
    Text 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from "./styles.js";

export default class TopBar extends React.Component {
    render() {
        return (
            <View style={styles.topbar_root}>
                <Text style={styles.topbar_text}>MEU MURAL</Text>
                <Icon
                    name={'ios-person'}
                    size={50}
                    style={styles.topbar_right_icon}
                />
            </View >
        );
    }
}
