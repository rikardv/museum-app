import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        // dark-content, light-content and default
        hidden={false}
        //To hide statusBar
        backgroundColor="#252525"
        //Background color of statusBar only works for Android
        translucent={false}
        //allowing light, but not detailed shapes
        networkActivityIndicatorVisible={true}
      />
      <ImageBackground
        source={require('../assets/framsida.png')}
        style={{
          width: 200,
          height: 500,
          position: 'absolute',
          alignSelf: 'flex-start',
          bottom: -28,
        }}></ImageBackground>
      <View style={styles.back}></View>

      <View style={styles.header}>
        <Image
          source={require('../assets/logotyp-arbetets-museum.png')}
          style={{width: 200, height: 200, resizeMode: 'contain'}}
        />
      </View>

      <View style={styles.headerText}>
        <Text style={styles.textheader}>Välkommen!</Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Floors')}
          style={styles.shadow}>
          <View style={styles.buttonV}>
            <Text style={styles.buttonTextV}>Tryck här för att börja!</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Exhibitions')}
          style={styles.shadow}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Utställningar</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Events')}
          style={styles.shadow}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Evenemang</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('VisitorInfo')}
          style={styles.shadow}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Besöksinfo</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#252525',
    alignItems: 'center',
    justifyContent: 'center',
  },

  back: {
    position: 'absolute',

    width: '100%',
    height: '100%',
  },

  image: {
    height: '60%',
    width: '90%',
    marginTop: '40%',
  },

  headerText: {
    flex: 1,
  },

  header: {
    flex: 2.5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
  },

  textheader: {
    fontFamily: 'System',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },

  buttons: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '70%',
  },

  bottom: {
    flex: 1,
  },

  button: {
    borderRadius: 30,
    paddingVertical: 10,

    backgroundColor: '#353535',
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#ffc230',
  },

  buttonV: {
    borderRadius: 30,
    paddingVertical: 20,

    backgroundColor: '#ffc230',
    width: '100%',
    borderWidth: 1,
    borderColor: '#ffc230',
  },

  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textShadowOffset: {width: -1, height: 2},
    textShadowColor: 'rgba(0,0,0,0.4)',
    textShadowRadius: 5,
  },

  buttonTextV: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowOffset: {width: -1, height: 2},
    textShadowColor: 'rgba(0,0,0,0.4)',
    textShadowRadius: 5,
  },

  shadow: {
    shadowColor: 'rgba(0,0,0, 0.5)', // IOS
    shadowOffset: {height: 2, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 5, //IOS
  },
});

export default HomeScreen;
