import { Elemento } from "./Clases/elemento.js";
import { Texto } from "./Clases/texto.js";

let parrafo1 = new Texto("H1", "Hola");

parrafo1.agregarComoPrimeroDe(document.body);