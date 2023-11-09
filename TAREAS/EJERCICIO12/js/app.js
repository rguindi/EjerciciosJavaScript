function sumar() {
    const operandoA = document.getElementById('operandoA');
    const operandoB = document.getElementById('operandoB');
    const resultado = document.getElementById('resultado');

    let resultados = document.createElement ('div'); 
    resultados.setAttribute('class', 'form-control');
    resultado.appendChild (resultados);

    if ((operandoA.value == "")|| (operandoB.value =="")){
        resultados.innerText = 'La operación no incluye números';
    }else
    resultados.innerText = parseFloat (operandoA.value) + parseFloat(operandoB.value);
    


    
}

const boton_suma = document.getElementById('boton_suma');
boton_suma.addEventListener('click', sumar);







