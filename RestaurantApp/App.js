import React from 'react';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignUpScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/FadeInView";
import { Provider  as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef"; 
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import SearchScreen from './src/screens/SearchScreen';


//Switch navigator adds tabs to swith between screens
const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
      Signup: SignupScreen,
      Signin: SigninScreen,
  }),
  mainFlow: createMaterialBottomTabNavigator ({
    About: createStackNavigator ({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),
    //SavedRestaurants: IndexScreen,
    Search: SearchScreen,
    Account: AccountScreen

  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
   
      <App 
      ref={(navigator) => { 
        setNavigator(navigator); 
        }} />
    
    </AuthProvider>

    
  );

 
};