import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Button,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import ExhibitData from './ExhibitData.js';

function EventButton(props) {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={props.onPress}>
        <View style={{border: 5, borderRadius: 10}}>
          <ImageBackground source={props.img} style={styles.img}>
            <Text style={styles.overlay}>{props.title}</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const Kommande = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <EventButton
          onPress={() => navigation.navigate('ExhibitInfo', {exhibitID: 3})}
          title={'En ovanlig vardag'}
          img={require('../assets/ovanlig.jpg')}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    position: 'relative',
    textAlign: 'center',
    flex: 1,
    backgroundColor: '#252525',
    height: '100%',
  },

  item: {
    flex: 1,
    backgroundColor: 'black',
    opacity: 0.8,
    width: '98%',
    margin: '1%',
    height: 200,
    bottom: 0,
    marginBottom: '8%',
    borderRadius: 7,
  },

  overlay: {
    color: '#ffffff',
    fontSize: 25,
    backgroundColor: '#000000a0',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    height: '30%',
    bottom: 0,
    textAlignVertical: 'center',
  },

  img: {
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
});

export default Kommande;
