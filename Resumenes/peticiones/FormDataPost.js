const dirIP_api = '192.168.7.104'; // O asignar el valor que necesitas
const PUERTO_EXPRESS = 3000; // O asignar el valor que necesitas

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
  