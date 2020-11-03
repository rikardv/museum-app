
import 'react-native-gesture-handler'
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image, SafeAreaView, Button, StatusBar} from 'react-native';
import FlatButton from './FlatButton.js'

const ImagesExample = () =>(
    <Image source = {require('/Users/rikard/KoMa/assets/logotyp-arbetets-museum.png')} style = {{ width: 200, height: 200, resizeMode: "contain"}}/>
    
  )

const HomeScreen = ({navigation}) => {

    return(
        <SafeAreaView style={styles.container}>
  
        <View style={styles.header}>
          <ImagesExample></ImagesExample>
          
          
        </View>

      
       
        <View style={styles.headerText}>
        <Text style={styles.textheader}>Välkommen!</Text>
        </View>
       
       <View style={styles.buttons}>
       
       <FlatButton onPress={()=> navigation.navigate('Floors')} text='Besökskarta' ></FlatButton>
       <FlatButton onPress={()=> navigation.navigate('Floors')} text='Utställningar' ></FlatButton>
       <FlatButton onPress={()=> navigation.navigate('Floors')} text='Evenemang' ></FlatButton>
       <FlatButton onPress={()=> navigation.navigate('Floors')} text='Besöksinfo' ></FlatButton>
       

         
         
       </View>
            
             
             
           
          
             
             <View style={styles.bottom}></View>
           </SafeAreaView>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#252525',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    headerText: {
  
      flex: 1,
    },
  
    header: {
  
      flex: 2.5,
      alignItems: 'center',
      justifyContent: 'center',
      height: 250,
      
  
    },
  
    textheader: {
  
      fontFamily: 'System',
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white'
    },
  
    buttons: {
  flex: 4,
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  
  width: 400,
  height: 200
  
  
    },
  
    
  
    bottom: {
      flex: 1
    }
  
  
  
  });

  export default HomeScreen

  