import {Producto} from './Clases/producto.js';
import {Orden} from './Clases/orden.js';
let producto1 = new Producto ("Camisa", 36);

let orden1 = new Orden(); 
orden1.agregarProducto(producto1);