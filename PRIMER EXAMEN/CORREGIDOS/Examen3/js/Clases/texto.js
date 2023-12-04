import { Elemento } from "./elemento.js";

export class Texto extends Elemento {
    constructor(tag, texto) {
        super(tag);
        super.innerHTML = texto;  
    }


}