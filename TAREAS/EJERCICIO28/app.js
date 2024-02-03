const dirIP_api = '192.168.1.134'; // O asignar el valor que necesitas
const PUERTO_EXPRESS = 3000; // O asignar el valor que necesitas

//DECLARACION DE VARIABLES
const getTodas = document.getElementById('b1');
const pintar = document.getElementById('listaCiudades');





//PRIMERO HAGO UNA PETICION GET PARA PODER VER TODAS LAS CIUDADES
b1.addEventListener('click', async (event) => {
    try {
        const datos = await getTodasCiudades();
        console.log(datos);
        pintar.innerHTML = "";
        datos.forEach(element => {
          li = document.createElement('li');
          li.innerHTML = `Id: ${element.id}, Ciudad: ${element.nombre}, Habitantes: ${element.cantidad}, `;
          pintar.appendChild(li);
        });
    } catch (error) {
        console.log("mal");
        console.error(error);
        return;
    }
})

 async function getTodasCiudades() { 
    const response = await fetch(`http://${dirIP_api}:${PUERTO_EXPRESS}/ciudades`) 
    try {
      if (!response.ok) { 
        throw `Error ${response.status} de la BBDD: ${response.statusText}` 
      } 
      const datos = await response.json() 
      return datos
      
    } catch (error) {
      console.log("Fallo fetch");
      throw error;
      
    }
  }




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




//PARTE 2. MODIFICAR CON PATCH 
async function patchCiudad(datos, id) {
  const url = `http://${dirIP_api}:${PUERTO_EXPRESS}/ciudades/${id}`;
  const datoPromesa = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(datos),
      headers: {
          'Content-Type': 'application/json'
      }
  });

  console.log(datoPromesa);
  // Convertimos a JSON, ya que el resultado de datoPromesa es una promesa que no se puede visualizar
  return await datoPromesa.json();;
}


document.getElementById('patchCiudad').addEventListener('submit', async (event) => {
  event.preventDefault();

  // Insertamos los valores de los campos input en un objeto nuevaCiudad
  const nuevoNombre= document.getElementById('nuevoNombre2').value;
  const habitantes= document.getElementById('habitantes2').value;
  const id = document.getElementById('id-ciudad2').value;
  let nuevaCiudad='';

  if(nuevoNombre =='' && habitantes != ''){
      nuevaCiudad = {
      habitantes: habitantes
    }
  }else if(nuevoNombre !='' && habitantes == ''){
      nuevaCiudad = {
      nuevoNombre: nuevoNombre
    }
  }else{
        nuevaCiudad = {
        nuevoNombre: nuevoNombre,
        habitantes: habitantes
      }
    
  }
console.log(nuevaCiudad);

  const datos = await patchCiudad(nuevaCiudad, id)
  .then(datos=>{
    document.getElementById('p1').innerHTML = "Nombre introducido: "+  datos.nuevoNombre + ", Cantidad introducida: " + datos.habitantes + ". Realiza una nueva petición para ver los resultados.";
   })
   .catch(error=>{
    console.log("mal"+error)
   })
});