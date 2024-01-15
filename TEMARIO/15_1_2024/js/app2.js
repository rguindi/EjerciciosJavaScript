const nombre=document.getElementById('nombre');
const email= document.getElementById('email');

function mostrarError(idError,mensaje){
    document.getElementById(idError).textContent=mensaje;
}
function limpiarErrores(){
    const formulario = document.getElementById('registroForm');
    let elementosError= Array.from(formulario.getElementsByClassName('error'));
    elementosError.forEach(element => {
        element.textContent='';
    });
}

function enviarFormulario(){
    limpiarErrores();
    if(nombre.value ===""){
            mostrarError('errorNombre',"escribe algo");
            hayError=true;

    }
    const er="\S+@\S+\.\S+";
    if(email.value==="" || !er.test(email.value)){
    mostrarError('errorEmail',"'escribe un email Valido");
    }

    return !hayError;
    if(document.getElementById('registroForm').checkValidity()){
        window.alert("enviado correctamente");
        return true;
    }
    
}