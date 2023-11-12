export class Bola { 

    static arrayBolas = [];
    static contador = 1;

    constructor(radio, posX, posY, colorBola, linearGradient) { 
      
        this.id= Bola.contador++,
        this.radio = radio,
        this. posX = posX,
        this.posY = posY,
        this.colorBola = colorBola,
        this.linearGradient = linearGradient
        
        Bola.arrayBolas.push= this;
    } 
   
    //  get arrayBolas() {
    //     return Bola.arraybolas;
    // }

    visualizar(){
   
        const div = document.createElement ('div');
        div.style.width = this.radio *2;
        div.style.height = this.radio *2;
        div.setAttribute ('BorderRadius', "50%");
        div.style.position = 'Absolute';
        div.style.top = this.posY + "px";
        div.style.left = this.posX + "px";
        div.style.backgroundColor = this.colorBola;
        div.style.background = this.linearGradient;
    }
        

    // }


} 