console.log ("Empieza el programa");
console.log(document.childNodes);

const nodosH = document.getElementsByTagName (`H1`);
console.log(nodosH);
console.log(nodosH[0]);

const nodosP = nodosH[0].getElementsByTagName ('P');
console.log(nodosP);
console.log(nodosP[0]);

console.log(document.scripts);

const nuevoLi = document.createElement ('li');
const nuevoTexto = document.createTextNode('tercero');
nuevoLi.appendChild (nuevoTexto);
//document.getElementsByTagName ('ul')[0].appendChild(nuevoLi);
document.querySelector('ul').firstChild.before(nuevoLi);

//APLICAR CLASES ROJO Y CENTRADO a H1
const primerH1 = document.getElementsByTagName('h1')[0];
console.log("APLICAR CLASES");
console.log(primerH1);
primerH1.classList.add('rojo', 'centrado');
console.log(primerH1.classList);

//AHORA SE LO QUITAMOS
primerH1.classList.remove('rojo');


//aplicar estilo al segundo li cambiando el atributo style:
const segundo = document.getElementsByTagName('li')[document.getElementsByTagName('li').length-1];
console.log(segundo);
segundo.setAttribute('style', 'color: green');


const primero = document.getElementsByTagName('li')[0];
console.log(primero.attributes);



// REVISAR con los archivos que ha mandado
// console.log(primero.attributes[0].value);
// if (primero.hasAttributeb('style', segundo.attributes[0].value)){

// }


