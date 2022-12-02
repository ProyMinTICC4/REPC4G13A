// Importamos las extensiones o dependencias que descargamos
import axios from 'axios'; // Buscar
import { useNavigate } from 'react-router-dom';  // para usar link
import { useState } from 'react'; // 

// Le definimos la ruta del módulo que vamos a trabajar
const URL = 'http://localhost:5000/api/medidores/';  // se conecta backend y frontend

// Creamos el componente que nos va a permitir mostrar los datos que tenemos en la base de datos
const CompAgregarMedidores = () => {

    const [diametro_acometida, setDiametro_acometida] = useState('')
    const [diametro_medidor, setDiametro_medidor] = useState('')
    const [serie_medidor, setSerie_medidor] = useState('')
    const [lectura_inicial, setLectura_inicial] = useState('')
    const [certificado_calibracion, setCertificado_calibracion] = useState('')
    const [sello_medidor, setSello_medidor] = useState('')
    const [sello_empresa, setSello_empresa] = useState('')
    const navigate = useNavigate()

    // Función guardar medidor

    const guardarMedidor = async (g) => {
        g.preventDefault()
        await axios.post(URL, {
            diametro_acometida: diametro_acometida, diametro_medidor: diametro_medidor, serie_medidor: serie_medidor,
            lectura_inicial: lectura_inicial, certificado_calibracion: certificado_calibracion, sello_medidor: sello_medidor, sello_empresa: sello_empresa
        })
        navigate('/medidores/')

    }
    return (
        <div>
            <h4> FORMULARIO GUARDAR MEDIDOR </h4>

            <form onSubmit={guardarMedidor}>

                <div className='mb-3'>
                    <label className='form-label'> Diametro de la Acometida </label>
                    <input value={diametro_acometida} onChange={(g) => setDiametro_acometida(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Diametro del Medidor </label>
                    <input value={diametro_medidor} onChange={(g) => setDiametro_medidor(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> No Serie del Medidor </label>
                    <input value={serie_medidor} onChange={(g) => setSerie_medidor(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Lectura inicial del Medidor </label>
                    <input value={lectura_inicial} onChange={(g) => setLectura_inicial(g.target.value)}
                        type='number' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Certificado de Calibración </label>
                    <input value={certificado_calibracion} onChange={(g) => setCertificado_calibracion(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Sello del Medidor </label>
                    <input value={sello_medidor} onChange={(g) => setSello_medidor(g.target.value)}
                        type='number' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Sello de la Empresa </label>
                    <input value={sello_empresa} onChange={(g) => setSello_empresa(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <button type='submit' className='btn btn-primary'> <i class="fa-solid fa-floppy-disk"></i> </button>

            </form>
        </div>
    )
}
export default CompAgregarMedidores;