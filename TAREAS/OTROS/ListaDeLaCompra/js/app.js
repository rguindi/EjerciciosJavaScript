let titulo = document.createElement('h3');
titulo.innerText = 'Lista de la Compra'
document.body.appendChild (titulo);

let titulo2 = document.createElement('p');
titulo2.innerText = 'Añade un elemento:'
document.body.appendChild (titulo2);

let input = document.createElement('input');
input.setAttribute ('id', 'entrada');
document.body.appendChild (input);

let confirma = document.createElement('button');
confirma.textContent = 'Añadir';
confirma.addEventListener ('click', añade)
document.body.appendChild (confirma);


let titulo3 = document.createElement('h4');
titulo3.innerText = 'Articulos'
document.body.appendChild (titulo3);

//LISTA
let lista = document.createElement('ul');
lista.setAttribute ('id', 'lista');
document.body.appendChild (lista);

function añade() {
    let ul = document.getElementById('lista');
    let li = document.createElement ('li');
    let contenido = document.getElementById ('entrada').value;
    li.addEventListener ('dblclick', hecha);
    li.innerText = contenido;
    ul.appendChild (li);
}

function hecha() {

    this.classList.toggle("verde");

    
}