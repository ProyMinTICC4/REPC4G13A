const Solicitud = require('../models/Solicitud');


// 1 Función para mostrar o consultar las solicitudes
exports.mostrarSolicitudes = async(req,res) => {

try {
    const solicitudes = await Solicitud.find();
    res.json(solicitudes)
    
} catch (error) {
    console.log(error)
    res.status(500).send('Hubo un error al consultar las solicitudes')    
}

}

// 2 Función agregar solicitudes nuevas
exports.agregarSolicitudes = async(req,res) => {

try {
    let solicitudes;
    solicitudes = new Solicitud(req.body)
    await solicitudes.save();
    res.send(solicitudes);

} catch (error) {
    console.log(error)
    res.status(500).send('Hubo un error al agregar la solicitud')  
}

}

// 3 Función para mostrar una solicitud en especifico por Id
exports.mostrarSolicitud = async(req,res) => {

try {
    let solicitudes = await Solicitud.findById(req.params.id);
    
    if(!solicitudes){
        res.status(404).json({msg: "No se encuentra la solicitud"})
    }
    
    res.send(solicitudes)

} catch (error) {
    console.log(error)
    res.status(500).send('Hubo un error al consultar la solicitud')  
}

}

// 4 Función para eliminar solicitud
exports.eliminarSolicitud = async(req,res) => {

try {
    let solicitudes = await Solicitud.findById(req.params.id);

    if(!solicitudes){
        res.status(404).json({msg: "La solicitud digitada no existe "})
    }

    await Solicitud.findOneAndRemove({_id: req.params.id});
    res.json({msg: "La solicitud ha sido eliminada correctamente"});
    
} catch (error) {
    console.log(error)
    res.status(500).send('Hubo un error al eliminar la solicitud')  
}

}

// 5 Función actualizar una solicitud
exports.actualizarSolicitud= async (req, res) => {

    try {
        const { fecha_solicitud, radicado_entrada, fecha_respuesta, radicado_salida } = req.body;
        let solicitudes = await Solicitud.findById(req.params.id);

        if (!solicitudes) {
            res.status(404).json({msg: "La solicitud no existe" })
        }

        solicitudes.fecha_solicitud = fecha_solicitud;
        solicitudes.radicado_entrada = radicado_entrada;
        solicitudes.fecha_respuesta = fecha_respuesta;
        solicitudes.radicado_salida = radicado_salida;    
        

        solicitudes = await Solicitud.findByIdAndUpdate({ _id: req.params.id }, solicitudes, { new: true });
        res.json(solicitudes);

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error en el servidor')
    }
}