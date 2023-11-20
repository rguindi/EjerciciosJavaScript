import { Bola } from "./clase_bola.js";

function desplazar() {

    Bola.arrayBolas.forEach((bola) => {
    let divBola =  document.querySelector ("#"+bola.id);
    //   console.log(bola);

      bola = bola.comprobarParedes(bola);
      // bola = comprobarChoque(bola);

      //Lo cambia en el array
      bola.posY += bola.vy;
      bola.posX += bola.vx;
      //Lo cambia en el estilo
      divBola.style.left = `${bola.posX}px`;
      divBola.style.top = `${bola.posY}px`;
    });
  }


  export const misFunciones = {
 desplazar
}