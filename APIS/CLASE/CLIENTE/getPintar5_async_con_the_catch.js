// fetch con async/await API FETCH con errores
// tratando errores con try-catch 
const dirIP_api = '127.0.0.1'; // O asignar el valor que necesitas
const PUERTO_EXPRESS = 3000; // O asignar el valor que necesitas
const url=`http://${dirIP_api}:${PUERTO_EXPRESS}`;
 

  document.getElementById('getCiudad').addEventListener('submit', async (event) => { 
    event.preventDefault(); 
    let isCiudad = document.getElementById('id-ciudad').value 
    if (isNaN(isCiudad) || isCiudad.trim() == '') { 
      alert('Debes introducir un número') 
    } else { 
       
            const datos = await getData(isCiudad)  
           .then(datos=>{
            document.getElementById('p1').innerHTML = datos.nombre+"  "+datos.cantidad;
           }).catch(error=>{
            console.log("mal"+error)
           })
           
        } 
    
  }) 



async function getData(isCiudad) { 
    const response = await fetch(url + '/ciudades/' + isCiudad) 
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
