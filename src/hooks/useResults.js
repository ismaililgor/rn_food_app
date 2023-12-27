import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {

    const [results, setResults] = useState([]);

    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {

        
        try {
                const response = await yelp.get(
                '/search',
                {
                    params: {
                        limit: 50,
                        // term: term
                        term: searchTerm,
                        location: 'san jose'
                    }
                }
            );

            setResults(response.data.businesses);
        } catch (e) {
            // console.log(e);
            setErrorMessage('Something went wrong!')
        }
    };

    // searchApi('pasta'); // Dont do this!

    useEffect(
        () => {
            searchApi('pasta');
        },
        []
    );

    return [results, errorMessage, searchApi]

};