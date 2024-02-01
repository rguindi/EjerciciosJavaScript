// peticion FETCH con JSON que FUNCIONA CON PROMESAS  SIN SIMULACION, POST
const dirIP_api = '127.0.0.1'; // O asignar el valor que necesitas
const PUERTO_EXPRESS = 3000; // O asignar el valor que necesitas

const url=`http://${dirIP_api}:${PUERTO_EXPRESS}`;


  document.getElementById('addCiudad').addEventListener('submit', (event) => { 
    event.preventDefault();
    const datosBody = {
      nuevoNombre: document.getElementById('nuevoNombre').value,
      habitantes: document.getElementById('habitantes').value
    }
    

    fetch(url + '/ciudades/add', {
      method: 'POST',  //o put o patch
      body: JSON.stringify(datosBody),
      headers:{
        'Content-Type': 'application/json'
      }

    })
        .then((datosCrudos) =>{
          if (!datosCrudos.ok) {
            throw `Ciudado: ${datosCrudos.status}: ${datosCrudos.statusText}`;  //Lanzamos una excepción que interceta el catch
          }
          console.log(datosCrudos);
          return datosCrudos.json();
        })      
        .then((datos) => { 
           // aquí pintamos los datos. Habrá casos que será muy extenso. 
           document.getElementById('p1').innerHTML = "Ciudad Añadida" + datos.nuevoNombre+"  "+ datos.habitantes; 
          }) 
          .catch((error) => console.error(error));
          
          
        }) ;


