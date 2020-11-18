import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, ScrollView, ImageBackground} from 'react-native';


const Events = () => {
    return (
     <View>
       
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
   marginBottom: 10,
   marginTop: 7,
    flexDirection: 'column',
    position: 'relative',
    textAlign: 'center',
    flex: 1,
   

  },

  bildtext: {

fontSize: 25,
position: 'absolute',
bottom: 2,
width: '100%',
opacity: 1,
fontWeight: 'bold',
fontFamily: 'sans-serif',
left: 5,

},

textruta: {
  flex: 1,
position: 'absolute',
backgroundColor: '#ffc230',
opacity: 0.7,
width: '100%',
bottom: 0,
height: 40,


},

});


export default Events


