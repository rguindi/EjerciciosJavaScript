const arrayMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 
'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

var contador = 0;

function añadir (){
     const p = document.createElement ('p');
     p.textContent = arrayMeses[contador];
     document.body.appendChild (p);
    contador++;
    console.log(contador);
    
    if (contador == 12) {
        boton1.removeEventListener('click', añadir);
        boton1.addEventListener('click', quitar);
        boton1.textContent = "Quitar";

        }
    
    
}

function quitar() {
    const parrafos = document.getElementsByTagName('p');
    
    document.body.removeChild(parrafos[contador-1]);
    contador--;
    console.log(contador);
    if (contador == 0) {
        boton1.removeEventListener('click', quitar);
        boton1.addEventListener('click', añadir);
        boton1.textContent = "Añadir";

        }
}


const boton1 = document.createElement('button');

if (contador == 0) {
    boton1.addEventListener('click', añadir);
    boton1.textContent = "Añadir";
    document.body.appendChild (boton1);
}







