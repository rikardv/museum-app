import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';



const FangaEnergin = ({navigation}) => {
    return (
    
    //Bild
    <View style={{backgroundColor: '#252525'}}>
        <ScrollView>
        <Image
    source={{
      uri:
        'https://www.arbetetsmuseum.se/wp-content/uploads/2016/06/fangaenergin_1200x771-760x760.jpg',
    }}
    style={{width: '100%', height: 300, borderRadius: 10, resizeMode: 'cover'}}
  />
     
         <View style={styles.container}>
            
            <View style={[styles.Text]} />
            <Text style={styles.vit}>Fånga Energin</Text>
          </View>

          <Text style={styles.bold}>VISAS TILL OCH MED JANUARI 2021
PLAN 5</Text>
          <Text style={styles.bread}>
          Av alla viktiga frågor är kanske energifrågan den viktigaste att lösa för att kunna möjliggöra en hållbar framtid. Hur kan vi skapa ren och hållbar energiproduktion och samtidigt ställa om till en mer ansvarsfull energikonsumtion? Om vi ska behålla jorden som vi känner den behöver vi göra en helomvändning, från fossila bränslen till förnybar energi.{'\n'}{'\n'}

Framtidens energiförsörjning är en komplex fråga, men i Fånga Energin! vill vi inspirera och visa på möjligheter till en hållbar energianvändning. Inte minst vill vi ge goda exempel från planetens viktigaste energikälla – Solen!{'\n'}{'\n'}

Fånga energin! är producerad av Arbetets museum i samarbete med Naturskyddsföreningen. Den är en del av utställningen Framtidsland som invigdes den 17 maj 2014 på Arbetets museum. Framtidsland tar sikte på morgondagens arbets- och vardagsliv, tar tempen på vår nutid och visar vägar in i en framtid som tar klimathotet på allvar. Utställningen fungerar som en verktygslåda för en hållbar framtid – ekologiskt, ekonomiskt och socialt.{'\n'}{'\n'}
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
  
  export default FangaEnergin;