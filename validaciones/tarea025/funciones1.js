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
    if(nombre.value ==="") {
        mostrarError('errorNombre', "Escribe algo");
        return;
    } 

    //validar email
    const er=/\S+@\S+\.\S+/;
    if (email.value==="" || !er.test(email.value)){
        mostrarError('errorEmail', 'Mete un email válido');
        return;
    }

    // si no hay errores enviamos el formulario
    this.submit();
    window.alert("Enviado correctamente");
})