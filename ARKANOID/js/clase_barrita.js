export class Barrita {

    constructor(width, height, color, posY, posX, velocidad) {
      this._id = "barrita";
      this._posX = posX;
      this._posY = posY;
      this._color = color;
      this._width = width + "px";
      this._height = height + "px";
      this._velocidad = velocidad;
    }
					get id() {
						return this._id;
					}
					set id(in_id) {
						this._id = in_id;
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
					
					get color() {
						return this._color;
					}
					set color(in_color) {
						this._color = in_color;
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
					
					get velocidad() {
						return this._velocidad;
					}
					set velocidad(in_velocidad) {
						this._velocidad = in_velocidad;
					}
					
        visualizar(){
            let barra = document.createElement ('DIV');
            barra.style.width = this.width;
            barra.style.height = this.height;
            barra.style.backgroundColor = this.color;
            barra.style.marginLeft = this.posX + 'px';
            barra.style.marginTop = this.posY +'px';
            barra.style.border = "1px solid black";
           barra.style.position = 'absolute';

            let zona = document.getElementById ('zonadejuego');
            zona.appendChild (barra);

        }
        
}