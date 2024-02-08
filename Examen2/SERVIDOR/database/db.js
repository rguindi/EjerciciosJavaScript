const mysql=require('mysql')
//CONFIGURACION BASE DE DATOS
const db= mysql.createConnection({
    host: '192.168.7.104',
    port: 3307,
    user: 'raul',
    password: 'raul',
    database: 'ejemplodb'
});
//CONEXION
db.connect((err)=>{
    if (err){
        console.log('Error en la conexion a la BD');
    }else{
        console.log('Conexion correcta a la base de datos');
    }
});

module.exports=db;