const mongoose = require ('mongoose');

// Este modelo debe ser igual al esquema de la base de datos

const solicitudSchema = mongoose.Schema({
    
    fecha_solicitud:{
        type:String,
        required:true
    },
    
    radicado_entrada:{
        type:String,
        required:true
    },
    
    fecha_respuesta:{
        type:String,
        required:true
    },

    radicado_salida:{
        type:String,
        required:true
    }   
    
    
},{versionkey: false});
module.exports = mongoose.model('Solicitud', solicitudSchema);