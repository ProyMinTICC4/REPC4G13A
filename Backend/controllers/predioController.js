const Predio = require('../models/Predio');


// 1 Función para mostrar o consultar los predios
exports.mostrarPredios = async(req,res) => {

try {
    const predios = await Predio.find();
    res.json(predios)
    
} catch (error) {
    console.log(error)
    res.status(500).send('Hubo un error al consultar los predios')    
}

}

// 2 Función agregar predios nuevos
exports.agregarPredios = async(req,res) => {

try {
    let predios;
    predios = new Predio(req.body)
    await predios.save();
    res.send(predios);

} catch (error) {
    console.log(error)
    res.status(500).send('Hubo un error al agregar el predio')  
}

}

// 3 Función para mostrar un cliente especifico por Id
exports.mostrarPredio = async(req,res) => {

try {
    let predios = await Predio.findById(req.params.id);
    
    if(!predios){
        res.status(404).json({msg: "No se encuentra el predio"})
    }
    
    res.send(predios)

} catch (error) {
    console.log(error)
    res.status(500).send('Hubo un error al consultar el predio')  
}

}

// 4 Función para eliminar cliente
exports.eliminarPredio = async(req,res) => {

try {
    let predios = await Predio.findById(req.params.id);

    if(!predios){
        res.status(404).json({msg: "El predio digitado no existe "})
    }

    await Predio.findOneAndRemove({_id: req.params.id});
    res.json({msg: "El predio ha sido eliminado correctamente"});
    
} catch (error) {
    console.log(error)
    res.status(500).send('Hubo un error al eliminar el predio')  
}

}

// 5 Función actualizar predio
exports.actualizarPredio = async (req, res) => {

    try {
        const { ruta, comuna, barrio, nomenclatura, registro_catastral, tradicion_libertad, uso, estrato, tipo_uso, conexion_acueducto, conexion_alcantarillado } = req.body;
        let predios = await Predio.findById(req.params.id);

        if (!predios) {
            res.status(404).json({msg: "El predio no existe" })
        }

        predios.ruta = ruta;
        predios.comuna = comuna;
        predios.barrio = barrio;
        predios.nomenclatura = nomenclatura;
        predios.registro_catastral = registro_catastral;
        predios.tradicion_libertad = tradicion_libertad;
        predios.uso = uso;
        predios.estrato = estrato;
        predios.tipo_uso = tipo_uso;
        predios.conexion_acueducto = conexion_acueducto;
        predios.conexion_alcantarillado = conexion_alcantarillado;
        

        predios = await Predio.findByIdAndUpdate({ _id: req.params.id }, predios, { new: true });
        res.json(predios);

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error en el servidor')
    }
}