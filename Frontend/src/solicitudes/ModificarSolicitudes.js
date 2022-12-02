// Importamos las extensiones o dependencias que descargamos
import axios from 'axios'; // Buscar
import { useNavigate, useParams } from 'react-router-dom';  // para usar link
import { useState, useEffect } from 'react'; // 

// Le definimos la ruta del módulo que vamos a trabajar
const URL = 'http://localhost:5000/api/solicitudes/';  // se conecta backend y frontend

// Definimos el componente

const CompEditarSolicitudes = () => {

    const [fecha_solicitud, setFecha_solicitud] = useState('')
    const [radicado_entrada, setRadicado_entrada] = useState('')
    const [fecha_respuesta, setFecha_respuesta] = useState('')
    const [radicado_salida, setRadicado_salida] = useState('') // Esta línea permite traer y modificar el id indicado
    const Navigate = useNavigate()
    const { id } = useParams() // Esta línea permite traer y modificar el id indicado

    // Función Actualizar Solicitud

    const Actualizar = async (a) => {
        a.preventDefault()
        await axios.put(`${URL}${id}`, {
            fecha_solicitud: fecha_solicitud,
            radicado_entrada: radicado_entrada,
            fecha_respuesta: fecha_respuesta,
            radicado_salida: radicado_salida,
        })
        Navigate('/solicitudes/')
    }
    useEffect(() => {
        getSolicitudById()
        // eslint-disable-next-line
    }, [])

    const getSolicitudById = async () => {
        const resultado = await axios.get(`${URL}${id}`)

        setFecha_solicitud(resultado.data.fecha_solicitud)
        setRadicado_entrada(resultado.data.radicado_entrada)
        setFecha_respuesta(resultado.data.fecha_respuesta)
        setRadicado_salida(resultado.data.radicado_salida)
    }
    return (
        <div>
            <h4> FORMULARIO ACTUALIZAR SOLICITUD </h4>
            <form onSubmit={Actualizar}>

                <div className='mb-3'>
                    <label className='form-label'> Fecha de solicitud </label>
                    <input value={fecha_solicitud} onChange={(a) => setFecha_solicitud(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Radicado de entrada </label>
                    <input value={radicado_entrada} onChange={(a) => setRadicado_entrada(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Fecha de respuesta </label>
                    <input value={fecha_respuesta} onChange={(a) => setFecha_respuesta(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Radicado de salida </label>
                    <input value={radicado_salida} onChange={(a) => setRadicado_salida(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <button type='submit' className='btn btn-primary'> <i class="fa-solid fa-floppy-disk"></i> </button>

            </form>
        </div>
    )
}
export default CompEditarSolicitudes;