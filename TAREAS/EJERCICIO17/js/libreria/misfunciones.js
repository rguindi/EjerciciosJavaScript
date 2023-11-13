function formatearA3cifras(numero) {
    return String(numero).padStart(3, '0');
    
}

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function generarBola(){

    radio = random(40, 90);
    posX = random (1, 600);
    posY = random (1, 600);


    new Bola(radio, posX, posY, colorBola, linearGradient);
}

func


function crearBotonCentrado() {
    const booola = document.createElement('input');
    booola.setAttribute ('type', 'button');
    booola.style.position = 'absolute';
    booola.style.top = `${window.innerHeight - 50}px`;
    booola.style.left = `${window.innerWidth/2}px`;
    booola.setAttribute ('value', 'Booola');
    booola.style.zIndex = 1;
    document.body.appendChild (booola);
    return booola;  //solo por si acaso
}






export const misFunciones = {
    formatearA3cifras, crearBotonCentrado,
}