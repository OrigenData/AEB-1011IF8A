function Leer() {
    const ciudad = document.getElementById("input").value;
    const keyClima='***';
    const lenguaje='sp';
    const celsius='metric';
    const api_url=`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${keyClima}&lang=${lenguaje}&units=${celsius}`
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
