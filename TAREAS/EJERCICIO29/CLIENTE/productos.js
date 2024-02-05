
// const dirIP_api = '192.168.1.134'; // O asignar el valor que necesitas
// const PUERTO_EXPRESS = 3000; // O asignar el valor que necesitas



//AÑADIR PRODUCTOS CON FORMDATA
document.getElementById('postProducto').addEventListener('submit', async(event) => {
    event.preventDefault();

     //Vamos a comprobar si existe la categoría antes de insertar el producto
     let cat = document.getElementById('catProducto').value;
     let errorC = document.getElementById('errorC');
   try {
     let res = await getCategoria(cat);
   }catch(e){
     errorC.innerText = 'No existe esa categoría, escoja otra.';
     return;
   }

    // Obtener datos del formulario
    const datosForm = new FormData(document.getElementById('postProducto'));
    console.log(datosForm);

    const peticion= new XMLHttpRequest();
    const url = `http://${dirIP_api}:${PUERTO_EXPRESS}/productos`;
    peticion.open('POST', url);
    peticion.send(datosForm);
    peticion.addEventListener('load', function(){
        //procesamos los datos
        console.log(peticion.responseText);
    });
});


//BUSCAR POR ID. ASYNC AWAY
const pintarProductos = document.getElementById('listaProductos');
document.getElementById('productoId').addEventListener('submit', async (event) => { 
    event.preventDefault(); 
    const id = document.getElementById('id-producto2').value;
          const datos = await getProducto(id)  
           .then(datos=>{
            pintarProductos.innerHTML = datos.id+"  "+datos.nombre;
           }).catch(error=>{
            console.log("mal"+error)
           })
  }) 
async function getProducto(id) { 
    const response = await fetch(`http://${dirIP_api}:${PUERTO_EXPRESS}/productos/` + id) 
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
  document.getElementById('todosProductos').addEventListener('click', async (event) => { 
    event.preventDefault(); 
            pintarProductos.innerHTML='';
          const datos = await todosProductos()  
           .then(datos=>{
            datos.forEach(element => {       
                let li = document.createElement('li');
                li.innerHTML = element.id+"  "+element.nombre;
                pintarProductos.appendChild(li);
            });
           }).catch(error=>{
            console.log("mal"+error)
           })
  }) 
async function todosProductos() { 
    const response = await fetch(`http://${dirIP_api}:${PUERTO_EXPRESS}/productos`) 
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