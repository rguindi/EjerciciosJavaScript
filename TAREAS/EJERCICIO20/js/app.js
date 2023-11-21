import { Computadora } from "./clases/computadora.js";
import { Monitor } from "./clases/monitor.js";
import { Orden } from "./clases/orden.js";
import { Raton } from "./clases/raton.js";
import { Teclado } from "./clases/teclado.js";

let r1 = new Raton ("PS/2", "Logitech");
let r2 = new Raton ("USB", "Razer");
let t1 = new Teclado ("USB", "Logitech");
let t2 = new Teclado ("Inalámbrico USB", "Razer");
let m1 = new Monitor ("Asus", 23);
let m2 = new Monitor ("MSI", 32);
let m3 = new Monitor ("LG", 27);

let pc1 = new Computadora ("Dell Gaming TX520", m2, t2, r2);
let pc2 = new Computadora ("IBM Serie 2000", m1, t2, r1);
let pc3 = new Computadora ("Tandon PC-XT", m3, t2, r1);

let o1 = new Orden ();
o1.agregarComputadora(pc2);
o1.agregarComputadora(pc3);
o1.monstrarOrden();

let o2 = new Orden ();
o2.agregarComputadora(pc1);
o2.agregarComputadora(pc2);
o2.agregarComputadora(pc1);
o2.monstrarOrden();


pc3.monitor = m3;
pc3.teclado = t2;
pc3.raton = r1;
console.log(pc3.toString());
