const db = require ('../database/db'); //No requiere extension js

//Funcion para obtener ciudades
const getCiudades = (req,res)=>{         //localhost:3000/ciudades
    db.query('SELECT * FROM ciudades', (err, resultados)=>{
        if(err){
            console.error('Error al obtener los datos', err);
        }else{
            res.json(resultados);
        }
    });

};

const getCiudadById = (req, res) => { //http://localhost:3000/ciudades/registro/3
    const idRegistro = req.params.id;
 
    // Consulta a la base de datos para obtener el registro por ID
    db.query('SELECT * FROM ciudades WHERE id = ?', [idRegistro], (err, resultados) => {
      if (err) {
        console.error('Error al obtener el registro desde la base de datos:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
      } else {
        // Verifica si se encontró un registro
        if (resultados.length > 0) {
          res.json(resultados[0]); // Devuelve el primer resultado encontrado (debería ser único)
        } else {
          res.status(404).json({ error: 'Registro no encontrado' });
        }
      }
    });
  };

//Funcion insertar ciudades
const crearCiudad = (req,res)=>{
const {nuevoNombre, habitantes} = req.body;
db.query( 'INSERT INTO ciudades (nombre, cantidad) VALUES (?,?)',[nuevoNombre, habitantes],(err,resultado)=>{
    if(err){
        console.error('Error al guardar los datos', err);
        res.status(500).json({error:'Error interno en el servidor'});
    } else{
        res.json({recibido:true, nuevoNombre, habitantes, id: resultado.insertid})
    }
});
};


//modificar ciudad
const putCiudad = (req,res)=>{
    const idRegistro = req.params.id;
    const {nuevoNombre, habitantes} = req.body;
    const sql = 'UPDATE ciudades SET nombre = ?, cantidad = ? WHERE ID = ?';
    db.query(sql, [nuevoNombre, habitantes, idRegistro], (err, resultado)=>{
        if(err){
            console.error('Error al guardar los datos', err);
            res.status(500).json({error:'Error interno en el servidor'});
        } else{
            res.json({recibido:true, nuevoNombre, habitantes, id: resultado.idRegistro})

        }
    });
}

//modificar ciudad
const patchCiudad = (req,res)=>{
    const idRegistro = req.params.id;
    const {nuevoNombre, habitantes} = req.body;
    const sql = 'UPDATE ciudades SET nombre = ?, cantidad = ? WHERE ID = ?';
    db.query(sql, [nuevoNombre, habitantes, idRegistro], (err, resultado)=>{
        if(err){
            console.error('Error al guardar los datos', err);
            res.status(500).json({error:'Error interno en el servidor'});
        } else{
            res.json({recibido:true, nuevoNombre, habitantes, id: resultado.idRegistro})

        }
    });
}


//modificar ciudad
const actualizarCiudad = (req,res)=>{  //http://localhost:3000/ciudades/3
    const idRegistro = req.params.id;
    const {nuevoNombre, habitantes} = req.body;
    const updatedFields = [];
    const updatedValues = [];
    if (nuevoNombre!=undefined) {
        updatedValues.push(nuevoNombre);
        updatedFields.push('nombre =?');
    }
    if (habitantes!=undefined) {
        updatedValues.push(habitantes);
        updatedFields.push('cantidad =?');
    }


    const sql = `UPDATE ciudades SET ${updatedFields.join(', ')} WHERE id =?`;
    const queryValues = [...updatedValues, idRegistro];

    db.query(sql, queryValues, (err, resultado)=>{
        if(err){
            console.error('Error al guardar los datos', err);
        } else{
            res.json({recibido:true, nuevoNombre, habitantes, id: resultado.idRegistro})

        }
    });
}


module.exports={
    getCiudades,
    crearCiudad,
    getCiudadById,
    putCiudad,
    patchCiudad,
    actualizarCiudad
};