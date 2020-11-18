import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image, SafeAreaView, Button} from 'react-native';

const FlatButton = ({text, onPress}) => {

    return(
  
   
    <TouchableOpacity onPress={onPress}>
  
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
  
    </TouchableOpacity>
     )
  }

const styles = StyleSheet.create({

    button: {


      
        borderRadius: 10,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#ffc230',
        width: 350,
        height: 70


      
         
        
        },
      
        buttonText: {
          color: 'white',
          fontSize: 17,
          fontWeight: 'bold',
          textShadowOffset: {width: -1, height: 1},
          textShadowColor: 'rgba(0,0,0,0.75)',
          textShadowRadius: 4,
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center'
        
        },

       
});
  

  export default FlatButton