//DECLARACION DE VARIABLES
const id=document.getElementById('id_cliente');
const nombre=document.getElementById('nombre');
const direccion=document.getElementById('direccion');
const telefono=document.getElementById('telefono');


//MANEJAMOS EL FORMULARIO DE REGISTRO AL HACER SUBMIT 
document.getElementById('registroForm').addEventListener('submit', function(event){
    event.preventDefault();
    limpiarErrores();
    
    if(!id.checkValidity()){
        mostrarError('errorId', id.validationMessage);
        id.focus();
    }

    if(!nombre.checkValidity()){
        mostrarError('errorNombre', "El nombre no puede estar vacío");
        nombre.focus();
    }

    if(!direccion.checkValidity()){
        mostrarError('errorDireccion', direccion.validationMessage);
        direccion.focus();
    }

    if(!telefono.checkValidity()){
        mostrarError('errorTelefono', telefono.validationMessage);
        telefono.focus();
    }

    

    // si no hay errores enviamos el formulario
    if(document.getElementById('registroForm').checkValidity()){
        alert('enviado correctamente');
        this.submit();
    }
    
})



// FUNCIONES

function mostrarError(idElemento, texto){
    document.getElementById(idElemento).textContent=texto;
}

function limpiarErrores(){
    const eleFormulario= document.getElementById('registroForm');
    let elementosError=Array.from(eleFormulario.getElementsByClassName('error'));
    elementosError.forEach(e=>{
        e.textContent='';
    });
}