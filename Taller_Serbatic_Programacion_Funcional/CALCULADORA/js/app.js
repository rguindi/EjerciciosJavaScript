//Declaracion de variables
const pantalla = document.getElementById("pantalla");
const historico = document.getElementById("historico");
let numeros = [];




//Funciones utiles
function comprueba0() {
  if (pantalla.value == "0") return true;
  return false;
}


function ultimaOperacion() {

    for (let i = historico.value.length-1; i >= 0; i--) {  //Recorro el historico hacia atrá, buscando el último operador.
        if (historico.value[i]=='+') return 'suma';
        else if (historico.value[i]=='-') return 'resta';
        else if (historico.value[i]=='/') return 'division';
        else if (historico.value[i]=='X') return 'multiplicacion';
        
    }
    
}



//Funciones para numeros
function add0() {
  if (comprueba0()) {
    pantalla.value = 0;
  } else {
    pantalla.value += 0;
    historico.value += 0;
  }
}
function add1() {
  if (comprueba0()) {
    pantalla.value = 1;
    historico.value += 1;
  } else {
    pantalla.value += 1;
    historico.value += 1;
  }
}
function add2() {
  if (comprueba0()) {
    pantalla.value = 2;
    historico.value += 2;
  } else {
    pantalla.value += 2;
    historico.value += 2;
  }
}
function add3() {
  if (comprueba0()) {
    pantalla.value = 3;
    historico.value += 3;
  } else {
    pantalla.value += 3;
    historico.value += 3;
  }
}
function add4() {
  if (comprueba0()) {
    pantalla.value = 4;
    historico.value += 4;
  } else {
    pantalla.value += 4;
    historico.value += 4;
  }
}
function add5() {
  if (comprueba0()) {
    pantalla.value = 5;
    historico.value += 5;
  } else {
    pantalla.value += 5;
    historico.value += 5;
  }
}
function add6() {
  if (comprueba0()) {
    pantalla.value = 6;
    historico.value += 6;
  } else {
    pantalla.value += 6;
    historico.value += 6;
  }
}
function add7() {
  if (comprueba0()) {
    pantalla.value = 7;
    historico.value += 7;
  } else {
    pantalla.value += 7;
    historico.value += 7;
  }
}
function add8() {
  if (comprueba0()) {
    pantalla.value = 8;
    historico.value += 8;
  } else {
    pantalla.value += 8;
    historico.value += 8;
  }
}
function add9() {
  if (comprueba0()) {
    pantalla.value = 9;
    historico.value += 9;
  } else {
    pantalla.value += 9;
    historico.value += 9;
  }
}
function addPunto() {
  if (!comprueba0()) {
    pantalla.value += '.';
    historico.value += '.';
  }
}


//Funciones para resto de botones
function borra() {
  let num = pantalla.value.length;  //numero de caracteres a borrar del historico
  pantalla.value = 0;
  historico.value = historico.value.slice(0,-num);

}
function borraTodo() {
  pantalla.value = 0;
  historico.value = null;
  numeros.length=0;
}

function sumar() {
    numeros.push(parseFloat(pantalla.value));
    pantalla.value = 0;
    historico.value += '+';
}
function restar() {
    numeros.push(parseFloat(pantalla.value));
    pantalla.value = 0;
    historico.value += '-';
}
function multiplicar() {
    numeros.push(parseFloat(pantalla.value));
    pantalla.value = 0;
    historico.value += 'X';
}
function dividir() {
    numeros.push(parseFloat(pantalla.value));
    pantalla.value = 0;
    historico.value += '/';
}
function resultado() {
    numeros.push(parseFloat(pantalla.value));

    switch (ultimaOperacion()) {
        case 'suma':
            const suma = numeros.reduce((acumulador, valoractual)=>acumulador+ valoractual);
            pantalla.value = suma;
            numeros.length=0;
            
            break;
            case 'resta':
            const resta = numeros.reduce((acumulador, valoractual)=>acumulador- valoractual);
            pantalla.value = resta;
            numeros.length=0;
            
            break;
        case 'division':
            const division = numeros.reduce((acumulador, valoractual)=>acumulador/valoractual);
            pantalla.value = division;
            numeros.length=0;
            
            break;
            case 'multiplicacion':
            const multiplicacion = numeros.reduce((acumulador, valoractual)=>acumulador*valoractual);
            pantalla.value = multiplicacion;
            numeros.length=0;
            
            break;




        default:
            
            break;
    }

    
}


