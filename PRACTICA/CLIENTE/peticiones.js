const dirIP_api = '127.0.0.1'; // O asignar el valor que necesitas
const PUERTO_EXPRESS = 3000; // O asignar el valor que necesitas
const url=`http://${dirIP_api}:${PUERTO_EXPRESS}`;

const  p = document.getElementById("tabla");


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






 //FORMULARIO. INSERTAMOS POR FORMDATA
 document.getElementById('registroForm').addEventListener('submit', (event) => {
  event.preventDefault();

  // Obtener datos del formulario
  const datosForm = new FormData(document.getElementById('registroForm'));
  console.log(datosForm);
  const id=datosForm.get('id_cliente'); // name de los input del form
  const nombre=datosForm.get('nombre');
  const direccion = datosForm.get('direccion');
  const telefono = datosForm.get('telefono');
 
  //datosForm.append('otrodato', 'valortexto');
  //console.log(datosForm.get('otrodato'));
  console.log(nombre);
  console.log(id);
  console.log(direccion);
  console.log(telefono);

  const peticion= new XMLHttpRequest();
  const url = `http://${dirIP_api}:${PUERTO_EXPRESS}/clientes`;
  peticion.open('POST', url);
  peticion.send(datosForm);
  peticion.addEventListener('load', function(){
      //procesamos los datos
      console.log(peticion.responseText);
  });
});

