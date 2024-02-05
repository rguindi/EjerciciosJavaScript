// peticion POST con FormData
const dirIP_api = '192.168.7.104'; // O asignar el valor que necesitas
const PUERTO_EXPRESS = 3000; // O asignar el valor que necesitas



//AÑADIR CLIENTES CON FORMDATA
document.getElementById('postCliente').addEventListener('submit', async (event) => {
    event.preventDefault();
    // Obtener datos del formulario
    const datosForm = new FormData(document.getElementById('postCliente'));
    console.log(datosForm);
     //Vamos a comprobar si ese id ya existe
     const idCli=datosForm.get('id');
     const errorCliente = document.getElementById('errorCliente');
     const datos = await getCliente(idCli)  
            .then(datos=>{
              errorCliente.innerText = "Id ocupado. Escoja otro.";
             return false;
            }).catch(error=>{
             return true
            });
    if (datos){

    const peticion= new XMLHttpRequest();
    const url = `http://${dirIP_api}:${PUERTO_EXPRESS}/clientes`;
    peticion.open('POST', url);
    peticion.send(datosForm);
    peticion.addEventListener('load', function(){
        //procesamos los datos
        console.log(peticion.responseText);
    });
  }else{
    console.log("Id ocupado, seleccione otro");
  }
});


//BUSCAR POR ID. ASYNC AWAY
const pintar = document.getElementById('s3');
document.getElementById('clienteId').addEventListener('submit', async (event) => { 
    event.preventDefault(); 
    const id = document.getElementById('id-cliente2').value;
          const datos = await getCliente(id)  
           .then(datos=>{
            pintar.innerHTML = datos.id+"  "+datos.nombre;
           }).catch(error=>{
            console.log("mal"+error)
           })
  }) 
async function getCliente(id) { 
    const response = await fetch(`http://${dirIP_api}:${PUERTO_EXPRESS}/clientes/` + id) 
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


  //BUSCAR TODOS.  ASYNC AWAY
  document.getElementById('todosClientes').addEventListener('click', async (event) => { 
    event.preventDefault(); 
            pintar.innerHTML='';
          const datos = await todosClientes()  
           .then(datos=>{
            datos.forEach(element => {       
                let li = document.createElement('li');
                li.innerHTML = element.id+"  "+element.nombre;
                pintar.appendChild(li);
            });
           }).catch(error=>{
            console.log("mal"+error)
           })
  }) 
async function todosClientes() { 
    const response = await fetch(`http://${dirIP_api}:${PUERTO_EXPRESS}/clientes`) 
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