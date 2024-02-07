const dirIP_api = '192.168.7.104'; // O asignar el valor que necesitas
const PUERTO_EXPRESS = 3000; // O asignar el valor que necesitas

// peticion POST con FormData

document.getElementById('miFormulario').addEventListener('submit', (event) => {
    event.preventDefault();
    // Obtener datos del formulario
    const datosForm = new FormData(document.getElementById('miFormulario'));
    console.log(datosForm);
    const nombre=datosForm.get('nombre'); // name de los input del form
    const cp = datosForm.get('cp');                     

    const peticion= new XMLHttpRequest();
    const url = `http://${dirIP_api}:${PUERTO_EXPRESS}/world/city`;
    peticion.open('POST', url);
    peticion.send(datosForm);
    peticion.addEventListener('load', function(){
        //procesamos los datos
        console.log(peticion.responseText);
    });
});