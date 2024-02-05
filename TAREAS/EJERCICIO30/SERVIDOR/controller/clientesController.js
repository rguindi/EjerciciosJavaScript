const db = require ('../database/db'); //No requiere extension js

//Funcion para obtener clientes
const getClientes = (req,res)=>{        // http://127.0.0.1:3000/clientes   GET
    db.query('SELECT * FROM clientes', (err, resultados)=>{
        if(err){
            console.error('Error al obtener los datos', err);
        }else{
            res.json(resultados);
        }
    });

};

const getClienteById = (req, res) => { //http://127.0.0.1:3000/clientes/:id    GET
    const id = req.params.id;
 
    // Consulta a la base de datos para obtener el  por ID
    db.query('SELECT * FROM clientes WHERE id = ?', [id], (err, resultados) => {
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

//Funcion insertar clientes
const crearCliente = (req,res)=>{      //http://127.0.0.1:3000/clientes/    POST
const {id, nombre} = req.body;
db.query( 'INSERT INTO clientes (id, nombre) VALUES (?,?)',[id, nombre],(err,resultado)=>{
    if(err){
        console.error('Error al guardar los datos', err);
        res.status(500).json({error:'Error interno en el servidor'});
    } else{
        res.json({recibido:true, id, nombre})
    }
});
};


//modificar 
const putCliente = (req,res)=>{
    const id = req.params.id;
    const {nombre} = req.body;
    const sql = 'UPDATE clientes SET nombre = ? WHERE id = ?';
    db.query(sql, [nombre, id], (err, resultado)=>{
        if(err){
            console.error('Error al guardar los datos', err);
            res.status(500).json({error:'Error interno en el servidor'});
        } else{
            res.json({recibido:true, nombre, id})

        }
    });
}

// //modificar
const patchCliente = (req,res)=>{
    const id = req.params.id;
    const {nombre} = req.body;
    const sql = 'UPDATE clientes SET nombre = ? WHERE id = ?';
    db.query(sql, [nombre, id], (err, resultado)=>{
        if(err){
            console.error('Error al guardar los datos', err);
            res.status(500).json({error:'Error interno en el servidor'});
        } else{
            res.json({recibido:true, nombre, id: resultado.id})

        }
    });
}



// //borrar ciudad
const deleteCliente = (req,res)=>{
    const id = req.params.id;
    db.query('DELETE FROM clientes WHERE id = ?', [id], (err, resultado)=>{
        if(err){
            console.error('Error al eliminar de la base de datos', err);
            res.status(500).json({error:'Error interno en el servidor'});
        } else{
            //Verificamos si se encontro un registro
            if(resultado.affectedRows>0){
                res.json({mensaje: `Registro con id ${id} se eliminó correctamente.`});
            }else{
                res.status(404).json({error:  `No se encontró el registro con id ${id}.`});
            }

        }
    });
}


module.exports={
    getClientes,
    getClienteById,
    crearCliente,
    putCliente,
    patchCliente,
    deleteCliente
};