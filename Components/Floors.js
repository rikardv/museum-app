
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button} from 'react-native';
import Flatbutton from './FlatButton.js'
import FloorButton from './FloorButton.js'

import 'react-native-gesture-handler'


const Images = () =>(
    <Image source = {require('/Users/rikard/KoMa/assets/Resurs8.png')} style = {{ width: 350, height: 800, resizeMode: "contain", position: 'absolute'}}/>
    
  )

const Floors = () => {

    return(

       
           
            <View style={styles.floors}>
                
                <View style={styles.back}>
                <Image  source = {require('/Users/rikard/KoMa/assets/Resurs8.png')} style = {{ width: 350, height: 800, resizeMode: "contain", position: 'absolute'}}>
                    
                    </Image>
    
                </View>
              
              <View style={styles.buttons}>
              <Image onPress={()=> navigation.navigate('Events')} source = {require('/Users/rikard/KoMa/assets/Resurs1.png')} style = {{ width: 350, height: 800, resizeMode: "contain", position: 'absolute'}}/>

              </View>


           
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

        

        

      
    

        buttons: {

            borderWidth: 5,
            flex: 0.1,
        
            
           
            
            

        },

        back: {

            flex: 1,
            
        }

       
      

     
     
});
export default Floors