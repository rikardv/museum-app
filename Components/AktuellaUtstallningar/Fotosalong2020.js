import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';



const Fotosalong2020 = ({navigation}) => {
    return (
    
    //Bild
    <View style={{backgroundColor: '#252525'}}>
        <ScrollView>
        <Image
    source={{
      uri:
        'https://www.arbetetsmuseum.se/wp-content/uploads/2020/02/DFS-mosaik-2020_1200x771-760x760.jpg',
    }}
    style={{width: '100%', height: 300, borderRadius: 10, resizeMode: 'cover'}}
  />
     
         <View style={styles.container}>
            
            <View style={[styles.Text]} />
            <Text style={styles.vit}>DOKUMENTÄRFOTOSALONG 2020: KAOS</Text>
          </View>

          <Text style={styles.bold}>
5 SEPTEMBER 2020–10 JANUARI 2021
PLAN 7</Text>
          <Text style={styles.bread}>
          Lördag 5 september slår vi upp dörrarna för Dokumentärfotosalong 2020 på Arbetets museum! Bland 91 sökande från hela Sverige har juryn nu valt ut 43 fotografer som ställer ut sina bilder på temat ”kaos” i höstens salong. Temat valdes ut redan hösten 2019, då vi var lyckligt ovetande om coronakrisen. Livet blir inte alltid som väntat…{'\n'}{'\n'}

          Genom Dokumentärfotosalongen vill Arbetets museum uppmärksamma det dokumentära fotografiet och erbjuda en arena för såväl amatörer som etablerade fotografer att dela med sig av sina berättelser. Nytt för i år är att vi har tidigarelagt ansökningsperioden och även förlängt utställningsperioden med ungefär en månad.{'\n'}{'\n'}

          Det är fjärde året i rad som utställningen anordnas och i år har 91 fotografer skickat in sammanlagt 402 bilder, vilket är dubbelrekord för salongen. Efter tuffa förhandlingar enades juryn om att anta 43 fotografer, varav 19 kvinnor och 24 män, från Luleå i norr till Malmö i söder, som kommer ställa ut totalt 101 verk.{'\n'}{'\n'}

          Dokumentärfotosalong 2020 öppnar den 5 september 2020 och pågår till 10 januari 2021 på Arbetets museum. Under visningen av utställningen utses tre stipendiater som erhåller 5 000 kronor vardera utifrån tre kategorier: Juryns pris för bästa bild, Juryns pris för bästa bild utifrån temat och Publikens pris för bästa bild. Stipendiet offentliggörs och delas ut under evenemanget Dokfotodagen på Arbetets museum, som i år går av stapeln den 17 oktober. Under Dokfotodagen delar vi även ut det prestigefyllda Dokumentärfotopriset och avslöjar temat för kommande års fotosalong.
        </Text>

        {/*lägg till för fotografer osv...*/}
           
           
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
  
  export default Fotosalong2020;