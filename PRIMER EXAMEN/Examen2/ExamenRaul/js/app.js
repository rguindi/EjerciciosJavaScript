
let diametro = window.outerWidth/5;
console.log(diametro);

let circulo = document.createElement ('div');
circulo.style.borderRadius = '50%';

circulo.style.width = diametro+'px';
circulo.setAttribute ('id', 'bola');
circulo.style.height = diametro+'px';
circulo.style.border = "2px solid #000";
circulo.style.marginLeft = (window.outerWidth/2 - diametro) + 'px';
circulo.style.marginTop = (window.outerWidth/2- diametro) + 'px';

window.addEventListener ('resize', redimensiona);

function redimensiona() {

    let bola = document.getElementById ('bola');
    let diametro = window.outerWidth/5;
    bola.style.height = diametro+'px';
    bola.style.width = diametro+'px';


    bola.style.marginLeft = (window.outerWidth/2 - diametro) + 'px';
    bola.style.marginTop = (window.outerHeight/2- diametro) + 'px';
    
}



document.body.appendChild (circulo);