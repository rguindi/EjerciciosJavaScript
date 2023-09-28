
let contadorexamenes = 0; 
let sumanotas = 0;
let nota = 0; 
while (nota != null){
     nota = window.prompt ("introduzca nota de examen");
     console.log (nota);

     if (nota != null){
     sumanotas = sumanotas+(parseInt(nota));   //pasamos la variable a entero para poder sumarla
     console.log ("nota total = " + sumanotas);
     contadorexamenes++;
     console.log ("Exámenes realizados = " + contadorexamenes);
     }

}

window.alert ("En un total de " + contadorexamenes + " exámenes ha obtenido una nota media de " + sumanotas/contadorexamenes + ".")