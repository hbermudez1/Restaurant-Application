
//About screen that shows the app summary
import React, {useRef, useEffect} from 'react';
import {Animated, Text, View} from 'react-native';

const FadeInView = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};

// We can then use  `FadeInView` in place of a `View` in components:
export default () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <FadeInView
        style={{
          width: 300,
          height: 450,
          backgroundColor: '#00FFFF',
        }}>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>
        Welcome to FoodFinder! Under the search tab, feel free search any food type of your choices and see the options nearby.
        </Text>
        <Text style={{fontSize: 28, textAlignVertical: 'bottom', margin: 50}}>
        Eat and Enjoy!
        </Text>
      </FadeInView>
    </View>
  );
};