import { misFunciones } from "./libreria/misfunciones.js";
import { Pelota } from "./clases/clase_pelota.js";

let arrayBolas=[];

function nuevaPelota(){
    console.log("nueve");
    let radio=misFunciones.generarRandomInt(79)+5;
    let posX=misFunciones.generarRandomInt(window.innerWidth-2*radio);
    let posY=misFunciones.generarRandomInt(window.innerHeight-2*radio);
    console.log(posY);
    let lgAngulo=misFunciones.generarRandomInt(259);

    let lgInicialR=misFunciones.pasarAHexadecimal(misFunciones.generarRandomInt(255));
    let lgInicialG=misFunciones.pasarAHexadecimal(misFunciones.generarRandomInt(255));
    let lgInicialB=misFunciones.pasarAHexadecimal(misFunciones.generarRandomInt(255));
    let colorInicial=`#${lgInicialR}${lgInicialG.toString(16)}${lgInicialB.toString(16)}`;

    let lgFinalR=misFunciones.pasarAHexadecimal(misFunciones.generarRandomInt(255));
    let lgFinalG=misFunciones.pasarAHexadecimal(misFunciones.generarRandomInt(255));
    let lgFinalB=misFunciones.pasarAHexadecimal(misFunciones.generarRandomInt(255));
    let colorFinal=`#${lgFinalR.toString(16)}${lgFinalG.toString(16)}${lgFinalB.toString(16)}`;
    let linearGradient=`linear-gradient(${lgAngulo}deg,${colorInicial},${colorFinal})`;

    let velocidadY = misFunciones.generarRandomInt (90)+1;
    let velocidadX = misFunciones.generarRandomInt (90)+1;

    let nuevaPelota=new Pelota(radio, posX, posY,'cyan',linearGradient, velocidadX, velocidadY);
    arrayBolas.push(nuevaPelota);

    document.getElementById("audio2_bola_nueva").play();
    nuevaPelota.visualizar();
}

document.addEventListener('DOMContentLoaded', function(){
    const boton=misFunciones.crearBotonCentrado();
    boton.addEventListener("click",nuevaPelota);
    document.body. addEventListener('keydown', misFunciones.escucharTeclas);
})
