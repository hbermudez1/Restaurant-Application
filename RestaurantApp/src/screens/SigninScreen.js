import React, {useContext } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';

//Shows and validates sign in screen
const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(Context);  

  return (
        <View style={styles.container}>
          <NavigationEvents onWillFocus={clearErrorMessage} />
            <AuthForm 
            headerText="Sign in to your account"
            errorMessage={state.errorMessage}
            onSubmit={signin}
            submitButtonText="Sign in"
            />
            <NavLink 
            text="Don't have an account? Sign up instead" 
            routeName="Signup"
            />
        </View>
    );
};
//SigninScreen.navigationOptions = {
  //  header: null
//};
SigninScreen.navigationOptions = () => {
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

export default SigninScreen;