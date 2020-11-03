
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button} from 'react-native';
import Flatbutton from './FlatButton.js'
import FloorButton from './FloorButton.js'

import 'react-native-gesture-handler'


const Images = () =>(
    <Image source = {require('/Users/rikard/KoMa/assets/vaning.png')} style = {{ width: 380, height: 650, resizeMode: "stretch", position: 'absolute'}}/>
    
  )

const Floors = () => {

    return(

       
           
            <View style={styles.floors}>
            <Images></Images>
           
            </View>
            

         
           
           
           
          
           
      

    )

}

const styles = StyleSheet.create({

    floors: {

        flex: 1,
       flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#252525',
        
        
       
        
        
         
        
        },

        

        

        background: {
            
            backgroundColor:'#252525',

        },

        buttons: {

            borderWidth: 5,
            flex: 0.8,
        
            flexDirection: 'column',
            justifyContent: 'space-between',
            
            

        },

       
      

     
     
});
export default Floors