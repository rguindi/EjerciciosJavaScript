// peticion GET con JSON que FUNCIONA CON PROMESAS
// const dirIP_api = '127.0.0.1'; // O asignar el valor que necesitas
// const PUERTO_EXPRESS = 3000; // O asignar el valor que necesitas

function getCiudad(idCiudad) {
  return new Promise((resolve, reject) => {
    const peticion = new XMLHttpRequest();
    const url=`http://${dirIP_api}:${PUERTO_EXPRESS}`;
    peticion.open('GET', url+ '/ciudades/' + idCiudad);
    peticion.send();
    peticion.addEventListener('load', function(){
      if (peticion.status === 200) {
        resolve(JSON.parse(peticion.responseText));
      } else {
        reject(
          "Error " + this.status + " (" + this.statusText + ") en la petición"
        );
      }
    });
    peticion.addEventListener("error", () =>
      reject("Error en la petición HTTP")
    );
  });
}

document.getElementById("getCiudad").addEventListener("submit", (event) => {
  event.preventDefault();
  const idCiudad = document.getElementById("id-ciudad").value;
  datos = getCiudad(idCiudad);
  console.log(datos); // pintamos los datos en consola, no habran llegado aun!
  datos.then(function(datos) { 
    document.getElementById('p1').innerHTML = datos.nombre+"  "+datos.cantidad; //pintamos los datos
  }) 
  datos.catch(function(error) { 
    console.error(error) 
  })
});
