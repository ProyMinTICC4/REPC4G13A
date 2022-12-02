const mongoose = require('mongoose');

// Este modelo debe ser igual al esquema de la base de datos

const medidorSchema = mongoose.Schema({

    diametro_acometida: {
        type: String,
        required: true
    },

    diametro_medidor: {
        type: String,
        required: true
    },

    serie_medidor: {
        type: String,
        required: true
    },

    lectura_inicial: {
        type: String,
        required: true
    },

    certificado_calibracion: {
        type: String,
        required: true
    },

    sello_medidor: {
        type: String,
        required: true
    },

    sello_empresa: {
        type: String,
        required: true
    }

}, { versionkey: false });
module.exports = mongoose.model('Medidor', medidorSchema);