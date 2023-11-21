import { misFunciones } from "../funciones.js";
import { DispositivoEntrada } from "./DispositivoEntrada.js";

export class Raton extends DispositivoEntrada {
  static contadorRatones = 1;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idRaton =
      "R" + misFunciones.formatearA4cifras(Raton.contadorRatones++);
  }

  get idRaton() {
    return this._idRaton;
  }
  set idRaton(in_idRaton) {
    this._idRaton = in_idRaton;
  }

  toString() {

    let info = "Ratón nº: " + this.idRaton + super.toString();
    return info;
  }
}
