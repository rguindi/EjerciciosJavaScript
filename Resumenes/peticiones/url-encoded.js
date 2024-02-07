const dirIP_api = '192.168.7.104'; // O asignar el valor que necesitas
const PUERTO_EXPRESS = 3000; // O asignar el valor que necesitas


// OJO!!!  en  la API es necsario lo siguiente:
// Middleware para manejar datos codificados en formato x-www-form-urlencoded
//app.use(express.urlencoded({ extended: true }))

document.getElementById('miFormulario').addEventListener('submit', (event)=>{
    event.preventDefault();
       const nombre = document.getElementById('nombre').value;
       const cp = document.getElementById('cp').value;
       const distrito = document.getElementById('distrito').value;
       const poblacion = document.getElementById('poblacion').value;

    const peticion=new XMLHttpRequest();
    const url=`http://${dirIP_api}:${PUERTO_EXPRESS}/world/city`;
    peticion.open('POST', url);
    peticion.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    const datosCodificados= `nombre=${encodeURIComponent(nombre)}&cp=${encodeURIComponent(cp)}&distrito=${encodeURIComponent(distrito)}&poblacion=${encodeURIComponent(poblacion)}`;
    peticion.send(datosCodificados);
    
    peticion.addEventListener('load', function(){
        tabla.innerHTML = peticion.responseText;
    });
       // Manejar el evento error en caso de problemas de red
       peticion.addEventListener('error', function () {
       console.error('Error de red al realizar la solicitud');
    })
});
