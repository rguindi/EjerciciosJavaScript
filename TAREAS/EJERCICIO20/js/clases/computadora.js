import { misFunciones } from "../funciones.js";
// import { DispositivoEntrada } from "./DispositivoEntrada.js";
import { Monitor } from "./monitor.js";
import { Teclado } from "./teclado.js";
import { Raton } from "./raton.js";

export class Computadora{

	static contadorComputadoras= 1;

  constructor(nombre, monitor, teclado, raton) {
    this._idcomputadora = misFunciones.formatearA4cifras(Computadora.contadorComputadoras++);
    this._nombre = nombre;
    this._monitor = monitor;
    this._teclado = teclado;
    this._raton = raton;
  }
					
					get idcomputadora() {
						return this._idcomputadora;
					}
					set idcomputadora(in_idcomputadora) {
						this._idcomputadora = in_idcomputadora;
					}
					
					get nombre() {
						return this._nombre;
					}
					set nombre(in_nombre) {
						this._nombre = in_nombre;
					}
					
					get monitor() {
						return this._monitor;
					}
					set monitor(in_monitor) {
						this._monitor = in_monitor;
					}
					
					get teclado() {
						return this._teclado;
					}
					set teclado(in_teclado) {
						this._teclado = in_teclado;
					}
					
					get raton() {
						return this._raton;
					}
					set raton(in_raton) {
						this._raton = in_raton;
					}
					
			
toString(){
	let info = "\n-------------------------------------------------------\n" + 
"PC id: " + this.idcomputadora + " " + this.nombre + 
"\n-------------------------------------------------------\n\n";
info += this.monitor.toString();
info += "\n"; 
info +=  this.teclado.toString();
info += "\n"; 
info += this.raton.toString();
	return info;
}					
					
  

}
