import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Modal,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ImageMapper from 'react-native-image-mapper';
import ImageZoom from 'react-native-image-pan-zoom';

const imageSource = require('../assets/kartor/Vaning3.png');
const FirstText = () => {
  return (
    <Text style={styles.baseText}>
      VAD SKULLE EWK SAGT?
      <Text style={styles.innerText}>
        {'\n'} {'\n'}Den 23 september 2019 höll Greta Tunberg ett tal inför alla
        världens ledare under FN:s klimattoppmöte i New York. Greta, som sedan
        hösten 2018 valt att skolka från skolan och sätta sig utanför Sveriges
        riksdag, med sin handskrivna skylt om skolstrejk för klimatet. I dag
        upprepar Sir David Attenborough samma sak, med en 93-årings patos, i ...
      </Text>
    </Text>
  );
};

const SecondText = () => {
  return (
    <Text style={styles.baseText}>
      Rubrik
      <Text style={styles.innerText}>
        {'\n'} {'\n'}Text
      </Text>
    </Text>
  );
};
const MAPPING = [
  {
    id: '0',
    name: 'First Area Name',
    shape: 'rectangle',
    width: 80,
    height: 30,
    x1: 70,
    y1: 105,
    prefill: 'rgba(255, 255, 255, 0.4)',
    fill: 'rgba(255, 255, 255, 0.8)',
  },

  {
    id: '1',
    name: 'Second Area Name',
    shape: 'rectangle',
    width: 80,
    height: 30,
    x1: 160,
    y1: 190,
    prefill: 'rgba(255, 255, 255, 0.4)',
    fill: 'rgba(255, 255, 255, 0.8)',
  },
];

const MapThird = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [modalVisibleS, setModalVisibleS] = useState(false);

  const mapperAreaClickHandler = async (item) => {
    if (item.id == 0) {
      setModalVisible(true);
    }

    if (item.id == 1) {
      setModalVisibleS(true);
    }
  };

  return (
    <View backgroundColor={'#252525'}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Rutan stängdes.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView>
              <Text style={styles.modalText}>
                <FirstText></FirstText>
              </Text>
            </ScrollView>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{...styles.openButton, backgroundColor: '#252525'}}
                onPressIn={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Dölj</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{...styles.openButton, backgroundColor: '#ffc230'}}
                onPressIn={() => {
                  navigation.navigate('VadskulleEwk'),
                    setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Läs mer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisibleS}
        onRequestClose={() => {
          Alert.alert('Rutan stängdes.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView>
              <Text style={styles.modalText}>
                <SecondText></SecondText>
              </Text>
            </ScrollView>
            <TouchableOpacity
              style={{...styles.openButton, backgroundColor: '#252525'}}
              onPressIn={() => {
                setModalVisibleS(!modalVisibleS);
              }}>
              <Text style={styles.textStyle}>Dölj</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <ImageZoom
        cropWidth={Dimensions.get('window').width}
        cropHeight={Dimensions.get('window').height}
        imageWidth={1691 / 4}
        imageHeight={1022 / 4}>
        <ImageMapper
          imgWidth={1691 / 4}
          imgHeight={1022 / 4}
          imgSource={imageSource}
          imgMap={MAPPING}
          onPress={(item) => mapperAreaClickHandler(item)}
        />
      </ImageZoom>

      <Image
        source={require('../assets/symbolbesk.png')}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height / 11,
          resizeMode: 'stretch',
          position: 'absolute',
          bottom: Dimensions.get('window').height / 11,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    flex: 0.75,
    margin: 30,
    backgroundColor: 'white',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  openButton: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 20,
    padding: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    flex: 10,

    textAlign: 'left',
    justifyContent: 'center',
    margin: 5,
  },

  baseText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  innerText: {
    fontWeight: '100',
    color: 'black',
    fontSize: 18,
  },
});

export default MapThird;
