    //INSERCION DE DATOS (POST)

// peticion POST con XMLHttpRequest
const dirIP_api = '127.0.0.1'; // O asignar el valor que necesitas
const PUERTO_EXPRESS = 3000; // O asignar el valor que necesitas

document.getElementById('miFormulario').addEventListener('submit', (event)=>{
    event.preventDefault();
    const newCity= {
        nombre: document.getElementById('nombre').value,
        cp: document.getElementById('cp').value,
        distrito: document.getElementById('distrito').value,
        poblacion: document.getElementById('poblacion').value,
       
    }
    console.log(newCity);
    const peticion=new XMLHttpRequest();
    const url=`http://${dirIP_api}:${PUERTO_EXPRESS}/world/city`;
    peticion.open('POST', url);
    peticion.setRequestHeader('Content-type', 'application/json');  // Siempre tiene que estar esta línea si se envían datos
    peticion.send(JSON.stringify(newCity)); //convertimos objeto a texto JSON
    peticion.addEventListener('load', function(){
        tabla.innerHTML = peticion.responseText;
        
    });
       // Manejar el evento error en caso de problemas de red
       peticion.addEventListener('error', function () {
       console.error('Error de red al realizar la solicitud');
    })
});