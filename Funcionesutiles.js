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


  23.2376.toFixed(2);       //Redondea a los decimales indicados en parametro. Recorta decimales
  23.76.toLocaleString() // Convierte puntos en comas y miles en puntos
  parseInt(valor); //convierte el valor pasado a un número entero. Siempre que comience por un número la conversión se podrá hacer
"hola".length; //devuelve la longitud de una cadena. Ej.: 'Hola mundo'.length devuelve 10 
"Adiós".charAt(posición);  //'Hola mundo'.charAt(0) devuelve ‘H’ 
"hola".indexOf(carácter)// 'Hola mundo'.indexOf('o') devuelve 1. Si no se encuentra devuelve -1 . Buscar caracter
"hola".lastIndexOf(carácter);// 'Hola mundo'.lastIndexOf('o') devuelve 9 . Ultima posición de un caracter
"hola".substring(desde, hasta);// 'Hola mundo'.substring(2,4) devuelve ‘la’ . Recorta un string
"hola".substr(desde, numcaracteres); // 'Hola mundo'.substr(2,4) devuelve ‘la m’ . Recorta un String
"hola".replace(busco, reemplaza);// 'Hola mundo'.replace('Hola', 'Adiós') devuelve ‘Adiós mundo’ . Reemplaza palabra, cadena, o caracter
"hola".toLocaleLowerCase(); // 'Hola mundo'.toLocaleLowerCase() devuelve ‘hola mundo’.  minúsculas
"hola".toLocaleUpperCase(); // 'Hola mundo'.toLocaleUpperCase() devuelve ‘HOLA MUNDO’  . Mayúsculas
"hola".localeCompare(cadena); // devuelve -1 si la cadena a que se aplica el método es anterior alfabéticamente a ‘cadena’, 1 si es posterior y 0 si ambas son iguales. Tiene en cuenta caracteres locales como acentos ñ, ç, 

"hola".trim(cadena); // ' Hola mundo '.trim() devuelve ‘Hola mundo’ . Recorta ultimos espacios
"hola".startsWith(cadena); //'Hola mundo'.startsWith('Hol') devuelve true 
"hola".endsWith(cadena); // 'Hola mundo'.endsWith('Hol') devuelve false 
"hola".includes(cadena); // 'Hola mundo'.includes('mun') devuelve true 
"hola".repeat(veces); // 'Hola mundo'.repeat(3) devuelve ‘Hola mundoHola mundoHola mundo’ . Repetir cadenas o palabras
"hola".split(sepadaror); // 'Hola mundo'.split(' ') devuelve  el  array  [‘Hola’,  ‘mundo’]. 'Hola . Corta por u separador
'mundo'.split(''); // devuelve el array [‘H’, ‘o’, ‘l’, ‘a’, ‘ ‘, ‘m’, ‘u’, ‘n’, ‘d’, ‘o’] 


let cadena_larga = "para cadenas muy largas podemos hacer \
el salto de linea en el codigo con la barra invertida."

bolaElemento.style.left=`${parseInt(this.posX)}px`;  //Forma de concatenar texto con variables  y llamar a funciones
let linearGradient=`linear-gradient(${lgAngulo}deg,${colorInicial},${colorFinal})`;  //Lo mismo.  Comillas al lado de la P, Dollar y llaves para variable o funcion.


