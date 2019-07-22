import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

export default class App extends Component {
  state = {
    placeName: "",
    places: [],
    selectedPlace: null
  };



  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({ key: Math.random(), name: placeName, image: { uri: "https://blog.hotelscombined.com/wp-content/uploads/2017/08/Battery-Spencer.jpg?x79158" } })
      }
    });
  };

  placeSelectedHandler = id => {

    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === id;
        })
      };
    });
  };

  placeDeleteHandler = () => {
      this.setState(prevState => {
        return {
          places: prevState.places.filter(place => {
            return place.key !== prevState.selectedPlace.key;
          }),
          selectedPlace: null
        }
      });
  }

  modalCloseHandler = () => {
    this.setState({
      selectedPlace: null
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail 
        selectedPlace={this.state.selectedPlace} 
        onItemDeleted={this.placeDeleteHandler} 
        onModalClosed={this.modalCloseHandler} />
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={(text) => { this.setState({ placeName: text }) }}
            value={this.state.placeName}
            placeholder="Nice Text Input"
            style={styles.input} />
          <Button title="Add"
            style={styles.button}
            onPress={() => this.placeAddedHandler(this.state.placeName)} />
        </View>
        <PlaceList places={this.state.places} onItemPressed={this.placeSelectedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "70%"
  },
  button: {
    width: "30%"
  }
});
