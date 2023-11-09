function sumar() {
    resultado =  operandoA+operandoB;

    document.createElement('input');
    document.createTextNode(resultado);
    
}

const boton_suma = document.getElementById('boton_suma');
let operandoA = document.getElementById('operandoA').textContent;
let operandoB = document.getElementById('operandoB').textContent;

boton_suma.addEventListener('click', sumar);
