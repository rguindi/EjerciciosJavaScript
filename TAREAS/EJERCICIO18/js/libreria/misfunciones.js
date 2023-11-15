import { Bola } from "../clases/clase_bola.js";
function formatearA3cifras(num){
    return num.toLocaleString(undefined,
        { minimumIntegerDigits: 3, useGrouping: false}); //dejo useGrouping para recordar la propiedad);
}

function crearBotonCentrado(){
    const boton =document.createElement('input');
    boton.setAttribute('type', 'button');
    boton.setAttribute('style', 'position: absolute');
    boton.value="Booola";
    boton.style.top=`${window.innerHeight -50}px`;
    boton.style.left=`${window.innerWidth/2}px`;
    boton.style.zIndex=1;
    document.body.appendChild(boton);
    return boton; //por si acaso
}

function crearBotonintervalo(){
    const boton =document.createElement('input');
    boton.setAttribute('type', 'button');
    boton.setAttribute('style', 'position: absolute');
    boton.value="Comenzar intervalo";
    boton.style.top=`${window.innerHeight -50}px`;
    boton.style.left=`${(window.innerWidth/2)+100}px`;
    boton.style.zIndex=1;
    document.body.appendChild(boton);
    return boton; //por si acaso
}

function generarRandomInt(max){
    return Math.floor(Math.random() * max);
}

function pasarAHexadecimal(num){
    let resultado=num.toString(16);
    //debido a que da problemas con los colores si cada 
    // color no tiene 2 dígitos hexadecimales, hay que añadir 0 por la izda
    if (resultado.length ===1) resultado="0"+resultado;
    return resultado;
}
var intervalo;
function empezarIntervalo (){
    intervalo = setInterval (Bola.iniciarMovimiento, 50);
    return intervalo;
}
function detenerIntervalo (){
    clearInterval (intervalo);
}


function escucharTeclas(evento) {
    console.log('Tecla: '+evento.key);
    switch (evento.key) {
        case 'Delete':
            Bola.borrarUltimaBola();
            break;
        case 'Home':
            misFunciones.empezarIntervalo();
            break;
        case 'p':
                Bola.iniciarMovimiento();
                break;
        
        case 'l':
                detenerIntervalo(false);
                break;
    
        default:
            break;
    }
    
}

  //FUNCION EXTRAIDA DE INTERNET
  function reproducirPitido(duracionMs) {    
    // Verificar si el navegador es compatible con la API de AudioContext
    if ('AudioContext' in window || 'webkitAudioContext' in window) {
        // Crear un nuevo contexto de audio
        var audioContext = new (window.AudioContext || window.webkitAudioContext)();

        // Crear un oscilador (generador de ondas)
        var oscillator = audioContext.createOscillator();

        // Conectar el oscilador al destino de audio (altavoces)
        oscillator.connect(audioContext.destination);

        // Iniciar el oscilador
        oscillator.start();

        // Detener el oscilador después de la duración especificada
        oscillator.stop(audioContext.currentTime + duracionMs / 1000);

    } else {
        console.error('El navegador no es compatible con la API de AudioContext.');
    }
}




export const misFunciones ={
    formatearA3cifras,
    crearBotonCentrado,
    pasarAHexadecimal,
    generarRandomInt,
    escucharTeclas,
    crearBotonintervalo,
    empezarIntervalo,
    reproducirPitido
  
}