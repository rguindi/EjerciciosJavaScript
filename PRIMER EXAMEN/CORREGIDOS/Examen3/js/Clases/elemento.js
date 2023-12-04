export class Elemento {

    

  constructor(tag){
    this._tag = tag;
    this.id =  this.asignarId();
    this._innerHTML = "";
    this._innerText = "";
   
    
    
  }
  
  get tag(){
    return this._tag.toUpperCase();
  }
  
  get innerHTML() {
    return this._innerHTML;
  }
  set innerHTML(in_innerHTML) {
    this._innerHTML = in_innerHTML;
  }
  
  get innerText() {
    return this._innerText;
  }
  set innerText(in_innerText) {
    this._innerText = in_innerText;
  }
  
  asignarId(){

    let numeroElementos = document.getElementsByTagName(this.tag).length;

    return `${this.tag}_${this.formatearA3cifras(numeroElementos+1)}`;
  };
  nuevoEstilo(estilo,valor){
    document.getElementById(this.id).style[estilo] = valor;
  }
  

agregarComoPrimeroDe(elemento){
  const elementoHTML = document.createElement(this.tag);
  elementoHTML.innerHTML = this.innerHTML;
  elementoHTML.innerText = this.innerText;
  elemento.children[0].before(elementoHTML);

}



formatearA3cifras(num){                    //Formatear un numeroa a X cifras.
    return num.toLocaleString(undefined,
        { minimumIntegerDigits: 3, useGrouping: false}); //dejo useGrouping para recordar la propiedad (separador de miles) ;
}


}
