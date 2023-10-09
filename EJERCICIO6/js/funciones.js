

function generarRombo (){

   rombo="";


    filas = document.getElementById ("in1").value;
    console.log ("Numero de filas seleccionadas = " + filas);
    if (filas%2 !=0) filas++;
    
    if (filas ==2) rombo="*<br>*"
    else{

    filasmitad = filas/2;
  
    espaciosexternos = filasmitad-1;
    espaciosinternos = 1;

    
        for (let index = 0; index < espaciosexternos; index++) {
            rombo += ("&nbsp");
         }
            
            rombo += ("*<br>");

            espaciosexternos--;

            do{

            for (let index = 0; index < espaciosexternos; index++) {
                rombo += ("&nbsp");
             }
             espaciosexternos--;
             rombo += ("*");

             for (let id = 0; id < espaciosinternos; id++) {
                rombo += ("&nbsp");
             }
             espaciosinternos+=2;
             rombo += ("*<br>");
             filasmitad--;
            }while (filasmitad>1)

            //Hasta aqui imprime la mitad del rombo. Ahora se hace a la inversa.

            filasmitad = filas/2;
  
            espaciosexternos = 0;
            espaciosinternos = filas-3;

                    do{
        
                    for (let index = 0; index < espaciosexternos; index++) {
                        rombo += ("&nbsp");
                     }
                     espaciosexternos++;
                     rombo += ("*");
        
                     for (let id = 0; id < espaciosinternos; id++) {
                        rombo += ("&nbsp");
                     }
                     espaciosinternos-=2;
                     rombo += ("*<br>");
                          filasmitad--;               
                    }
                    
                    
                    while (filasmitad>1)

                    for (let index = 0; index < espaciosexternos; index++) {
                        rombo += ("&nbsp");
                     }
                        espaciosexternos++;
                        rombo += ("*<br>");
            
                        filasmitad++;

                  }

                        document.getElementById("c2").innerHTML = rombo;
}
 
 
 
 