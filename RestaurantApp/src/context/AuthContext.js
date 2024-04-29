import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../navigationRef";

//Catch errors if possible
const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
                return { ...state, errorMessage: action.payload };
        case 'signin':
                return { errorMessage: '', token: action.payload };
        case 'clear_error_message':
                return { ...state, errorMessage: "" };     
        case 'signout':
                return { token: null, errorMessage: '' };                

        default:
            return state;
    }
};
const tryLocalSignin = (dispatch) => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signin', payload: token });
        navigate('TrackList');

    } else {
        navigate('loginFlow');
    }
};

const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: 'clear_error_message' });
};

const signup =
(dispatch) => async ({ email, password }) => {
        //Make api request to sign up with that email and password
        //if we sign up, moodify our state, and say that we are authenticated
        //If signing up fails, we probably need to reflect an error message soewhere. 
        try {
            const response = await trackerApi.post('/signup', { email, password });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signin', payload: response.data.token});
            navigate('About');
        } catch (err) {
            dispatch({ type: 'add_error', 
            payload: 'Something went wrong with sign up'
        });
        }

    };


   //Make api request to sign in with that email and password
    //if we sign up, moodify our state, and say that we are authenticated
     //If signing up fails, we probably need to reflect an error message soewhere.
const signin = 
(dispatch) => 
async ({email, password}) => {
    try {
        const response = await trackerApi.post('/signin', {email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        navigate('About');
    } catch (err) {
        console.log(err);
        dispatch({
            type: 'add_error',
            payload: 'Something went wrong with sign in'
        });
    }
}

const signout = (dispatch) => async () => { 
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'signout'});
        navigate('loginFlow');
};

export const { Provider, Context } = createDataContext (
    authReducer,
    { signin, signout, signup, clearErrorMessage, tryLocalSignin},
    { token: null, errorMessage: '' } 
);