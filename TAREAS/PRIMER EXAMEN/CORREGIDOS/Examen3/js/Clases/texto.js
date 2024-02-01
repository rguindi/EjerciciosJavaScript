import { Elemento } from "./elemento.js";

export class Texto extends Elemento {
    constructor(tag, texto) {
        super(tag);
        super._innerText = texto;  
    }

cambioColor(color){
    super.nuevoEstilo("color", color);
}
}