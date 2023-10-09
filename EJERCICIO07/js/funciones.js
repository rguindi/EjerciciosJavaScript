function generar (){

// EMPEZAMOS GENERANDO EL ROMBO HUECO (Código del ehercicio 6)



rombo="<h2>Rombo hueco</h2>";


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

    document.getElementById("rombohueco").innerHTML = rombo;

// DIBUJAMOS UN CUADRADO HUECO


    cuadrado="<h2>Cuadrado hueco</h2>";
    filas = document.getElementById ("in1").value;

    //Primera linea del cuadrado
                for (let index = 0; index < filas; index++) {
                    cuadrado += "*";                
                }
                cuadrado += "<br>";
                
    //Relleno del cuadrado

                for (let index = 0; index < filas -2; index++) {
                   cuadrado+="*"
                 
                   for (let index = 0; index < filas -2; index++) {
                    cuadrado += "&nbsp"
                  }
                  cuadrado+="*<br>"
                    
                }



    //Última linea del cuadrado
                for (let index = 0; index < filas; index++) {
                    cuadrado += "*";                
                }


                document.getElementById("cuadradohueco").innerHTML = cuadrado;

// DIBUJAMOS UN ROMBO A COLOR

color = document.getElementById ("in4").value;
console.log (color);

romboacolor="<h2>Rombo a color</h2>";


filas = document.getElementById ("in1").value;
console.log ("Numero de filas seleccionadas = " + filas);

if (filas%2 !=0) filas++;
    
if (filas ==2) romboacolor="*<br>*"
else{

filasmitad = filas/2;

espaciosexternos = filasmitad-1;
espaciosinternos = 1;


    for (let index = 0; index < espaciosexternos; index++) {
        romboacolor += ("&nbsp");
     }
     

        romboacolor += ("*<br>");

        espaciosexternos--;

        do{

        

        for (let index = 0; index < espaciosexternos; index++) {
            romboacolor += ("&nbsp");
         }
   
         espaciosexternos--;
         romboacolor += ("*");
         romboacolor += "<span style= 'background-color: "+color+";'>";
         for (let id = 0; id < espaciosinternos; id++) {
            romboacolor += ("&nbsp");
         }
         romboacolor += "</span>";
         espaciosinternos+=2;
         romboacolor += ("*<br>");
         filasmitad--;
        }while (filasmitad>1)

        //Hasta aqui imprime la mitad del rombo. Ahora se hace a la inversa.

        filasmitad = filas/2;

        espaciosexternos = 0;
        espaciosinternos = filas-3;

                do{
    
                for (let index = 0; index < espaciosexternos; index++) {
                    romboacolor += ("&nbsp");
                 }
                 espaciosexternos++;
                 romboacolor += ("*");

                 romboacolor += "<span style= 'background-color: "+color+";'>";
    
                 for (let id = 0; id < espaciosinternos; id++) {
                    romboacolor += ("&nbsp");
                    
                 }
                 romboacolor += "</span>";
                 espaciosinternos-=2;
                 romboacolor += ("*<br>");
                      filasmitad--;               
                }
                
                
                while (filasmitad>1)

                for (let index = 0; index < espaciosexternos; index++) {
                    romboacolor += ("&nbsp");
                 }
                    espaciosexternos++;
                    romboacolor += ("*<br>");
        
                    filasmitad++;

                }

                document.getElementById("rombocolor").innerHTML = romboacolor;







// DIBUJAMOS UN CUADRADO A COLOR


cuadradoacolor="<h2>Cuadrado a color</h2>";
filas = document.getElementById ("in1").value;

//Primera linea del cuadrado
            for (let index = 0; index < filas; index++) {
                cuadradoacolor += "*";                
            }
            cuadradoacolor += "<br>";
            
//Relleno del cuadrado

            for (let index = 0; index < filas -2; index++) {
               cuadradoacolor+="*"
               cuadradoacolor += "<span style= 'background-color: "+color+";'>";
               for (let index = 0; index < filas -2; index++) {
                cuadradoacolor += "&nbsp"
              }
              cuadradoacolor+="</span>*<br>"
            }
//Última linea del cuadrado
             for (let index = 0; index < filas; index++) {
                cuadradoacolor += "*";                
            }


            document.getElementById("cuadradocolor").innerHTML = cuadradoacolor;

}