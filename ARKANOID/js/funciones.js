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


let mouseX;
function posiciónraton(event) {
  mouseX = event.clientX;

    const barra = Barrita.barritas[0];
    barra.posX = mouseX;
    const barraDOM = document.querySelector ("#barrita");
    barraDOM.style.left = `${mouseX}px`;

  
}

  export const misFunciones = {
 desplazar,
 posiciónraton

}