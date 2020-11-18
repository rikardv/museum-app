import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button,Platform, PanResponder,Dimensions,Modal,Alert,TouchableOpacity} from 'react-native';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import ImageMapper from 'react-native-image-mapper';
import ImageZoom from 'react-native-image-pan-zoom';

const imageSource = require('../assets/van1.png');
const MAPPING = [
  {
    id: '0',
    name: 'First Area Name',
    shape: 'rectangle',
    width: 50,
    height: 20,
    x1: 67,
    y1: 99,
    prefill: 'rgba(255, 255, 255, 0.5)',
    fill: 'rgba(255, 255, 255, 0.8)'
  },
 
]
 

const Map = ({navigation}) => {

	
  const [modalVisible, setModalVisible] = useState(false);
	
	
    return (

     
        
        <View backgroundColor={'#252525'} >

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

          <Text style={styles.modalText}>Hello World!</Text>
          <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: "#ffc230" }}
              onPressIn={() => {
                setModalVisible(!modalVisible);
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
        onPress={() => {
          setModalVisible(true);
        }}
        
        selectedAreaId="my_area_id"
       
      />



</ImageZoom>



<Image source = {require('../assets/symbolbesk.png')} style = {{ width: Dimensions.get('window').width, height: (Dimensions.get('window').height)/11, resizeMode: 'stretch', position: 'absolute',bottom: (Dimensions.get('window').height)/11 }}/>



</View>


		
	)
	
	
}

const styles = StyleSheet.create({
  centeredView: {
    
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 30,
    padding: 50, 
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
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    
  
   
  },
  textStyle: {
    
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    width: 50,
    
  },
  modalText: {
  
    marginBottom: 15,
    textAlign: 'center',
   
  }
});

export default Map