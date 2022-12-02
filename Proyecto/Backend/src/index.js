const express = require('express');
const conectarBD = require('../config/db');
const cors = require('cors')


const app = express();
const port = 5000;


// enlazar la conexión con la base de datos
conectarBD(); // conecta la base de datos con el backend
app.use(cors());


//Se llama la ruta principal de cada CRUD
app.use(express.json());
app.use('/api/clientes', require('../routes/cliente'));
app.use('/api/predios', require('../routes/predio'));
app.use('/api/medidores', require('../routes/medidor'));
app.use('/api/solicitudes', require('../routes/solicitud'));

app.get('/', (req, res) => {
    res.send("Bienvenido ya está configurado su servidor");
});

app.listen(port, () => console.log('Está conectado el servidor por el puerto', port));