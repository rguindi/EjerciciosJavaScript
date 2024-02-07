
let edad = document.getElementById('edad');
let fecha = document.getElementById('fecha');
let fechaes = document.getElementById('fechaes');
let form = document.getElementById('formulario');
let edadEsperada = document.getElementById('edadEsperada');


let hoy = new Date(); 
console.log(hoy);

form.addEventListener('submit', calcula);

function calcula (event){
    event.preventDefault();
    let nac = new Date (fecha.value);
    console.log(nac);
    let diferencia = Math.floor( hoy-nac);
    let dias =  diferencia/1000/3600/24;
   edad.innerText = Math.round(dias);
   edadEsperada.innerText =  Math.round(fechaes.value-dias);



}