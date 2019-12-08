import React from 'react';
import { ImageBackground, View, Image, Text, ToastAndroid } from 'react-native';

import { styles } from './styles.js'

import LoginForm from '../../components/LoginForm';

import bgImage from '../../../assets/background-login.jpeg';
import logo from '../../../assets/logo.jpg';


export default class LoginScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {}
    };

    success = (user) => {
        // TODO: https://docs.expo.io/versions/latest/react-native/navigation/
        
        ToastAndroid.showWithGravity(
            "Bem vindo " + user.name, 
            ToastAndroid.LONG, 
            ToastAndroid.BOTTOM);
        this.props.navigation.navigate("Main");
    };

    failed = (err) => {
        ToastAndroid.showWithGravity(
            "Erro! " + err, 
            ToastAndroid.LONG, 
            ToastAndroid.BOTTOM);
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <View style = {styles.logoContainer}>
                    <Image source = {logo} style={styles.logo}/>
                    <Text style = {styles.logoText}>Mural De Curitiba</Text>
                </View>
                <LoginForm resolver={this.success} reject={this.failed}></LoginForm>
            </ImageBackground>
        );
    }
}
