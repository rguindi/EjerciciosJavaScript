import { tabla } from "./claseTabla.js";

function cambiar() {
    const tablas = Array.from(document.getElementsByTagName('table'));
    
    tablas.forEach(tabla => {
        let clases = Array.from(tabla.classList);
        if (clases.length==0){
            tabla.classList.add('ancha');
        }else if(tabla.classList.contains('ancha')){
            tabla.classList.remove('ancha');
            tabla.classList.add('estrecha');

        }else if(tabla.classList.contains('estrecha')){
            tabla.classList.remove('estrecha');
            tabla.classList.add('ancha');

        }

    });

}

function cambiarSegunda() {
    tabla3.tabla.classList.toggle('estrecha') 

}

function creatabla (columnas, filas) {

    let table = document.createElement('table');
    
    for (let index = 0; index < filas; index++) {
        let row = document.createElement ('tr');
        for (let col = 0; col < columnas; col++) {
            let col = document.createElement ('td');
            row.appendChild(col);
        }
        table.appendChild(row);
    }
    return table;
    
}

let tabla1 = creatabla(3, 2);
let tabla2 = creatabla(8, 4);


const examen = document.getElementById('examen');

examen.appendChild(tabla1);
examen.appendChild(tabla2);

let boton = document.createElement('button');
boton.innerText = 'Cambiar';
boton.addEventListener ('click', cambiar);

examen.insertBefore(boton, tabla1);


//PARTE2

let tabla3 = new tabla(5,2);
let tabla4 = new tabla(6,8);

tabla3.insertar(examen);
tabla4.insertar(examen);

let tabla5 = new tabla(2,1);
tabla4.arrayTabla[tabla4.arrayTabla.length-1].appendChild (tabla5.tabla);

for (let index = 0; index < tabla3.arrayTabla.length; index++) {
    tabla3.arrayTabla[index].innerText = index;
    
}

let boton2 = document.createElement('button');
boton2.innerText = 'Cambiar segunda';
boton2.addEventListener ('click', cambiarSegunda);
examen.insertBefore(boton2, tabla3.tabla);