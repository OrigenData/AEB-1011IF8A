import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

class App extends Component {


  render() {


    return (
      <div className="bootstrap">

        <Header></Header>
        <Body
          titulo="Práctica 1 - Unidad 2"
          textoArray={["Tipos de componentes", "Contenedores", "Usar mas de un componente", "Funciones", "Props"]}
        />
        <Footer />
      </div>
    )
  };
}


export default App;


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Prueba !#</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
/*Componentes de tipo clase
class App extends Component {
  render(){

  return (
    //Ract Fragment en vez de Div
    <Fragment>
      <h1>JavaScript</h1>
      <h1>React</h1>
      <h1>Native</h1>
    </Fragment>
  )};
}*/

