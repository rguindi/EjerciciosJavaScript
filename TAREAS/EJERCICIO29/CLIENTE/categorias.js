// // peticion POST con FormData
// const dirIP_api = '192.168.1.134'; // O asignar el valor que necesitas
// const PUERTO_EXPRESS = 3000; // O asignar el valor que necesitas



//AÑADIR CATEGORIAS CON FORMDATA
document.getElementById('postCategoria').addEventListener('submit', async(event) => {
  event.preventDefault();
  // Obtener datos del formulario
  const datosForm = new FormData(document.getElementById('postCategoria'));
  console.log(datosForm);

  //Vamos a comprobar si ese id ya existe
  const idCat=datosForm.get('id');
  const errorCategoria = document.getElementById('errorCategoria');
  const datos = await getCategoria(idCat)  
         .then(datos=>{
          errorCategoria.innerText = "Id ocupado. Escoja otro.";
          return false;
         }).catch(error=>{
          return true
         });
 if (datos){
  const peticion= new XMLHttpRequest();
  const url = `http://${dirIP_api}:${PUERTO_EXPRESS}/categorias`;
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
const pintarCategoria = document.getElementById('listaCategorias');
document.getElementById('categoriaId').addEventListener('submit', async (event) => { 
    event.preventDefault(); 
    const id = document.getElementById('id-categoria2').value;
          const datos = await getCategoria(id)  
           .then(datos=>{
            pintarCategoria.innerHTML = datos.id+"  "+datos.nombre;
           }).catch(error=>{
            console.log("mal"+error)
           })
  }) 
async function getCategoria(id) { 
    const response = await fetch(`http://${dirIP_api}:${PUERTO_EXPRESS}/categorias/` + id) 
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
  document.getElementById('todosCategorias').addEventListener('click', async (event) => { 
    event.preventDefault(); 
            pintarCategoria.innerHTML='';
          const datos = await todosCategorias()  
           .then(datos=>{
            datos.forEach(element => {       
                let li = document.createElement('li');
                li.innerHTML = element.id+"  "+element.nombre;
                pintarCategoria.appendChild(li);
            });
           }).catch(error=>{
            console.log("mal"+error)
           })
  }) 
async function todosCategorias() { 
    const response = await fetch(`http://${dirIP_api}:${PUERTO_EXPRESS}/categorias`) 
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