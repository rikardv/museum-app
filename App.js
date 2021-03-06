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
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Floors from './Components/Floors.js';
import HomeScreen from './Components/HomeScreen.js';
import Exhibitions from './Components/Exhibitions.js';
import Events from './Components/Events.js';
import VisitorInfo from './Components/VisitorInfo.js';
import MapSecond from './Components/MapSecond.js';
import MapFirst from './Components/MapFirst.js';
import MapThird from './Components/MapThird.js';
import MapFifth from './Components/MapFifth.js';
import JobbLabb from './Components/JobbLabb.js';
import Kommande from './Components/Kommande.js';
import Turnerande from './Components/Turnerande.js';
import MapSeventh from './Components/MapSeventh.js';
import Aktuella from './Components/Aktuella.js';
import ExhibitInfo from './Components/ExhibitInfo';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#252525',
          },

          headerBackTitleVisible: false,

          headerBackImage: () => (
            <Image
              source={require('./assets/back.png')}
              style={{width: 25, height: 25}}
            />
          ),

          headerTintColor: '#fff',
          headerTitleStyle: {},
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Startsida'}}
        />
        <Stack.Screen
          name="Floors"
          component={Floors}
          options={{title: 'Välj en våning nedan'}}
        />
        <Stack.Screen
          name="ExhibitInfo"
          component={ExhibitInfo}
          options={{title: 'Information'}}
        />
        <Stack.Screen
          name="Exhibitions"
          component={Exhibitions}
          options={{title: 'Utställningar'}}
        />
        <Stack.Screen
          name="Aktuella"
          component={Aktuella}
          options={{title: 'Aktuella Utställningar'}}
        />
        <Stack.Screen
          name="Events"
          component={Events}
          options={{title: 'Evenemang'}}
        />
        <Stack.Screen
          name="VisitorInfo"
          component={VisitorInfo}
          options={{title: 'Besöksinfo'}}
        />
        <Stack.Screen
          name="MapSecond"
          component={MapSecond}
          options={{title: 'Våning 2'}}
        />

        <Stack.Screen
          name="MapFirst"
          component={MapFirst}
          options={{title: 'Våning 1'}}
        />

        <Stack.Screen
          name="MapThird"
          component={MapThird}
          options={{
            title: 'Våning 3 - Välj en utställning',
          }}
        />

        <Stack.Screen
          name="MapFifth"
          component={MapFifth}
          options={{title: 'Våning 5'}}
        />

        <Stack.Screen
          name="MapSeventh"
          component={MapSeventh}
          options={{title: 'Våning 7'}}
        />

        <Stack.Screen
          name="JobbLabb"
          component={JobbLabb}
          options={{title: 'Aktuella utställningar'}}
        />
        <Stack.Screen
          name="Kommande"
          component={Kommande}
          options={{title: 'Kommande utställningar'}}
        />
        <Stack.Screen
          name="Turnerande"
          component={Turnerande}
          options={{title: 'Turnerande utställningar'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
