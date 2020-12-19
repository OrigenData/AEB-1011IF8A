import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Listado from '../Screens/Listado';
import Carrito from '../Screens/Carrito';

const Stack = createStackNavigator();

export default function StackNavigator1() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        name="Listado"
        component={Listado}
        options={{
          headerTitle: 'Listado',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Carrito"
        component={Carrito}
        options={{
          headerTitle: 'Carrito',
          headerShown: true,
        }}
      />


    </Stack.Navigator>
  );
}

// {()=>navigation.navigate('CarritoScreen')}
