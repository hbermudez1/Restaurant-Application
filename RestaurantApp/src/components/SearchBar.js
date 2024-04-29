import React from 'react';
import {SafeAreaView, View, TextInput, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit}) => {
    return ( 
    <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle} />
  
        <TextInput placeholder="search" 
    
        autoCapitalize="none"//This prevents app auto capitalizing user input
        autoCorrect={false} //This prevents app autocorrecting user input
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
        onEndEditing={onTermSubmit} //Text input
        
        />
   
    </View>
  
   
    );
};

//Style sheet for the search bar.
const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        //backgroundColor: 'white',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 5,
        flexDirection: 'row',
        

    },
    inputStyle: {
        flex: 1,
        fontSize: 18
        
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 1

    }
});

export default SearchBar;