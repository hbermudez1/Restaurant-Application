import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

//The React useState Hook allows us to track state in a function component.
//We will be using useState function to get the results
export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
       //The code below will filter the resturants based on location and limit the number of resukts     
       const response = await yelp.get('/search', {
        params: {
            limit: 50,
            term: searchTerm,
            location: 'San Jose'
        }
       });
       //Try and catch statement to catch error 
       setResults(response.data.businesses);
    } catch (err) {
        console.log(err);
        setErrorMessage('Something went wrong');
        }
    };

    //Call SearchApi when component is first rendered
    useEffect(() => {
        searchApi('pasta');
    }, []);
    return [searchApi, results, errorMessage];
};