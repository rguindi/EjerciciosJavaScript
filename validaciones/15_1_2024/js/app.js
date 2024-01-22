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
document.getElementById('registroForm').addEventListener("submit",function (evento){
    evento.preventDefault();//evita que se envie
    limpiarErrores();
         //control
        if(nombre.value ===""){
            mostrarError('errorNombre',"escribe algo");
            return;
        }
        const er="\S+@\S+\.\S+";
        if(email.value==="" || !er.test(email.value)){
            mostrarError('errorEmail',"'escribe un email Valido");
            return;
        }


        this.submit();
        window.alert("enviado correctamente");
})