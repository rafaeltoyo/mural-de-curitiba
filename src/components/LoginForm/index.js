import React from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles.js';
import LoginService from '../../services/login/loginservice';

export default function LoginForm({resolver, reject}) {
    this.username = null;
    this.password = null;

    this.__resolver = resolver;
    this.__reject = reject;

    this.submit = () => {
        let user = null;
        try {
            user = LoginService.login(username, password);

            if (user == null)
                this.__reject("Login inválido!");
            else
                this.__resolver(user);
        } catch (err) {
            this.__reject(err.message);
        }
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
