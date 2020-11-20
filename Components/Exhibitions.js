import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image, SafeAreaView, Button,ScrollView, ImageBackground} from 'react-native';

const JL = () =>(
    <Image source = {{uri: 'https://www.arbetetsmuseum.se/wp-content/uploads/2019/09/jobblabb-insta-1080x1080px-1-760x760.jpg'}} style = {{ width: '100%', height: 300, borderRadius: 10, resizeMode: "cover"}}/>

  )
const Kommande = () =>(
    <Image source = {{uri: 'https://www.arbetetsmuseum.se/wp-content/uploads/2014/12/kommande-utstallningar-760x760.jpg'}} style = {{ width: '100%', height: 300, borderRadius: 10, resizeMode: "cover"}}/>

)
const Turnerande = () =>(
    <Image source = {{uri: 'https://www.arbetetsmuseum.se/wp-content/uploads/2014/12/turnerande-utstallning-760x760.jpg'}} style = {{ width: '100%', height: 300, borderRadius: 10, resizeMode: "cover"}}/>

)
const EWK = () =>(
    <Image source = {{uri: 'https://www.arbetetsmuseum.se/wp-content/uploads/2014/12/ewk-1-760x760.jpg'}} style = {{ width: '100%', height: 300, borderRadius: 10, resizeMode: "cover"}}/>

)
const Tidigare = () =>(
    <Image source = {{uri: 'https://www.arbetetsmuseum.se/wp-content/uploads/2015/02/finished-exhibitions-760x760.jpg'}} style = {{ width: '100%', height: 300, borderRadius: 10, resizeMode: "cover"}}/>

)

const Exhibitions = ({navigation}) => {

    return (

        <View style = {{backgroundColor: '#252525'}}>
        <ScrollView>
        <TouchableOpacity  onPress={()=> navigation.navigate('JobbLabb')}>
           <View style={styles.container}>
             <JL />
               <View style={[styles.JL]}/>
                 <Text style={styles.vit}>  
                   AKTUELLA UTSTÄLLNINGAR
                 </Text>
           </View>
           </TouchableOpacity>
           
          <TouchableOpacity  onPress={()=> navigation.navigate('Kommande')}>
           <View style={styles.container}>
             <Kommande />
               <View style={[styles.Kommande]}/>
                 <Text style={styles.svart}>  
                   KOMMANDE UTSTÄLLNINGAR
                 </Text>
           </View>
           </TouchableOpacity>

           <TouchableOpacity  onPress={()=> navigation.navigate('Turnerande')}>
           <View style={styles.container}>
             <Turnerande />
               <View style={[styles.Turnerande]}/>
                 <Text style={styles.vit}>  
                   TURNERNADE UTSTÄLLNINGAR
                 </Text>
           </View>
           </TouchableOpacity>

           <TouchableOpacity  onPress={()=> navigation.navigate('Floors')}>
           <View style={styles.container}>
             <EWK />
               <View style={[styles.EWK]}/>
                 <Text style={styles.svart}>  
                   EWK-MUSEET
                 </Text>
           </View>
           </TouchableOpacity>

          <TouchableOpacity  onPress={()=> navigation.navigate('Floors')}>
           <View style={styles.container}>
              <Tidigare />
                <View style={[styles.Tidigare]}/>
                  <Text style={styles.vit}>  
                    TIDIGARE UTSTÄLLNINGAR
                  </Text>
           </View>
          </TouchableOpacity>

           </ScrollView>
         </View>
    )
}

const styles = StyleSheet.create({
    container: {
     margin: 7,
      flexDirection: 'column',
      position: 'relative',
      textAlign: 'center',
      flex: 1,

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
 

  svart: {
  
    fontSize: 20,
    position: 'absolute',
    bottom: 23,
    width: '100%',
    opacity: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black'
    
    },
 
    JL: {
      flex: 1,
    position: 'absolute',
    backgroundColor: 'black',
    opacity: 0.8,
    width: '100%',
    bottom: 0,
    height: 80,
    borderRadius: 7,
    },

    Kommande: {
        flex: 1,
      position: 'absolute',
      backgroundColor: '#ffc230',
      opacity: 0.85,
      width: '100%',
      bottom: 0,
      height: 80,
      borderRadius: 7,
      
      },
      Turnerande: {
        flex: 1,
      position: 'absolute',
      backgroundColor: '#9c2226',
      width: '100%',
      bottom: 0,
      height: 80,
      borderRadius: 7,
      
      },
      EWK: {
        flex: 1,
      position: 'absolute',
      backgroundColor: '#90946a',
      opacity: 0.8,
      width: '100%',
      bottom: 0,
      height: 80,
      borderRadius: 7,
      
      },
      Tidigare: {
        flex: 1,
      position: 'absolute',
      backgroundColor: '#376288',
      opacity: 0.9,
      width: '100%',
      bottom: 0,
      height: 80,
      borderRadius: 7,
      
      },

      
  
  });

export default Exhibitions