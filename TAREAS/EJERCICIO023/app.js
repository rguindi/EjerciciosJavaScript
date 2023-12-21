

let boton = document.createElement('button');
boton.innerText = 'Cambia color';
document.body.appendChild(boton);


let input1 = document.createElement('input');
input1.setAttribute('type', 'text');
input1.setAttribute('value', 'Cambia de color 1');
input1.setAttribute('id', 'i1');
document.body.appendChild(input1);

let input2 = document.createElement('input');
input2.setAttribute('type', 'text');
input2.setAttribute('value', 'Cambia de color 2');
input2.setAttribute('id', 'i2');
document.body.appendChild(input2);

boton.addEventListener('click', cambiarFondo.bind(input1, input2));

function cambiarFondo(){
    input1.style.backgroundColor = (generarColorAleatorio());
    input2.style.backgroundColor = (generarColorAleatorio());

    // console.log(input1);
    // console.log(input2);
}


function generarColorAleatorio() {
    // Genera un componente hexadecimal aleatorio (0-255) y conviértelo a formato hexadecimal
    const componente = () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
  
    // Concatena tres componentes para formar un color hexadecimal completo
    const colorHex = `#${componente()}${componente()}${componente()}`;
  
    return colorHex;
 

}


