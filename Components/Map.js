import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button,Platform, PanResponder,Dimensions,Modal} from 'react-native';
import { ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import ImageMapper from 'react-native-image-mapper';
import ImageZoom from 'react-native-image-pan-zoom';

const imageSource = require('/Users/rikard/KoMa/assets/van1.png');
const MAPPING = [
  {
    id: '0',
    name: 'First Area Name',
    shape: 'circle',
    radius: 15,
    width: 30,
    height: 40,
    x1: 187,
    y1: 157,
    prefill: '#ffc230',
    fill: 'blue'
  },
  {
    id: '1',
    name: 'Second Area Name',
    shape: 'rectangle',
    x2: 300,
    y2: 100,
    x1: 100,
    y1: 300
  },
]
 

const Map = ({navigation}) => {

	
  const [modalVisible, setModalVisible] = useState(false);
	
	
    return (

     
        
        <View backgroundColor={'#252525'} >


<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={1988/4}
                       imageHeight={1141/4}>
<ImageMapper
        
		
        imgWidth={1988/4}
        imgHeight={1141/4}
        imgSource={imageSource}
        imgMap={MAPPING}
        onPress={() => {
          setModalVisible(true);
        }}
        
        selectedAreaId="my_area_id"
       
      />



</ImageZoom>



<Image source = {require('/Users/rikard/KoMa/assets/symbolbesk.png')} style = {{ width: Dimensions.get('window').width, height: (Dimensions.get('window').height)/11, resizeMode: 'stretch', position: 'absolute',bottom: (Dimensions.get('window').height)/11 }}/>


<Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >

      <View onPress={() => {
          setModalVisible(!modalVisible);
        }} backgroundColor={'#ffc230'} height={100} width={200}  ></View>
</Modal>
</View>


		
	)
	
	
}



export default Map