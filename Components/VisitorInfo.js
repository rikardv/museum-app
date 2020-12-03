import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const InfoImage = () => (
  <Image
    source={require('../assets/logotyp-arbetets-museum.png')}
    style={{width: 150, height: 150, resizeMode: 'contain'}}
  />
);

const IkonT = () => (
  <Image
    source={require('../assets/ikonTram.png')}
    style={{width: 75, height: 75, resizeMode: 'contain'}}
  />
);

const IkonB = () => (
  <Image
    source={require('../assets/ikonBus.png')}
    style={{width: 75, height: 75, resizeMode: 'contain'}}
  />
);

const IkonW = () => (
  <Image
    source={require('../assets/ikonWalk.png')}
    style={{width: 75, height: 75, resizeMode: 'contain'}}
  />
);

const VisitorInfo = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            borderColor: '#252525',
            alignItems: 'center',
          }}>
          <InfoImage></InfoImage>
          <View>
            <Text style={styles.textheader}>HITTA HIT</Text>

            <View style={styles.row}>
              <IkonW></IkonW>
              <Text style={styles.rubrik1}>Till fots (Från Resecentrum)</Text>
            </View>

            <Text style={styles.baseText}>
              Gå Drottninggatan i riktning mot centrum. Innan du passerar
              Saltängsbron över Motala Ström tar du höger vid Bråddgatan. Gå
              några hundra meter. Sväng sedan vänster in på Tunnbindaregatan och
              gå cirka 400 meter tills den tar slut. Korsa Västgötegatan och gå
              in på Holmengränd. Gå över den lilla gångbron som leder direkt
              till Arbetets museum
            </Text>

            <View style={styles.row}>
              <IkonB></IkonB>
              <Text style={styles.rubrik1}> Buss (Från Resecentrum)</Text>
            </View>

            <Text style={styles.baseText}>
              Skvallertorget är närmaste busshållplats. Därifrån, följ
              Västgötegatan österut och ta höger in på Holmbrogränd. Följ vägen
              rakt fram. Du ser Arbetets museum på höger sida. För aktuella
              tidtabeller och busslinjer, se Östgötatrafikens hemsida eller
              mobilapp.
            </Text>

            <View style={styles.row}>
              <IkonT></IkonT>
              <Text style={styles.rubrik1}>Spårvagn (Från Resecentrum)</Text>
            </View>

            <Text style={styles.baseText}>
              <Text style={{paddingTop: 100}}>
                Ta linje 3 mot Klockaretorpet och gå av vid Väster tull. Ta
                höger direkt när du går av och följ Nygatan ca 100 meter. Sväng
                vänster när du kommer till Källvindsgatan, och följ vägen rakt
                fram tills du kommer till Arbetets museum. För aktuella
                tidtabeller, se Östgötatrafikens hemsida eller mobilapp.
              </Text>
            </Text>

            <Text style={styles.textheader}>
              {'\n'}PARKERING {'\n'}
            </Text>
            <Text style={styles.bullet}>
              {'\u2B24'}{' '}
              <Text style={{color: 'white'}}>
                Parkeringsplats (Kvarngatan/Holmengatan – GPS: 58.587697,
                16.183458)
              </Text>
            </Text>
            <Text style={styles.bullet}>
              {'\u2B24'}{' '}
              <Text style={{color: 'white'}}>
                Parkeringshuset Vårdtornet (infart från Garvaregatan – GPS:
                58.589849, 16.182635)
              </Text>
            </Text>
            <Text style={styles.bullet}>
              {'\u2B24'}{' '}
              <Text style={{color: 'white'}}>
                Parkeringshuset Spiran (Gamla Rådstugugatan/ Sankt Persgatan,
                intill Filmstaden – GPS: 58.586268, 16.188689)
              </Text>
            </Text>
            <Text style={styles.bullet}>
              {'\u2B24'}{' '}
              <Text style={{color: 'white'}}>
                Parkeringshuset Spetsen (Kungsgatan/Bredgatan – GPS: 58.590380,
                16.178460)
              </Text>
            </Text>
            <Text style={styles.bullet}>
              {'\u2B24'}{' '}
              <Text style={{color: 'white'}}>
                Parkering finns även längs gatorna i området (ex på Sankt
                Persgatan – GPS: 58.587097, 16.178775)
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#252525',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  parking: {
    fontSize: 18,
    color: 'white',
  },

  textheader: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffc230',
    backgroundColor: '#252525',
    textAlign: 'center',
  },

  rubrik1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: '5%',
  },

  rubrik2: {
    fontSize: 18,
    color: 'white',
    paddingTop: 5,
  },

  baseText: {
    fontSize: 16,

    color: 'white',
    margin: '6%',
  },

  bullet: {
    color: '#ffc230',
    fontSize: 17,
    margin: '7%',
  },

  row: {
    flexDirection: 'row',
    margin: '5%',
  },
});

export default VisitorInfo;
