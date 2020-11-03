
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button} from 'react-native';

import 'react-native-gesture-handler'


const Images = () =>(
    <Image source = {require('/Users/rikard/KoMa/assets/vaning.png')} style = {{ width: 350, height: 700, resizeMode: "contain", position: 'absolute'}}/>
    
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
        borderWidth: 5,
        
        
         
        
        },

        headerText: {
            flex: 1,
            borderWidth: 5,
            
        }

       
      

     
     
});
export default Floors