import React from 'react';
import { ImageBackground, View, Image, Text } from 'react-native';

import { styles } from './styles.js'

import LoginForm from '../../components/LoginForm';

import bgImage from '../../../assets/background-login.jpeg';
import logo from '../../../assets/logo.jpg';


export default function Login() {
    return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            <View style = {styles.logoContainer}>
                <Image source = {logo} style={styles.logo}/>
                <Text style = {styles.logoText}>Mural De Curitiba</Text>
            </View>
            <LoginForm></LoginForm>
        </ImageBackground>
    );
}
