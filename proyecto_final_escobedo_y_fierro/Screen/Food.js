import React, { useContext, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { ApiFoodContext } from '../Context/ApiFoodContext';

const Food = ({ route, navigation }) => {
  const { stringCategoria, stringPais } = route.params;
  var URL =
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + stringCategoria;
  console.log('URL: ' + URL);

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setData(json.meals))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  data.splice(10, data.length)  //Solo 10 platillos


  return (
    <View style={styles.container}>
      <Text>Food Screen</Text>
      <Text>Categoria {stringCategoria}</Text>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {data.map((demo, i) => (
            <Card>
              <Card.Title style={{ textTransform: 'uppercase' }}>
                {demo.strMeal}
              </Card.Title>
              <Card.Divider />

              <View key={i} style={styles.user}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{ uri: demo.strMealThumb }}
                />
                <Text style={styles.name}>{demo.strMeal}</Text>
              </View>
            </Card>
          ))}
        </ScrollView>
      </SafeAreaView>

      <Button
        title="IR A LA PANTALLA DE INICIO"
        onPress={() => {
          navigation.navigate('Inicio');
        }}
      />
      <Button
        title="ABRIR MENU"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    </View>
  );
};

export default Food;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#Fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    resizeMode: 'center',
    height: 100,
    width: 200,
  },
});
