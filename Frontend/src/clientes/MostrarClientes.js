// Importamos las extensiones o dependencias que descargamos
import axios from 'axios'; // Buscar
import { Link } from 'react-router-dom';  // para usar link
import { useState, useEffect } from 'react'; // 

// Le definimos la ruta del módulo que vamos a trabajar
const URL = 'http://localhost:5000/api/clientes/';  // se conecta backend y frontend

// Creamos el componente que nos va a permitir mostrar los datos que tenemos en la base de datos
const CompMostrarClientes = () => {

    const [clientes, setCliente] = useState([])
    useEffect(() => {
        getClientes()
    }, []);

    // Función mostrar Clientes

    const getClientes = async () => {
        const resultado = await axios.get(URL)
        setCliente(resultado.data);
    }

    // Función eliminar clientes
    const eliminarClientes = async (id) => {
        await axios.delete(`${URL}${id}`)
        getClientes()
        // eslint-disable-next-line
    }
    // Aqui vamos a tener que usar HTML para el manejo de la tabla que va a mostrar los clientes
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to='/clientes/agregar/' className='btn btn-primary mt-2 mb-2'><i class="fa-solid fa-user-plus"></i></Link>
                    <table className='table'>
                        <thead className='tableTheBg'>
                            <tr>
                                <th>Usuario Id</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Documento</th>
                                <th>Correo</th>
                                <th>Telefono</th>
                                <th>Direccion</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map((cliente, index) => (
                                <tr key={index}>
                                    <td> {cliente.codigo_usuario}</td>
                                    <td> {cliente.nombres}</td>
                                    <td> {cliente.apellidos}</td>
                                    <td> {cliente.documento}</td>
                                    <td> {cliente.correo}</td>
                                    <td> {cliente.telefono}</td>
                                    <td> {cliente.direccion}</td>
                                    <td>
                                        <Link to={`/clientes/editar/${cliente._id}`} className='btn btn-info'> <i class="fa-solid fa-pen-to-square"> </i></Link>
                                        <button onClick={() => eliminarClientes(cliente._id)} className='btn btn-danger'> <i class="fa-solid fa-user-xmark"></i> </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default CompMostrarClientes;