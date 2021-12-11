import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screen/LoginScreen';
import SignIn from './screen/SignIn';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import Detail from './screen/Detail'
import ProductList from './screen/ProductList'
import { COLORS, SIZES, FONTS } from './constants'
import { icons } from './constants/'
import scan from './screen/scan';
import Splashscreen from './screen/SplashScreen';
import { firebase } from '@react-native-firebase/firestore'
const Stack = createNativeStackNavigator();
const App = () => {

  var firebaseConfig = {
    apiKey: 'AIzaSyB27eMt3ASYfoNswkcvRFXGUuzfT2DfeZA',
    authDomain: 'scanify-57edf.firebaseapp.com',
    databaseURL: 'https://scanify-57edf-default-rtdb.firebaseio.com/',
    projectId: 'scanify-57edf',
    storageBucket: 'scanify-57edf.appspot.com',
    messagingSenderId: '374662582826',
    appId: '1:374662582826:android:8a53e87cdfc374a8d86953',
    // measurementId: "G-measurement-id",
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  return (
    <NavigationContainer
    //  onReady={onNavigationReady}
    >
      <Stack.Navigator initialRouteName="Splashscreen"
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Splashscreen" component={Splashscreen} />
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="scan" component={scan} />





      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;