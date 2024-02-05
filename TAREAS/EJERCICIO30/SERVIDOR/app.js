const express= require('express'); // npm -i express
const cors= require('cors');
const app=express();
const rutasClientes= require('./rutas/rutasClientes');
const rutasCategorias= require('./rutas/rutasCategorias');
const rutasProductos= require('./rutas/rutasProductos');
const puerto=3000;
const multer=require('multer');

const path = require('path');
// Especifica la carpeta que contiene los archivos estáticos (por ejemplo, imágenes, CSS, JS)
app.use('/', express.static(path.join(__dirname, './Public')));

//indico ahora q archivo quiero q se ejecute en cada ruta
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tarea030.html'));
});

app.use(cors());


// Middleware para parsear el cuerpo de las peticiones en formato JSON
app.use(express.json());

// Middleware para manejar datos codificados en formato x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Configuración de Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/') // Directorio donde se guardarán los archivos
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname) // Nombre original del archivo
    }
});
const upload = multer({ storage: storage });
 
// Middleware Multer para manejar archivos
app.use(upload.any());

app.use('/clientes', rutasClientes); 
app.use('/categorias', rutasCategorias); 
app.use('/productos', rutasProductos); 


app.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});
  