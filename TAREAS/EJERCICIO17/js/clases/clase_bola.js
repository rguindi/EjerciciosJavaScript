import { misFunciones } from "../libreria/misfunciones.js"; 
export class Bola { 

    static arrayBolas = [];
    static contador = 1;

    constructor(radio, posX, posY, colorBola, linearGradient) { 
      
        this.id= misFunciones.formatearA3cifras(Bola.contador++),
        this.radio = radio,
        this. posX = posX,
        this.posY = posY,
        this.colorBola = colorBola,
        this.linearGradient = linearGradient
        
        Bola.arrayBolas.push(this) ;
    } 
    


    visualizar(){
        console.log('log por cacda bola');
   
        const div = document.createElement ('div');
        div.setAttribute ('id', 'idBola' + this.id);   
        div.style.width = this.radio *2 + "px";
        div.style.height = this.radio *2 + "px";
        div.style.borderRadius = "50%";
        div.style.position = 'Absolute';
        div.style.top = this.posY + "px";
        div.style.left = this.posX + "px";
        div.style.backgroundColor = this.colorBola;

        if (this.linearGradient !== undefined){
            div.removeAttribute('style.backgroundColor')
        }
        div.style.background = this.linearGradient;
        document.body.appendChild (div);

    }
        

   


} 