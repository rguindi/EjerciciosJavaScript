import { Elemento } from "./elemento.js";

export class Boton extends Elemento {
    constructor(tag, texto) {
        super(tag);
        super._innerText = texto;  
    }
agregarComoPrimeroDe(elemento){
 super.agregarComoPrimeroDe(elemento);

 document.getElementById(this.id).addEventListener("click", function(){
    alert("Hola");
 });

 document.getElementById(this.id).addEventListener("mouseover", function(){
    let h1s = document.getElementsByTagName("h1");
    let arrayh1 = Array.from(h1s);
  arrayh1.forEach(element => {
    element.style.color = "red";
  });

 });

 document.getElementById(this.id).addEventListener("mouseleave", function(){
    let h1s = document.getElementsByTagName("h1");
    let arrayh1 = Array.from(h1s);
  arrayh1.forEach(element => {
    element.style.color = "blue";
  });

 });


 
}

hola(){
       window.alert("Hola");
}

}