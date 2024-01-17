const express=require('express');     
const rutasCiudades = express.Router();
const ciudadesController= require('../controllers/ciudadesControllers');

//Ruta para obtener datos de la BD
//Cambiamos app por la nueva constante rutasciudades
rutasCiudades.get('/', ciudadesController.getCiudades);
rutasCiudades.post('/add', ciudadesController.crearCiudad);

//exportamos la constante routes
module.exports = rutasCiudades;