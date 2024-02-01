import { Boton } from "./Clases/boton.js";
import { Elemento } from "./Clases/elemento.js";
import { Texto } from "./Clases/texto.js";

let parrafo1 = new Texto("H1", "Hola");

parrafo1.agregarComoPrimeroDe(document.body);
parrafo1.nuevoEstilo("color", "red");

let parrafo2 = new Texto("H1", "Adios");
parrafo2.agregarComoUltimoDe(document.body);
parrafo2.nuevoEstilo("color", "blue");

let boton1 = new Boton("button", "Boton 1");
boton1.agregarComoPrimeroDe(document.body);
boton1.nuevoEstilo("width", "100%");