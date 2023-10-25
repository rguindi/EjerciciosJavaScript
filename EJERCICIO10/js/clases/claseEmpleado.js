import { Persona } from "./clasePersona.js";

export class Empleado extends Persona {
    static contadorEmpleado = 200;
  constructor(nombre, apellido, edad, sueldo) {
    super(nombre, apellido, edad);
    this.sueldo = sueldo;
    this.id = ++Empleado.contadorEmpleado;
  }

  toString() {
    return `${this.id}:
            ${super.toString()}
            Sueldo: ${this.sueldo}`;
  }
}
