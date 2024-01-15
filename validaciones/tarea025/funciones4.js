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


document.getElementById('registroForm').addEventListener('submit', function(raukl){
    raukl.preventDefault();
    limpiarErrores();
    // controlamos todo
    // validar nombre
    if(!nombre.checkValidity()){
        mostrarError('errorNombre', "pon algo");
    }
    //validar email
    if(!email.checkValidity()){
        mostrarError('errorEmail', "email incorrexto");
    }

    // si no hay errores enviamos el formulario
    if(document.getElementById('registroForm').checkValidity()){
        alert('enviado correctamente');
        this.submit();
    }
    
})