const db = require ('../database/db'); //No requiere extension js

//Funcion para obtener clientes
const getClientes = (req,res)=>{         //localhost:3000/clientes
    db.query('SELECT * FROM cliente', (err, resultados)=>{
        if(err){
            console.error('Error al obtener los datos', err);
        }else{
            res.json(resultados);
        }
    });

};

const getClienteById = (req, res) => { //http://localhost:3000/clientes/registro/3
    const id = req.params.id;
 
    // Consulta a la base de datos para obtener el registro por ID
    db.query('SELECT * FROM cliente WHERE id_cliente = ?', [id], (err, resultados) => {
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
const crearCliente = (req,res)=>{
const {id_cliente, nombre, direccion, telefono} = req.body;
db.query( 'INSERT INTO cliente (id_cliente, nombre, direccion, telefono) VALUES (?,?,?,?)',[id_cliente, nombre, direccion, telefono],(err,resultado)=>{
    if(err){
        console.error('Error al guardar los datos', err);
        res.status(500).json({error:'Error interno en el servidor'});
    } else{
        res.json({recibido:true, id_cliente, nombre, direccion, telefono})
    }
});
};


//modificar Cliente
const putCliente = (req,res)=>{
    const id_cliente = req.params.id;
    const {nombre, direccion, telefono} = req.body;
    const sql = 'UPDATE cliente SET nombre = ?, direccion=?, telefono=? WHERE id_cliente = ?';
    db.query(sql, [nombre, direccion, telefono, id_cliente], (err, resultado)=>{
        if(err){
            console.error('Error al guardar los datos', err);
            res.status(500).json({error:'Error interno en el servidor'});
        } else{
            res.json({recibido:true,id_cliente, nombre, direccion, telefono})

        }
    });
}

//modificar Cliente
const patchCliente = (req,res)=>{
    const id = req.params.id;
    const {nombre, direccion, telefono} = req.body;
    const sql = 'UPDATE cliente SET nombre = ?, direccion=?, telefono=? WHERE id_cliente = ?';
    db.query(sql, [nombre, direccion, telefono, id], (err, resultado)=>{
        if(err){
            console.error('Error al guardar los datos', err);
            res.status(500).json({error:'Error interno en el servidor'});
        } else{
            res.json({recibido:true, nombre, direccion, telefono, id: resultado.id})

        }
    });
}


//modificar Cliente
const actualizarCliente = (req,res)=>{  //http://localhost:3000/clientes/3
    const id = req.params.id;
    const {nombre, direccion, telefono} = req.body;
    const updatedFields = [];
    const updatedValues = [];
    if (nombre!=undefined) {
        updatedValues.push(nombre);
        updatedFields.push('nombre =?');
    }
    if (direccion!=undefined) {
        updatedValues.push(direccion);
        updatedFields.push('direccion =?');
    }
    if (telefono!=undefined) {
        updatedValues.push(telefono);
        updatedFields.push('telefono =?');
    }
    const sql = `UPDATE cliente SET ${updatedFields.join(', ')} WHERE id_cliente =?`;
    const queryValues = [...updatedValues, id];

    db.query(sql, queryValues, (err, resultado)=>{
        if(err){
            console.error('Error al guardar los datos', err);
        } else{
            res.json({recibido:true, nombre, direccion, telefono, id: resultado.id})

        }
    });
}

//borrar Cliente
const deleteCliente = (req,res)=>{
    const id = req.params.id;
    db.query('DELETE FROM cliente WHERE  id_cliente= ?', [id], (err, resultado)=>{
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

//Clientes cuyo nombre empiexe por X o por X y hayan comprado el producto X
const getClientesByNombreByProducto = (req, res) => {
    try {
      // Obtén los valores de las letras y el producto desde los parámetros de consulta
    const letraA = req.params.letraA+"%" || ''; 
    const letraB = req.params.letraB+"%" || '';
    const producto = req.params.producto || '';
  
      console.log(letraA);
      console.log(letraB);
      console.log(producto);
  
      // Ejecuta la consulta SQL para obtener clientes en el rango especificado
      db.query('SELECT * FROM cliente c join compra co on c.id_cliente=co.id_cliente join producto p on co.id_producto=p.id_producto WHERE (c.nombre LIKE ? OR c.nombre LIKE ?) AND p.id_producto LIKE ?', [letraA, letraB, producto], (err, resultados) => {
        if (err) {
          console.error("Error en la consulta:", err);
          res.status(500).json({ error: 'Error interno del Servidor' });
        } else {
          // Verificamos si se encontró algo
          if (resultados.length > 0) {
            res.json({ clientes: resultados });
          } else {
            res.status(404).json({ error: `No se encontraron clientes con esos requisitos` });
          }
        }
      });
    }
    catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error interno del Servidor' });
        }
    }


// const getClientesByHabitantes = (req, res) => {
//     try {
//       // Obtén los valores mínimos y máximos del rango desde los parámetros de consulta
//       const minHabitantes = parseInt(req.params.min, 10) || 0; // Valor mínimo, por defecto 0
//       const maxHabitantes = parseInt(req.params.max, 10) || Number.MAX_SAFE_INTEGER; // Valor máximo, por defecto infinito
  
//       console.log(minHabitantes);
//       console.log(maxHabitantes);
  
//       // Ejecuta la consulta SQL para obtener clientes en el rango especificado
//       db.query('SELECT * FROM clientes WHERE cantidad BETWEEN ? AND ?', [minHabitantes, maxHabitantes], (err, resultados) => {
//         if (err) {
//           console.error("Error en la consulta:", err);
//           res.status(500).json({ error: 'Error interno del Servidor' });
//         } else {
//           // Verificamos si se encontró algo
//           if (resultados.length > 0) {
//             res.json({ clientes: resultados });
//           } else {
//             res.status(404).json({ error: `No se encontraron clientes con esos requisitos` });
//           }
//         }
//       });
//     } catch (error) {
//       console.error('Error en el controlador:', error);
//       res.status(500).json({ error: 'Error interno del Servidor' });
//     }
//   };




module.exports={
    getClientes,
    crearCliente,
    getClienteById,
    putCliente,
    patchCliente,
    actualizarCliente,
    deleteCliente,
    getClientesByNombreByProducto
 
};