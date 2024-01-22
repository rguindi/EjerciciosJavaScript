const nombre=document.getElementById('nombre');
const email= document.getElementById('email');
const pass= document.getElementById('contraseña');
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
document.getElementById('registroForm').addEventListener("submit",function (evento){

    evento.preventDefault();//evita que se envie
    limpiarErrores();
    if(!nombre.checkValidity()){
        mostrarError('errorNombre',nombre.validationMessage);
    }
    if(!email.checkValidity()){
        mostrarError("errorEmail",email.validationMessage);
    }
    
    if(!pass.checkValidity()){
        mostrarError("errorContraseña",pass.validationMessage);
    }

    if(document.getElementById('registroForm').checkValidity()){
        alert("enviado correctamente");
        this.submit();
    }


})