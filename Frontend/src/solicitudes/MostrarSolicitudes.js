// Importamos las extensiones o dependencias que descargamos
import axios from 'axios'; // Buscar
import { Link } from 'react-router-dom';  // para usar link
import { useState, useEffect } from 'react'; // 

// Le definimos la ruta del módulo que vamos a trabajar
const URL = 'http://localhost:5000/api/solicitudes/';  // se conecta backend y frontend

// Creamos el componente que nos va a permitir mostrar los datos que tenemos en la base de datos
const CompMostrarSolicitudes = () => {

    const [solicitudes, setSolicitud] = useState([])
    useEffect(() => {
        getSolicitudes()
    }, []);

    // Función mostrar Solicitudes

    const getSolicitudes = async () => {
        const resultado = await axios.get(URL)
        setSolicitud(resultado.data);
    }

    // Función eliminar solicitudes
    const eliminarSolicitudes = async (id) => {
        await axios.delete(`${URL}${id}`)
        getSolicitudes()
        // eslint-disable-next-line
    }
    // Aqui vamos a tener que usar HTML para el manejo de la tabla que va a mostrar las solicitudes
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to='/solicitudes/agregar/' className='btn btn-primary mt-2 mb-2'><i class="fa-solid fa-user-plus"></i></Link>
                    <table className='table'>
                        <thead className='tableTheBg'>
                            <tr>
                                <th>Fecha de solicitud</th>
                                <th>Radicado de entrada</th>
                                <th>Fecha de respuesta</th>
                                <th>Radicado de salida</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {solicitudes.map((solicitud, index) => (
                                <tr key={index}>
                                    <td> {solicitud.fecha_solicitud}</td>
                                    <td> {solicitud.radicado_entrada}</td>
                                    <td> {solicitud.fecha_respuesta}</td>
                                    <td> {solicitud.radicado_salida}</td>
                                    <td>
                                        <Link to={`/solicitudes/editar/${solicitud._id}`} className='btn btn-info'> <i class="fa-solid fa-pen-to-square"> </i></Link>
                                        <button onClick={() => eliminarSolicitudes(solicitud._id)} className='btn btn-danger'> <i class="fa-solid fa-user-xmark"></i> </button>
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
export default CompMostrarSolicitudes;