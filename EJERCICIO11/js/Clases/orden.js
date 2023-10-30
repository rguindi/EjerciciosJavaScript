import { Producto } from "./producto.js";

export class Orden{

   
    static numeroorden = 0;

    constructor(){
       
        this.id = ++numeroorden;
        this.arrayProductos = [];
    }

    agregarProducto (producto){
        this.arrayProductos.push(producto);

    }



}