const nombre=document.getElementById('nombre');
const email=document.getElementById('email');
const contrasena=document.getElementById('contrasena');
const confirmarContrasena=document.getElementById('confirmarContrasena');
const edad=document.getElementById('edad');
const genero=document.getElementsByName('genero')
const terminos=document.getElementById('terminos');

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


document.getElementById('registroForm').addEventListener('submit', function(evento){
    evento.preventDefault();
    limpiarErrores();
   

    // validar nombre
    if(!nombre.checkValidity()){
        mostrarError('errorNombre', 'Por favor, ingresa tu nombre.');
        nombre.focus();
    }
    //validar email
    if(!email.checkValidity()){
        mostrarError('errorEmail', 'Ingresa una dirección de correo electrónico válida.');
        email.focus();
    }
    // validar contraseña
    if(!contrasena.checkValidity()){
        mostrarError('errorContrasena', 'La contraseña debe tener al menos 8 caracteres.');
        contrasena.focus();
    }

    // validar confirmación de contraseña
    if(confirmarContrasena.value!=contrasena.value){
        mostrarError('errorConfirmarContrasena', 'Las contraseñas no coinciden.');
        confirmarContrasena.focus();
    }

    //Validar edad
    if(!edad.checkValidity()){
        mostrarError('errorEdad', 'Debes tener al menos 18 años para registrarte.');
        edad.focus();
    }

    // validar género
    generoValido=false;
    genero.forEach(g=>{
        if(g.checked){
            generoValido=true;
        }
    });
    if(!generoValido){
        mostrarError('errorGenero', 'Selecciona tu género.');

    }

    // validar términos y condiciones
    if(!terminos.checkValidity()){
        mostrarError('errorTerminos', 'Debes aceptar los términos y condiciones.');
        terminos.focus();
    }

    

    // si no hay errores enviamos el formulario
    if(document.getElementById('registroForm').checkValidity()){
        alert('enviado correctamente');
        this.submit();
    }
    
})