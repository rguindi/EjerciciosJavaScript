export class Bola {
    static contador = 0;


    constructor(radio, posX, posY, colorBola) {
    this.id = "bola";
    this._radio = radio;
    this._posX = posX;
    this._posY = posY;
    this._colorBola = colorBola;

    }
    
    get radio() {
        return this._radio;
    }
    set radio(in_radio) {
        this._radio = in_radio;
    }

    get posX() {
        return this._posX;
    }
    set posX(in_posX) {
        this._posX = in_posX;
    }

    get posY() {
        return this._posY;
    }
    set posY(in_posY) {
        this._posY = in_posY;
    }

    get colorBola() {
        return this._colorBola;
    }
    set colorBola(in_colorBola) {
        this._colorBola = in_colorBola;
    }

    visualizar() {
        const bolaElemento=document.createElement('DIV');
        bolaElemento.setAttribute('id', this.id);
        bolaElemento.style.width=`${parseInt(this.radio*2)}px`; // Tamaño X
        bolaElemento.style.height=`${parseInt(this.radio*2)}px`; // tamaño Y
        bolaElemento.style.backgroundColor= `${this.colorBola}`;
        bolaElemento.style.borderRadius='50%';
        bolaElemento.style.position='absolute';
       bolaElemento.style.marginLeft=`${parseInt(this.posX)}px`;
       bolaElemento.style.marginTop=`${parseInt(this.posY)}px`;

        return bolaElemento;

    }

    eliminar(){
        const bola= document.getElementById(this.id);
        bola.parentElement.removeChild(bola);
        //bola.remove(); // se desaconseja
    }
  
}
