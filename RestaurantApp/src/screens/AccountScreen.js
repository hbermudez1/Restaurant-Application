import React, { useContext } from 'react';
import { View, StyleSheet, Text, Alert, Share} from 'react-native';
import { Button } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context  as AuthContext } from '../context/AuthContext';
import { Linking } from 'react-native';

//Acount screen that shows signout and learn more button
const AccountScreen = ( {navigation} ) => {
    const {signout } = useContext(AuthContext);
    return (
           <SafeAreaView forceInset={{ top: 'always' }}>
        <Text style={{ fontSize: 40, textAlign: 'center', marginTop: 250 }}>Account Screen</Text>
        <Spacer>
            <Button title="Sign Out" onPress={signout} />
        </Spacer>
        <Spacer>
            <Button title="Learn More" onPress={() => Linking.openURL('https://haroldbermudez.org')} />
        </Spacer>
       </SafeAreaView>
    );
    
      
};
  
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250

    }

});

export default AccountScreen;
