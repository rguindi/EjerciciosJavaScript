const express=require('express');     
const rutasClientes = express.Router();
const clientesController= require('../controllers/clientesControllers');

//Ruta para obtener datos de la BD
//Cambiamos app por la nueva constante rutasclientes
rutasClientes.get('/', clientesController.getClientes);
rutasClientes.post('/', clientesController.crearCliente);  
rutasClientes.get('/:id', clientesController.getClienteById);  //:id indica q es un parametro
rutasClientes.put('/put/:id', clientesController.putCliente); 
rutasClientes.patch('/patch/:id', clientesController.patchCliente); 
rutasClientes.patch('/:id', clientesController.actualizarCliente); 
rutasClientes.delete('/:id', clientesController.deleteCliente);
rutasClientes.get('/:letraA/:letraB/:producto', clientesController.getClientesByNombreByProducto);


//exportamos la constante routes
module.exports = rutasClientes;