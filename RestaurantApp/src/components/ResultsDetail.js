import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Linking } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        //This this display the image, reviews, and name
    <View style={styles.container}>
        <Image style ={styles.image} source={{ uri: result.image_url }} />
        <Text style={styles.name}  onPress={() => Linking.openURL('http://funnyfarmrestaurant.com')}>{result.name}</Text>
        <Text onPress={() => Linking.openURL('https://thepizzaboxsanjose.com')}>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft:15
    },
    image: {
        width: 250,
        height:120,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
       
    }
});

export default ResultsDetail;