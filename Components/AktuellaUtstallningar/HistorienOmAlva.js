import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';



const HistoerienOmAlva = ({navigation}) => {
    return (
    
    //Bild
    <View style={{backgroundColor: '#252525'}}>
        <ScrollView>
        <Image
    source={{
      uri:
        'https://www.arbetetsmuseum.se/wp-content/uploads/2014/12/Alva_1200x771-760x760.jpg',
    }}
    style={{width: '100%', height: 300, borderRadius: 10, resizeMode: 'cover'}}
  />
     
         <View style={styles.container}>
            
            <View style={[styles.Text]} />
            <Text style={styles.vit}>Historien Om Alva</Text>
          </View>

          <Text style={styles.bold}>PERMANENT UTSTÄLLNING I TRAPPHUSET</Text>
          <Text style={styles.bread}>
          Historien om Alva handlar om rullerskan Alva Carlsson som arbetade 35 år i Strykjärnet, 1927-1962.{'\n'}{'\n'}

I det gamla trapphuset kan du följa berättelsen om husets historia och de människor som arbetat här. Starta på plan 7 och vandra nedåt.
        </Text>
        <Text style={styles.bold}>VISNING AV HISTORIEN OM ALVA</Text>
        <Text style={styles.bread}>Alva föddes 1906 i en fattig familj på Vikbolandet. Som 16-åring flyttade hon in till staden för att börja arbeta på Strykjärnet. Vad var det för arbete som mötte henne? Vad var det för miljö hon lämnade? Alva arbetade ända fram till pensionen inom textilindustrin och i visningen berättar museets pedagog, som iklätt sig rollen som Alva, om hennes liv.{'\n'}{'\n'}



När: tillsvidare{'\n'}{'\n'}
Var: utställningen Alva i trapphuset{'\n'}{'\n'}
Tid: 30 minuter{'\n'}{'\n'}
Innehåll: dramatisering, dialog{'\n'}{'\n'}
Kostnad: 500 kr{'\n'}{'\n'}
Antal: max 20 elever{'\n'}{'\n'}</Text>
           
           
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
  
  export default HistoerienOmAlva;