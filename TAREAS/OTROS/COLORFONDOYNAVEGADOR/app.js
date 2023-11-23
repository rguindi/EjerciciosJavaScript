//Elige fondo
let h3elige = document.createElement ('h3');
h3elige.innerText = 'Elige color de fondo';
document.body.appendChild (h3elige);



let inputcolor = document.createElement ('input');
inputcolor.setAttribute ('type', 'color');
inputcolor.setAttribute ('id', 'icolor');
document.body.appendChild (inputcolor);

function fondo() {
    let color = document.getElementById("icolor").value;      //Leer valor del elemento
    console.log(color);
    document.body.style.backgroundColor = color;
    
}

function fnavegador() {
  
window.alert(navigator.userAgent);
    
}
function escribe() {
  
    let texto = window.prompt('Escribe aqui tu texto');
    console.log(texto);
    let are = document.getElementById ('area');
    are.value = texto;
        
    }

let boton = document.createElement ('button');
boton.setAttribute ('id', 'enviar');
// boton.addEventListener ('click', fondo);         //otra forma
boton.setAttribute ('onclick', 'fondo()');
boton.innerText = 'Cambia Fondo';
document.body.appendChild(boton);


let navegador = document.createElement ('h3');
navegador.innerText = 'Ver tu navegador';
document.body.appendChild (navegador);

let boton2 = document.createElement ('button');
boton2.setAttribute ('id', 'navegador');
boton2.addEventListener ('click', fnavegador);
boton2.innerText = 'Ver Navegador';
document.body.appendChild(boton2);

let boton3 = document.createElement ('button');
boton3.setAttribute ('id', 'escribe');
boton3.addEventListener ('click', escribe);
boton3.innerText = 'Escribe un texto';
document.body.appendChild(boton3);

let area = document.createElement ('input');
area.setAttribute ('type', 'text');
area.setAttribute ('id', 'area');
area.setAttribute ('id', 'area');
area.setAttribute ('placeholder', 'Pulsa el boton');
document.body.appendChild(area);