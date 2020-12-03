import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Floors = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.dummy}></View>

      <View style={styles.floors}>
        <TouchableOpacity
          style={styles.opa}
          onPress={() => navigation.navigate('MapSeventh')}>
          <ImageBackground
            style={styles.image}
            resizeMode={'stretch'}
            source={require('../assets/vaning/Vaning7.7.png')}>
            <Text style={styles.text}>FOTOSALONG</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>

      <View style={styles.floors}>
        <View style={styles.opa}>
          <ImageBackground
            style={styles.image}
            resizeMode={'stretch'}
            source={require('../assets/vaning/Vaning6.6.png')}>
            <Text style={styles.nonAvailabletext}>RESTAURANG</Text>
          </ImageBackground>
        </View>
      </View>

      <View style={styles.floors}>
        <TouchableOpacity
          style={styles.opa}
          onPress={() => navigation.navigate('MapFifth')}>
          <ImageBackground
            style={styles.image}
            resizeMode={'stretch'}
            source={require('../assets/vaning/Vaning5.5.png')}>
            <Text style={styles.text}>HEJ ROBOT</Text>
            <Text style={styles.text}>FRAMTIDSLAND</Text>
            <Text style={styles.text}>KRIS OCH VISION</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>

      <View style={styles.floors}>
        <View style={styles.opa}>
          <ImageBackground
            style={styles.image}
            resizeMode={'stretch'}
            source={require('../assets/vaning/Vaning4.4.png')}>
            <Text style={styles.nonAvailabletext}>KONTOR</Text>
          </ImageBackground>
        </View>
      </View>

      <View style={styles.floors}>
        <TouchableOpacity
          style={styles.opa}
          onPress={() => navigation.navigate('MapThird')}>
          <ImageBackground
            style={styles.image}
            resizeMode={'stretch'}
            source={require('../assets/vaning/Vaning3.3.png')}>
            <Text style={styles.text}>EWK-MUSÉET</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>

      <View style={styles.floors}>
        <TouchableOpacity
          style={styles.opa}
          onPress={() => navigation.navigate('MapSecond')}>
          <ImageBackground
            style={styles.image}
            resizeMode={'stretch'}
            source={require('../assets/vaning/Vaning2.2.png')}>
            <Text style={styles.text}>RECEPTION</Text>
            <Text style={styles.text}>KREATIVA VERKSTADEN</Text>
            <Text style={styles.text}>JOBBLABB</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>

      <View style={styles.floors}>
        <TouchableOpacity
          style={styles.opa}
          onPress={() => navigation.navigate('MapFirst')}>
          <ImageBackground
            style={styles.image}
            resizeMode={'stretch'}
            source={require('../assets/vaning/Vaning1.1.png')}>
            <Text style={styles.text}>LILLA ARBETETS</Text>
            <Text style={styles.text}>MAGASINET</Text>
            <Text style={styles.text}>MATSÄCKSSRUM</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={styles.dummy}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
    flexDirection: 'column',
    alignItems: 'center',
  },

  opa: {
    //Röd

    width: '100%',
    height: '100%',
    resizeMode: 'center',

    borderColor: 'red',
    alignItems: 'center',
  },

  floors: {
    //Vita
    flex: 1,

    borderColor: 'white',
    width: '90%',
    height: '100%',
    borderWidth: 5,
    borderColor: '#252525',
  },

  image: {
    flex: 1,
    width: '100%',
    height: '100%',

    resizeMode: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    textShadowOffset: {width: -1, height: 1},
    textShadowColor: 'rgba(0,0,0,0.75)',
    textShadowRadius: 4,
  },

  nonAvailabletext: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 17,
    fontWeight: 'bold',
    textShadowOffset: {width: -1, height: 1},
    textShadowColor: 'rgba(0,0,0,0.75)',
    textShadowRadius: 4,
  },

  textHeader: {
    color: 'white',
    fontSize: 18,
  },

  dummy: {
    height: '2%',
  },

  singletextElements: {
    marginLeft: '5%',
    marginTop: '5%',
    width: '40%',
    height: '60%',
  },

  textElements: {
    marginLeft: '5%',
    width: '70%',
    height: '100%',
  },

  toptextElements: {
    marginTop: '10%',
    marginLeft: '10%',
    width: '70%',
    height: '60%',
  },
});

export default Floors;
