import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';



const BetterShelter = ({navigation}) => {
    return (
    
    //Bild
    <View style={{backgroundColor: '#252525'}}>
        <ScrollView>
        <Image
    source={{
      uri:
        'https://www.arbetetsmuseum.se/wp-content/uploads/2016/11/bettershelter_banner-760x760.jpg',
    }}
    style={{width: '100%', height: 300, borderRadius: 10, resizeMode: 'cover'}}
  />
     
         <View style={styles.container}>
            
            <View style={[styles.Text]} />
            <Text style={styles.vit}>Better Shelter</Text>
          </View>

          <Text style={styles.bold}>VISAS TILLS VIDARE
PLAN 5</Text>
          <Text style={styles.bread}>
          Better Shelter är en del av vår stora utställning Framtidsland.{'\n'}{'\n'}

Flyktingbostaden Better Shelter har skapats av svenska designers med syftet att utveckla ett tryggare och mer hållbart boende för människor i flyktingläger. Genom att visa ett Better Shelter på Arbetets museum vill vi uppmärksamma människor på flykt och hur vi genom ganska enkla medel kan göra mycket för att de ska få en drägligare tillvaro.{'\n'}{'\n'}

Huset levereras på IKEA-vis i två platta paket som väger 80 kg vardera och kan monteras på cirka 4-6 timmar. UNHCR har i dagsläget beställt 30 000 hus, varav 15 000 redan finns på plats i bland annat Irak och Grekland. Ett hus är 17,5 m2 och är optimerat för en familj på fem personer. Husen är försedda med en solpanel som ger såväl lyse som möjlighet att ladda en mobiltelefon.{'\n'}{'\n'}

Better Shelter är ett svenskt socialt företag, ägt av en svensk stiftelse och stöds av bland andra UNHCR och IKEA Foundation.{'\n'}{'\n'}

Medarrangörer: Globala Norrköping, ett samarbete med Norrköpings kommun och biståndsmyndigheten Sida.{'\n'}{'\n'}
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
  
  export default BetterShelter;