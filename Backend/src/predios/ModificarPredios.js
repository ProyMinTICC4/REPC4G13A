// Importamos las extensiones o dependencias que descargamos
import axios from 'axios'; // Buscar
import { useNavigate, useParams } from 'react-router-dom';  // para usar link
import { useState, useEffect } from 'react'; // 

// Le definimos la ruta del módulo que vamos a trabajar
const URL = 'http://localhost:5000/api/predios/';  // se conecta backend y frontend

// Definimos el componente

const CompEditarPredios = () => {

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
    const [conexion_alcantarillado, setConexion_alcantarillado] = useState('') // Esta línea permite traer y modificar el id indicado
    const Navigate = useNavigate()
    const { id } = useParams() // Esta línea permite traer y modificar el id indicado

    // Función Actualizar Predio

    const Actualizar = async (a) => {
        a.preventDefault()
        await axios.put(`${URL}${id}`, {
            ruta: ruta,
            comuna: comuna,
            barrio: barrio,
            nomenclatura: nomenclatura,
            registro_catastral: registro_catastral,
            tradicion_libertad: tradicion_libertad,
            uso: uso,
            estrato: estrato,
            tipo_uso: tipo_uso,
            conexion_acueducto: conexion_acueducto,
            conexion_alcantarillado: conexion_alcantarillado,
        })
        Navigate('/predios/')
    }
    useEffect(() => {
        getPredioById()
        // eslint-disable-next-line
    }, [])

    const getPredioById = async () => {
        const resultado = await axios.get(`${URL}${id}`)

        setRuta(resultado.data.ruta)
        setComuna(resultado.data.comuna)
        setBarrio(resultado.data.barrio)
        setNomenclatura(resultado.data.nomenclatura)
        setRegistro_catastral(resultado.data.registro_catastral)
        setTradicion_libertad(resultado.data.tradicion_libertad)
        setUso(resultado.data.uso)
        setEstrato(resultado.data.estrato)
        setTipo_uso(resultado.data.tipo_uso)
        setConexion_acueducto(resultado.data.conexion_acueducto)
        setConexion_alcantarillado(resultado.data.conexion_alcantarillado)
    }
    return (
        <div>
            <h4> FORMULARIO ACTUALIZAR PREDIO </h4>
            <form onSubmit={Actualizar}>

                <div className='mb-3'>
                    <label className='form-label'> Ruta de usuario </label>
                    <input value={ruta} onChange={(a) => setRuta(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Comuna </label>
                    <input value={comuna} onChange={(a) => setComuna(a.target.value)}
                        type="number" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Barrio </label>
                    <input value={barrio} onChange={(a) => setBarrio(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Nomenclatura </label>
                    <input value={nomenclatura} onChange={(a) => setNomenclatura(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Registro catastral </label>
                    <input value={registro_catastral} onChange={(a) => setRegistro_catastral(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Tradición y libertad </label>
                    <input value={tradicion_libertad} onChange={(a) => setTradicion_libertad(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Uso </label>
                    <input value={uso} onChange={(a) => setUso(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Estrato </label>
                    <input value={estrato} onChange={(a) => setEstrato(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Tipo de uso </label>
                    <input value={tipo_uso} onChange={(a) => setTipo_uso(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Conexión acueducto </label>
                    <input value={conexion_acueducto} onChange={(a) => setConexion_acueducto(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Conexión alcantarillado </label>
                    <input value={conexion_alcantarillado} onChange={(a) => setConexion_alcantarillado(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <button type='submit' className='btn btn-primary'> <i class="fa-solid fa-floppy-disk"></i> </button>

            </form>
        </div>
    )
}
export default CompEditarPredios;