import React from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import { styles } from './styles.js'

export default function LoginForm() {
    this.username = null;
    this.password = null;

    this.submit = () => {
        // TODO: https://docs.expo.io/versions/latest/react-native/navigation/
        //console.log('teste');
        //this.props.navigation.navigate("Main");
    };

    return (
        <>
            <View style={styles.loginContainer}>
                <Icon name={'ios-person'} size={28} color='rgba(100,100,100,0.5)' style={styles.inputIcon} />
                <TextInput
                    onChangeText={el => this.username = el}
                    style={styles.loginInput}
                    placeholder={'Username'}
                    placeholderTextColor={'black'}
                    underlineColorAndroid='transparent' />
            </View>

            <View style={styles.loginContainer}>
                <Icon name={'ios-lock'} size={28} color='rgba(100,100,100,0.5)' style={styles.inputIcon} />
                <TextInput
                    onChangeText={el => this.password = el}
                    style={styles.loginInput}
                    secureTextEntry={true}
                    placeholder={'Password'}
                    placeholderTextColor={'black'}
                    underlineColorAndroid='transparent' />
                <TouchableOpacity style={styles.buttonEye}>
                    <Icon name={'ios-eye'} size={26} color='rgba(100,100,100,0.5)' />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={this.submit}>
                <Text style={styles.brunoGay}>LOGIN</Text>
            </TouchableOpacity>
        </>
    );
}
