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
            <View style={styles.line}>
              <View style={styles.floortext}>
                <Text style={styles.text}>FOTOSALONG</Text>
              </View>
              <View style={styles.margin}>
                <Text style={styles.textnr}>7</Text>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>

      <View style={styles.floors}>
        <View style={styles.opa}>
          <ImageBackground
            style={styles.nonAvailableimage}
            resizeMode={'stretch'}
            source={require('../assets/vaning/Vaning4.4.png')}>
            <View style={styles.line}>
              <View style={styles.floortext}>
                <Text style={styles.nonAvailabletext}>RESTAURANG</Text>
              </View>
              <View style={styles.margin}>
                <Text style={styles.textnrblack}>6</Text>
              </View>
            </View>
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
            <View style={styles.line}>
              <View style={styles.floortext}>
                <Text style={styles.text}>HEJ ROBOT</Text>
                <Text style={styles.text}>FRAMTIDSLAND</Text>
                <Text style={styles.text}>KRIS OCH VISION</Text>
              </View>
              <View style={styles.margin}>
                <Text style={styles.textnr}>5</Text>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>

      <View style={styles.floors}>
        <View style={styles.opa}>
          <ImageBackground
            style={styles.nonAvailableimage}
            resizeMode={'stretch'}
            source={require('../assets/vaning/Vaning4.4.png')}>
            <View style={styles.line}>
              <View style={styles.floortext}>
                <Text style={styles.nonAvailabletext}>KONTOR</Text>
              </View>
              <View style={styles.margin}>
                <Text style={styles.textnrblack}>4</Text>
              </View>
            </View>
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
            <View style={styles.line}>
              <View style={styles.floortext}>
                <Text style={styles.text}>EWK-MUSÉET</Text>
              </View>
              <View style={styles.margin}>
                <Text style={styles.textnr}>3</Text>
              </View>
            </View>
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
            <View style={styles.line}>
              <View style={styles.floortext}>
                <Text style={styles.text}>RECEPTION</Text>
                <Text style={styles.text}>KREATIVA VERKSTADEN</Text>
                <Text style={styles.text}>JOBBLABB</Text>
              </View>
              <View style={styles.margin}>
                <Text style={styles.textnr}>2</Text>
              </View>
            </View>
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
            <View style={styles.line}>
              <View style={styles.floortext}>
                <Text style={styles.text}>LILLA ARBETETS</Text>
                <Text style={styles.text}>MAGASINET</Text>
                <Text style={styles.text}>MATSÄCKSRUM</Text>
              </View>
              <View style={styles.margin}>
                <Text style={styles.textnr}>1</Text>
              </View>
            </View>
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
  line: {
    flexDirection: 'row',
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

  nonAvailableimage: {
    flex: 1,
    width: '100%',
    height: '100%',

    resizeMode: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textShadowOffset: {width: -1, height: 1},
    textShadowColor: 'rgba(0,0,0,0.75)',
    textShadowRadius: 4,
  },

  textnr: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    textShadowOffset: {width: -1, height: 1},
    textShadowColor: 'rgba(0,0,0,0.75)',
    textShadowRadius: 4,
  },

  textnrblack: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowOffset: {width: -1, height: 1},
    textShadowColor: 'rgba(255,255,255,0.75)',
    textShadowRadius: 4,
  },
  nonAvailabletext: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    textShadowOffset: {width: -1, height: 1},
    textShadowColor: 'rgba(255,255,255,0.75)',
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
    marginTop: '5%',
    width: '40%',
    height: '60%',
  },

  textElements: {
    width: '70%',
    height: '100%',
  },

  toptextElements: {
    marginTop: '10%',
    marginLeft: '10%',
    width: '70%',
    height: '60%',
  },

  floortext: {
    height: '100%',
    width: '50%',
    marginLeft: '5%',
    justifyContent: 'center',
  },

  margin: {
    marginLeft: '10%',
  },
});

export default Floors;
