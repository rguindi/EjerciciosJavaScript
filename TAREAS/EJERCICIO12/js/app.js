function sumar() {
    const operandoA = document.getElementById('operandoA');
    const operandoB = document.getElementById('operandoB');
    const resultado = document.getElementById('resultado');

    resultado.innerText = parseFloat (operandoA.value) + parseFloat(operandoB.value);
    


    
}

const boton_suma = document.getElementById('boton_suma');
boton_suma.addEventListener('click', sumar);







