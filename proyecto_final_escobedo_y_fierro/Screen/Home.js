import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import TopTapNavigator from '../Navigation/TopTabNavigator';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 296,
          height: 41,
        }}
        source={{
          uri: 'https://images.apilist.fun/the_meal_db_api.png',
        }}
      />
      <Image
        style={{
          width: 256,
          height: 256,
        }}
        source={{
          uri: 'https://www.themealdb.com/images/meal-icon.png',
        }}
      />
      <Text>{`
      Creadores:
      Fierro Lopez Luis Eduardo
      Escobedo Ruiz Cristian Ricardo. 
      `}</Text>

      <Button
        title="Abrir Menu"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
