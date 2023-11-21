function generarRandomInt(max){                     //Random con munero máximo
    return Math.floor(Math.random() * max);
}

function generarNumeroAleatorio(minimo, maximo) {
    const numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;   //Random con minimo y máximo
    return numeroAleatorio;
  }
  

function generarNumeroAleatorioPosNeg(minimo, maximo) {    //Este random genera nu numero aleatorio entre 2 valores, q sera aleatoriamente positivo o negativo
    const rango = maximo - minimo;
    const numeroAleatorio = Math.random() * rango + minimo;
    return Math.random() < 0.5 ? numeroAleatorio : -numeroAleatorio;
  }


  function pasarAHexadecimal(num){          //Pasar un numero a Hexadecimal
    let resultado=num.toString(16);
    //debido a que da problemas con los colores si cada 
    // color no tiene 2 dígitos hexadecimales, hay que añadir 0 por la izda
    if (resultado.length ===1) resultado="0"+resultado;
    if (resultado.length ===0) resultado="00";
    return resultado;
}


function formatearA3cifras(num){                    //Formatear un numeroa a X cifras.
    return num.toLocaleString(undefined,
        { minimumIntegerDigits: 3, useGrouping: false}); //dejo useGrouping para recordar la propiedad (separador de miles) ;
}

function obtenerPalabra(frase) {
    const palabras = frase.split(' ');   // Dividir la frase en palabras usando el espacio como separador
    return palabras[0];  // Devolver numero de palabra
  }
