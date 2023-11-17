
import { misFunciones } from "./libreria/misfunciones.js";
import { Bola } from "./clases/clase_bola.js";


function nuevaBola(){
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
    let nuevaBola=new Bola(radio, posX, posY,'cyan',linearGradient);
    document.getElementById("audio2_bola_nueva").play();
    //    Bola.arrayBolas.forEach(bola=>bola.visualizar());
    nuevaBola.visualizar();
}
/*
function iniciar(){
    const boton=misFunciones.crearBotonCentrado();
    boton.addEventListener("click",nuevaBola);
}

window.onload = function(){
    iniciar();
}
*/
document.addEventListener('DOMContentLoaded', function(){
    const boton=misFunciones.crearBotonCentrado();
    boton.addEventListener("click",nuevaBola);
    document.body. addEventListener('keydown', misFunciones.escucharTeclas);
})
