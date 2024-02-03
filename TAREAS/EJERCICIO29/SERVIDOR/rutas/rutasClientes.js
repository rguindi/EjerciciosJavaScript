const express=require('express');     
const rutasClientes = express.Router();
const clientesController= require('../controller/clientesController');

//Ruta para obtener datos de la BD
//Cambiamos app por la nueva constante rutasClientes
rutasClientes.get('/', clientesController.getClientes);
rutasClientes.get('/:id', clientesController.getClienteById);  //:id indica q es un parametro
rutasClientes.post('/', clientesController.crearCliente); 
rutasClientes.put('/:id', clientesController.putCliente); 
rutasClientes.patch('/:id', clientesController.patchCliente); 
rutasClientes.delete('/:id', clientesController.deleteCliente);

//exportamos la constante routes
module.exports = rutasClientes;