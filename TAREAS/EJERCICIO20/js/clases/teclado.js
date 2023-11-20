import { misFunciones } from "../funciones.js";
export class Teclado extends DispositivoEntrada {

	static contadorTeclados = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idTeclado = "T" + misFunciones(Teclado.contadorTeclados++);
   
  }
					get idTeclado() {
						return this._idTeclado;
					}
					set idTeclado(in_idTeclado) {
						this._idTeclado = in_idTeclado;
					}
	
  

}
