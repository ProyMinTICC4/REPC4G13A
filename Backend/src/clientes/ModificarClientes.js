// Importamos las extensiones o dependencias que descargamos
import axios from 'axios'; // Buscar
import { useNavigate, useParams } from 'react-router-dom';  // para usar link
import { useState, useEffect } from 'react'; // 

// Le definimos la ruta del módulo que vamos a trabajar
const URL = 'http://localhost:5000/api/clientes/';  // se conecta backend y frontend

// Definimos el componente

const CompEditarClientes = () => {

    const [codigo_usuario, setCodigo_usuario] = useState('')
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [documento, setDocumento] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [direccion, setDireccion] = useState('')
    const Navigate = useNavigate()
    const { id } = useParams() // Esta línea permite traer y modificar el id indicado

    // Función Actualizar Cliente

    const Actualizar = async (a) => {
        a.preventDefault()
        await axios.put(`${URL}${id}`, {
            codigo_usuario: codigo_usuario,
            nombres: nombres,
            apellidos: apellidos,
            documento: documento,
            correo: correo,
            telefono: telefono,
            direccion: direccion,
        })
        Navigate('/clientes/')
    }
    useEffect(() => {
        getClienteById()
        // eslint-disable-next-line
    }, [])

    const getClienteById = async () => {
        const resultado = await axios.get(`${URL}${id}`)

        setCodigo_usuario(resultado.data.codigo_usuario)
        setNombres(resultado.data.nombres)
        setApellidos(resultado.data.apellidos)
        setDocumento(resultado.data.documento)
        setCorreo(resultado.data.correo)
        setTelefono(resultado.data.telefono)
        setDireccion(resultado.data.direccion)
    }
    return (
        <div>
            <h4> FORMULARIO ACTUALIZAR CLIENTE </h4>
            <form onSubmit={Actualizar}>

                <div className='mb-3'>
                    <label className='form-label'> Codigo Usuario </label>
                    <input value={codigo_usuario} onChange={(a) => setCodigo_usuario(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Nombres </label>
                    <input value={nombres} onChange={(a) => setNombres(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Apellidos </label>
                    <input value={apellidos} onChange={(a) => setApellidos(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Documento </label>
                    <input value={documento} onChange={(a) => setDocumento(a.target.value)}
                        type="number" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Correo </label>
                    <input value={correo} onChange={(a) => setCorreo(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Telefono </label>
                    <input value={telefono} onChange={(a) => setTelefono(a.target.value)}
                        type="number" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Direccion </label>
                    <input value={direccion} onChange={(a) => setDireccion(a.target.value)}
                        type="text" className='form-control' />
                </div>

                <button type='submit' className='btn btn-primary'> <i class="fa-solid fa-floppy-disk"></i> </button>

            </form>

        </div>
    )
}
export default CompEditarClientes;