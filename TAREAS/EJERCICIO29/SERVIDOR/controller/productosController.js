const db = require ('../database/db'); //No requiere extension js

//Funcion para obtener productos
const getProductos = (req,res)=>{        // http://127.0.0.1:3000/productos   GET
    db.query('SELECT * FROM productos', (err, resultados)=>{
        if(err){
            console.error('Error al obtener los datos', err);
        }else{
            res.json(resultados);
        }
    });

};

const getProductoById = (req, res) => { //http://127.0.0.1:3000/productos/:id    GET
    const id = req.params.id;
 
    // Consulta a la base de datos para obtener el  por ID
    db.query('SELECT * FROM productos WHERE id = ?', [id], (err, resultados) => {
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

//Funcion insertar productos
const crearProducto = (req,res)=>{      //http://127.0.0.1:3000/productos/    POST
const {nombre, categoria, precio, stock} = req.body;
db.query( 'INSERT INTO productos (nombre, categoria, precio, stock) VALUES (?,?,?,?)',[nombre, categoria, precio, stock],(err,resultado)=>{
    if(err){
        console.error('Error al guardar los datos', err);
        res.status(500).json({error:'Error interno en el servidor'});
    } else{
        res.json({recibido:true, nombre, categoria, precio, stock})
    }
});
};

//obtener todos los productos por categoria

const getProductoByNombreCategoria = (req, res) => { //http://127.0.0.1:3000/productos/categoria/:nombreCatagoria   GET
    const categoria = req.params.nombreCategoria;
 
    // Consulta a la base de datos para obtener el  por ID
    db.query('SELECT p.* FROM productos p join categorias c on p.categoria = c.id WHERE c.nombre = ?', [categoria], (err, resultados) => {
      if (err) {
        console.error('Error al obtener el registro desde la base de datos:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
      } else {
        // Verifica si se encontró un registro
        if (resultados.length > 0) {
          res.json(resultados); // Devuelve todos los resultados
        } else {
          res.status(404).json({ error: 'Registro no encontrado' });
        }
      }
    });
  };


module.exports={
    getProductos,
    getProductoById,
    crearProducto,
    getProductoByNombreCategoria
};