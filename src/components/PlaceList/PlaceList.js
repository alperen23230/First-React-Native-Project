import React from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = props => {

    return (
        <FlatList
            data={props.places}
            style={styles.listContainer}
            renderItem={(info) => (
                <ListItem
                    itemPressed={() => props.onItemPressed(info.item.key)}
                    placeName={info.item.name}
                    placeImage={info.item.image} />
            )} />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    },
});

export default placeList;