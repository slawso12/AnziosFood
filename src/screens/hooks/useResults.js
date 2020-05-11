import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {

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

    // launches the initial search on page load
    useEffect(() => {
        searchApi('');
    }, []); // [] is the second argument 

    return [searchApi, results, errorMessage];
}