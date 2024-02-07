

//Boton mostrar TODOS. Asycn await con try catch
let bfindAll = document.getElementById("findAll");
let datos = bfindAll.addEventListener("click", async()=>{
let datos = await findAll().then(datos=>{
  console.log(datos);
  p.innerHTML = "";
  datos.forEach(element => {
      li = document.createElement("li");
      li.innerHTML = element.nombre;
      p.appendChild(li);
  });
  
 }).catch(error=>{
  console.log("mal"+error)
 })

});

async function findAll() {
    const response = await fetch(url + '/clientes/') 
    if (!response.ok) { 
      throw `Error ${response.status} de la BBDD: ${response.statusText}` 
    } 
    const datos = await response.json() 
    return datos 
  }

