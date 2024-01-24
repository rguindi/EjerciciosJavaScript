//PETICION POST
const dirIP_api = '127.0.0.1';
const PUERTO_EXPRESS = 3000;



document.getElementById('addCiudad').addEventListener('submit', (event)=>{
    event.preventDefault();
    const nuevaCiudad = {
        nuevoNombre: document.getElementById('nuevoNombre').value,
        habitantes: document.getElementById('habitantes').value,
    }
    console.log(nuevaCiudad);
const peticion= new XMLHttpRequest();
    const url = `http://${dirIP_api}:${PUERTO_EXPRESS}/ciudades/add`;
    peticion.open('POST', url);
    peticion.setRequestHeader('Content-type', 'application/json');
    peticion.send(JSON.stringify(nuevaCiudad));

    peticion.addEventListener('load', function(){
            console.error('Error de red al realizar la solicitud');
    });


});