import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={(result) => result.id}

                renderItem={({ item }) => { // the object being iterated over
                    return <ResultsDetail result={item} />
                }}

            />
        </View>
    );
};


const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 15
    }, 
    container: {
        marginBottom: 10
    }

});

export default ResultsList; 