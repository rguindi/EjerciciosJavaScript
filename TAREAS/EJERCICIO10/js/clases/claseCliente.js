import { Persona } from "./clasePersona.js";

export class Cliente extends Persona {
    static contadorCliente = 300;
  constructor(nombre, apellido, edad, registro) {
    super(nombre, apellido, edad);
    this._registro = registro;
    this.id = ++Cliente.contadorCliente;
  }

  get registro() {
    return this._registro.toLocaleDateString();
  }

  set registro(registro) {
    this._registro = registro;
  }

  toString() {
    return `Cliente ${this.id}:
            ${super.toString().substring(17)}
            Registro: ${this.registro}`;
  }
}
