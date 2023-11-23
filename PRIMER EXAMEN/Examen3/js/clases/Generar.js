import { Funciones } from "../funciones.js";

export class Generar {

    
  static etiquetas = [];

  constructor(tag) {
    this._id =  tag + "_" + Funciones.formatearA3cifras(this.idEtiqueta);
    this_tag = tag;

    Generar.etiquetas.push (this);

  }

  idEtiqueta () {

      let contador = 0;

    Generar.etiquetas.forEach(element => {

      if (element.tag == this.tag) contador ++;
      
    });
    return contador;

  }
		 

  

}
