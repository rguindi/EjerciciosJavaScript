// import { misFunciones } from "../funciones.js";
// import { DispositivoEntrada } from "./DispositivoEntrada.js";



export class Bola {

    static arraybolas = [];
  static contadorBolas= 1;

  constructor(radio, color) {
    this._idBola = Bola.contadorBolas++;
    this._width = radio*2;
    this._height = radio*2;
    this.color = color;

    Bola.arraybolas.push(this);
  }
					get idBola() {
						return this._idBola;
					}
					set idBola(in_idBola) {
						this._idBola = in_idBola;
					}
					
					get width() {
						return this._width;
					}
					set width(in_width) {
						this._width = in_width;
					}
					
					get height() {
						return this._height;
					}
					set height(in_height) {
						this._height = in_height;
					}
					
					get color() {
						return this._color;
					}
					set color(in_color) {
						this._color = in_color;
					}
					

    visualizar(){
        let bola = document.createElement ('div');
        bola.style.width = this.width + "px";
        bola.style.height = this.height + "px";
        bola.style.backgroundColor = this.color;
        bola.style.borderRadius = "50%";
        document.body.appendChild(bola);
    }

}
