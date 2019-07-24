import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { addPlace, deletePlace, selectPlace, deselectPlace, changeName } from './src/store/actions/index'

import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

class App extends Component {

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  placeSelectedHandler = id => {
    this.props.onSelectPlace(id);
  };

  placeDeleteHandler = () => {
    this.props.onDeletePlace();
  }

  modalCloseHandler = () => {
    this.props.onDeSelectPlace();
  }

  nameChangeHandler = (text) => {
    this.props.onChangeName(text);
  } 


  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail 
        selectedPlace={this.props.selectedPlace} 
        onItemDeleted={this.placeDeleteHandler} 
        onModalClosed={this.modalCloseHandler} />
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={this.nameChangeHandler}
            value={this.props.placeName}
            placeholder="Nice Text Input"
            style={styles.input} />
          <Button title="Add"
            style={styles.button}
            onPress={() => this.placeAddedHandler(this.props.placeName)} />
        </View>
        <PlaceList places={this.props.places} onItemPressed={this.placeSelectedHandler} />
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

const mapStateToProps = state => {
  return { 
    placeName: state.places.placeName,
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {  
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (id) => dispatch(selectPlace(id)),
    onDeSelectPlace: () => dispatch(deselectPlace()), 
    onChangeName: (text) => dispatch(changeName(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
