import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';



const LillaArbetes = ({navigation}) => {
    return (
    
    //Bild
    <View style={{backgroundColor: '#252525'}}>
        <ScrollView>
        <Image
    source={{
      uri:
        'https://www.arbetetsmuseum.se/wp-content/uploads/2019/09/webbsidbild_1200x771px-760x760.jpg',
    }}
    style={{width: '100%', height: 300, borderRadius: 10, resizeMode: 'cover'}}
  />
     
         <View style={styles.container}>
            
            <View style={[styles.Text]} />
            <Text style={styles.vit}>Lilla Arbetes</Text>
          </View>

          <Text style={styles.bold}>26 OKTOBER 2020–TILLS VIDARE PLAN 3</Text>
          <Text style={styles.bread}>
          Äntligen! Nu är Lilla Arbetets öppet igen, med ett par förändringar och en och annan nyhet {'\n'}{'\n'}

Det är många som vill besöka Lilla Arbetets, särskilt på helger. Jättekul tycker vi! För att det inte ska bli för trångt har vi infört ett system med nummerbrickor. Brickorna hämtar du i receptionen.{'\n'}{'\n'}

I Lilla Arbetets har vi satt en gräns på max en vuxen per barn, för att fler barn ska kunna ta del av utställningen. Nytt är också att förskolegrupper nu behöver boka in sig via vår hemsida senast dagen innan besöket.{'\n'}{'\n'}
       
Barn måste ha sällskap av en vuxen. Max 1 vuxen/barn i utställningen.{'\n'}{'\n'}

Tänk på att måna om varandra – håll avstånd.{'\n'}{'\n'}

Glöm inte att lämna tillbaka brickan när du lämnar utställningen så att andra besökare kan få komma in.{'\n'}{'\n'}

Det är först till kvarn som gäller, så det kan hända att alla brickor är upptagna när du kommer till oss. Vi kan tyvärr inte garantera dig en plats eller skriva upp dig på väntelista. Men oroa dig inte, det finns mycket annat att göra på museet för stora som små. Läs mer om våra aktiviteter för barn & familj{'\n'}{'\n'}

       
        </Text>
        <Text style={styles.bold}>BOKNING FÖR FÖRSKOLOR</Text>
        <Text style={styles.bread}>Nu är det obligatoriskt för förskolegrupper att boka in sig via vår hemsida. Detta är för att säkerställa att det inte blir för många i utställningen samtidigt.{'\n'}{'\n'}

Boka in er senast dagen innan besöket.{'\n'}{'\n'}

Det finns fyra entimmespass i veckan att välja på: tisdag 9-10 och 10-11 samt onsdag 9-10 och 10-11. Dessa tider är utställningen stängd för övriga besökare.{'\n'}{'\n'}

Anmäl er i receptionen vid ankomst. Välkomna!</Text>

        <Text style={styles.bold}>ÖPPETTIDER LILLA ARBETETS</Text>
        <Text style={styles.bread}>Mån 9-16.30{'\n'}{'\n'}

Tis 11-16.30{'\n'}{'\n'}

Ons 11-16.30{'\n'}{'\n'}

Tors 9-16.30{'\n'}{'\n'}

Fre 9-16.30{'\n'}{'\n'}

Lör 11-16.30{'\n'}{'\n'}

Sön 11-16.30{'\n'}{'\n'}</Text>

        <Text style={styles.bold}>OM LILLA ARBETETS</Text>
        <Text style={styles.bread}>Lilla Arbetets är ett helt våningsplan för barn och familj. Här kan barn och vuxna utforska en spännande miljö tillsammans. Och såklart leka jobb. Smyg in i magasinet och lyssna på ljud som försvunnit eller förändrats. Upptäck skogens skrymslen och vrår eller krypa långt in i den mörka gruvgången och hör berget prata. Ta tåget vidare till textilmaskinen som spottar ur sig kläder och göm er i en stor skjorta. Eller varför inte lasta båten full med varor och korsa världshaven. Skepp ohoj! Med på upptäcktsfärden finns UppfinnarJohanna.{'\n'}{'\n'}

Utställningen vill väcka nyfikenhet för Sveriges största näringar, arbetarhistoria samt alla de ca 1500 arbetslivsmuseer som finns runt om i Sverige. I Magasinet kommer årligen Årets Arbetslivsmuseum och Årets Arbetsmyra att presenteras. I en databas kan du även söka bland de ca 1500 Arbetslivsmuseerna runt om i Sverige. Kanske det finns något precis där du bor?{'\n'}{'\n'}</Text>

        <Text style={styles.bold}>FAKTA</Text>
        <Text style={styles.bread}>Var? Plan 1, längst ner i museet{'\n'}{'\n'}

För vem? För barn upp till ca 6 år tillsammans med vuxen{'\n'}{'\n'}

Vad kostar det? Gratis, precis som övriga museet, men du måste hämta ut nummerbricka i receptionen innan du besöker utställningen.{'\n'}{'\n'}

Övrigt: Hela utställningen är skofri och ingen mat eller dryck får förtäras i utställningen. Barnvagnar får inte medtagas i utställningen, men barnvagnsparkering finns precis intill.{'\n'}{'\n'}

Vid utställningen finns matsäcksrum och mikrovågsugnar, barnvagnsparkering, garderob, toaletter och skötbord, allt samlat på ett gemensamt våningsplan på museet. Handsprit finns i utställningen och på toaletterna direkt utanför.{'\n'}{'\n'}

Varmt välkomna!</Text>  
           
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

      bread: {
          fontSize: 18,
          color: 'white',
          marginLeft: '4%',
          marginRight: '4%',
          marginTop: '10%',

      },
    
      bold: {
        fontSize: 30,
        marginLeft: '5%',
        
        color: 'white',
        fontWeight: 'bold',
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
  
  export default LillaArbetes;