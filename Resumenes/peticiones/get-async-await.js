const dirIP_api = '192.168.7.104'; // O asignar el valor que necesitas
const PUERTO_EXPRESS = 3000; // O asignar el valor que necesitas

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
