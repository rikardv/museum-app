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
import Floors from './Components/Floors.js'
import HomeScreen from './Components/HomeScreen.js'
import Exhibitions from './Components/Exhibitions.js'
import Events from'./Components/Events.js'
import VisitorInfo from './Components/VisitorInfo.js'
import Map from './Components/Map.js'




const Stack = createStackNavigator();
const App = () => {
  return (

    <NavigationContainer>

<Stack.Navigator
screenOptions={
  
  {

 
  

  headerStyle: {
    backgroundColor: '#252525',
   
    
  
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    
  },

  
}}>
  <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Startsida' }}/>
  <Stack.Screen name="Floors" component={Floors} options={{title: 'Välj en våning nedan'}}/>
  <Stack.Screen name="Exhibitions" component={Exhibitions} options={{title: 'Utställningar'}}/>
  <Stack.Screen name="Events" component={Events} options={{title: 'Evenemang'}}/>
  <Stack.Screen name="VisitorInfo" component={VisitorInfo} options={{title: 'Besöksinfo'}}/>
  <Stack.Screen name="Map" component={Map} options={{title: 'Karta över utställningar'}}/>
</Stack.Navigator>
    </NavigationContainer>



   
  
  );
};





export default App;
