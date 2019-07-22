import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

const placeDetail = props => {

    let modalContent = null;

    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image source={props.selectedPlace.image} style={styles.placeImage} />
                <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
            </View>
        );
    }

    return (
        <Modal 
        onRequestClose={props.onModalClosed} 
        visible={props.selectedPlace !== null} 
        animationType="slide">
            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    <View style={styles.deleteButton}>
                    <Button 
                    title="Delete" 
                    color="red" 
                    onPress={props.onItemDeleted} />
                    </View>
                    <Button title="Close" onPress={props.onModalClosed}/>
                </View>
            </View>
        </Modal>
    ); 
}

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    placeImage: {
        width: "100%",
        height: 200,
    },
    placeName: {
        fontWeight: "bold",
        fontSize: 28,
        textAlign: "center"
    },
    deleteButton: {
        marginBottom: 20,
        marginTop: 20
    }
});

export default placeDetail;