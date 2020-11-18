import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image, SafeAreaView, Button,ScrollView, ImageBackground} from 'react-native';

const Nina = () =>(
    <Image source = {{uri: 'https://www.arbetetsmuseum.se/wp-content/uploads/2020/11/AM_NinaHemmingsson_webbsida_1200x771px-760x760.jpg'}} style = {{ width: '100%', height: 300, borderRadius: 10, resizeMode: "cover"}}/>

  )
  
  
  const Kommande = ({navigation}) => {

    return (

        <View style = {{backgroundColor: '#252525'}}>
            <ScrollView>
                <TouchableOpacity  onPress={()=> navigation.navigate('JobbLabb')}>
                <View style={styles.container}>
                    <Nina />
                    <View style={[styles.text]}/>
                        <Text style={styles.vit}>  
                        AKTUELLA UTSTÄLLNINGAR
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
    bgc: {
      backgroundColor:  '#252525',
      
    },
  
vit: {
  
  fontSize: 25,
  position: 'absolute',
  bottom: 23,
  width: '100%',
  opacity: 1,
  fontWeight: 'bold',
  fontFamily: 'sans-serif',
  textAlign: 'center',
  color: 'white',
 
  },
 

  svart: {
  
    fontSize: 25,
    position: 'absolute',
    bottom: 23,
    width: '100%',
    opacity: 1,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    color: 'black'
    
    },
 
    text: {
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

export default Kommande