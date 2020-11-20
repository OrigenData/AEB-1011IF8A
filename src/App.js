import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import Listado from './Components/Listado';
import Header from './Components/Header';
import Productos from './Components/Productos:';

class App extends Component {
  constructor() {
    super();
    this.state = {
      carrito: [],
      total: 0,
      productosLista: [
        { codigo: 1, descripcion: "Huawei Matebook D 15", precio: 15899 },
        { codigo: 2, descripcion: "Samsung Galaxy S10", precio: 13999 },
        { codigo: 3, descripcion: "Samsung Galaxy A01", precio: 1850 },
        { codigo: 4, descripcion: "Xiaomi Redmi Note 9s", precio: 5949 },
        { codigo: 5, descripcion: "Mochila Xiaomi", precio: 699 },
        { codigo: 6, descripcion: "Teclado Primus Gaming Ballista", precio: 1999 },
      ],
    };
  }


  remove = (index, c) => {

    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Eliminado',
      showConfirmButton: false,
      timer: 4500
    })

    this.state.carrito.splice(index, 1);

    this.setState({
      ...this.state,
      total: this.state.total - c
    })

  }



  send = (a, b, c) => {

    console.log(a + b + c)

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Producto agregado',
      showConfirmButton: false,
      timer: 4500
    })

    this.setState({
      ...this.state,
      carrito: [...this.state.carrito, { codigo: a, descripcion: b, precio: c }],
      total: this.state.total + c

    })

  }


  render() {

    return (

      <div className="App">
        <div className="bootstrap">

          <Header />
          <br></br>

          <div class="container">

            <div style={{ textAlign: "center" }}><h1><h1>${(this.state.total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</h1></h1></div>

            <div class="row">
              <div class="col">

                <Productos
                  ListaProductos={this.state.productosLista}
                  Enviar={this.send}
                />

              </div>
              <div class="col">

                <Listado
                  ListaCarrito={this.state.carrito}
                  Eliminar={this.remove}
                />

              </div>
            </div>
          </div>



        </div>
      </div>
    )
  }


}

export default App;
