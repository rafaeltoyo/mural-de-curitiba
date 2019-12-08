import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class StatusBar extends React.Component {
    render() {
        return (
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
        );
    }
}
