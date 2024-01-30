// fetch con async/await 
// tratando errores con try-catch 
const url=`http://${dirIP_api}:${PUERTO_EXPRESS}`;
 
window.addEventListener('load', () => { 
  document.getElementById('getCiudad').addEventListener('submit', async (event) => { 
    event.preventDefault(); 
    let isCiudad = document.getElementById('id-ciudad').value 
    if (isNaN(isCiudad) || isCiudad.trim() == '') { 
      alert('Debes introducir un número') 
    } else { 
        try { 
            const datos = await getData(isCiudad)  
            // La ejecución se para en la sentencia anterior hasta que  
            // contesta la función getData 
            document.getElementById('p1').innerHTML = datos.nombre+"  "+datos.cantidad; 
        } catch (err) { 
            console.log("mal"); 
            console.error(err); 
            return; 
        } 
    } 
  }) 
}) 


async function getData(isCiudad) { 
    const response = await fetch(url + '/ciudades/' + isCiudad) 
    if (!response.ok) { 
      throw `Error ${response.status} de la BBDD: ${response.statusText}` 
    } 
    const datos = await response.json() 
    return datos 
  }