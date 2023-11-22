import { Barrita } from "./clase_barrita.js";
import { Bola } from "./clase_bola.js";
import { misFunciones } from "./funciones.js";

document.body.style.height = "100vh";
const main = document.createElement ('MAIN');
main.style.display ='flex';
main.style.justifyContent = ('center');


document.body.appendChild (main);


const zonadejuego = document.createElement ('DIV');
zonadejuego.setAttribute ('id', 'zonadejuego');
zonadejuego.style.position = "relative";
zonadejuego.style.width = 90 + "%";
zonadejuego.style.height = 90 + "vh";
zonadejuego.style.backgroundColor = "aliceblue";
zonadejuego.style.border = "2px solid black";
main.appendChild (zonadejuego);

let barrita = new Barrita (90,20,'red', zonadejuego.offsetHeight/1.1, zonadejuego.offsetWidth/2,0);
barrita.visualizar();
let bola = new Bola (8,  zonadejuego.offsetWidth/2 , zonadejuego.offsetHeight/2, 'grey',-2,-2);
zonadejuego.appendChild(bola.visualizar());

var intervalo = setInterval(misFunciones.desplazar, 1);

document.body.addEventListener('mousemove', misFunciones.posiciónraton);
