import React from 'react';
import { Text,StyleSheet} from 'react-native';


const KVtext = () => {
    return (
        
        <Text style={styles.baseText}> 
        KREATIVA VERKSTAN
        <Text style={styles.innerText}>{'\n'} {'\n'}Kreativa verkstan är platsen där barn och vuxna skapar tillsammans av återvunnet material. Vi skapar kring olika teman som byts med jämna mellanrum.

Barn behöver ha sällskap med en vuxen, inga barn får lämnas ensamma i verkstan. Skaparmaterial finns på plats och är kostnadsfritt. Fri entré.

Välkomna hit och släpp loss fantasin!</Text>
      </Text>
       
    )
}

const styles = StyleSheet.create({
    baseText: {
      fontWeight: 'bold',
      fontSize: 20,
    },
    innerText: {
        fontWeight: '100',
      color: 'black',
      fontSize: 18
    }
  });
export default KVtext