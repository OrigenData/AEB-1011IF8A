import React from 'react'
import '../App.css';


function funcionBoton() {
    alert("Hola");
};

function Body(props) {


    return (

        <div className="bootstrap App">
            <h1>{props.titulo}</h1>

            <ol>
                {
                    props.textoArray.map((e, index) =>
                        <h3><li key={index}>{e}</li></h3>
                    )
                }
            </ol>


            <button onClick={funcionBoton} type="button" class="btn btn-success">Dar click</button>
        </div>

    );
}

export default Body;