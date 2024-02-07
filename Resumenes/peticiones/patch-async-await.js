const dirIP_api = '192.168.7.104'; // O asignar el valor que necesitas
const PUERTO_EXPRESS = 3000; // O asignar el valor que necesitas

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