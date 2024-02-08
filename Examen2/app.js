const dirIP_api = '192.168.7.104'; // O asignar el valor que necesitas
const PUERTO_EXPRESS = 3000; // O asignar el valor que necesitas


let tabla= document.getElementById('tabla')
//PRIMERO HAGO UNA PETICION GET PARA PODER VER TODAS LAS CIUDADES

window.onload = async function() {
    try {
        const datos = await getTodasCiudades();
        console.log(datos);
       
        datos.forEach(element => {

        let tr = document.createElement('tr');
          const td = document.createElement('td');
          td.innerHTML =element.id;
          const td2 = document.createElement('td');
          td2.innerHTML =element.nombre;
          const td3 = document.createElement('td');
          td3.innerHTML =element.cantidad;
          const bt = document.createElement('button');
          bt.setAttribute('id', element.id);
          bt.innerText = 'Eliminar';

        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(bt);
        tabla.appendChild(tr);

        // document.getElementById(element.id).addEventListener('click', eliminar);


        });
    } catch (error) {
        console.log("mal");
        console.error(error);
        return;
    }
}

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

