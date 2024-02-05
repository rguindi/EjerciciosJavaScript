const express=require('express');     
const rutasProductos = express.Router();
const productosController= require('../controller/productosController');

//Ruta para obtener datos de la BD
//Cambiamos app por la nueva constante rutasProductos
rutasProductos.get('/', productosController.getProductos);
rutasProductos.get('/:id', productosController.getProductoById);  //:id indica q es un parametro
rutasProductos.post('/', productosController.crearProducto); 
rutasProductos.get('/categoria/:nombreCategoria', productosController.getProductoByNombreCategoria);


//exportamos la constante routes
module.exports = rutasProductos;