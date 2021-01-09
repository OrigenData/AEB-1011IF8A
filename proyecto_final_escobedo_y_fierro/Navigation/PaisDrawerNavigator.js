import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator,} from '@react-navigation/drawer';
import FoodScreen from './TopTabNavigator';
import HomeScreen from '../Screen/Home';
import { ApiFoodContext } from '../Context/ApiFoodContext';
import Ionicons from 'react-native-vector-icons/Ionicons';



// /paises
const Drawer = createDrawerNavigator();

export default function PaisDrawerNavigator() {
  const { paises, setPaises } = useContext(ApiFoodContext);

  return (
    <Drawer.Navigator>

    <Drawer.Screen name="Inicio" component={HomeScreen} />

      {paises.map((demo, i) => (
         <Drawer.Screen 
          name={demo.strArea} 
          component={FoodScreen} 
        />
      ))}
        
        
      
    </Drawer.Navigator>
  );
}
