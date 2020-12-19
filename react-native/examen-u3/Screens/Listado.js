import React, { useContext } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { ListItem, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { ProductosContext } from '../Context/ProductosContext';

const Listado = ({ navigation }) => {
  const { carrito, lista, setCarrito, setLista, totalPagar, setTotalPagar  } = useContext(ProductosContext);


  const agregarCompra =(producto, precio)=> {

    setCarrito([...carrito,producto])
    
    //Precio a pagar aumenta
    totalPagar.total+=precio

    console.log(totalPagar)

  }

  return (
    <View style={styles.container}>
      <Header
        placement=""
        centerComponent={{
          text: 'Market 2020',
          style: { color: '#fff', fontSize: 25 },
        }}
        rightComponent={
          <Icon
            name="shopping-cart"
            size={35}
            color="#FFF"
            onPress={() => {
              navigation.navigate('Carrito', []);
            }}
          />
        }
      />
      <Text>INFORMACION</Text>

      <ScrollView>
        {lista.length > 0 ? (
          lista.map((a, i) => (
            <ListItem key={i} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{a.descripcion}</ListItem.Title>
                <ListItem.Title>$ {a.precio}</ListItem.Title>
              </ListItem.Content>

              <View style={styles.buttons}>
                <Icon
                  name="cart-plus"
                  size={30}
                  color="rgb(16, 191, 1)"
                  onPress={() => agregarCompra(a, a.precio)}
                />
              </View>
            </ListItem>
          ))
        ) : (
          <Text> No exite</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Listado;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  buttons: {
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
