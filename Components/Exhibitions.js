import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';

const JL = () => (
  <Image
    source={{
      uri: 'https://dc.cdnon.net/e/2020/09/26/3299463-1600728878.jpg',
    }}
    style={{
      width: '100%',
      height: 250,
      borderRadius: 10,
      resizeMode: 'cover',
    }}
  />
);
const Kommande = () => (
  <Image
    source={{
      uri:
        'https://www.arbetetsmuseum.se/wp-content/uploads/2014/12/kommande-utstallningar-760x760.jpg',
    }}
    style={{width: '100%', height: 250, borderRadius: 10, resizeMode: 'cover'}}
  />
);

const Exhibitions = ({navigation}) => {
  return (
    <View style={styles.background}>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('Aktuella')}>
          <View style={styles.container}>
            <JL />
            <View style={[styles.Kommande]} />
            <Text style={styles.vit}>AKTUELLA UTSTÄLLNINGAR</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Kommande')}>
          <View style={styles.container}>
            <Kommande />
            <View style={[styles.Kommande]} />
            <Text style={styles.vit}>KOMMANDE UTSTÄLLNINGAR</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#252525',
  },
  container: {
    flex: 1,
    margin: 7,
    flexDirection: 'column',
    position: 'relative',
    textAlign: 'center',
  },

  vit: {
    fontSize: 22,
    position: 'absolute',
    bottom: 23,
    width: '100%',
    opacity: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },

  svart: {
    fontSize: 22,
    position: 'absolute',
    bottom: 23,
    width: '100%',
    opacity: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },

  JL: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#ffc230',
    opacity: 0.8,
    width: '100%',
    bottom: 0,
    height: 80,
    borderRadius: 7,
  },

  Kommande: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'black',
    opacity: 0.5,
    width: '100%',
    bottom: 0,
    height: 80,
    borderRadius: 7,
  },
  Turnerande: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#9c2226',
    width: '100%',
    bottom: 0,
    height: 80,
    borderRadius: 7,
  },
  EWK: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#90946a',
    opacity: 0.8,
    width: '100%',
    bottom: 0,
    height: 80,
    borderRadius: 7,
  },
  Tidigare: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#376288',
    opacity: 0.9,
    width: '100%',
    bottom: 0,
    height: 80,
    borderRadius: 7,
  },
});

export default Exhibitions;
