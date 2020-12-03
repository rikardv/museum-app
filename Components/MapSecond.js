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

const imageSource = require('../assets/kartor/Vaning2.png');
const FirstText = () => {
  return (
    <Text style={styles.baseText}>
      Välkommen till Jobblabb – ett färgsprakande upptäckarlabb med fokus på
      arbetslivet.
      <Text style={styles.innerText}>
        {'\n'} {'\n'}I Jobblabbs entré stämplar du in till spännande utmaningar.
        Labbet är format som en stad och på olika platser får du uppdrag och
        utmanas att använda olika superkrafter för att lösa uppgifterna. Genom
        att prova olika aktiviteter i utställningen får du syn p...
      </Text>
    </Text>
  );
};

const SecondText = () => {
  return (
    <Text style={styles.baseText}>
      HELGKUL I KREATIVA VERKSTADEN
      <Text style={styles.innerText}>
        {'\n'} {'\n'}
        Till Kreativa verkstaden är alla välkomna, stora som små som vill skapa
        tillsammans med oss. Vi har olika teman under året, ofta med anknytning
        till någon aktuell utställning. Museets pedagoger ﬁnns på plats för att
        hjälpa till och inspirera. Endast fantasin sätter gränser! Öppet
        lördagar och söndagar, kl 12-16. För alla åldrar. Gratis. Arrangeras i
        samarbete med Folkuniversitetet.
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
    x1: 64,
    y1: 92,
    prefill: 'rgba(255, 255, 255, 0.4)',
    fill: 'rgba(255, 255, 255, 0.8)',
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
    fill: 'rgba(255, 255, 255, 0.8)',
  },
];

const MapSecond = ({navigation}) => {
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
                  navigation.navigate('JobbLabbFaktiskt'),
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
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{...styles.openButton, backgroundColor: '#252525'}}
                onPressIn={() => {
                  setModalVisibleS(!modalVisibleS);
                }}>
                <Text style={styles.textStyle}>Dölj</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{...styles.openButton, backgroundColor: '#ffc230'}}
                onPressIn={() => {
                  navigation.navigate('JobbLabbFaktiskt'),
                    setModalVisibleS(!modalVisibleS);
                }}>
                <Text style={styles.textStyle}>Läs mer</Text>
              </TouchableOpacity>
            </View>
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

export default MapSecond;
