const express=require('express');     
const rutasCategorias = express.Router();
const categoriasController= require('../controller/categoriasController');

//Ruta para obtener datos de la BD
//Cambiamos app por la nueva constante rutasCategorias
rutasCategorias.get('/', categoriasController.getCategorias);
rutasCategorias.get('/:id', categoriasController.getCategoriaById);  //:id indica q es un parametro
rutasCategorias.post('/', categoriasController.crearCategoria); 
rutasCategorias.put('/:id', categoriasController.putCategoria); 
rutasCategorias.patch('/:id', categoriasController.patchCategoria); 
rutasCategorias.delete('/:id', categoriasController.deleteCategoria);

//exportamos la constante routes
module.exports = rutasCategorias;