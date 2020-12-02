import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';



const Framtidsland = ({navigation}) => {
    return (
    
    //Bild
    <View style={{backgroundColor: '#252525'}}>
        <ScrollView>
        <Image
    source={{
      uri:
        'https://www.arbetetsmuseum.se/wp-content/uploads/2014/12/Framtidsland-1200x771px-Foto-Peter-Holgersson-1-760x760.jpg',
    }}
    style={{width: '100%', height: 300, borderRadius: 10, resizeMode: 'cover'}}
  />
     
         <View style={styles.container}>
            
            <View style={[styles.Text]} />
            <Text style={styles.vit}>Framtidsland</Text>
          </View>

          <Text style={styles.bold}>VISAS TILL OCH MED 31 JANUARI 2021
PLAN 5</Text>
          <Text style={styles.bread}>
          Arbetets museums största satsning någonsin, Framtidsland, tar sikte på morgondagens arbets- och vardagsliv. Utställningen börjar i 1980-talet, tar tempen på vår nutid och visar vägar in i en framtid som tar klimathotet på allvar. Hur ska vi bo, äta, resa, arbeta, utbilda oss? Vad vill vi? Vad är hållbart? Vad kan du och jag göra? Utställningen är tänkt att vara en verktygslåda för en hållbar framtid, ekologiskt, ekonomiskt och socialt.
          {'\n'}{'\n'}
I utställningen möter besökaren bland annat ett organkabinett med mänskliga reservdelar och konstgjorda foster. I avdelningen om framtidens jobb är entreprenören Antonia Ax:son Johnson en av flera visionärer som ger ungdomarna råd.
{'\n'}{'\n'}
Till grund för utställningen ligger rundabordssamtal mellan forskare och ungdomar om tänkbara framtidsscenarier. Konstnärer har utgått från samtalen när de gestaltat utställningen. Samtalen mellan forskare och ungdomar kan besökarna lyssna på, bland annat via en talande tomat och en babblande hamburgare.
{'\n'}{'\n'}
En särskild turnéutställning, Framtidsland ungdom, har visats på de orter där ungdomar medverkat; Falun, Kristianstad och Örebro. Ungdomar även från Linköping/Norrköping har deltagit. Vårt mål är att just ungdomar ska se utställningen och lämna museet med en känsla av framtidsoptimistism.
{'\n'}{'\n'}
Framtidsland visas till och med januari 2021. Passa på att se den prisbelönta utställningen innan den går ner! Besök på egen hand eller skicka in en visningsförfrågan.
{'\n'}{'\n'}
Läs mer om utställningsdelarna Fånga energin! och Better shelter.{'\n'}{'\n'}
        </Text>

        <Text style={styles.bold}>FRAMTIDSLAND – SVERIGES BÄSTA UTSTÄLLNING!{'\n'}{'\n'}{'\n'}{'\n'}</Text>

        <Text style={styles.bread}> Det är Forum för utställare som varje år utser "Årets utställning". 2014 var det Framtidsland som fick pris vid Riksförbundet Sveriges museers årsmöte i april. Det är medlemmarna i Forum för utställare som röstar fram vinnaren.
        {'\n'}{'\n'}
Motiveringen lyder: Engagerande frågor i ett aktuellt ämne möter lekfull gestaltning. Utifrån ungdomars visioner inspireras besökaren till egna kreativa lösningar för ett hållbart samhälle. Med ett deltagande, starkt, metodutvecklat innehåll och en flexibel design har Arbetets museum skapat en konsekvent genomförd och inspirerande utställning.
{'\n'}{'\n'}
Samarbetsparter: ABF, Antonia Ax:son Johnssons Stiftelse för Miljö och Utveckling, EON, Forskningsrådet Formas, Stiftelsen Framtidens kultur, Institutet för framtidsstudier, Kulturbryggan, LO, LRF, Postkodlotteriets Kulturstiftelse, Sensus, Sparbanksstiftelsen Alfa, Stiftelsen SAF, Svenskt Näringsliv och TCO. Under 2017 uppdaterades delar av utställningen i samarbete med Globala Norrköping (Norrköpings kommun och biståndsmyndigheten Sida) samt Stadsodling Norrköping och Naturskyddsföreningen.
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
  
  export default Framtidsland;