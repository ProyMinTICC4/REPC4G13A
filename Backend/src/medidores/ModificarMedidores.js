// Importamos las extensiones o dependencias que descargamos
import axios from 'axios'; // Buscar
import { useNavigate, useParams } from 'react-router-dom';  // para usar link
import { useState, useEffect } from 'react'; // 

// Le definimos la ruta del módulo que vamos a trabajar
const URL = 'http://localhost:5000/api/medidores/';  // se conecta backend y frontend

// Definimos el componente

const CompEditarMedidores = () => {

    const [diametro_acometida, setDiametro_acometida] = useState('')
    const [diametro_medidor, setDiametro_medidor] = useState('')
    const [serie_medidor, setSerie_medidor] = useState('')
    const [lectura_inicial, setLectura_inicial] = useState('')
    const [certificado_calibracion, setCertificado_calibracion] = useState('')
    const [sello_medidor, setSello_medidor] = useState('')
    const [sello_empresa, setSello_empresa] = useState('')
    const Navigate = useNavigate()
    const { id } = useParams() // Esta línea permite traer y modificar el id indicado

    // Función Actualizar Medidor

    const Actualizar = async (a) => {
        a.preventDefault()
        await axios.put(`${URL}${id}`, {
            diametro_acometida: diametro_acometida,
            diametro_medidor: diametro_medidor,
            serie_medidor: serie_medidor,
            lectura_inicial: lectura_inicial,
            certificado_calibracion: certificado_calibracion,
            sello_medidor: sello_medidor,
            sello_empresa: sello_empresa,
        })
        Navigate('/medidores/')
    }
    useEffect(() => {
        getMedidorById()
        // eslint-disable-next-line
    }, [])

    const getMedidorById = async () => {
        const resultado = await axios.get(`${URL}${id}`)

        setDiametro_acometida(resultado.data.diametro_acometida)
        setDiametro_medidor(resultado.data.diametro_medidor)
        setSerie_medidor(resultado.data.serie_medidor)
        setLectura_inicial(resultado.data.lectura_inicial)
        setCertificado_calibracion(resultado.data.certificado_calibracion)
        setSello_medidor(resultado.data.sello_medidor)
        setSello_empresa(resultado.data.sello_empresa)
    }
    return (
        <div>
            <h4> FORMULARIO ACTUALIZAR MEDIDOR </h4>
            <form onSubmit={Actualizar}>

                <div className='mb-3'>
                    <label className='form-label'> Diametro Acometida </label>
                    <input value={diametro_acometida} onChange={(a) => setDiametro_acometida(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Diametro Medidor </label>
                    <input value={diametro_medidor} onChange={(a) => setDiametro_medidor(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> No Serie del Medidor </label>
                    <input value={serie_medidor} onChange={(a) => setSerie_medidor(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Lectura Inicial </label>
                    <input value={lectura_inicial} onChange={(a) => setLectura_inicial(a.target.value)}
                        type="number" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Certificado de Calibracion </label>
                    <input value={certificado_calibracion} onChange={(a) => setCertificado_calibracion(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Sello del Medidor </label>
                    <input value={sello_medidor} onChange={(a) => setSello_medidor(a.target.value)}
                        type="number" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Sello de la Empresa </label>
                    <input value={sello_empresa} onChange={(a) => setSello_empresa(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <button type='submit' className='btn btn-primary'> <i class="fa-solid fa-floppy-disk"></i> </button>

            </form>
        </div>
    )
}
export default CompEditarMedidores;