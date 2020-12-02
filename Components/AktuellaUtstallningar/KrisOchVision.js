import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';



const KrisOchVision = ({navigation}) => {
    return (
    
    //Bild
    <View style={{backgroundColor: '#252525'}}>
        <ScrollView>
        <Image
    source={{
      uri:
        'https://www.arbetetsmuseum.se/wp-content/uploads/2020/04/Kris-och-vision_1200x771px_Foto-peter_holgersson-1-760x760.jpg',
    }}
    style={{width: '100%', height: 300, borderRadius: 10, resizeMode: 'cover'}}
  />
     
         <View style={styles.container}>
            
            <View style={[styles.Text]} />
            <Text style={styles.vit}>Kris & Vision</Text>
          </View>

          <Text style={styles.bold}>VISAS ÅRET UT PLAN 5</Text>
          <Text style={styles.bread}>
          Kris & vision – Våga älska Norrköping! är en utställning om hur Norrköping blev den stad den är idag. {'\n'}{'\n'}

Norrköpings stad har genom historien upplevt både stora framgångar och svåra motgångar. Dessa upp- och nedgångar har präglat Norrköping och dess befolkning. Ur kriserna har man format nya visioner, men visionära projekt har också förvandlats till kriser. För att förstå vad staden är idag behöver man förstå dess historia. Vad kan vi lära oss av de kriser och visioner som varit och hur kommer de att se ut i framtiden?{'\n'}{'\n'}

Utställningen är producerad i samarbete med Fastighets AB L E Lundberg, Henry Ståhl Fastigheter AB, Hyresbostäder i Norrköping AB.{'\n'}{'\n'}
        </Text>
           
           
        </ScrollView>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
        margin: 7,
        flexDirection: 'column',
        position: 'relative',
        textAlign: 'center',
        flex: 1,
      },
      bgc: {
        backgroundColor: '#252525',
      },

      bread: {
          fontSize: 18,
          color: 'white',
          marginLeft: '4%',
          marginRight: '4%',
          marginTop: '10%',

      },
    
      bold: {
        fontSize: 30,
        marginLeft: '5%',
        
        color: 'white',
        fontWeight: 'bold',
      },

      vit: {
        fontSize: 20,
        position: 'absolute',
        bottom: 23,
        width: '100%',
        opacity: 1,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
      },
    
      Text: {
        flex: 1,
        position: 'absolute',
        backgroundColor: 'black',
        opacity: 0.8,
        width: '100%',
        bottom: 0,
        height: 80,
        borderRadius: 7,
      },
  });
  
  export default KrisOchVision;