const nombre=document.getElementById('nombre');
const apellidos=document.getElementById('apellidos');
const grupo=document.getElementById('grupo');
const dni=document.getElementById('dni');
const codigo=document.getElementById('codigo');
const fecha=document.getElementById('fecha');
const email=document.getElementById('email');
const usuario=document.getElementById('usuario');
let password=document.getElementById('pass');
let imprimir=document.getElementById('imprimir');


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

usuario.addEventListener('click', ()=>{
 let primera = nombre.value.substr(0, 1)
    usuario.value= primera + apellidos.value.split(' ')[0];
})



        //comprobar si mayor de edad
        fecha.addEventListener( 'change', menor)
        
        function menor() {
            const hoy = new Date();
            let nac = new Date (fecha.value);
            let edad = hoy - nac;
            console.log(edad);
            edad = Math.round(edad/1000/3600/24/365);

            console.log(edad);
            
            if (edad < 18) {
                alert ("Atencion, eres menor de edad")
            }
        }



document.getElementById('registroForm').addEventListener('submit', function(evento){
    evento.preventDefault();
    limpiarErrores();
   

    // validar grupo

    if(grupo.value == ""){
        mostrarError('errorGrupo', 'Por favor, ingresa un grupo.');
        grupo.focus();
    }
    
    // validar DNI

    if(dni.value == ""){
        mostrarError('errordni', 'Introduzca el dni.');
        dni.focus();
    }
      const er=/^\d{8}[a-zA-Z]$/;
      if (dni.value != "" && !er.test(dni.value)){
          mostrarError('errordniformato', 'Formato del DNI: "99999999X"');
          return;
      }
 
      
    // validar nombre
    if(!nombre.checkValidity()){
        mostrarError('errorNombre', 'Por favor, ingresa tu nombre.');
        nombre.focus();
    }
    
    // validar Apellidos
    if(!apellidos.checkValidity()){
        mostrarError('errorApellidos', 'Por favor, ingresa tus Apellidos.');
        apellidos.focus();
    }
    
    
    
    // validar fecha
    if(!fecha.checkValidity()){
        mostrarError('errorFecha', 'Por favor, ingresa tu fecha de nacimiento.');
        fecha.focus();
    }

    

    
    // validar Email
    if(!email.checkValidity()){
        document.getElementById('errorEmail').innerText = email.validationMessage;
        email.focus();
    }
    
      // validar usuario
      if(!usuario.checkValidity()){
        mostrarError('errorUsuario', 'Por favor, ingresa tus usuario.');
        usuario.focus();
    }
    

   //GENERAMOS LOS VALORES AUTOMATICOS
    function pass(){
        return "**contraseña**";
    }
        //CODIGO
        codigo.value = dni.value+fecha.value;
        password = pass();

        




    // si no hay errores enviamos el formulario
    if(document.getElementById('registroForm').checkValidity()){

        let alumno = {
        matricula: null , 
        grupo: grupo.value,
        dni: dni.value,
        nombre : nombre.value, 
        apellidos: apellidos.value,
        codigo: codigo, 
        fecha_nac: fecha,
        email: email,
        usuario: usuario,
        contrasena: password

    };

        imprimir.innerText = alumno;
        console.log(alumno);
        alert("Enviado!!");
        this.submit();
    }
    
})