function calcular(operacion, x) {
    switch (operacion) {
    case 'suma':
    return x + y;
    case 'resta':
    return x - y;
    case 'multiplicacion':
    return x * y;
    case 'division':
    return x / y;
    default:
    return NaN;
    }
    }

    
    //Crear una nueva función llamada duplicar que, utilizando la función calcular, siempre duplique el número pasado como argumento

    function duplicar(y){
        let numero = calcular('multiplicacion', 2).bind(y);
        return numero;
    }

    console.log(duplicar(3)); // Debería imprimir 6
    console.log(duplicar(5)); // Debería imprimir 10