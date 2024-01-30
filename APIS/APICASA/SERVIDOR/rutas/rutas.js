const express=require('express');     
const rutas = express.Router();
const worldController= require('../controller/worldController');

//Ruta para obtener datos de la BD
//Cambiamos app por la nueva constante rutas
rutas.get('/city', worldController.getCities);
rutas.get('/city/:id', worldController.getCityById);  //:id indica q es un parametro
rutas.post('/city', worldController.crearCity); 
rutas.put('/city/:id', worldController.putCity); 
rutas.patch('/city/:id', worldController.patchCity); 
rutas.patch('/city/patch/:id', worldController.actualizarCity); 
rutas.delete('/city/:id', worldController.deleteCity);

//exportamos la constante routes
module.exports = rutas;