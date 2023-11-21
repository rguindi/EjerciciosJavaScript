import { misFunciones } from "../funciones.js";
import { DispositivoEntrada } from "./DispositivoEntrada.js";
export class Teclado extends DispositivoEntrada {
  static contadorTeclados = 1;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idTeclado =
      "T" + misFunciones.formatearA4cifras(Teclado.contadorTeclados++);
  }
  get idTeclado() {
    return this._idTeclado;
  }
  set idTeclado(in_idTeclado) {
    this._idTeclado = in_idTeclado;
  }

  toString() {
    let info = "Teclado nº: " + this.idTeclado + ", " + super.toString();
    return info;
  }
}
