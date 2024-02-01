
function cerrarVentana() {
    nuevaVentana.close ();
}

let nuevaVentana;                       

function abrirVentana() {                  
    
    nuevaVentana = window.open("", "NombreVentana",
    "width = 400, height=200, left=200, top=100"  
    );

    nuevaVentana.document.write("<h2>Esta es la nueva ventana</h2>");
    
    const boton1 = nuevaVentana.document.createElement('button');
    boton1.innerText = "Cerrar";
    
    nuevaVentana.document.body.appendChild(boton1);
    boton1.addEventListener('click', cerrarVentana);
}

function desplazarVentana() {
    
    nuevaVentana.moveBy (40,50);
    
}

// const flecha = ()=> nuevaVentana.moveBy(40,50);   //Funcion flecha


const idTimeout = setTimeout (abrirVentana, 2000);   




//abrirVentana(); //Si la llamo directamente POP UP