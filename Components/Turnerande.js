import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image, SafeAreaView, Button,ScrollView, ImageBackground} from 'react-native';

const Labb = () =>(
    <Image source = {{uri: 'https://www.arbetetsmuseum.se/wp-content/uploads/2018/08/demokratilabbet-forstoringsglaset-1200-760x760.jpg'}} style = {{ width: '100%', height: 300, borderRadius: 10, resizeMode: "cover"}}/>

  )

const Cirkus = () =>(
    <Image source = {{uri: 'https://www.arbetetsmuseum.se/wp-content/uploads/2016/05/jobbcirkus-webb-utställningssida-760x760.jpg'}} style = {{ width: '100%', height: 300, borderRadius: 10, resizeMode: "cover"}}/>

)
  
  
  const Turnerande = ({navigation}) => {

    return (

    <View style = {styles.bgc}>
        <ScrollView>
         <TouchableOpacity  onPress={()=> navigation.navigate('JobbLabb')}>
            <View style={styles.container}>
             <Labb />
               <View style={[styles.text]}/>
                 <Text style={styles.vit}>  
                   DET RESANDE DEMOKRATILABBET
                 </Text>
            </View>
           </TouchableOpacity>

           <TouchableOpacity  onPress={()=> navigation.navigate('JobbLabb')}>
            <View style={styles.container}>
             <Cirkus />
               <View style={[styles.text]}/>
                 <Text style={styles.vit}>  
                  JOBBCIRKUS
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

export default Turnerande