const nombre=document.getElementById('nombre');
const email=document.getElementById('email');

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

function validarFormulario(){
    let hayError=false;
    limpiarErrores();
    // controlamos todo
    // validar nombre
    if(nombre.value ==="") {
        mostrarError('errorNombre', "Escribe algo");
        hayError=true;
    } 

    //validar email
    const er=/\S+@\S+\.\S+/;
    if (email.value==="" || !er.test(email.value)){
        mostrarError('errorEmail', 'Mete un email válido');
        hayError=true;
    }

    // si no hay errores enviamos el formulario
    return !hayError;

    if(document.getElementById('registroForm').checkValidity()){
        window.alert ('enviado correctamente');
        return true;
    }
}