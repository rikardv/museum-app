
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground} from 'react-native';
import 'react-native-gesture-handler'
import { TouchableOpacity } from 'react-native-gesture-handler';




const Floors = ({navigation}) => {

    return(

       
           <View style={styles.container}>

             <View style={styles.dummy}></View>

<View style={styles.floors}>
<TouchableOpacity  style={styles.opa} onPress={() => navigation.navigate('Map')}>
    <ImageBackground style={styles.image} resizeMode={'stretch'} source= {require('../assets/vaning/Vaning7.7.png')}><Text style={styles.text}>Våning 7</Text></ImageBackground>
</TouchableOpacity >
</View>

<View style={styles.floors}>
<TouchableOpacity  style={styles.opa}>
    <ImageBackground style={styles.image} resizeMode={'stretch'} source= {require('../assets/vaning/Vaning6.6.png')}><Text style={styles.text}>Våning 6</Text></ImageBackground>
</TouchableOpacity >
</View>

<View style={styles.floors}>
<TouchableOpacity  style={styles.opa}>
    <ImageBackground style={styles.image} resizeMode={'stretch'} source= {require('../assets/vaning/Vaning5.5.png')}><Text style={styles.text}>Våning 5</Text></ImageBackground>
</TouchableOpacity >
</View>

<View style={styles.floors}>
<TouchableOpacity style={styles.opa} >
    <ImageBackground style={styles.image} resizeMode={'stretch'} source= {require('../assets/vaning/Vaning4.4.png')}><Text style={styles.text}>Våning 4</Text></ImageBackground>
</TouchableOpacity >
</View>

<View style={styles.floors}>
<TouchableOpacity  style={styles.opa}>
    <ImageBackground style={styles.image} resizeMode={'stretch'} source= {require('../assets/vaning/Vaning3.3.png')}><Text style={styles.text}>Våning 3</Text></ImageBackground>
</TouchableOpacity >
</View>

<View style={styles.floors}>
<TouchableOpacity  style={styles.opa}>
    <ImageBackground style={styles.image} resizeMode={'stretch'} source= {require('../assets/vaning/Vaning2.2.png')}><Text style={styles.text}>Våning 2</Text></ImageBackground>
</TouchableOpacity >
</View>

<View style={styles.floors}>
<TouchableOpacity style={styles.opa}  >

    <ImageBackground style={styles.image} resizeMode={'stretch'} source= {require('../assets/vaning/Vaning1.1.png')}>
        <Text style={styles.text}>Våning 1</Text>
    </ImageBackground>
</TouchableOpacity >
</View>


               


             
          
           
            </View>

            
         
           
           
           
          
           
      

    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
backgroundColor: '#252525',
flexDirection: 'column',
alignItems: 'center',
borderColor: 'green'


        
    },

    opa:{
        //Röd
        
        width:'100%',
        height:'100%',
      resizeMode: 'center',
        
        borderColor: 'red',
        alignItems: 'center',
    
        
    },

    floors: {
//Vita
      flex: 1,
      
      borderColor: 'white',
      width: '90%',
      height: '100%',
      borderWidth: 5,
      borderColor: '#252525'
      

    
      
      
      
      

        

    },

    image: {

        flex:1,
        width:'100%',
        height: '100%',
        
        resizeMode: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        
       

    

    },

    text: {
       
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
       
       
    },

    textHeader: {

        color: 'white',
        fontSize: 18,


    },

    dummy: {
        height: '2%'

    }
   

       

     

        

        

      
    

       

     

       
      

     
     
});


export default Floors