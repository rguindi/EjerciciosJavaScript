const express=require('express');           //npm -i express
const cors = require ('cors');
const app=express();
// const mysql = require('mysql');
const rutasCiudades = require('./rutas/rutas_ciudades');
const puerto=3000;

app.use(cors());

app.use(express.json());    //MIddelware para parsear el cuerpo de las peticiones en JSON

app.use('/ciudades', rutasCiudades); //Asi ciudades es la raiz en rutasciudades




// app.get('/',(req, res)=>{
//     res.send('Hola, estas en mi API');
// });

// app.get('/api/datos',(req, res)=>{
//     const datos={
//         mensaje:'Lista de datos',
//         nombre:'Juan',
//         edad: 25
//     }
//     res.json(datos);
    
// });

// app.post('/api/enviar', (req, res)=>{
//     const {mensaje}=req.body;
//     res.json({recibido:true, mensaje});
// });

app.listen(puerto,()=>{
    console.log(`Servidor escuchando en el puerto${puerto}`);
});