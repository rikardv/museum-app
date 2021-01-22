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

const imageSource = require('../assets/kartor/Vaning5.png');
const FirstText = () => {
  return (
    <Text style={styles.baseText}>
      HEJ ROBOT!
      <Text style={styles.innerText}>
        {'\n'} {'\n'}Sociala robotar verkar vara här för att stanna – i hemmet,
        i staden och på arbetsplatserna. Men robotarna blir vad vi gör dem till.
        Vilken roll vill vi att sociala robotar ska spela i framtidens samhälle?
        Hej robot! handlar om den teknik som är tänkt att kommunicera med oss i
        våra vardagliga miljöer. Med utställningen vill vi förklara sammanhangen
        kring sociala robotar och väcka funderingar kring deras roll i
        samhället. I utställningen möter du bland annat den sociala roboten
        Furhat (bilden) som är utvecklad i Sv...
      </Text>
    </Text>
  );
};

const SecondText = () => {
  return (
    <Text style={styles.baseText}>
      KRIS & VISION – VÅGA ÄLSKA NORRKÖPING
      <Text style={styles.innerText}>
        {'\n'} {'\n'}Kris & vision – Våga älska Norrköping! är en utställning om
        hur Norrköping blev den stad den är idag. Norrköpings stad har genom
        historien upplevt både stora framgångar och svåra motgångar. Dessa upp-
        och nedgångar har präglat Norrköping och dess befolkning. Ur kriserna
        har man format nya visioner, men visionära projekt har också förvandlats
        till kriser. För att förstå vad staden är idag behöver man förstå dess
        historia. Vad kan vi lära oss av de kriser och visioner som varit och
        hur kommer de att se ut ...
      </Text>
    </Text>
  );
};

const ThirdText = () => {
  return (
    <Text style={styles.baseText}>
      FRAMTID
      <Text style={styles.innerText}>
        {'\n'} {'\n'}Kris & vision – Våga älska Norrköping! är en utställning om
        hur Norrköping blev den stad den är idag. Norrköpings stad har genom
        historien upplevt både stora framgångar och svåra motgångar. Dessa upp-
        och nedgångar har präglat Norrköping och dess befolkning. Ur kriserna
        har man format nya visioner, men visionära projekt har också förvandlats
        till kriser. För att förstå vad staden är idag behöver man förstå dess
        historia. Vad kan vi lära oss av de kriser och visioner som varit och
        hur kommer de att se ut ...
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

    x1: 90,
    y1: 50,
    prefill: 'rgba(255, 255, 255, 0.3)',
    fill: 'rgba(255, 255, 255, 0.4)',
  },

  {
    id: '1',
    name: 'Second Area Name',
    shape: 'rectangle',
    width: 60,
    height: 30,
    x1: 85,
    y1: 110,
    prefill: 'rgba(255, 255, 255, 0.4)',
    fill: 'rgba(255, 255, 255, 0.4)',
  },

  {
    id: '2',
    name: 'Third Area Name',
    shape: 'rectangle',
    width: 80,
    height: 30,
    x1: 170,
    y1: 105,
    prefill: 'rgba(255, 255, 255, 0.4)',
    fill: 'rgba(255, 255, 255, 0.4)',
  },
];

const MapFifth = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [modalVisibleS, setModalVisibleS] = useState(false);

  const [modalVisibleT, setModalVisibleT] = useState(false);

  const mapperAreaClickHandler = async (item) => {
    if (item.id == 0) {
      setModalVisible(true);
    }

    if (item.id == 1) {
      setModalVisibleS(true);
    }

    if (item.id == 2) {
      setModalVisibleT(true);
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
                  navigation.navigate('ExhibitInfo', {exhibitID: 2}),
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
                <ThirdText></ThirdText>
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
                  navigation.navigate('ExhibitInfo', {exhibitID: 11}),
                    setModalVisibleS(!modalVisibleS);
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
        visible={modalVisibleT}
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
                  setModalVisibleT(!modalVisibleT);
                }}>
                <Text style={styles.textStyle}>Dölj</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{...styles.openButton, backgroundColor: '#ffc230'}}
                onPressIn={() => {
                  navigation.navigate('ExhibitInfo', {exhibitID: 10}),
                    setModalVisibleT(!modalVisibleT);
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
        imageWidth={1691 / 6}
        imageHeight={1022 / 6}>
        <ImageMapper
          imgWidth={1691 / 6}
          imgHeight={1022 / 6}
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

export default MapFifth;
