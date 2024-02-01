console.log('EJERCICIOS SEGUNDA PARTE\n---------------------------');
//const nodolipsum = document.getElementById('lipsum'); YA DECLARADO EN EL OTRO ARCHIVO
console.log(nodolipsum.firstElementChild);
console.log(nodolipsum.children[1]);

const li = document.getElementsByTagName('li');
console.log(li[li.length-1]);

const label = document.getElementsByTagName('label');
console.log(label[label.length-1]);


// EJERCICIO: Añade a la página: 
// 1. Un nuevo párrafo al final del DIV ‘lipsum’ con el texto “Nuevo párrafo añadido por javascript” (fíjate que 
// una palabra está en negrita) 
// 2. Un nuevo elemento al formulario tras el ‘Dato  1’ con la etiqueta ‘Dato  1  bis’ y el INPUT con 
// id ‘input1bis’ que al cargar la página tendrá escrito “Hola”


const lipsum = document.getElementById ('lipsum');
lipsum.appendChild(document.createElement('p'));

const ultimoparrafo = lipsum.getElementsByTagName('p')[lipsum.getElementsByTagName('p').length-1];
ultimoparrafo.innerHTML = 'Nuevo párrafo <b>añadido</b> por javascript';