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
        mostrarError('errorNombre','pon un nombre valido');
    }
    if(!email.checkValidity()){
        mostrarError("errorEmail","pon un email Correcto");
    }

    if(document.getElementById('registroForm').checkValidity()){
        alert("enviado correctamente");
        this.submit();
    }
    

})