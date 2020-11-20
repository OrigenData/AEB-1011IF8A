import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Listado = (props) => {
  return (
    <div>

      <h2>Mi Carrito</h2>
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
            props.ListaCarrito.map((a, index) =>
              <tr key={index}>
                <td>{a.codigo}</td>
                <td>{a.descripcion}</td>
                <td>{a.precio}</td>
                <td><button onClick={()=>props.Eliminar(index,a.precio)}  type="button" class="btn btn-danger">Eliminar</button></td>
              </tr>
            )
          }

        </tbody>
      </table>

    </div>

  );
}

export default Listado;