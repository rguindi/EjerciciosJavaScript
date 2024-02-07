
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