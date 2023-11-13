import { misFunciones } from "./libreria/misfunciones.js"; 
import { Bola } from "./clases/clase_bola.js";

let booola = document.createElement('input');
booola.setAttribute ('type', 'button');
booola.style.position = 'absolute';
booola.style.top = '599px';
booola.style.left = '384px';
booola.setAttribute ('value', 'Booola');

document.body.appendChild (booola);







//la línea de abajo es un ejemplo de uso de una función de la librería que debes
// realizar para que cada objeto de la clase Bola tenga un id="idBolaXXX" siendo XXX // el número (con tres cifras) de índice en el array de cada objeto 
console.log(misFunciones.formatearA3cifras(5)); // muestra "005" en consola
//constructor(radio, posX, posY, colorBola, linearGradient)
new Bola(85,1,1,'red', 'linear-gradient(to bottom, #2196f3, #009688)'); 
new Bola(55,200,600,'red', 'linear-gradient(to left, #7196f3, #ff9688)');
new Bola(55,400,500,'#f09688');
new Bola(60, 250,250,"green");
Bola.arrayBolas.forEach(bola=>bola.visualizar());
console.log(Bola.arrayBolas);