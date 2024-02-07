const dirIP_api = '192.168.7.104'; // O asignar el valor que necesitas
const PUERTO_EXPRESS = 3000; // O asignar el valor que necesitas

  //PARTE 1. MODIFICAR TODOS LOS CAMPOS DE UNA CIUDAD CON PUT MENOS EL ID:
//DECLARACION DE VARIABLES
const bputCiudad =  document.getElementById('putCiudad');
const idCiudad1 =  document.getElementById('id-ciudad1');


async function putCiudad(datos, id) {
  const url = `http://${dirIP_api}:${PUERTO_EXPRESS}/ciudades/put/${id}`;
  const datoPromesa = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(datos),
      headers: {
          'Content-Type': 'application/json'
      }
  });

  console.log(datoPromesa);
  // Convertimos a JSON, ya que el resultado de datoPromesa es una promesa que no se puede visualizar
  return await datoPromesa.json();;
}

document.getElementById('putCiudad').addEventListener('submit', async (event) => {
  event.preventDefault();

  // Insertamos los valores de los campos input en un objeto nuevaCiudad
  const nuevaCiudad = {
      nuevoNombre: document.getElementById('nuevoNombre').value,
      habitantes: document.getElementById('habitantes').value
  }

  const id = document.getElementById('id-ciudad1').value;
  const datos = await putCiudad(nuevaCiudad, id)
  .then(datos=>{
    document.getElementById('p1').innerHTML = datos.nuevoNombre + ": " + datos.habitantes;
   })
   .catch(error=>{
    console.log("mal"+error)
   })
});

