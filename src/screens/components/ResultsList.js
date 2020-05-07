import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
// import useResults from '../hooks/useResults';

const ResultsList = ({ title, results }) => {

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={(result) => result.id}

                renderItem={({ item }) => { // the object being iterated over
                    return <Text>{item.name}</Text>
                }}

            />
        </View>
    );
};


const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    }

});

export default ResultsList; 