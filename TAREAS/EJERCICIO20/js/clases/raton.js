import { misFunciones } from "../funciones.js";
import { DispositivoEntrada } from "./DispositivoEntrada.js";

export class Raton extends DispositivoEntrada {

	static contadorRatones = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idRaton = "R" + misFunciones(Raton.contadorRatones++);

  }
  
					get idRaton() {
						return this._idRaton;
					}
					set idRaton(in_idRaton) {
						this._idRaton = in_idRaton;
					}
					

}
