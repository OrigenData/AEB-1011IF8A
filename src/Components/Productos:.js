import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Productos = (props) => {
    return (

        <div>
            <h2>Productos</h2>

            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Codigo</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Accion</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        props.ListaProductos.map((a, index) =>
                            <tr key={index}>

                                <td value={a.codigo}
                                    name="codigo" >{a.codigo}</td>

                                <td value={a.descripcion}
                                    name="descripcion" >{a.descripcion}</td>

                                <td value={a.precio}
                                    name="precio" >{a.precio}</td>

                                <td><button onClick={() => props.Enviar(a.codigo, a.descripcion, a.precio)} type="button" class="btn btn-success">Agregar</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>


    );
}

export default Productos;