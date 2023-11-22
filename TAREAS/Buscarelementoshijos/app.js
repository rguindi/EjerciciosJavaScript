const divContenedor = document.getElementById('contenedor');

// let nodosHijos = divContenedor.children;
 let nodosHijos = divContenedor.querySelectorAll('*');
let arrayHijos = Array.from(nodosHijos);



console.log(nodosHijos);
console.log(arrayHijos);