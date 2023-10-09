

function generarRombo (){
   
   document.getElementById("c2").innerHTML = ("&nbsp");

    filas = document.getElementById ("in1").value;
    console.log ("Numero de filas seleccionadas = " + filas);

    filasmitad = filas/2;
  
    espaciosexternos = filasmitad-1;
    espaciosinternos = 2;

    
        for (let index = 0; index < espaciosexternos; index++) {
            document.getElementById("c2").innerHTML += ("&nbsp");
         }
            
            document.getElementById("c2").innerHTML += ("*<br>");

            espaciosexternos--;

            do{

            for (let index = 0; index < espaciosexternos; index++) {
                document.getElementById("c2").innerHTML += ("&nbsp");
             }
             espaciosexternos--;
             document.getElementById("c2").innerHTML += ("*");

             for (let id = 0; id < espaciosinternos; id++) {
                document.getElementById("c2").innerHTML += ("&nbsp");
             }
             espaciosinternos+=2;
             document.getElementById("c2").innerHTML += ("*<br>");
             filasmitad--;
            }while (filasmitad>1)

            //Hasta aqui imprime la mitad del rombo. Ahora se hace a la inversa.

            filasmitad = filas/2;
  
            espaciosexternos = 0;
            espaciosinternos = filas-1;

                    do{
        
                    for (let index = 0; index < espaciosexternos; index++) {
                        document.getElementById("c2").innerHTML += ("&nbsp");
                     }
                     espaciosexternos++;
                     document.getElementById("c2").innerHTML += ("*");
        
                     for (let id = 0; id < espaciosinternos; id++) {
                        document.getElementById("c2").innerHTML += ("&nbsp");
                     }
                     espaciosinternos-=2;
                     document.getElementById("c2").innerHTML += ("*<br>");
                          filasmitad--;               
                    }
                    
                    
                    while (filasmitad>1)

                    for (let index = 0; index < espaciosexternos; index++) {
                        document.getElementById("c2").innerHTML += ("&nbsp");
                     }
                        espaciosexternos++;
                        document.getElementById("c2").innerHTML += ("*<br>");
            
                        filasmitad++;
}
 
 
 
 