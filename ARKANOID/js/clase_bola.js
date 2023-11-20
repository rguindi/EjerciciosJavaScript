export class Bola {
  static contador = 0;
  static arrayBolas = [];

  constructor(radio, posX, posY, colorBola, vx, vy) {
    this._id = "bola" + Bola.contador++;
    this._radio = radio;
    this._posX = posX;
    this._posY = posY;
    this._colorBola = colorBola;
    this._vx = vx;
    this._vy = vy;

    Bola.arrayBolas.push(this);
  }

  get id() {
    return this._id;
  }
  set id(in_id) {
    this._id = in_id;
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
  get vy() {
    return this._vy;
  }
  set vy(in_vy) {
    this._vy = in_vy;
  }
  get vx() {
    return this._vx;
  }
  set vx(in_vx) {
    this._vx = in_vx;
  }

  visualizar() {
    const bolaElemento = document.createElement("DIV");
    bolaElemento.setAttribute("id", this.id);
    bolaElemento.style.width = `${parseInt(this.radio * 2)}px`; // Tamaño X
    bolaElemento.style.height = `${parseInt(this.radio * 2)}px`; // tamaño Y
    bolaElemento.style.backgroundColor = `${this.colorBola}`;
    bolaElemento.style.borderRadius = "50%";
    bolaElemento.style.position = "absolute";
    bolaElemento.style.left = `${parseInt(this.posX)}px`;
    bolaElemento.style.top = `${parseInt(this.posY)}px`;

    return bolaElemento;
  }

  eliminar() {
    const bola = document.getElementById(this.id);
    bola.parentElement.removeChild(bola);
    //bola.remove(); // se desaconseja
  }

  comprobarParedes(bola) {


    if (bola.posY <= 0) bola.vy = -bola.vy;
    if (bola.posY >= zonadejuego.offsetHeight - bola.radio * 2) bola.vy = -bola.vy;
    if (bola.posX <= 0) bola.vx = -bola.vx;
    if (bola.posX >= zonadejuego.offsetWidth - bola.radio * 2) bola.vx = -bola.vx;
    return bola;
  }
}
