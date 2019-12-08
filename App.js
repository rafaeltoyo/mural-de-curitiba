import React from 'react';
import { 
  StyleSheet, 
  Text,
  TextInput, 
  View,
  ImageBackground,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';

location_id = '0' //mudar aqui para mudar o local

import location_data from './location_data.json';
import bgImage from './assets/background-login.jpeg'
import logo from './assets/logo.jpg'
import Icon from 'react-native-vector-icons/Ionicons'
import img from "./assets/utfpr.jpg"

const { width  : WIDTH } = Dimensions.get('window')
const { height  : HEIGHT } = Dimensions.get('window')

export default function App() {
  return (
    <View style={{flex:1}}>
      <View style = {{flexDirection:"row", alignItems: 'center' }}>
        <Text style = {{flex:1, margin: 10}}>MEU MURAL</Text>
        <Icon
            name= {'ios-person'}            
            size = {38} 
            color = 'rgba(0,0,0,1)'
            style = {{margin: 10}}
          />
      </View>      
      <Image source = {img} style={styles.logo}/>
      <View style = {{flexDirection:"row", alignItems: 'center', justifyContent: 'center'}}>
          <View>
            <Text style = {styles.title1}>{location_data[location_id].bairro}</Text>
            <Text style = {styles.title2}>{location_data[location_id].endereco}</Text>
          </View>            
          <Icon 
            name= {'ios-pin'}            
            size = {38} 
            color = 'rgba(0,0,0,1)'
          />
      </View>
      
      <ScrollView>
        <Text style = {styles.description}>{location_data[location_id].descricao}</Text>
      </ScrollView>

      <View style = {{flexDirection:"row", alignItems: 'center' }}>
        <Icon
            name= {'ios-person'}            
            size = {38} 
            color = 'rgba(0,0,0,1)'
            style = {{margin: 10}}
          />
        <View style = {{flex:1}}>
            <Text style = {{fontSize : 10}}>Aluno</Text>
            <Text style = {{fontSize : 10, fontWeight: '600'}}>UTFPR</Text>
        </View> 
        <Icon
            name= {'ios-add-circle'}            
            size = {38} 
            color = 'rgba(0,0,0,1)'
            style = {{margin: 10}}
          />
      </View>            
    </View>
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
  logo:{
    width: WIDTH,
    height : 300,
    margin : 0
  },
  title1 :{
    color: 'black',
    fontSize: 25,
    fontWeight: '500',
    marginRight: 20,
    opacity: 0.8,
    textAlign: "right"
  },
  title2 :{
    color: 'black',
    fontSize: 20,
    fontWeight: '200',    
    marginRight: 20,
    opacity: 0.8
  },
  description :{
    color: 'gray',
    fontSize: 15,
    fontWeight: '200',
    padding: 0,
    margin: 10,
    opacity: 0.8,
    textAlign: "justify"
  }
});
