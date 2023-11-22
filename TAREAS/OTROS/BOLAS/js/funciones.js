
import { Bola } from "./clases/Bola.js";
let contador =0;



function añadir() {

    if (contador < Bola.arraybolas.length){
    Bola.arraybolas[contador].visualizar();
    contador++;
    console.log("body pulsado");
    }else console.log('No hay mas bolas en el array');
}



export  const Funciones = {
    añadir,
}