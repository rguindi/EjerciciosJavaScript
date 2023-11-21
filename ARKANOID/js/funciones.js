import { Bola } from "./clase_bola.js";
import { Barrita } from "./clase_barrita.js";
let intervalo;
function desplazar() {

    Bola.arrayBolas.forEach((bola) => {
    let divBola =  document.querySelector ("#"+bola.id);
    //   console.log(bola);

      bola = bola.comprobarParedes(bola);
      bola = comprobarChoque(bola, Barrita.barritas[0]);
      // bola = comprobarChoque(bola);
      //Lo cambia en el array
      bola.posY += bola.vy;
      bola.posX += bola.vx;
      //Lo cambia en el estilo
      divBola.style.left = `${bola.posX}px`;
      divBola.style.top = `${bola.posY}px`;


  

    });
  }

  function comprobarChoque (bola, barrita){
        
        if (((bola.posY + (bola.radio*2)) >= barrita.posY) && ((bola.posX + (bola.radio*2)) >= (barrita.posX)) && (bola.posX <= (barrita.posX + parseInt(barrita.width)))) {
            bola.vy = -bola.vy;
           

        }



    return bola;
}

function moverIzq(){
  intervalo=setInterval(desplazari, 80);
}

function moverDer(){
  intervalo=setInterval(desplazard, 80);
}

function desplazari(){
  let barra = document.querySelector ("#barrita");
  barra.posX += -1;
  barra.style.left = `${barra.posX}px`;
}

function desplazard(){
  let barra = document.querySelector ("#barrita");
  barra.posX += 1; 
  barra.style.left = `${barra.posX}px`;

}


function escucharTeclas(evento){
  console.log('tecla: ' + evento.key);
  switch (evento.key){
      case 'ArrowLeft' : 
          moverIzq();
          break;
      case 'ArrowRight': 
          moverDer();
      break;
     
  }
}
function escucharTeclas2(evento){
  console.log('tecla: ' + evento.key);
  switch (evento.key){
      case 'ArrowLeft' : 
          clearInterval(intervalo);
          break;
      case 'ArrowRight': 
          clearInterval(intervalo);
      break;
     
  }
}


  export const misFunciones = {
 desplazar,
 escucharTeclas,
 escucharTeclas2

}