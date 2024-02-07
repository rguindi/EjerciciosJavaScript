const dirIP_api = '192.168.7.104'; // O asignar el valor que necesitas
const PUERTO_EXPRESS = 3000; // O asignar el valor que necesitas
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