// Llamamos a express para poderla usar en el router por parametro
const express = require('express');

// Es la variable que vamos a llamar para cargar la ruta
const router = express.Router();

// Crear ruta para llamar a la función Cliente que creamos en Controller
const clienteController = require('../controllers/clienteController');

// asignamos las rutas del CRUD
router.get('/', clienteController.mostrarClientes);
router.post('/', clienteController.agregarClientes);
router.get('/:id', clienteController.mostrarCliente); /*Este cliente es sin S porque se está llamando por ID
// Este mostrar por id me muestra un cliente en especifico y el otro mostrar me muestras varios clientes*/
router.delete('/:id', clienteController.eliminarCliente);
router.put('/:id', clienteController.actualizarCliente);

// Exportar el módulo
module.exports = router;