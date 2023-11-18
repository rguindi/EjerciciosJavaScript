import { Bola } from "../clases/clase_bola.js";
let intervalo;
let arrayBolas=[];
function formatearA3cifras(num){
    return num.toLocaleString(undefined,
        { minimumIntegerDigits: 3, useGrouping: false}); //dejo useGrouping para recordar la propiedad);
}

function generarRandomInt(max){
    return Math.floor(Math.random() * max);
}

function generarNumeroAleatorioPosNeg(minimo, maximo) {    //Este random genera nu numero aleatorio entre 2 valores, q sera aleatoriamente positivo o negativo
    const rango = maximo - minimo;
    const numeroAleatorio = Math.random() * rango + minimo;
    return Math.random() < 0.5 ? numeroAleatorio : -numeroAleatorio;
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

function desplazar2(){
    arrayBolas.forEach((bola)=>{
        console.log(bola);
        const divBola=document.getElementById(bola.id);

    bola = comprobarParedes(bola);
    bola = comprobarChoque(bola);

        //Lo cambia en el array
        bola.posY+= bola.vy;
        bola.posX+=bola.vx;         
       //Lo cambia en el estilo
        divBola.style.left=`${bola.posX}px`;
        divBola.style.top = `${bola.posY}px`;
    });
}

function comprobarParedes(bola) {

    if(bola.posY <= 0) bola.vy = -bola.vy;
    if(bola.posY >= window.innerHeight- (bola.radio*2)) bola.vy= -bola.vy;
    if(bola.posX <= 0) bola.vx =-bola.vx;
    if(bola.posX >= window.innerWidth- (bola.radio*2)) bola.vx= -bola.vx;
    return bola;  
}

function comprobarChoque (bola){
    arrayBolas.forEach(element => {

       let  Ymayor = element.posY + element.radio;
       let  Ymenor = element.posY - element.radio;
       let  Xmayor = element.posX + element.radio;
       let  Xmenor = element.posX - element.radio;
        
        if ((element.id != bola.id) && (bola.posY <= Ymayor) && (bola.posY >= Ymenor) && (bola.posX <= Xmayor) && (bola.posX >= Xmenor) ) {
            bola.vy = -bola.vy;
            bola.vx =-bola.vx;
            element.vx = -element.vx;
            element.vy = -element.vy;

        }


    });

    return bola;
}

function pararMovimiento(){
    clearInterval(intervalo);
}

function iniciarMovimiento(){
    intervalo=setInterval(desplazar2, 50);
}

function eliminarUltimo(){
    if (arrayBolas.length >0){
        const ultimaBola=arrayBolas.pop();
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
    escucharTeclas,
    generarNumeroAleatorioPosNeg,
    arrayBolas
}
