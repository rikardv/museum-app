import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';



const EnOvanligDag = ({navigation}) => {
    return (
    
    //Bild
    <View style={{backgroundColor: '#252525'}}>
        <ScrollView>
        <Image
    source={{
      uri:
        'https://www.arbetetsmuseum.se/wp-content/uploads/2020/09/bibliotek_coronaviruset_munskydd_jeppe8213_1200x771-760x760.jpg',
    }}
    style={{width: '100%', height: 300, borderRadius: 10, resizeMode: 'cover'}}
  />
     
         <View style={styles.container}>
            
            <View style={[styles.Text]} />
            <Text style={styles.vit}>En Ovanlig Vardag</Text>
          </View>

          <Text style={styles.bold}>24 SEPTEMBER 2020–10 JANUARI 2021
PLAN 7, I BION</Text>
          <Text style={styles.bread}>
          Sedan vårvintern 2020 har SVT Nyheter Öst dokumenterat coronapandemin genom att samla in bilder och filmer från tittarnas vardag. Nu visar vi ett urval som en pop-up-utställning i årets Dokumentärfotosalong.

SVT Nyheter Östs projekt har fått namnet ”En ovanlig vardag” och varvar allmänhetens ögonblicksbilder med foton av frilansfotograf Jeppe Gustafsson.{'\n'}{'\n'}

”En ovanlig vardag” visas mitt i Dokumentärfotosalongen på plan 7. Salongen är en årligen återkommande satsning där bilder från professionella fotografer och amatörer från hela Sverige samlas.{'\n'}{'\n'}

”En ovanlig vardag” visas på Arbetets museum 24 september 2020–10 januari 2021.
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
  
  export default EnOvanligDag;