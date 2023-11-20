import { Barrita } from "./clase_barrita.js";
import { Bola } from "./clase_bola.js";

const main = document.createElement ('MAIN');
main.style.display ='flex';
main.style.justifyContent = ('center');
main.style.position = 'relative';

document.body.appendChild (main);


const zonadejuego = document.createElement ('DIV');
zonadejuego.setAttribute ('id', 'zonadejuego');
zonadejuego.position = 'relative';
zonadejuego.style.width = 600 + "px";
zonadejuego.style.height = 600 + "px";
zonadejuego.style.backgroundColor = "aliceblue";
zonadejuego.style.border = "2px solid black";
main.appendChild (zonadejuego);

let barrita = new Barrita (90,20,'red',500,250,0);
barrita.visualizar();
let bola = new Bola (8, 300, 1 , 'grey');
zonadejuego.appendChild(bola.visualizar());

