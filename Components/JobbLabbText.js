import React from 'react';
import { Text,StyleSheet} from 'react-native';


const JobbLabbText = () => {
    return (
        
        <Text style={styles.baseText}> 
        Välkommen till Jobblabb – ett färgsprakande upptäckarlabb med fokus på arbetslivet.
        <Text style={styles.innerText}>{'\n'} {'\n'}I Jobblabbs entré stämplar du in till spännande utmaningar. Labbet är format som en stad och på olika platser får du uppdrag och utmanas att använda olika superkrafter för att lösa uppgifterna. Genom att prova olika aktiviteter i utställningen får du syn på dina egna förmågor och var du kan ha nytta av dem.

I utställningen träffar du riktiga Jobbhjältar som också har olika intressen och superhjälteförmågor. Finns det någon som liknar dig? Var kan dina superkrafter användas ute i arbetslivet?

Utställningen är reserverad för skolklasser tisdag–torsdag, övriga dagar är den öppen för alla.</Text>
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
export default JobbLabbText