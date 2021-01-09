import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ApiFoodContext = createContext();

const URL_PAISES = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
const URL_CATEGORIAS = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'

const ApiFoodProvider = (props) => {

  //Paises bajos
  const [paises, setPaises] = useState([]);
  const [categorias, setCategorias] = useState([]);


  useEffect(() => {
    fetch(URL_PAISES)
      .then((response) => response.json())
      .then((json) => setPaises(json.meals))
  }, []);

  useEffect(() => {
    fetch(URL_CATEGORIAS)
      .then((response) => response.json())
      .then((json) => setCategorias(json.meals))
  }, []);

  paises.splice(10, paises.length) // Mostrar solo  10 paises
  categorias.splice(4 , categorias.length) // Mostrar solo 3 categorias
  //console.log(paises.[0])
  //console.log(paises.[1])
  //



    return (
    <ApiFoodContext.Provider
      value={{
        paises,
        setPaises,
        categorias, 
        setCategorias, 
    
      }}>
      {props.children}
    </ApiFoodContext.Provider>
  );


}



export default ApiFoodProvider;
