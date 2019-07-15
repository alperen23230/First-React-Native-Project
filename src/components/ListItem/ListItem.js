import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const listItem = (props) => (
   <TouchableOpacity onPress={props.itemPressed}>
        <View style={styles.listItem}>
            <Image resizeMode="cover" source={props.placeImage} style={styles.placeImage}/>
            <Text style={styles.text}>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10, 
        backgroundColor: "#eee",
        margin: 5, 
        flexDirection: "row",
        alignItems: "center"
    },
    text:{
        textAlign: "center"
    },
    placeImage:{
        marginRight: 8,
        width: 50,
        height: 50,
        borderRadius: 25
    }
});


export default listItem;