import React, { useContext } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Constants from 'expo-constants';
import Food from '../Screen/Food';
import { ApiFoodContext } from '../Context/ApiFoodContext';

const Tab = createMaterialTopTabNavigator();
export default function TopTapNavigator1() {
  const {findFood, categorias, setCategorias } = useContext(ApiFoodContext);

  return (
    <Tab.Navigator
      initialRouteName="Food"
      tabBarOptions={{
      activeTintColor: 'yellow',
        inactiveTintColor: '#fff',
        showIcon: true,
        showLabel: true,
        labelStyle: {
          fontSize: 11,
        },
        style: {
          paddingTop: Constants.statusBarHeight,
          backgroundColor: 'brown',
        },
      }}>

      {categorias.map((demo, i) => (
        <Tab.Screen
          name={demo.strCategory}
          initialParams={{ stringCategoria: demo.strCategory }}
          component={Food}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name={'fast-food-outline'} size={20} color={color} />
            ),
          }}
        />
      ))}
      
    </Tab.Navigator>
  );
}
