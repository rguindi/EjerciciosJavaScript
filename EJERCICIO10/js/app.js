import { Empleado } from "./clases/claseEmpleado.js";
import { Persona } from "./clases/clasePersona.js";

let persona1 = new Persona ('JUAN', 'PEREZ', 19);
console.log(persona1.toString());

let empleado1 = new Empleado ('Federica', 'López', 24, 22050.2);
console.log(empleado1.toString());

