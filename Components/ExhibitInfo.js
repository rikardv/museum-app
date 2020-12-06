import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, ScrollView, ImageBackground } from 'react-native';
import ExhibitData from './ExhibitData.js'

const ExhibitInfo = ({ route }) => {

    function getExhibitById(id) {
        var exhibitMatch = ExhibitData.find(exhibit => exhibit.id == id);
        return exhibitMatch;
    }

    const { exhibitID } = route.params

    console.log(exhibitID)

    const exhibit = getExhibitById(exhibitID)

    return (
        <View style={styles.container}>
            <ScrollView>
                <ImageBackground source={exhibit.img} style={styles.img} />
                <Text style={styles.title}>{exhibit.title}</Text>
                <Text style={styles.textbox}>{exhibit.description}</Text>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        height: "100%",
        backgroundColor: '#252525',
        justifyContent: "flex-start",
    },

    title: {
        flex: 1,
        color: '#ffffff',
        fontSize: 24,
        textTransform: "uppercase",
        textAlign: "center",
        fontWeight: "bold",
        margin: "4%",
    },

    textbox: {
        borderColor: "#ffffff",
        borderWidth: 1,
        margin: "4%",
        padding: "4%",
        borderRadius: 7,
        color: '#ffffff',
        fontSize: 18,
        backgroundColor: '#252525',
    },

    img: {
        height: 300,
        resizeMode: "cover",
        justifyContent: "flex-start",
        overflow: "hidden",
        borderRadius: 7,
        width: "98%",
        margin: "1%",
    },
})


export default ExhibitInfo