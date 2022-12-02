// Llamamos a express para poderla usar en el router por parametro
const express = require('express');

// Es la variable que vamos a llamar para cargar la ruta
const router = express.Router();

// Crear ruta para llamar a la función medidor que creamos en Controller
const medidorController = require('../controllers/medidorController');

// asignamos las rutas del CRUD
router.get('/', medidorController.mostrarMedidores);
router.post('/', medidorController.agregarMedidor);
router.get('/:id', medidorController.mostrarMedidor); /*Este cliente es sin S porque se está llamando por ID
// Este mostrar por id me muestra un cliente en especifico y el otro mostrar me muestras varios clientes*/
router.delete('/:id', medidorController.eliminarMedidor);
router.put('/:id', medidorController.actualizarMedidor);

// Exportar el módulo
module.exports = router;