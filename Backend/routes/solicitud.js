// Llamamos a express para poderla usar en el router por parametro
const express = require('express');

// Es la variable que vamos a llamar para cargar la ruta
const router = express.Router();

// Crear ruta para llamar a la función Cliente que creamos en Controller
const solicitudController = require('../controllers/solicitudController');

// asignamos las rutas del CRUD
router.get('/', solicitudController.mostrarSolicitudes);
router.post('/', solicitudController.agregarSolicitudes);
router.get('/:id', solicitudController.mostrarSolicitud); /*Este cliente es sin S porque se está llamando por ID
// Este mostrar por id me muestra un cliente en especifico y el otro mostrar me muestras varios clientes*/
router.delete('/:id', solicitudController.eliminarSolicitud);
router.put('/:id', solicitudController.actualizarSolicitud);

// Exportar el módulo
module.exports = router;