// Importamos las extensiones o dependencias que descargamos
import axios from 'axios'; // Buscar
import { useNavigate } from 'react-router-dom';  // para usar link
import { useState } from 'react'; // 

// Le definimos la ruta del módulo que vamos a trabajar
const URL = 'http://localhost:5000/api/predios/';  // se conecta backend y frontend

// Creamos el componente que nos va a permitir mostrar los datos que tenemos en la base de datos
const CompAgregarPredios = () => {

    const [ruta, setRuta] = useState('')
    const [comuna, setComuna] = useState('')
    const [barrio, setBarrio] = useState('')
    const [nomenclatura, setNomenclatura] = useState('')
    const [registro_catastral, setRegistro_catastral] = useState('')
    const [tradicion_libertad, setTradicion_libertad] = useState('')
    const [uso, setUso] = useState('')
    const [estrato, setEstrato] = useState('')
    const [tipo_uso, setTipo_uso] = useState('')
    const [conexion_acueducto, setConexion_acueducto] = useState('')
    const [conexion_alcantarillado, setConexion_alcantarillado] = useState('')
    const navigate = useNavigate()

    // Función guardar predio

    const guardarPredio = async (g) => {
        g.preventDefault()
        await axios.post(URL, {
            ruta: ruta, comuna: comuna, barrio: barrio, nomenclatura: nomenclatura,
            registro_catastral: registro_catastral, tradicion_libertad: tradicion_libertad, uso: uso, estrato: estrato,
            tipo_uso: tipo_uso, conexion_acueducto: conexion_acueducto, conexion_alcantarillado: conexion_alcantarillado
        })
        navigate('/predios/')

    }
    return (
        <div>
            <h4> FORMULARIO GUARDAR PREDIO </h4>

            <form onSubmit={guardarPredio}>

                <div className='mb-3'>
                    <label className='form-label'> Ruta de Usuario </label>
                    <input value={ruta} onChange={(g) => setRuta(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Comuna </label>
                    <input value={comuna} onChange={(g) => setComuna(g.target.value)}
                        type='number' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Barrio </label>
                    <input value={barrio} onChange={(g) => setBarrio(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Nomenclatura </label>
                    <input value={nomenclatura} onChange={(g) => setNomenclatura(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Registro catastral </label>
                    <input value={registro_catastral} onChange={(g) => setRegistro_catastral(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Tradición y libertad </label>
                    <input value={tradicion_libertad} onChange={(g) => setTradicion_libertad(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Uso </label>
                    <input value={uso} onChange={(g) => setUso(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Estrato </label>
                    <input value={estrato} onChange={(g) => setEstrato(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Tipo de uso </label>
                    <input value={tipo_uso} onChange={(g) => setTipo_uso(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Conexión acueducto </label>
                    <input value={conexion_acueducto} onChange={(g) => setConexion_acueducto(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Conexión alcantarillado </label>
                    <input value={conexion_alcantarillado} onChange={(g) => setConexion_alcantarillado(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <button type='submit' className='btn btn-primary'> <i class="fa-solid fa-floppy-disk"></i> </button>

            </form>
        </div>
    )
}
export default CompAgregarPredios;