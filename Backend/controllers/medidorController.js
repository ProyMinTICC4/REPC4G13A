const Medidor = require('../models/Medidor');

// 1 Función para mostrar o consultar los medidores
exports.mostrarMedidores = async (req, res) => {

    try {
        const medidores = await Medidor.find();
        res.json(medidores)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al consultar los medidores')
    }

}

// 2 Función agregar medidores nuevos
exports.agregarMedidor = async (req, res) => {

    try {
        let medidores;
        medidores = new Medidor(req.body)
        await medidores.save();
        res.send(medidores);

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al agregar el medidor')
    }

}

// 3 Función para mostrar un medidor especifico por Id
exports.mostrarMedidor = async (req, res) => {

    try {
        let medidores = await Medidor.findById(req.params.id);

        if (!medidores) {
            res.status(404).json({ msg: "No se encuentra el medidor" })
        }

        res.send(medidores)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al consultar el medidor')
    }

}

// 4 Función para eliminar medidor
exports.eliminarMedidor = async (req, res) => {

    try {
        let medidores = await Medidor.findById(req.params.id);

        if (!medidores) {
            res.status(404).json({ msg: "El medidor digitado no existe " })
            return
        }

        await Medidor.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: "El medidor ha sido eliminado correctamente" });

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al eliminar el medidor')
    }

}

// 5 Función actualizar medidor

exports.actualizarMedidor = async (req, res) => {

    try {
        const { diametro_acometida, diametro_medidor, serie_medidor, lectura_inicial, certificado_calibracion, sello_medidor, sello_empresa } = req.body;
        let medidores = await Medidor.findById(req.params.id);

        if (!medidores) {
            res.status(404).json({ msg: "El medidor no existe" })
        }

        medidores.diametro_acometida = diametro_acometida;
        medidores.diametro_medidor = diametro_medidor;
        medidores.serie_medidor = serie_medidor;
        medidores.lectura_inicial = lectura_inicial;
        medidores.certificado_calibracion = certificado_calibracion;
        medidores.sello_medidor = sello_medidor;
        medidores.sello_empresa = sello_empresa;

        medidores = await Medidor.findByIdAndUpdate({ _id: req.params.id }, medidores, { new: true });
        res.json(medidores);

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error en el servidor')
    }
}
