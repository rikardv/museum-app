/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FlatButton from './Components/FlatButton.js'
import Floors from './Components/Floors.js'
import HomeScreen from './Components/HomeScreen.js'




const Stack = createStackNavigator();
const App = () => {
  return (

    <NavigationContainer>

<Stack.Navigator
screenOptions={
  
  {

 
  

  headerStyle: {
    backgroundColor: '#252525',
    height: 30,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    
  },

  
}}>
  <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Startsida' }}/>
  <Stack.Screen name="Floors" component={Floors} options={{title: 'Våningar'}}/>
</Stack.Navigator>
    </NavigationContainer>



   
  
  );
};





export default App;
