import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from './components/SearchBar';
import useResults from './hooks/useResults';
import ResultsList from './components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    
    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price; 
        })


    }


    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm} //  pass a reference to the function that should be invoked
                onTermSubmit={searchApi} // pass a reference to the function that should be invoked 
            />
            
            {errorMessage ? <Text>{errorMessage}</Text> : null} 
            <Text style={styles.resultCount}>We have found {results.length} results</Text>
            <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" /> 
            <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier"/>
            <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender"/>

        </View>
    );
};

const styles = StyleSheet.create({
    resultCount: {
        alignSelf: 'center'
    },
});

export default SearchScreen; 







/* Ternary Operator Reminder: 
conditionally render the text element if the user receives an error message
if the errorMessage value is true print out the Text otherwise return null or nothing

{errorMessage ? <Text>{errorMessage}</Text> : null}
*/