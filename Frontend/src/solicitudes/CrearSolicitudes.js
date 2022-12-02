// Importamos las extensiones o dependencias que descargamos
import axios from 'axios'; // Buscar
import { useNavigate } from 'react-router-dom';  // para usar link
import { useState } from 'react'; // 

// Le definimos la ruta del módulo que vamos a trabajar
const URL = 'http://localhost:5000/api/solicitudes/';  // se conecta backend y frontend

// Creamos el componente que nos va a permitir mostrar los datos que tenemos en la base de datos
const CompAgregarSolicitudes = () => {

    const [fecha_solicitud, setFecha_solicitud] = useState('')
    const [radicado_entrada, setRadicado_entrada] = useState('')
    const [fecha_respuesta, setFecha_respuesta] = useState('')
    const [radicado_salida, setRadicado_salida] = useState('')
    const navigate = useNavigate()

    // Función guardar solicitud

    const guardarSolicitud = async (g) => {
        g.preventDefault()
        await axios.post(URL, {
            fecha_solicitud: fecha_solicitud, radicado_entrada: radicado_entrada,
            fecha_respuesta: fecha_respuesta, radicado_salida: radicado_salida
        })
        navigate('/solicitudes/')

    }
    return (
        <div>
            <h4> FORMULARIO GUARDAR SOLICITUD </h4>

            <form onSubmit={guardarSolicitud}>

                <div className='mb-3'>
                    <label className='form-label'> Fecha de solicitud </label>
                    <input value={fecha_solicitud} onChange={(g) => setFecha_solicitud(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Radicado de entrada </label>
                    <input value={radicado_entrada} onChange={(g) => setRadicado_entrada(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Fecha de respuesta </label>
                    <input value={fecha_respuesta} onChange={(g) => setFecha_respuesta(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Radicado de salida </label>
                    <input value={radicado_salida} onChange={(g) => setRadicado_salida(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <button type='submit' className='btn btn-primary'> <i class="fa-solid fa-floppy-disk"></i> </button>

            </form>
        </div>
    )
}
export default CompAgregarSolicitudes;