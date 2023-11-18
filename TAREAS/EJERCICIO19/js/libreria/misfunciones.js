import { Bola } from "../clases/clase_bola.js";
let intervalo;
function formatearA3cifras(num){
    return num.toLocaleString(undefined,
        { minimumIntegerDigits: 3, useGrouping: false}); //dejo useGrouping para recordar la propiedad);
}

function generarRandomInt(max){
    return Math.floor(Math.random() * max);
}

function crearBotonCentrado(){
    const boton=document.createElement('input');
    boton.setAttribute('type', 'button');
    boton.setAttribute('style', `position: absolute`);
    boton.value='Pelopelopta';
    boton.style.top=`${window.innerHeight - 50}px`
    boton.style.left=`${window.innerWidth/2}px`
    document.body.appendChild(boton);
    return boton;
}

function pasarAHexadecimal(num){
    let resultado=num.toString(16);
    //debido a que da problemas con los colores si cada 
    // color no tiene 2 dígitos hexadecimales, hay que añadir 0 por la izda
    if (resultado.length ===1) resultado="0"+resultado;
    if (resultado.length ===0) resultado="00";
    return resultado;
}
/*
function desplazarBolas(){  // no usamos esta función
    let arrayEliminados=Bola.arrayBolas.splice(0, Bola.arrayBolas.length);
    Bola.arrayBolas.forEach((bola, indice, array)=>{
        //bola.desplazar(); comn método en clase Bola, no lo usamos
        bola.eliminar();
        arrayEliminados.forEach((bola)=>{
            let nuevaBola= new Bola(bola.radio, bola.posX+10, bola.PosY+5, 
                    bola.colorBola, bola.linearGradient);
            nuevaBola.visualizar();
});
*/
function desplazar2(){
    Bola.arrayBolas.forEach((bola)=>{
        console.log(bola);
        const divBola=document.getElementById(bola.id);
        bola.posX+=10;
        bola.posY+=5;
        divBola.style.left=`${bola.posX}px`;
        divBola.style.top = `${bola.posY}px`;
    });
}


function pararMovimiento(){
    clearInterval(intervalo);
}

function iniciarMovimiento(){
    intervalo=setInterval(desplazar2, 50);
}

function eliminarUltimo(){
    if (Bola.arrayBolas.length >0){
        const ultimaBola=Bola.arrayBolas.pop();
        // console.log(ultimaBola);
        ultimaBola.eliminar();
    }
}

function escucharTeclas(evento){
    console.log('tecla: ' + evento.key);
    switch (evento.key){
        case 'Home' : //tecla inicio
            iniciarMovimiento();
            break;
        case 'End': // fin
            pararMovimiento();
        break;
        case 'Delete': 
            eliminarUltimo();
            break;
    }
}

export const misFunciones = {
    formatearA3cifras,
    generarRandomInt,
    pasarAHexadecimal,
    crearBotonCentrado,
    escucharTeclas
}
