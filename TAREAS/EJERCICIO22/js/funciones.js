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
    audio.play();


    //CONSTANTES DE DINERO
        const dinero = document.getElementById("Restante");
        const apuesta = document.getElementById("btn-apuesta").getAttribute("value");


    //GANA
    if(numeroAleatorio1+numeroAleatorio2 == 7 || numeroAleatorio1+numeroAleatorio2 == 11){
        const audio = document.getElementById("audioGanar");  
        audio.play();
        dinero.innerText = parseInt(dinero.innerText) + parseInt(apuesta);
    }
    //PIERDE
    else if(numeroAleatorio1+numeroAleatorio2 == 2 || numeroAleatorio1+numeroAleatorio2 == 3 || numeroAleatorio1+numeroAleatorio2 == 12){
        const audio = document.getElementById("audioPerder");  
        audio.play();
        dinero.innerText = parseInt(dinero.innerText) - (parseInt(apuesta)*2);
    }


    
   
   
    

}

function empezar(){
    document.body.style.backgroundColor = "black";
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
