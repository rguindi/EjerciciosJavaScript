import { Persona } from "./clasePersona.js";

export class Empleado extends Persona {
    static contadorEmpleado = 200;
  constructor(nombre, apellido, edad, sueldo) {
    super(nombre, apellido, edad);
    this._sueldo = sueldo;
    this.id = ++Empleado.contadorEmpleado;
  }

  get sueldo() {
    return this._sueldo.toLocaleString('es-ES',{style: 'currency', currency: 'EUR'}) ;
  }

  set sueldo(sueldo) {
    this._sueldo = sueldo;
  }

  toString() {
    return `Empleado ${this.id}:
            ${super.toString().substring(17)}
            Sueldo: ${this.sueldo}`;
  }
}
