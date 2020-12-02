import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';

const EWK = () => (
  <Image
    source={{
      uri:
        'https://www.arbetetsmuseum.se/wp-content/uploads/2020/10/EWK_0875_1200x771px-760x760.jpg',
    }}
    style={{width: '100%', height: 300, borderRadius: 10, resizeMode: 'cover'}}
  />
);
const Vardag = () => (
  <Image
    source={{
      uri:
        'https://www.arbetetsmuseum.se/wp-content/uploads/2020/09/bibliotek_coronaviruset_munskydd_jeppe8213_1200x771-760x760.jpg',
    }}
    style={{width: '100%', height: 300, borderRadius: 10, resizeMode: 'cover'}}
  />
);
const Penna = () => (
  <Image
    source={{
      uri:
        'https://www.arbetetsmuseum.se/wp-content/uploads/2020/04/illustration-Karin-Sunvisson-1200x771px-760x760.jpg',
    }}
    style={{width: '100%', height: 300, borderRadius: 10, resizeMode: 'cover'}}
  />
);
const Fotosalong = () => (
  <Image
    source={{
      uri:
        'https://www.arbetetsmuseum.se/wp-content/uploads/2020/02/DFS-mosaik-2020_1200x771-760x760.jpg',
    }}
    style={{width: '100%', height: 300, borderRadius: 10, resizeMode: 'cover'}}
  />
);
const LillaArbetet = () => (
  <Image
    source={{
      uri:
        'https://www.arbetetsmuseum.se/wp-content/uploads/2019/09/webbsidbild_1200x771px-760x760.jpg',
    }}
    style={{width: '100%', height: 300, borderRadius: 10, resizeMode: 'cover'}}
  />
);
const JL = () => (
  <Image
    source={{
      uri:
        'https://www.arbetetsmuseum.se/wp-content/uploads/2019/09/jobblabb-insta-1080x1080px-1-760x760.jpg',
    }}
    style={{width: '100%', height: 300, borderRadius: 10, resizeMode: 'cover'}}
  />
);

const Robot = () => (
  <Image
    source={{
      uri:
        'https://www.arbetetsmuseum.se/wp-content/uploads/2019/06/AM_HejRobot_webbsida_1200x771px-760x760.jpg',
    }}
    style={{width: '100%', height: 300, borderRadius: 10, resizeMode: 'cover'}}
  />
);

const Shelter = () => (
  <Image
    source={{
      uri:
        'https://www.arbetetsmuseum.se/wp-content/uploads/2016/11/bettershelter_banner-760x760.jpg',
    }}
    style={{width: '100%', height: 300, borderRadius: 10, resizeMode: 'cover'}}
  />
);
const Energi = () => (
  <Image
    source={{
      uri:
        'https://www.arbetetsmuseum.se/wp-content/uploads/2016/06/fangaenergin_1200x771-760x760.jpg',
    }}
    style={{width: '100%', height: 300, borderRadius: 10, resizeMode: 'cover'}}
  />
);
const EWKMuseet = () => (
  <Image
    source={{
      uri:
        'https://www.arbetetsmuseum.se/wp-content/uploads/2014/12/ewk-banner-760x760.jpg',
    }}
    style={{width: '100%', height: 300, borderRadius: 10, resizeMode: 'cover'}}
  />
);
const Alva = () => (
  <Image
    source={{
      uri:
        'https://www.arbetetsmuseum.se/wp-content/uploads/2014/12/Alva_1200x771-760x760.jpg',
    }}
    style={{width: '100%', height: 300, borderRadius: 10, resizeMode: 'cover'}}
  />
);
const Kris = () => (
  <Image
    source={{
      uri:
        'https://www.arbetetsmuseum.se/wp-content/uploads/2020/04/Kris-och-vision_1200x771px_Foto-peter_holgersson-1-760x760.jpg',
    }}
    style={{width: '100%', height: 300, borderRadius: 10, resizeMode: 'cover'}}
  />
);
const Framtidsland = () => (
  <Image
    source={{
      uri:
        'https://www.arbetetsmuseum.se/wp-content/uploads/2014/12/Framtidsland-1200x771px-Foto-Peter-Holgersson-1-760x760.jpg',
    }}
    style={{width: '100%', height: 300, borderRadius: 10, resizeMode: 'cover'}}
  />
);

const JobbLabb = ({navigation}) => {
  return (
    <View style={styles.bgc}>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('VadskulleEwk')}>
          <View style={styles.container}>
            <EWK />
            <View style={[styles.Text]} />
            <Text style={styles.vit}>VAD SKULLE EWK SAGT?</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('EnOvanligDag')}>
          <View style={styles.container}>
            <Vardag />
            <View style={[styles.Text]} />
            <Text style={styles.vit}>EN OVANLIG VARDAG</Text>
          </View>
        </TouchableOpacity>

       {/*} <TouchableOpacity onPress={() => navigation.navigate('Floors')}>
          <View style={styles.container}>
            <Penna />
            <View style={[styles.Text]} />
            <Text style={styles.vit}>MED PENNAN GENOM GLASTAKET</Text>
          </View>
  </TouchableOpacity>{*/}

        <TouchableOpacity onPress={() => navigation.navigate('Fotosalong2020')}>
          <View style={styles.container}>
            <Fotosalong />
            <View style={[styles.Text]} />
            <Text style={styles.vit}>FOTOSALONG 2020: KAOS</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('LillaArbetet')}>
          <View style={styles.container}>
            <LillaArbetet />
            <View style={[styles.Text]} />
            <Text style={styles.vit}>LILLA ARBETET</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('JobbLabbFaktiskt')}>
          <View style={styles.container}>
            <JL />
            <View style={[styles.Text]} />
            <Text style={styles.vit}>JOBBLABB</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('HejRobot')}>
          <View style={styles.container}>
            <Robot />
            <View style={[styles.Text]} />
            <Text style={styles.vit}>HEJ ROBOT</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('BetterShelter')}>
          <View style={styles.container}>
            <Shelter />
            <View style={[styles.Text]} />
            <Text style={styles.vit}>BETTER SHELTER</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('FangaEnergin')}>
          <View style={styles.container}>
            <Energi />
            <View style={[styles.Text]} />
            <Text style={styles.vit}>FÅNGA ENERGIN!</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Floors')}>
          <View style={styles.container}>
            <EWKMuseet />
            <View style={[styles.Text]} />
            <Text style={styles.vit}>EWK-MUSEET</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('HistorienOmAlva')}>
          <View style={styles.container}>
            <Alva />
            <View style={[styles.Text]} />
            <Text style={styles.vit}>HISTORIEN OM ALVA</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('KrisOchVision')}>
          <View style={styles.container}>
            <Kris />
            <View style={[styles.Text]} />
            <Text style={styles.vit}>KRIS & VISION</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Framtidsland')}>
          <View style={styles.container}>
            <Framtidsland />
            <View style={[styles.Text]} />
            <Text style={styles.vit}>FRAMTIDSLAND</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 7,
    flexDirection: 'column',
    position: 'relative',
    textAlign: 'center',
    flex: 1,
  },
  bgc: {
    backgroundColor: '#252525',
  },

  vit: {
    fontSize: 20,
    position: 'absolute',
    bottom: 23,
    width: '100%',
    opacity: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },

  Text: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'black',
    opacity: 0.8,
    width: '100%',
    bottom: 0,
    height: 80,
    borderRadius: 7,
  },
});

export default JobbLabb;
