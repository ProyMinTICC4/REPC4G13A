const mongoose = require ('mongoose');

// Este modelo debe ser igual al esquema de la base de datos

const predioSchema = mongoose.Schema({
    
    ruta:{
        type:String,
        required:true
    },
    
    comuna:{
        type:Number,
        required:true
    },
    
    barrio:{
        type:String,
        required:true
    },

    nomenclatura:{
        type:String,
        required:true
    },

    registro_catastral:{
        type:String,
        required:true
    },

    tradicion_libertad:{
        type:String,
        required:true
    },
    
    uso:{
        type:String,
        required:true
    },

    estrato:{
        type:String,
        required:true
    },

    tipo_uso:{
        type:String,
        required:true
    },

    conexion_acueducto:{
        type:String,
        required:true
    },

    conexion_alcantarillado:{
        type:String,
        required:true
    }
    
},{versionkey: false});
module.exports = mongoose.model('Predio', predioSchema);