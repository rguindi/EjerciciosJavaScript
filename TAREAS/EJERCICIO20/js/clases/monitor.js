import { misFunciones } from "../funciones.js";

export class Monitor {
	static contadorMonitores = 0;

  constructor(marca, tamaño) {
    this._idMonitor = "M" + misFunciones(Monitor.contadorMonitores++);
    this._marca = marca;
    this._tamaño = tamaño;
;
  }
					get idMonitor() {
						return this._idMonitor;
					}
					set idMonitor(in_idMonitor) {
						this._idMonitor = in_idMonitor;
					}
					
					get marca() {
						return this._marca;
					}
					set marca(in_marca) {
						this._marca = in_marca;
					}
					
					get tamaño() {
						return this._tamaño;
					}
					set tamaño(in_tamaño) {
						this._tamaño = in_tamaño;
					}
				
  

}
