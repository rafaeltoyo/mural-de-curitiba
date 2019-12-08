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

/**
 * @todo Desabilitado temporariamente para teste
 */

import App from './src';

export default function Root() { return (<App></App>); };
