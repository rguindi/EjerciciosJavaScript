function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
var contador = 1;                    //variable para contar los intentos
var aleatorio = random(1, 10);       //variable que guarda el numero aleatorio
console.log (aleatorio);             
let num =0;                         //varible que guarda el número introducido

do{
num = window.prompt("Introduce un número entre el 1 y el 10. Intento = " + contador);
console.log (num)

if (num<aleatorio && num != null){              
    window.alert ("El número es mayor");
    contador++;
}
if (num>aleatorio && num != null){
    window.alert ("El número es menor");
    contador++;
}
if(num==aleatorio){
    window.alert ("Enhorabuena, has adivinado el número "+ aleatorio+ " con " + contador + " intentos");
    console.log ("Enhorabuena, has adivinado el número "+ aleatorio+ " con " + contador + " intentos")
    
}
}while (num != aleatorio && num != null)


if (num==null) {
    window.alert("No has adivinado el numero  "+ aleatorio+ " con " + contador  + " intentos");
    
}


