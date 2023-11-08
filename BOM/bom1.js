

//--------------------------SETTIMEOUT Y SETINTERVAL----------------------
function muestraMensaje() {
    console.log("hola despues de 2 segunndos");
    
}

function muestraMensaje2(msg) {
    console.log(msg);
    
}

console.log("bom1");
const idTimeout = setTimeout (muestraMensaje, 2000);       //El tiempo en milisegundos
const idTimeout2 = setTimeout (muestraMensaje2, 2000, "hola");  //Se pasa ahi el parametro en vez entre parentesis
console.log("bom2");





// let i=0;
// const idInterval = setInterval (()=>{
//     console.log("cada 2 segundos" + "llevo " + ++i + " veces");

//     if (i===5){
//         clearInterval(idInterval);
//         console.log("FIN");
//     }

// }, 2000);