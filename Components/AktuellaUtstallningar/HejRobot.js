import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';



const HejRobot = ({navigation}) => {
    return (
    
    //Bild
    <View style={{backgroundColor: '#252525'}}>
        <ScrollView>
        <Image
    source={{
      uri:
        'https://www.arbetetsmuseum.se/wp-content/uploads/2019/06/AM_HejRobot_webbsida_1200x771px-760x760.jpg',
    }}
    style={{width: '100%', height: 300, borderRadius: 10, resizeMode: 'cover'}}
  />
     
         <View style={styles.container}>
            
            <View style={[styles.Text]} />
            <Text style={styles.vit}>Hej Robot!</Text>
          </View>

          <Text style={styles.bold}>5 OKTOBER 2019 – 28 FEBRUARI 2021
PLAN 5</Text>
          <Text style={styles.bread}>
          Sociala robotar verkar vara här för att stanna – i hemmet, i staden och på arbetsplatserna. Men robotarna blir vad vi gör dem till. Vilken roll vill vi att sociala robotar ska spela i framtidens samhälle?{'\n'}{'\n'}

Hej robot! handlar om den teknik som är tänkt att kommunicera med oss i våra vardagliga miljöer. Med utställningen vill vi förklara sammanhangen kring sociala robotar och väcka funderingar kring deras roll i samhället.{'\n'}{'\n'}

I utställningen möter du bland annat den sociala roboten Furhat (bilden) som är utvecklad i Sverige.{'\n'}{'\n'}
        </Text>

        <Text style={styles.bold}>VISNING MED KOPPLING TILL LÄROPLANEN</Text>

        <Text style={styles.bread}>Visningar av utställningen riktar sig främst till högstadiet åk 9 och gymnasiet med flera kopplingar till GY-11. Eleverna ges möjlighet att undersöka olika perspektiv kring den tekniska utvecklingen och individens roll, i syfte att utveckla förståelsen för frågor om arbetsliv, innovationer och hållbar utveckling.{'\n'}{'\n'}

Gör en visningsförfrågan{'\n'}{'\n'}

Frågor? Kontakta pedagogik@arbetetsmuseum.se{'\n'}{'\n'}



Hej robot! är producerad av Arbetets museum tillsammans med forskare inom olika ämnen som studerar teknikförändringar och hur de påverkar samhället. Utställningen är finansierad av forskningsrådet Formas och är ett samarbete med Kungl. Tekniska högskolan, Linköpings universitet och Furhat Robotics.{'\n'}{'\n'}

Illustration ovan: Gullers Grupp</Text>
           
           
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
  
  export default HejRobot;