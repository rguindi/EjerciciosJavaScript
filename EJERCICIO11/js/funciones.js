import {Producto} from './Clases/producto.js';
import {Orden} from './Clases/orden.js';

let producto1 = new Producto("Camisa", 36);
let producto2 = new Producto("Americana", 214);
let producto3 = new Producto("Pantalón", 160);

let orden1 = new Orden(); 
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);

let orden2 = new Orden(); 
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto2);

orden2.agregarProducto(producto2);   //NO CABEN 
orden2.agregarProducto(producto2);  //NO CABEN 

orden1.resumenOrden();
orden2.resumenOrden();