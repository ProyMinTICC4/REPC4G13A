// Importamos las extensiones o dependencias que descargamos
import axios from 'axios'; // Buscar
import { Link } from 'react-router-dom';  // para usar link
import { useState, useEffect } from 'react'; // 

// Le definimos la ruta del módulo que vamos a trabajar
const URL = 'http://localhost:5000/api/medidores/';  // se conecta backend y frontend

// Creamos el componente que nos va a permitir mostrar los datos que tenemos en la base de datos
const CompMostrarMedidores = () => {

    const [medidores, setMedidor] = useState([])
    useEffect(() => {
        getMedidores()
    }, []);

    // Función mostrar Medidores

    const getMedidores = async () => {
        const resultado = await axios.get(URL)
        setMedidor(resultado.data);
    }

    // Función eliminar medidores
    const eliminarMedidores = async (id) => {
        await axios.delete(`${URL}${id}`)
        getMedidores()
        // eslint-disable-next-line
    }
    // Aqui vamos a tener que usar HTML para el manejo de la tabla que va a mostrar los medidores
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to='/medidores/agregar/' className='btn btn-primary mt-2 mb-2'><i class="fa-solid fa-user-plus"></i></Link>
                    <table className='table'>
                        <thead className='tableTheBg'>
                            <tr>
                                <th>Diametro Acometida</th>
                                <th>Diametro Medidor</th>
                                <th>No Serie del Medidor</th>
                                <th>Lectura Inicial</th>
                                <th>Certificado de Calibracion</th>
                                <th>Sello del Medidor</th>
                                <th>Sello de la Empresa</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {medidores.map((medidor, index) => (
                                <tr key={index}>
                                    <td> {medidor.diametro_acometida}</td>
                                    <td> {medidor.diametro_medidor}</td>
                                    <td> {medidor.serie_medidor}</td>
                                    <td> {medidor.lectura_inicial}</td>
                                    <td> {medidor.certificado_calibracion}</td>
                                    <td> {medidor.sello_medidor}</td>
                                    <td> {medidor.sello_empresa}</td>
                                    <td>
                                        <Link to={`/medidores/editar/${medidor._id}`} className='btn btn-info'> <i class="fa-solid fa-pen-to-square"> </i></Link>
                                        <button onClick={() => eliminarMedidores(medidor._id)} className='btn btn-danger'> <i class="fa-solid fa-user-xmark"></i> </button>
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
export default CompMostrarMedidores;