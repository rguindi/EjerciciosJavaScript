const dirIP_api = '192.168.1.134'; // O asignar el valor que necesitas
const PUERTO_EXPRESS = 3000; // O asignar el valor que necesitas

const idBusca = document.getElementById('idBusca');
const id = document.getElementById('id');
const nombre = document.getElementById('nombre');
const cantidad = document.getElementById('cantidad');
const Form1 = document.getElementById('form1');
const Form2 = document.getElementById('form2');



//BUSCAR POR ID. ASYNC AWAY

Form1.addEventListener('submit', async (event) => { 
    event.preventDefault(); 
      validarForm1();
      if(Form1.checkValidity()){
          const datos = await buscaId(idBusca.value)  
           .then(datos=>{
            id.value = datos.id;
            nombre.value = datos.nombre;
            cantidad.value = datos.cantidad;
           }).catch(error=>{
            console.log("mal"+error)
           })
          }
  }) 

async function buscaId(id) { 
    const response = await fetch(`http://${dirIP_api}:${PUERTO_EXPRESS}/ciudades/` + id) 
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


  //Modificar con PUT

async function putCiudad(datos, id) {
    const url = `http://${dirIP_api}:${PUERTO_EXPRESS}/ciudades/put/${id}`;
    const datoPromesa = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json'
        }
    });
  
    console.log(datoPromesa);
    // Convertimos a JSON, ya que el resultado de datoPromesa es una promesa que no se puede visualizar
    return await datoPromesa.json();;
  }
  
Form2.addEventListener('submit', async (event) => {
    event.preventDefault();
    validarForm2();
    if(Form2.checkValidity()){

    
  
    // Insertamos los valores de los campos input en un objeto nuevaCiudad
    const nuevaCiudad = {
        nuevoNombre: document.getElementById('nombre').value,
        habitantes: document.getElementById('cantidad').value
    }
  
   
    const datos = await putCiudad(nuevaCiudad, id.value)
    .then(datos=>{
      alert('Ciudad ACtualizada Correctamente');
     })
     .catch(error=>{
      console.log("mal"+error)
     })
    }
  });
  




//VALIDACIONES DE FORMULARIOS
  function mostrarError(idError,mensaje){
    document.getElementById(idError).textContent=mensaje;
}

function limpiarErrores(form){
    let elementosError= Array.from(form.getElementsByClassName('error'));
    elementosError.forEach(element => {
        element.textContent='';
    });
}


function validarForm1(){
  limpiarErrores(Form1);
    if(!idBusca.checkValidity()){
        mostrarError('errorId',idBusca.validationMessage);
    }
}


function validarForm2(){
  limpiarErrores(Form2);
    if(!nombre.checkValidity()){
        mostrarError('errorNombre',nombre.validationMessage);
    }
    if(!cantidad.checkValidity()){
        mostrarError('errorCantidad',cantidad.validationMessage);
    }
}



