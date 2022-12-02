import logo from './logo.svg';
import './App.css';

// importamos los componentes del módulo Cliente
import CompMostrarClientes from './clientes/MostrarClientes';
import CompAgregarClientes from './clientes/CrearClientes';
import CompEditarClientes from './clientes/ModificarClientes';

// importamos los componentes del módulo Medidor
import CompMostrarMedidores from './medidores/MostrarMedidores';
import CompAgregarMedidores from './medidores/CrearMedidores';
import CompEditarMedidores from './medidores/ModificarMedidores';

// importamos los componentes del módulo Predio
import CompMostrarPredios from './predios/MostrarPredios';
import CompAgregarPredios from './predios/CrearPredios';
import CompEditarPredios from './predios/ModificarPredios';

// importamos los componentes del módulo Solicitud
import CompMostrarSolicitudes from './solicitudes/MostrarSolicitudes';
import CompAgregarSolicitudes from './solicitudes/CrearSolicitudes';
import CompEditarSolicitudes from './solicitudes/ModificarSolicitudes';

// Importamos las rutas
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/clientes/' element={<CompMostrarClientes />} />
          <Route path='/clientes/agregar' element={<CompAgregarClientes />} />
          <Route path='/clientes/editar/:id' element={<CompEditarClientes />} />

          <Route path='/medidores/' element={<CompMostrarMedidores />} />
          <Route path='/medidores/agregar' element={<CompAgregarMedidores />} />
          <Route path='/medidores/editar/:id' element={<CompEditarMedidores />} />

          <Route path='/predios/' element={<CompMostrarPredios />} />
          <Route path='/predios/agregar' element={<CompAgregarPredios />} />
          <Route path='/predios/editar/:id' element={<CompEditarPredios />} />

          <Route path='/solicitudes/' element={<CompMostrarSolicitudes />} />
          <Route path='/solicitudes/agregar' element={<CompAgregarSolicitudes />} />
          <Route path='/solicitudes/editar/:id' element={<CompEditarSolicitudes />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;