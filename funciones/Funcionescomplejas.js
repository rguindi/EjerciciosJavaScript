//Saber si un numero es primo
function esPrimo(numero) {
    // Verificar si el número es menor o igual a 1
    if (numero <= 1) {
        return false;
    }

    // Verificar si el número es divisible por cualquier número menor que él
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false; // No es primo
        }
    }

    return true; // Es primo
}

//Calcular el factorial
function calcularFactorial(numero) {
    // Verificar si el número es no negativo
    if (numero < 0) {
        return "El factorial no está definido para números negativos";
    }

    // Caso base: factorial de 0 es 1
    if (numero === 0) {
        return 1;
    }

    // Calcular el factorial usando un bucle
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }

    return resultado;
}



//Validar DNI
function validarDNI(dni) {
    // Verificar que el DNI tiene una longitud válida
    if (dni.length !== 9) {
        return false;
    }

    // Extraer el número y la letra de control
    const numero = dni.slice(0, 8);
    const letraControl = dni.slice(8).toUpperCase();

    // Verificar que el número sea un entero positivo
    if (!(/^\d+$/.test(numero))) {
        return false;
    }

    // Calcular la letra de control esperada
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const letraEsperada = letras[numero % 23];

    // Comparar la letra de control
    return letraControl === letraEsperada;
}

