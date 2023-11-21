import { misFunciones } from "../funciones.js";
import { Computadora } from "./computadora.js";

export class Orden {
  static contadorOrdenes = 1;

  constructor() {
    this._idOrden = misFunciones.formatearA4cifras(Orden.contadorOrdenes++);
    this._computadoras = [];
  }
  get idOrden() {
    return this._idOrden;
  }
  set idOrden(in_idOrden) {
    this._idOrden = in_idOrden;
  }

  get computadoras() {
    return this._computadoras;
  }
  set computadoras(in_computadoras) {
    this._computadoras = in_computadoras;
  }

  agregarComputadora(computadora) {
    this.computadoras.push(computadora)
  }

  monstrarOrden (){
    console.log(this.toString());
}

toString(){

  let info = "============== Orden: "; 
  info +=  this.idOrden;
  info += " ==============";
  this.computadoras.forEach(PC => {
      info +=PC.toString();
      info+= "\n*********************************\n"
    });
    info+= "************** FIN ***************\n\n"
    return info;

}

}
