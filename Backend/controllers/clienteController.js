const Cliente = require('../models/Cliente');

// 1 Función para mostrar o consultar los clientes 
exports.mostrarClientes = async (req, res) => {

    try {
        const clientes = await Cliente.find();
        res.json(clientes)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al consultar los clientes')
    }

}

// 2 Función agregar clientes nuevos
exports.agregarClientes = async (req, res) => {

    try {
        let clientes;
        clientes = new Cliente(req.body)
        await clientes.save();
        res.send(clientes);

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al agregar el cliente')
    }

}

// 3 Función para mostrar un cliente especifico por Id
exports.mostrarCliente = async (req, res) => {

    try {
        let clientes = await Cliente.findById(req.params.id);

        if (!clientes) {
            res.status(404).json({ msg: "No se encuentra el cliente" })
        }

        res.send(clientes)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al consultar el cliente')
    }

}

// 4 Función para eliminar cliente
exports.eliminarCliente = async (req, res) => {

    try {
        let clientes = await Cliente.findById(req.params.id);

        if (!clientes) {
            res.status(404).json({ msg: "El cliente digitado no existe " })
            return
        }

        await Cliente.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: "El cliente ha sido eliminado correctamente" });

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al eliminar el cliente')
    }

}

// 5 Función actualizar Cliente

exports.actualizarCliente = async (req, res) => {

    try {
        const { nombres, apellidos, documento, correo, telefono, direccion } = req.body;
        let clientes = await Cliente.findById(req.params.id);

        if (!clientes) {
            res.status(404).json({msg: "El cliente no existe" })
        }

        clientes.nombres = nombres;
        clientes.apellidos = apellidos;
        clientes.documento = documento;
        clientes.correo = correo;
        clientes.telefono = telefono;
        clientes.direccion = direccion;

        clientes = await Cliente.findByIdAndUpdate({ _id: req.params.id }, clientes, { new: true });
        res.json(clientes);

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error en el servidor')
        res.status(500).send('Hubo un error en el servidor')
    }
}


  


