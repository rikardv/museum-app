import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';



const VadskulleEwk = ({navigation}) => {
    return (
    
    //Bild
    <View style={{backgroundColor: '#252525'}}>
        <ScrollView>
        <Image
    source={{
      uri:
        'https://www.arbetetsmuseum.se/wp-content/uploads/2020/10/EWK_0875_1200x771px-760x760.jpg',
    }}
    style={{width: '100%', height: 300, borderRadius: 10, resizeMode: 'cover'}}
     />
     
         <View style={styles.container}>
            
            <View style={[styles.Text]} />
            <Text style={styles.vit}>VAD SKULLE EWK SAGT?</Text>
          </View>

          <Text style={styles.bold}>26 OKTOBER 2020–TILLS VIDARE PLAN 3</Text>
          <Text style={styles.bread}>
              Den 23 september 2019 höll Greta Tunberg ett tal inför alla världens ledare under FN:s klimattoppmöte i New York. Greta, som sedan hösten 2018 valt att skolka från skolan och sätta sig utanför Sveriges riksdag, med sin handskrivna skylt om skolstrejk för klimatet. I dag upprepar Sir David Attenborough samma sak, med en 93-årings patos, i sitt vittnesmål om den planet vi alla lever på och delar ansvar för.{'\n'}{'\n'}

Hur skulle EWK ha reagerat på Gretas tal och Sir Davids vittnesmål?
Skulle han varit tidningarnas utsände i New York?
Hade han fått åka med på resorna till våra smältande poler?{'\n'}{'\n'}

Ingen vet. Det vi i stället får göra är att vända tillbaka till vårt arkiv. Se hur han kommenterade lokala och globala frågor genom 50 års tecknande för tidningar och mediehus över hela världen. Frågor som rört miljö, klimat, jordens resurser och vår alldeles enastående vackra natur.{'\n'}{'\n'}

Kanske kan hans bilder inspirera oss och ge oss kraft att vända utvecklingen? Ett är säkert: även om de skapats för decennier sedan fortsätter de att lära oss om vår gemensamma planet och om människorna som bebor den.{'\n'}{'\n'}
Illustrationer: Ewert Karlsson
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
  
  export default VadskulleEwk;