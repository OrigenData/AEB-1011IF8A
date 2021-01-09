import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import { Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import PaisDrawerNavigator from './Navigation/PaisDrawerNavigator'
import ApiFoodProvider from './Context/ApiFoodContext'
import TopTapNavigator from './Navigation/TopTabNavigator'

export default function App() {
  return (
    <ApiFoodProvider>
     <NavigationContainer>
        <PaisDrawerNavigator/>
      </NavigationContainer>
      </ApiFoodProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
