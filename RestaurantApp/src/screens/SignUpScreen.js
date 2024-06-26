import React, { useContext, useEffect } from 'react';
import { View, StyleSheet} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

//Shows and validates sign up screen
const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(
      AuthContext
      );  

  return (
        <View style={styles.container}>
          <NavigationEvents onWillFocus={clearErrorMessage} />
            <AuthForm 
            headerText="Sign up for an account"
            errorMessage={state.errorMessage}
            submitButtonText="Sign up"
            onSubmit={signup}
            
            />
            <NavLink 
            text="Already have an account? Sign in instead!!" 
            routeName="Signin"
            />
        </View>
    );
};
//SigninScreen.navigationOptions = {
  //  header: null
//};
SignupScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250

    }
});

export default SignupScreen;