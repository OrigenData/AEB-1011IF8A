import React, { useContext, useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { ListItem, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yum from 'yup';
import Constants from 'expo-constants';
import { ProductosContext } from '../Context/ProductosContext';

const Carrito = ({ route, navigation }) => {
  const {
    carrito,
    lista,
    setCarrito,
    setLista,
    totalPagar,
    setTotalPagar,
  } = useContext(ProductosContext);


  const eliminar = (codigo, precio) => {
    const temporal = carrito.filter((item) => {
      return item.codigo !== codigo;
    });

    totalPagar.total-=precio
    setCarrito(temporal);
  };

  const comprar = () => {
    alert('Comprado');
    console.log(totalPagar)
    setCarrito({})
    setTotalPagar({})

  };

  return (
    <View style={styles.container}>
      <Text>INFORMACION CARRITO  </Text>

      <ScrollView>
        {carrito.length > 0 ? (
          carrito.map((a, i) => (
            <ListItem key={i} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{a.descripcion}</ListItem.Title>
                <ListItem.Subtitle>$ {a.precio}</ListItem.Subtitle>
              </ListItem.Content>

              <View style={styles.buttons}>
                <Icon
                  name="cart-arrow-down"
                  size={30}
                  color="rgb(230, 28, 28)"
                  onPress={() => eliminar(a.codigo, a.precio)}
                />
              </View>
            </ListItem>
          ))
        ) : (
          <Text> No tienes productos</Text>
        )}
      </ScrollView>

      {carrito.length > 0 ? (
        <View>
    <Text style={{fontSize: 20, textAlign: 'center'}}>$ {totalPagar.total}</Text>
          <Button
            style={{ margin: 20, elevation: 20, borderWidth: 20 }}
            title="Comprar"
            onPress={() => comprar()}
          />
        </View>
      ) : (
        <Text></Text>
      )}
    </View>
  );
};

export default Carrito;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  buttons: {
    flex: 1,
    width: '50%',
    flexDirection: 'row',
    justifyContent: '',
  },
});
