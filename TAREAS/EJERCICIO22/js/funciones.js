// Al cargar la página cargamos la configuracion
window.onload = function(){
    var dinero = sessionStorage.getItem('dinero');
    var apuesta = sessionStorage.getItem('apuesta');
    var fondo = sessionStorage.getItem('fondo');
    document.getElementById("Restante").innerHTML = dinero;
    document.getElementById("btn-apuesta").innerText = apuesta;
    document.getElementById("Apostado").innerText = apuesta;
    document.getElementById("juego").style.backgroundColor = fondo;


};

//Número aleatorio entre 1 y 6:  

function generarRandomInt(max){     
 return Math.floor(Math.random() * max); //devuelve nº entero entre 0 y max-1  
} 


function moverDados(){
    let numeroAleatorio1 = generarRandomInt(6)+1; //guardamos valor entero entre 1 y 6  
    let numeroAleatorio2 = generarRandomInt(6)+1; 
    const dado1 = document.getElementById("dado1"); 
    dado1.innerText = numeroAleatorio1;
    const dado2 = document.getElementById("dado2");
    dado2.innerText = numeroAleatorio2;

    const audio = document.getElementById("audioLanzar");  
    console.log(sessionStorage.getItem("activaSonido"));
    if(sessionStorage.getItem("activaSonido")   == "true" ){
        audio.play();
    }


    //CONSTANTES DE DINERO
        const dinero = document.getElementById("Restante");
        const apuesta = document.getElementById("btn-apuesta").innerText;
      


    //GANA
    if(numeroAleatorio1+numeroAleatorio2 == 7 || numeroAleatorio1+numeroAleatorio2 == 11){
        const audio = document.getElementById("audioGanar");  
        if(sessionStorage.getItem("activaSonido") == "true"){
            audio.play();
        }
        
        dinero.innerText = parseInt(dinero.innerText) + parseInt(apuesta);
    }
    //PIERDE
    else if(numeroAleatorio1+numeroAleatorio2 == 2 || numeroAleatorio1+numeroAleatorio2 == 3 || numeroAleatorio1+numeroAleatorio2 == 12){
        const audio = document.getElementById("audioPerder");  
        if(sessionStorage.getItem("activaSonido") == "true"){
            audio.play();
        }
        dinero.innerText = parseInt(dinero.innerText) - (parseInt(apuesta)*2);
    }


    
   
   
    

}

function configurar(){
    sessionStorage.setItem("dinero", document.getElementById("dineroRestante").value);
    sessionStorage.setItem("apuesta", document.getElementById("valorApuesta").value);
    sessionStorage.setItem("activaSonido", document.getElementById("activaSonido").checked);
    sessionStorage.setItem("fondo", document.getElementById("fondo").value);
    window.location.href = "./index.html";
    

}

function colorFondo() {
   let juego =  document.getElementById("juego");
   let color = document.getElementById("fondo").value;
   console.log(color);
   juego.style.backgroundColor = color;
    
}
// export const misFunciones = {
//    moverDados
// }
