const PI = 3.1416;

//Calcular el área de un círculo dado el radio
function areacirculo() {
     radio = window.prompt ("Introduzca el radio de la circunferencia");
     window.alert ("El área es " + PI * (radio ** 2));
}

//Calcular el perímetro de una circunferencia dado el radio
function perimetrocircun() {
     radio = window.prompt ("Introduzca el radio de la circunferencia");
     window.alert ("El perímetro es " + 2 * PI * radio);
}

//Calcular el perímetro de un polígono regular dada la longitud de uno de sus lados.

function perimetropoligono() {
     lados = window.prompt ("Introduzca el numero de lados");
     longitud = window.prompt ("Introduzca la longitud de cada lado");
     window.alert ("El perímetro es " + lados * longitud);
}

//Calcular el área de un polígono regular dada la longitud de uno de sus lados.

function areapoligono() {
     lados = window.prompt ("Introduzca el numero de lados");
     longitud = window.prompt ("Introduzca la longitud de cada lado");

     let perimetro = lados*longitud;
     let  angulocentral= 360/lados;
     
     let apotema = longitud/(2*(Math.tan(angulocentral/2)));
     console.log (apotema);
     window.alert ("El área es " + (apotema*perimetro)/2);
}

