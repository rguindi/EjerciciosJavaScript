
function formatearA4cifras(num){
    return num.toLocaleString(undefined,
        { minimumIntegerDigits: 4, useGrouping: false}); //dejo useGrouping para recordar la propiedad);
}

function obtenerPrimeraPalabra(frase) {
    const palabras = frase.split(' ');   // Dividir la frase en palabras usando el espacio como separador
    return palabras[0];  // Devolver numero de palabra
  }

export const misFunciones = {
    formatearA4cifras,
    obtenerPrimeraPalabra
}
