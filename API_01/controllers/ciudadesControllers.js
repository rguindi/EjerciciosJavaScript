const db = require ('../database/db'); //No requiere extension js

//Funcion para obtener ciudades
const getCiudades = (req,res)=>{         //localhost:3000/ciudades
    db.query('SELECT * FROM ciudades', (err, resultados)=>{
        if(err){
            console.log('Error al obtener los datos', err);
        }else{
            res.json(resultados);
        }
    });

};

//Funcion insertar ciudades
const crearCiudad = (req,res)=>{
const {nuevoNombre, habitantes} = req.body;
db.query( 'INSERT INTO ciudades (nombre, cantidad) VALUES (?,?)',[nuevoNombre, habitantes],(err,resultado)=>{
    if(err){
        console.log('Error al guardar los datos', err);
        res.status(500).json({error:'Error interno en el servidor'});
    } else{
        res.json({recibido:true, nuevoNombre, habitantes, id: resultado.insertid})
    }
});
};


module.exports={
    getCiudades,
    crearCiudad,
};