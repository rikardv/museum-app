
import 'react-native-gesture-handler'
import React from 'react';
import {  StyleSheet, Text, View, Image, SafeAreaView, Button, StatusBar,TouchableOpacity} from 'react-native';

const ImagesExample = () =>(
    <Image source = {require('../assets/logotyp-arbetets-museum.png')} style = {{ width: 200, height: 200, resizeMode: "contain"}}/>
    
  )

const HomeScreen = ({navigation}) => {

    return(
        <SafeAreaView style={styles.container}>

<StatusBar
    barStyle = "light-content"
    // dark-content, light-content and default
    hidden = {false}
    //To hide statusBar
    backgroundColor = "#252525"
    //Background color of statusBar only works for Android
    translucent = {false}
    //allowing light, but not detailed shapes
    networkActivityIndicatorVisible = {true}
/>


  
        <View style={styles.header}>
          <ImagesExample></ImagesExample>
          
          
        </View>

        <View style={styles.headerText}>
        <Text style={styles.textheader}>Välkommen!</Text>
        </View>
       
       <View style={styles.buttons}>
       
       <TouchableOpacity onPress={()=> navigation.navigate('Floors')}>
  
              <View style={styles.button}>
              <Text style={styles.buttonText}>VÅNINGAR</Text>
              </View>

      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate('Utställningar')}>
  
              <View style={styles.button}>
              <Text style={styles.buttonText}>UTSTÄLLNINGAR</Text>
              </View>

      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate('Evenemang')}>
  
              <View style={styles.button}>
              <Text style={styles.buttonText}>EVENEMANG</Text>
              </View>

      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate('Besöksinfo')}>
  
  <View style={styles.button}>
  <Text style={styles.buttonText}>BESÖKSINFO</Text>
  </View>

</TouchableOpacity>


      
      
       

         
         
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
  
 
  
  width: '70%',
 
  
  
    },
  
    
  
    bottom: {
      flex: 1
    },

    button: {

      borderRadius: 10,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#ffc230',
        width: '100%',
        shadowOffset: {width: -1, height: 1},
        shadowColor: 'rgba(255,255,255,1)',
        shadowRadius: 10,
        

       
    },

    buttonText: {

textAlign: 'center',
color: 'white',
fontSize: 17,
fontWeight: 'bold',
textShadowOffset: {width: -1, height: 2},
textShadowColor: 'rgba(0,0,0,1)',
textShadowRadius: 10,


    }
  
  
  
  });

  export default HomeScreen

  