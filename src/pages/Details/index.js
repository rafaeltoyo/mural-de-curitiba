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
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from "./styles.js";

import location_data from './location_data.json';
import img from "../../../assets/utfpr.jpg";

const location_id = 1;

export default class DetailsScreen extends React.Component {
    render() {
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
}
