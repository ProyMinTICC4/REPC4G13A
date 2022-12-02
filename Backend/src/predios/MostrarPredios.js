// Importamos las extensiones o dependencias que descargamos
import axios from 'axios'; // Buscar
import { Link } from 'react-router-dom';  // para usar link
import { useState, useEffect } from 'react'; // 

// Le definimos la ruta del módulo que vamos a trabajar
const URL = 'http://localhost:5000/api/predios/';  // se conecta backend y frontend

// Creamos el componente que nos va a permitir mostrar los datos que tenemos en la base de datos
const CompMostrarPredios = () => {

    const [predios, setPredio] = useState([])
    useEffect(() => {
        getPredios()
    }, []);

    // Función mostrar Predios

    const getPredios = async () => {
        const resultado = await axios.get(URL)
        setPredio(resultado.data);
    }

    // Función eliminar predios
    const eliminarPredios = async (id) => {
        await axios.delete(`${URL}${id}`)
        getPredios()
        // eslint-disable-next-line
    }
    // Aqui vamos a tener que usar HTML para el manejo de la tabla que va a mostrar los predios
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to='/predios/agregar/' className='btn btn-primary mt-2 mb-2'><i class="fa-solid fa-user-plus"></i></Link>
                    <table className='table'>
                        <thead className='tableTheBg'>
                            <tr>
                                <th>Ruta usuario</th>
                                <th>Comuna</th>
                                <th>Barrio</th>
                                <th>Nomenclatura</th>
                                <th>Registro catastral</th>
                                <th>Tradicion libertad</th>
                                <th>Uso</th>
                                <th>Estrato</th>
                                <th>Tipo uso</th>
                                <th>Conexion acueducto</th>
                                <th>Conexion alcantarillado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {predios.map((predio, index) => (
                                <tr key={index}>
                                    <td> {predio.ruta}</td>
                                    <td> {predio.comuna}</td>
                                    <td> {predio.barrio}</td>
                                    <td> {predio.nomenclatura}</td>
                                    <td> {predio.registro_catastral}</td>
                                    <td> {predio.tradicion_libertad}</td>
                                    <td> {predio.uso}</td>
                                    <td> {predio.estrato}</td>
                                    <td> {predio.tipo_uso}</td>
                                    <td> {predio.conexion_acueducto}</td>
                                    <td> {predio.conexion_alcantarillado}</td>
                                    <td>
                                        <Link to={`/predios/editar/${predio._id}`} className='btn btn-info'> <i class="fa-solid fa-pen-to-square"> </i></Link>
                                        <button onClick={() => eliminarPredios(predio._id)} className='btn btn-danger'> <i class="fa-solid fa-user-xmark"></i> </button>
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
export default CompMostrarPredios;