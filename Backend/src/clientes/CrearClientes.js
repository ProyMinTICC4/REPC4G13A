// Importamos las extensiones o dependencias que descargamos
import axios from 'axios'; // Buscar
import { useNavigate } from 'react-router-dom';  // para usar link
import { useState } from 'react'; // 

// Le definimos la ruta del módulo que vamos a trabajar
const URL = 'http://localhost:5000/api/clientes/';  // se conecta backend y frontend

// Creamos el componente que nos va a permitir mostrar los datos que tenemos en la base de datos
const CompAgregarClientes = () => {

    const [codigo_usuario, setCodigo_usuario] = useState('')
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [documento, setDocumento] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [direccion, setDireccion] = useState('')
    const navigate = useNavigate()

    // Función guardar cliente

    const guardarCliente = async (g) => {
        g.preventDefault()
        await axios.post(URL, {
            codigo_usuario: codigo_usuario, nombres: nombres, apellidos: apellidos,
            documento: documento, correo: correo, telefono: telefono, direccion: direccion
        })
        navigate('/clientes/')

    }
    return (
        <div>
            <h4> FORMULARIO GUARDAR CLIENTE </h4>

            <form onSubmit={guardarCliente}>

                <div className='mb-3'>
                    <label className='form-label'> Codigo Usuario </label>
                    <input value={codigo_usuario} onChange={(g) => setCodigo_usuario(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Nombres </label>
                    <input value={nombres} onChange={(g) => setNombres(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Apellidos </label>
                    <input value={apellidos} onChange={(g) => setApellidos(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Documento </label>
                    <input value={documento} onChange={(g) => setDocumento(g.target.value)}
                        type='number' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Correo </label>
                    <input value={correo} onChange={(g) => setCorreo(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Teléfono </label>
                    <input value={telefono} onChange={(g) => setTelefono(g.target.value)}
                        type='number' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Dirección </label>
                    <input value={direccion} onChange={(g) => setDireccion(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <button type='submit' className='btn btn-primary'> <i class="fa-solid fa-floppy-disk"></i> </button>

            </form>
        </div>
    )
}
export default CompAgregarClientes;