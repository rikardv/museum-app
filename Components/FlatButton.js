import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image, SafeAreaView, Button} from 'react-native';

const FlatButton = ({text, onPress}) => {

    return(
  
   
    <TouchableOpacity title="press me" onPress={onPress}>
  
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
  
    </TouchableOpacity>
     )
  }

const styles = StyleSheet.create({

    button: {

        borderRadius: 5,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#ffc230',
        width: 300
         
        
        },
      
        buttonText: {
          color: 'black',
          fontWeight: 'bold',
          fontSize: 18,
          textAlign: 'center'
        },
});
  

  export default FlatButton