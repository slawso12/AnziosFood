import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from './components/SearchBar';
import yelp from './api/yelp';


const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    // Helper method for accessing the yelp Api (network request)
    const searchApi = async searchTerm => {
        try { // error handling for failed request
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'phoenix',
                }
            });
            setResults(response.data.businesses); // updates the list of results
        } catch (err) { // error handling for failed request
            setErrorMessage('Something went wrong!');
        }
    };

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm} //  pass a reference to the function that should be invoked
                onTermSubmit={searchApi} // pass a reference to the function that should be invoked 
            />
            <Text>Search Screen</Text>
            {errorMessage ? <Text>{errorMessage}</Text> : null} 
            <Text>We have found {results.length} results</Text> 
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen; 

/* Ternary Operator Reminder: 
conditionally render the text element if the user receives an error message
if the errorMessage value is true print out the Text otherwise return null or nothing

{errorMessage ? <Text>{errorMessage}</Text> : null}
*/