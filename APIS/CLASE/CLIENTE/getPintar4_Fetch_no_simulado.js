// peticion FETCH con JSON que FUNCIONA CON PROMESAS  SIN SIMULACION
// const dirIP_api = '127.0.0.1'; // O asignar el valor que necesitas
// const PUERTO_EXPRESS = 3000; // O asignar el valor que necesitas

const url=`http://${dirIP_api}:${PUERTO_EXPRESS}`;


  document.getElementById('getCiudad').addEventListener('submit', (event) => { 
    event.preventDefault();
    let idCiudad = document.getElementById('id-ciudad').value 
    
    
    
    fetch(url + '/ciudades/' + idCiudad)
        .then((datosCrudos) =>{
          console.log(datosCrudos);
          return datosCrudos.json();
        })      
        .then((datos) => { 
           // aquí pintamos los datos. Habrá casos que será muy extenso. 
           document.getElementById('p1').innerHTML = datos.nombre+"  "+datos.cantidad; 
          }) 
          .catch((error) => console.error(error));
          
          
        }) ;


