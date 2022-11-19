const mongoose = require ('mongoose');
require('dotenv').config();

const conectarBD = () => {
    
// conecxión con mongo

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("Esta conectado con mongodb"))
.catch((err) => console.error(err));

}


module.exports = conectarBD;