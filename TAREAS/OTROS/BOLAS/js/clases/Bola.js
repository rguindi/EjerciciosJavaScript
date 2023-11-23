

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
	

	identificar(){
		
		this.textContent = this.getAttribute ('id');        //Aqui this es el elemento

	}

	eliminar(){
		let padre = this.parentNode;    //Forma correcta de eliminar un elemento
		padre.removeChild(this);  
	}

    visualizar(){
        let bola = document.createElement ('div');
		bola.setAttribute ('id', this.idBola);
        bola.style.width = this.width + "px";
        bola.style.height = this.height + "px";
        bola.style.backgroundColor = this.color;
        bola.style.borderRadius = "50%";
		bola.style.display = 'flex';
		bola.style.justifyContent ='center';
		bola.style.alignItems = 'center';

	
        document.body.appendChild(bola);
		bola.addEventListener ('click', this.identificar);
		bola.addEventListener ('dblclick', this.eliminar);


	
    }

}
