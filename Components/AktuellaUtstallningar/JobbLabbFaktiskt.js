import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import JobbLabb from '../JobbLabb';



const JobbLabbFaktiskt = ({navigation}) => {
    return (
    
    //Bild
    <View style={{backgroundColor: '#252525'}}>
        <ScrollView>
        <Image
    source={{
      uri:
        'https://www.arbetetsmuseum.se/wp-content/uploads/2019/09/jobblabb-insta-1080x1080px-1-760x760.jpg',
    }}
    style={{width: '100%', height: 300, borderRadius: 10, resizeMode: 'cover'}}
  />
     
         <View style={styles.container}>
            
            <View style={[styles.Text]} />
            <Text style={styles.vit}>Jobblabb</Text>
          </View>

          <Text style={styles.bold}>15 FEBRUARI 2020–TILLS VIDARE
PLAN 2</Text>
          <Text style={styles.bread}>
          Välkommen till Jobblabb – ett färgsprakande upptäckarlabb med fokus på arbetslivet. I Jobblabbs entré stämplar du in till spännande utmaningar. Labbet är format som en stad och på olika platser får du uppdrag och utmanas att använda olika superkrafter för att lösa uppgifterna. Genom att prova olika aktiviteter i utställningen får du syn på dina egna förmågor och var du kan ha nytta av dem.{'\n'}{'\n'}

I utställningen träffar du riktiga Jobbhjältar som också har olika intressen och superhjälteförmågor. Finns det någon som liknar dig? Var kan dina superkrafter användas ute i arbetslivet?{'\n'}{'\n'}

Utställningen är reserverad för skolklasser tisdag–torsdag, övriga dagar är den öppen för alla.{'\n'}{'\n'}
        </Text>
        <Text style={styles.bold}>FÖR LÄRARE
</Text>
        <Text style={styles.bread}>obblabb har flera kopplingar till Lgr 11, läs gärna mer i vår lärarhandledning för Jobblabb (PDF, 8,23 MB). Undrar du något om Jobblabb eller våra visningar? Kontakta gärna pedagogik@arbetetsmuseum.se.
        {'\n'}{'\n'} Innehåll: Via förinspelat material presenterar en av våra pedagoger utställningen. Detta varvas med lärarledda uppgifter i klassrummet. Under visningen kommer eleverna att få fundera på sina egna färdigheter och intressen och kopplingen till de yrken som finns idag. Visningen inleds och avslutas med ett videosamtal mellan klassen och en av våra pedagoger.
        {'\n'}{'\n'}
Vänder sig till åk 5
{'\n'}{'\n'}
Kostnadsfritt för kommuner med avtal (de flesta kommuner i Östergötland), 500 kr för övriga
{'\n'}{'\n'}
Längd: ca 1 timme
{'\n'}{'\n'}
Bokningsbara tider varje vecka tisdag–torsdag
{'\n'}{'\n'}
För att testa teknik och gå igenom upplägg har vi ett videosamtal med dig som lärare i god tid innan visningen
{'\n'}{'\n'}{'\n'}{'\n'}

VISNING PÅ PLATS – EJ TILLGÄNGLIGT FÖR NÄRVARANDE PGA. RÅDANDE RESTRIKTIONER KRING CORONAVIRUSET
{'\n'}{'\n'}
Innehåll: Skolvisningen består av två delar på ca 1 timme vardera: ett besök i utställningen och ett uppdrag i vår nya Kreativa verkstad. I utställningen får eleverna lära känna Jobbhjältarna, testa olika aktiviteter och undersöka sina egna intressen och färdigheter. Uppdragsdelen görs i grupper där eleverna får testa att lösa ett uppdrag som kommer direkt från ett företag i Östergötland. Ni får generera idéer, bygga en prototyp och till sist presentera er lösning.
{'\n'}{'\n'}
Vänder sig till åk 5
{'\n'}{'\n'}
Kostnadsfritt för kommuner med avtal (de flesta kommuner i Östergötland), 2500 kr för övriga
{'\n'}{'\n'}
Längd: ca 2 timmar och 15 minuter
{'\n'}{'\n'}
Bokningsbara tider varje vecka tisdag–torsdag
{'\n'}{'\n'}
Matsäcksrum finns i källaren
{'\n'}{'\n'}
        
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
  
  export default JobbLabbFaktiskt;