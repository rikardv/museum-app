import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button,Platform, PanResponder,Dimensions,Modal,Alert,TouchableOpacity} from 'react-native';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import ImageMapper from 'react-native-image-mapper';
import ImageZoom from 'react-native-image-pan-zoom';
import JobbLabbText from './JobbLabbText';
import KVtext from './KVtext';

const imageSource = require('../assets/van1.png');
const MAPPING = [
  {
    id: '0',
    name: 'First Area Name',
    shape: 'rectangle',
    width: 80,
    height: 30,
    x1: 64,
    y1: 92,
    prefill: 'rgba(255, 255, 255, 0.4)',
    fill: 'rgba(255, 255, 255, 0.8)'
  },

  {
    id: '1',
    name: 'Second Area Name',
    shape: 'rectangle',
    width: 100,
    height: 30,
    x1: 165,
    y1: 205,
    prefill: 'rgba(255, 255, 255, 0.4)',
    fill: 'rgba(255, 255, 255, 0.8)'
  },

  
 
]
 


const Map = ({navigation}) => {

  
	
  const [modalVisible,  setModalVisible, ] = useState(false);

    const [modalVisibleS,  setModalVisibleS, ] = useState(false);


  const mapperAreaClickHandler = async(item) => {

    if(item.id == 0){
     
      setModalVisible(true);
      
    }

    if(item.id == 1){
     
      setModalVisibleS(true);
     
    }
  }
  

  
	
    return (

     
        
        <View backgroundColor={'#252525'}  >

<Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

<ScrollView>
      <Text style={styles.modalText}> <JobbLabbText></JobbLabbText></Text>
          </ScrollView>
          <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: "#252525" }}
              onPressIn={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Dölj</Text>
            </TouchableOpacity>
            
          
           
          </View>
        </View>
      </Modal>
   
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisibleS}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

<ScrollView>
      <Text style={styles.modalText}> <KVtext></KVtext> </Text>
          </ScrollView>
          <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: "#252525" }}
              onPressIn={() => {
                setModalVisibleS(!modalVisibleS);
              }}
            >
              <Text style={styles.textStyle}>Dölj</Text>
            </TouchableOpacity>
            
          
           
          </View>
        </View>
      </Modal>

<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={6569/16}
                       imageHeight={3761/16}
                       
                       
                      
                       
                       >
                         
<ImageMapper
        
		
        imgWidth={6569/16}
        imgHeight={3761/16}
        imgSource={imageSource}
        imgMap={MAPPING}
        onPress={
          (item) => 
            mapperAreaClickHandler(item)
        }
        
        
       
      />



</ImageZoom>



<Image source = {require('../assets/symbolbesk.png')} style = {{ width: Dimensions.get('window').width, height: (Dimensions.get('window').height)/11, resizeMode: 'stretch', position: 'absolute',bottom: (Dimensions.get('window').height)/11 }}/>



</View>


		
	)
	
	
}

const styles = StyleSheet.create({
  centeredView: {
    
    
    flex: 1,
    alignSelf: 'center',
    justifyContent: "center",
    alignItems: "center",
    
    
    
  },
  modalView: {
    flex: 0.75,
    margin: 30,
    backgroundColor: "white",
    borderRadius: 20,
  
   justifyContent: 'center',
   alignItems: 'center',
    padding: 20, 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2
  },
  openButton: {
    
    
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',

   
    borderRadius: 20,
    padding: 10,
    
    
    
  
   
  },
  textStyle: {
  
    
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  
    
    
    
  },
  modalText: {
  flex: 10,
    
    textAlign: 'left',
    justifyContent: 'center',
    margin: 5,
    
   
  }
});

export default Map