import { Persona } from "./clasePersona.js";

export class Cliente extends Persona {
    static contadorCliente = 300;
  constructor(nombre, apellido, edad, registro) {
    super(nombre, apellido, edad);
    this.registro = registro;
    this.id = ++Cliente.contadorCliente;
  }

  toString() {
    return `${this.id}:
            ${super.toString()}
            Registro: ${this.registro}`;
  }
}
