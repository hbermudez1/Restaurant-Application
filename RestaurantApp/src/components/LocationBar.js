import React from 'react';
import {SafeAreaView, View, TextInput, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const LocationBar = ({ term, onTermChange, onTermSubmit}) => {
    return ( 
    <View style={styles.backgroundStyle}>
        <Entypo name="location" style={styles.iconStyle} />
  
        <TextInput placeholder="search" 
        value={term}
      //  onChangeText={newTerm => onTermChange(newTerm)}
        onEndEditing={onTermSubmit} //Text input
        />

   
    </View>
  
   
    );
};

//Style sheet for the search bar.
const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 50,
        backgroundColor: '#F0EEEE',
        //backgroundColor: 'white',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 5,
        flexDirection: 'row'
        

    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 1

    }
});

export default LocationBar;