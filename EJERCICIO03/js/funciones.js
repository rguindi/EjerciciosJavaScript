function calculaFactorial (num){
     let resultado =num;
     for (i=1;i<num;i++){
               resultado =resultado*i;
     }
     return resultado;
}


 window.alert (calculaFactorial(window.prompt ("Introduzca un numero para calcular su Factorial")));
