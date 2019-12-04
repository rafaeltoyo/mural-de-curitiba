import React from 'react';
import { 
  StyleSheet, 
  Text,
  TextInput, 
  View,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import bgImage from './assets/background-login.jpeg'
import logo from './assets/logo.jpg'
import Icon from 'react-native-vector-icons/Ionicons'
const { width  : WIDTH } = Dimensions.get('window')
const { height  : HEIGHT } = Dimensions.get('window')

export default function App() {
  return (
    <ImageBackground source = {bgImage} style={styles.backgroundContainer}>
      <View style = {styles.logoContainer}>
        <Image source = {logo} style={styles.logo}/>
        <Text style = {styles.logoText}>Mural De Curitiba</Text>
      </View>
      <View style = {styles.loginContainer}>
      <Icon 
        name= {'ios-person'}
        size = {28} 
        color = 'rgba(100,100,100,0.5)'
        style = {styles.inputIcon}
      />
      <TextInput 
        style ={styles.loginInput}
        placeholder = {'Username'} 
        placeholderTextColor = {'black'}
        underlineColorAndroid = 'transparent' />
      </View>

      <View style = {styles.loginContainer}>
      <Icon 
        name= {'ios-lock'}
        size = {28} 
        color = 'rgba(100,100,100,0.5)'
        style = {styles.inputIcon}
      />
      <TextInput 
        style ={styles.loginInput}
        placeholder = {'Password'}
        secureTextEntry = {true} 
        placeholderTextColor = {'black'}
        underlineColorAndroid = 'transparent' />
        <TouchableOpacity style = {styles.buttonEye}>
          <Icon 
          name = {'ios-eye'}
          size = {26}
          color = 'rgba(100,100,100,0.5)'
          />
          </TouchableOpacity>
      </View>
      <TouchableOpacity  style = {styles.loginButton}>
        <Text style = {styles.brunoGay}>LOGIN</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : '#fff',
    opacity : 0.8
  },
  loginContainer :{
    alignItems : 'center',
    marginTop : 10
  },
  loginInput :{
    width : WIDTH - 55,
    height : 45,
    fontSize : 20,
    alignItems: 'center',
    paddingLeft : 45,
    backgroundColor: 'rgba(0,0,0, 0.12)',
    color: 'rgba(255,255,255,0.8)',
    marginHorizontal : 25,
    marginBottom : 5,
    borderRadius  :25
  },
  buttonEye : {
    position : 'absolute',
    top: 10,
    right : 40
  },
  loginButton :{
    width : WIDTH - 55,
    height : 45,
    fontSize : 20,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.12)',
    color: 'rgba(255,255,255,0.8)',
    paddingTop : 10,
    marginTop : 50,
    marginHorizontal : 25,
    marginBottom : 5,
    borderRadius  : 30
  },
  brunoGay :{
    fontSize : 20
  },


  logoText :{
    color: 'gray',
    fontSize: 30,
    fontWeight: '500',
    padding: 0,
    margin: 0,
    opacity: 0.8
  },
  logoContainer:{
    alignItems: 'center',
    marginBottom : 80
  },
  logo:{
    width: 200,
    height : 200,
    margin : 0
  },
  inputIcon :{
    position: 'absolute',
    top: 10,
    left: 40
  }
});
