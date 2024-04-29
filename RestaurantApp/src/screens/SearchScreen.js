import React, { useState  } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
import LocationBar from '../components/LocationBar';
//The list of resturants will be shown on the search screen
//The React useState Hook allows us to track state in a function component.
//We will be using useState function to get the results
const SearchScreen = () => {
    const [term, setTerm] = useState('');
    //Yelp Api to gather data from resturants in the area
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        //prince === '$' || 
        return results.filter(result => {
            return result.price === price;
        });
    };

    return ( 
        //This will filture the restaurants by low, medium and high prices. 
    <View>
         <LocationBar 
        
        />
        <SearchBar 
        term={term} 
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
        />
       
      
       {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>We have found {results.length} results</Text>
        <ResultsList results ={filterResultsByPrice('$')}title= "Low Price Places" />
        <ResultsList results ={filterResultsByPrice('$$')} title="Bit Pricier" />
        <ResultsList results ={filterResultsByPrice('$$$')} title = "Expensive Options" />
    </View>
    );
};
const styles = StyleSheet.create({});

export default SearchScreen;