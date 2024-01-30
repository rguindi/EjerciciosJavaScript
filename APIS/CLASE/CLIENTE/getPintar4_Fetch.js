// peticion FETCH con JSON que FUNCIONA CON PROMESAS
// const dirIP_api = '127.0.0.1'; // O asignar el valor que necesitas
// const PUERTO_EXPRESS = 3000; // O asignar el valor que necesitas

function fetch(url) { 
    return new Promise((resolve, reject) => { 
      const peticion = new XMLHttpRequest(); 
      peticion.open('GET', url); 
      peticion.send(); 
      peticion.addEventListener('load', () => { 
          resolve(peticion.responseText); 
      }); 
      peticion.addEventListener('error', () => reject('Network Error')); 
    }); 
  }



  const url=`http://${dirIP_api}:${PUERTO_EXPRESS}`;
 
window.addEventListener('load', () => { 
  document.getElementById('getCiudad').addEventListener('submit', (event) => { 
    event.preventDefault();
    let idCiudad = document.getElementById('id-ciudad').value 
    if (isNaN(idCiudad) || idCiudad.trim() == '') { 
      alert('Debes introducir un número') 
    } else { 
      fetch(url + '/ciudades/' + idCiudad) 
        .then((response) => response.json())                                //NOFUNCIONA
        .then((datos) => { 
           // aquí pintamos los datos. Habrá casos que será muy extenso. 
           document.getElementById('p1').innerHTML = datos.nombre+"  "+datos.cantidad; 
        }) 
        .catch((error) => console.error(error)) 
    } 

  }) ;
});