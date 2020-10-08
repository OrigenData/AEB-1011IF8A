function Leer() {
    const ciudad = document.getElementById("input").value;
    //const peli = document.getElementById("input").value;
    //obtain an apikey on this web
    //http://www.omdbapi.com/apikey.aspx
    const keyClima='cf39bd98dd8b70624805c00c755b0a8c';
    //const KeyPelis='a9a4374b';
    const lenguaje='sp';
    const celsius='metric';
    const api_url=`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${keyClima}&lang=${lenguaje}&units=${celsius}`
    //const api_url=`http://www.omdbapi.com/?s=${peli}&apikey=${KeyPelis}`

    //buscar2(api_url);
    mostrarClima(api_url);
}

const mostrarClima=async(api_url)=>{

    const data= await fetch(api_url);
    const respuesta= await data.json();
    //const Search = await respuesta.Search;

    console.log(respuesta.sys); // Ciudad y Pais 

    if(respuesta!=null)
    {   
        console.log(respuesta.weather); // Log Clima

        respuesta.weather.map((p)=>{
            console.log(p.icon);
            document.getElementById("img").src=`https://openweathermap.org/img/wn/${p.icon}@2x.png`;
            document.getElementById("descipcion").innerHTML=` ${p.description}`
    })
        document.getElementById("ciudad").innerHTML=`${respuesta.name} ${respuesta.sys.country} ${respuesta.main.temp} ° С`
        document.getElementById("temperatura").innerHTML=`Temperatura de ${respuesta.main.temp_min} a ${respuesta.main.temp_max} ° С`
        
    }
    
  }



/*
function buscar1(api_url){

    fetch(api_url)
      .then(data => {
        return data.json()
      }).then(resultado=>{
            console.log(resultado);

            const {Search=[]} = resultado;
            
            console.log(Search);
            document.getElementById("lista").innerHTML='';

            Search.map((p)=>{
                document.getElementById("lista").innerHTML+=`<div style="margin-top:10px;">
                         <img width='100%' src=${p.Poster} alt="No hay poster"></img>
            </div>`;
            })
      });


}

const buscar2=async(api_url)=>{

    const data= await fetch(api_url);
    const respuesta= await data.json();
    const Search = await respuesta.Search;

    console.log(respuesta);

    if(Search!=null)
    {   
        document.getElementById("imagen-clima").innerHTML='';
        Search.map((p)=>{
                document.getElementById("imagen-clima").src="https://openweathermap.org/img/wn/10d@2x.png";
        })


    }

}    
*/

/*
const mostrarClimaNull=async(api_url)=>{

    const data= await fetch(api_url);
    const respuesta= await data.json();
    const Search = await respuesta.Search;

    console.log(respuesta.coord);

    if(respuesta!=null)
    {   
        respuesta.map((p)=>{
            console.log(p.weathe.icon);
                document.getElementById("img").src=`https://openweathermap.org/img/wn/${p.weathe.icon}@2x.png`;
        })

    }
    
  }
  */

  /*   
const buscar3=async(api_url)=>{

    const respuesta= await axios(api_url);
    const Search = await respuesta.data.Search;
    console.log(respuesta.data);
    
    console.log(Search);

    
    if(Search!=null)
    {
        document.getElementById("lista").innerHTML='';
        
        Search.map((p)=>{
                document.getElementById("lista").innerHTML+=`<div style="margin-top:10px;">
                    <img width='100%' src=${p.Poster} alt="No hay poster"></img></div>`;
        })

    }

}    
*/