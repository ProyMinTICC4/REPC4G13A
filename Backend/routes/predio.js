// Llamamos a express para poderla usar en el router por parametro
const express = require('express');

// Es la variable que vamos a llamar para cargar la ruta
const router = express.Router();

// Crear ruta para llamar a la función Predio que creamos en Controller
const predioController = require('../controllers/predioController');

// asignamos las rutas del CRUD
router.get('/', predioController.mostrarPredios);
router.post('/', predioController.agregarPredios);

router.get('/:id', predioController.mostrarPredio); 
/*Este predio es sin S porque se está llamando por ID
// Este mostrar por id me muestra un predio en especifico y el otro mostrar me muestras varios predios*/
// router.delete('/:id', predioController.eliminarPredio);

router.delete('/:id', predioController.eliminarPredio);
router.put('/:id', predioController.actualizarPredio);


// Exportar el módulo
module.exports = router;