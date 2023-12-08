//Parte 1
document.body.style.backgroundColor = 'lightgrey'; //Ponemos el fondo gris

let primerH1 = document.body.getElementsByTagName('h1')[0]; //Seleccionamos el primer h1
primerH1.style.textAlign = 'center'; //Centramos el h1

const divListas = document.createElement('div'); //Creamos un div para guardar las listas
let ol = document.createElement('ol');
ol = document.body.getElementsByTagName('ol')[0]; 
let ul = document.createElement('ul');
ul = document.body.getElementsByTagName('ul')[0];
divListas.appendChild(ol);
divListas.appendChild(ul);
divListas.style.display = 'flex'; //Ponemos el div en flex
divListas.style.justifyContent = 'center';
primerH1.after(divListas); //Ponemos el div despues del h1

// console.log(divListas);




                        //Parte 2
//ARRAY CIUDADES
let Ciudades = document.getElementById('idCiudades').children;
let arrayCiudades = Array.from(Ciudades); 

//ARRAY HABITANTES
let habitantes = document.getElementById('idHabitantes').children;
let arrayHabitantes = Array.from(habitantes);

//ARRAY NO ORDENADO  (Por defecto)
let noordenado = [];
for (let i = 0; i < arrayCiudades.length; i++) {
    noordenado.push({ciudad: arrayCiudades[i].textContent, habitantes: arrayHabitantes[i].textContent});
}
console.log(noordenado);

//ORDEN ALFABETICO
let alfabetico = noordenado.slice();
alfabetico.sort((a, b) => a.ciudad.localeCompare(b.ciudad)); //Ordeno el mapa por orden alfabetico

console.log(alfabetico);

//ORDEN HABITANTES
let ordenHabitantes = noordenado.slice();
ordenHabitantes.sort((a, b) => b.habitantes - a.habitantes); //Ordeno el mapa por numero de habitantes

console.log(ordenHabitantes);



                //Gereamos las opciones
let divOpciones = document.createElement('div');

let labelSinOrdenar = document.createElement('label');
labelSinOrdenar.style.borderRight = '1px solid blue';
let opcionSinOrdenar = document.createElement('input');
opcionSinOrdenar.type = 'radio';
opcionSinOrdenar.name = 'ordenar';
opcionSinOrdenar.id = 'sinordenar';
opcionSinOrdenar.value = 'sinordenar';
labelSinOrdenar.textContent = 'Sin ordenar';
labelSinOrdenar.appendChild(opcionSinOrdenar);
divOpciones.appendChild(labelSinOrdenar);

let labelAlfabetico = document.createElement('label');
labelAlfabetico.style.borderRight = '1px solid blue';
labelAlfabetico.style.marginLeft = '10px';
let opcionAlfabetico = document.createElement('input');
opcionAlfabetico.type = 'radio';
opcionAlfabetico.name = 'ordenar';
opcionAlfabetico.id = 'alfabetico';
opcionAlfabetico.value = 'alfabetico';
labelAlfabetico.textContent = 'Orden alfabetico';
labelAlfabetico.appendChild(opcionAlfabetico);
divOpciones.appendChild(labelAlfabetico);

let labelHabitantes = document.createElement('label');
labelHabitantes.style.marginLeft = '10px';
let opcionHabitantes = document.createElement('input');
opcionHabitantes.type = 'radio';
opcionHabitantes.name = 'ordenar';
opcionHabitantes.id = 'habitantes';
opcionHabitantes.value = 'habitantes';
labelHabitantes.textContent = 'Orden habitantes';
labelHabitantes.appendChild(opcionHabitantes);
divOpciones.appendChild(labelHabitantes);

divListas.after(divOpciones);
divOpciones.style.textAlign = 'center';

//FUNCIONES PARA ORDENAR
function sinOrdenar() {
    ol.innerHTML = '';
    ul.innerHTML = '';
    for (let i = 0; i < noordenado.length; i++) {
        let li = document.createElement('li');
        li.textContent = noordenado[i].ciudad;
        ol.appendChild(li);
        let li2 = document.createElement('li');
        li2.textContent = noordenado[i].habitantes;
        ul.appendChild(li2);
    }
}

function alfabeticoOrden() {
    ol.innerHTML = '';
    ul.innerHTML = '';
    for (let i = 0; i < alfabetico.length; i++) {
        let li = document.createElement('li');
        li.textContent = alfabetico[i].ciudad;
        ol.appendChild(li);
        let li2 = document.createElement('li');
        li2.textContent = alfabetico[i].habitantes;
        ul.appendChild(li2);
    }
}

function habitantesOrden() {
    ol.innerHTML = '';
    ul.innerHTML = '';
    for (let i = 0; i < ordenHabitantes.length; i++) {
        let li = document.createElement('li');
        li.textContent = ordenHabitantes[i].ciudad;
        ol.appendChild(li);
        let li2 = document.createElement('li');
        li2.textContent = ordenHabitantes[i].habitantes;
        ul.appendChild(li2);
    }
}

//AÑADIMOS LOS EVENTOS
opcionSinOrdenar.addEventListener('click', sinOrdenar);
opcionAlfabetico.addEventListener('click', alfabeticoOrden);
opcionHabitantes.addEventListener('click', habitantesOrden);


