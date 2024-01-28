const db = require ('../database/db'); //No requiere extension js

//Funcion para obtener ciudades
const getCities = (req,res)=>{        // http://127.0.0.1:3000/world/city   GET
    db.query('SELECT * FROM city', (err, resultados)=>{
        if(err){
            console.error('Error al obtener los datos', err);
        }else{
            res.json(resultados);
        }
    });

};

const getCityById = (req, res) => { //http://127.0.0.1:3000/world/city/:id    GET
    const idRegistro = req.params.id;
 
    // Consulta a la base de datos para obtener el registro por ID
    db.query('SELECT * FROM city WHERE id = ?', [idRegistro], (err, resultados) => {
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
const crearCity = (req,res)=>{      //http://127.0.0.1:3000/world/city/    POST
const {nombre, cp, distrito, poblacion} = req.body;
db.query( 'INSERT INTO city (name, countrycode, district, population) VALUES (?,?,?,?)',[nombre, cp, distrito, poblacion],(err,resultado)=>{
    if(err){
        console.error('Error al guardar los datos', err);
        res.status(500).json({error:'Error interno en el servidor'});
    } else{
        res.json({recibido:true, nombre, cp, distrito, poblacion})
    }
});
};


//modificar ciudad
const putCity = (req,res)=>{
    const idRegistro = req.params.id;
    const {nombre, cp, distrito, poblacion} = req.body;
    const sql = 'UPDATE city SET name = ?, countrycode = ?, district=?, population= ? WHERE ID = ?';
    db.query(sql, [nombre, cp, distrito, poblacion, idRegistro], (err, resultado)=>{
        if(err){
            console.error('Error al guardar los datos', err);
            res.status(500).json({error:'Error interno en el servidor'});
        } else{
            res.json({recibido:true, nombre, cp, distrito, poblacion, id: resultado.idRegistro})

        }
    });
}

// //modificar ciudad
const patchCity = (req,res)=>{
    const idRegistro = req.params.id;
    const {nombre, cp, distrito, poblacion} = req.body;
    const sql = 'UPDATE city SET name = ?, countrycode = ?, district=?, population= ? WHERE ID = ?';
    db.query(sql, [nombre, cp, distrito, poblacion, idRegistro], (err, resultado)=>{
        if(err){
            console.error('Error al guardar los datos', err);
            res.status(500).json({error:'Error interno en el servidor'});
        } else{
            res.json({recibido:true, nombre, cp, distrito, poblacion, id: resultado.idRegistro})

        }
    });
}


// //modificar ciudad. admite numero de parametros variable
const actualizarCity = (req,res)=>{  //http://localhost:3000/city/patch/3
    const idRegistro = req.params.id;
    const {nombre, cp, distrito, poblacion} = req.body;
    const updatedFields = [];
    const updatedValues = [];
    if (nombre!=undefined) {
        updatedValues.push(nombre);
        updatedFields.push('name =?');
    }
    if (cp!=undefined) {
        updatedValues.push(cp);
        updatedFields.push('CountryCode =?');
    }
    if (distrito!=undefined) {
        updatedValues.push(distrito);
        updatedFields.push('District =?');
    }
    if (poblacion!=undefined) {
        updatedValues.push(poblacion);
        updatedFields.push('Population =?');
    }


    const sql = `UPDATE city SET ${updatedFields.join(', ')} WHERE id =?`;
    const queryValues = [...updatedValues, idRegistro];

    db.query(sql, queryValues, (err, resultado)=>{
        if(err){
            console.error('Error al guardar los datos', err);
        } else{
            res.json({recibido:true, nombre, cp, distrito, poblacion, id: resultado.idRegistro})

        }
    });
}

// //borrar ciudad
const deleteCity = (req,res)=>{
    const idRegistro = req.params.id;
    db.query('DELETE FROM city WHERE ID = ?', [idRegistro], (err, resultado)=>{
        if(err){
            console.error('Error al eliminar de la base de datos', err);
            res.status(500).json({error:'Error interno en el servidor'});
        } else{
            //Verificamos si se encontro un registro
            if(resultado.affectedRows>0){
                res.json({mensaje: `Registro con id ${idRegistro} se eliminó correctamente.`});
            }else{
                res.status(404).json({error:  `No se encontró el registro con id ${idRegistro}.`});
            }

        }
    });
}


module.exports={
    getCities,
    getCityById,
    crearCity,
    putCity,
    patchCity,
    actualizarCity,
    deleteCity
};