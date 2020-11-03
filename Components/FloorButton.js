import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image, SafeAreaView, Button} from 'react-native';

const FloorButton = ({text, onPress}) => {

    return(
  
   
    <TouchableOpacity  onPress={onPress}>
  
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
  
    </TouchableOpacity>
     )
  }

const styles = StyleSheet.create({

    button: {

        borderRadius: 4,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(52, 52, 52, 0.9)',
       
        
        width: 300
         
        
        },
      
        buttonText: {
          color: 'white',
          fontWeight: 'bold',
          fontSize: 24,
          textAlign: 'center'
        },
});
  

  export default FloorButton