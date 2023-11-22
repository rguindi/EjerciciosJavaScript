import { Bola } from "./clases/Bola.js";
import { Funciones } from "./funciones.js";

document.body.style.display = 'flex';
document.body.style.flexWrap = "wrap";
document.body.style.minHeight = '800px';


let b1 = new Bola (50, "red");
let b2 = new Bola (50, "blue");
let b3 = new Bola (50, "green");
let b4 = new Bola (50, "red");
let b5 = new Bola (50, "blue");
let b6 = new Bola (50, "green");
let b7 = new Bola (50, "red");
let b8 = new Bola (50, "blue");

document.body.addEventListener ('click', Funciones.añadir);
