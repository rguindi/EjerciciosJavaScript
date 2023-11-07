function generar() {

   caracterlineas = document.getElementById("in2").value;
   caracterlineas = caracterlineas.charAt(0);
   caracterrelleno = document.getElementById("in3").value;
   caracterrelleno = caracterrelleno.charAt(0);
   // EMPEZAMOS GENERANDO EL ROMBO HUECO (Código del ehercicio 6)



   rombo = "<h2>Rombo hueco</h2>";


   filas = document.getElementById("in1").value;
   console.log("Numero de filas seleccionadas = " + filas);

   if (filas % 2 != 0) filas++;

   if (filas == 2) rombo = caracterlineas+"<br>"+caracterlineas;
   else {

      filasmitad = filas / 2;

      espaciosexternos = filasmitad - 1;
      espaciosinternos = 1;


      for (let index = 0; index < espaciosexternos; index++) {
         rombo += ("&nbsp");
      }

      rombo += (caracterlineas+"<br>");

      espaciosexternos--;

      do {

         for (let index = 0; index < espaciosexternos; index++) {
            rombo += ("&nbsp");
         }
         espaciosexternos--;
         rombo += (caracterlineas);

         for (let id = 0; id < espaciosinternos; id++) {
            rombo += ("&nbsp");
         }
         espaciosinternos += 2;
         rombo += (caracterlineas+"<br>");
         filasmitad--;
      } while (filasmitad > 1)

      //Hasta aqui imprime la mitad del rombo. Ahora se hace a la inversa.

      filasmitad = filas / 2;

      espaciosexternos = 0;
      espaciosinternos = filas - 3;

      do {

         for (let index = 0; index < espaciosexternos; index++) {
            rombo += ("&nbsp");
         }
         espaciosexternos++;
         rombo += (caracterlineas);

         for (let id = 0; id < espaciosinternos; id++) {
            rombo += ("&nbsp");
         }
         espaciosinternos -= 2;
         rombo += (caracterlineas+"<br>");
         filasmitad--;
      }


      while (filasmitad > 1)

      for (let index = 0; index < espaciosexternos; index++) {
         rombo += ("&nbsp");
      }
      espaciosexternos++;
      rombo += (caracterlineas+"<br>");

      filasmitad++;

   }

   document.getElementById("rombohueco").innerHTML = rombo;

   // DIBUJAMOS UN CUADRADO HUECO


   cuadrado = "<h2>Cuadrado hueco</h2>";
   filas = document.getElementById("in1").value;

   //Primera linea del cuadrado
   for (let index = 0; index < filas; index++) {
      cuadrado += caracterlineas;
   }
   cuadrado += "<br>";

   //Relleno del cuadrado

   for (let index = 0; index < filas - 2; index++) {
      cuadrado += caracterlineas;

      for (let index = 0; index < filas - 2; index++) {
         cuadrado += "&nbsp";
      }
      cuadrado += caracterlineas+"<br>";

   }



   //Última linea del cuadrado
   for (let index = 0; index < filas; index++) {
      cuadrado += caracterlineas;
   }


   document.getElementById("cuadradohueco").innerHTML = cuadrado;

   // DIBUJAMOS UN ROMBO A COLOR

   color = document.getElementById("in4").value;

   console.log(color);

   romboacolor = "<h2>Rombo a color</h2>";


   filas = document.getElementById("in1").value;
   console.log("Numero de filas seleccionadas = " + filas);

   if (filas % 2 != 0) filas++;

   if (filas == 2) romboacolor = caracterlineas + "<br>" + caracterlineas;
   else {

      filasmitad = filas / 2;

      espaciosexternos = filasmitad - 1;
      espaciosinternos = 1;


      for (let index = 0; index < espaciosexternos; index++) {
         romboacolor += ("&nbsp");
      }


      romboacolor += (caracterlineas + "<br>");

      espaciosexternos--;

      do {



         for (let index = 0; index < espaciosexternos; index++) {
            romboacolor += ("&nbsp");
         }

         espaciosexternos--;
         romboacolor += (caracterlineas);
         romboacolor += "<span style= 'color: " + color + ";'>";
         for (let id = 0; id < espaciosinternos; id++) {
            romboacolor += (caracterrelleno);
         }
         romboacolor += "</span>";
         espaciosinternos += 2;
         romboacolor += (caracterlineas + "<br>");
         filasmitad--;
      } while (filasmitad > 1)

      //Hasta aqui imprime la mitad del rombo. Ahora se hace a la inversa.

      filasmitad = filas / 2;

      espaciosexternos = 0;
      espaciosinternos = filas - 3;

      do {

         for (let index = 0; index < espaciosexternos; index++) {
            romboacolor += ("&nbsp");
         }
         espaciosexternos++;
         romboacolor += (caracterlineas);

         romboacolor += "<span style= 'color: " + color + ";'>";

         for (let id = 0; id < espaciosinternos; id++) {
            romboacolor += (caracterrelleno);

         }
         romboacolor += "</span>";
         espaciosinternos -= 2;
         romboacolor += (caracterlineas + "<br>");
         filasmitad--;
      }


      while (filasmitad > 1)

      for (let index = 0; index < espaciosexternos; index++) {
         romboacolor += ("&nbsp");
      }
      espaciosexternos++;
      romboacolor += (caracterlineas + "<br>");

      filasmitad++;

   }

   document.getElementById("rombocolor").innerHTML = romboacolor;







   // DIBUJAMOS UN CUADRADO A COLOR


   cuadradoacolor = "<h2>Cuadrado a color</h2>";
   filas = document.getElementById("in1").value;

   //Primera linea del cuadrado
   for (let index = 0; index < filas; index++) {
      cuadradoacolor += caracterlineas;
   }
   cuadradoacolor += "<br>";

   //Relleno del cuadrado

   for (let index = 0; index < filas - 2; index++) {
      cuadradoacolor += caracterlineas;
      cuadradoacolor += "<span style= 'color: " + color + ";'>";
      for (let index = 0; index < filas - 2; index++) {
         cuadradoacolor += caracterrelleno;
      }
      cuadradoacolor += "</span>" + caracterlineas + "<br>";
   }
   //Última linea del cuadrado
   for (let index = 0; index < filas; index++) {
      cuadradoacolor += caracterlineas;
   }


   document.getElementById("cuadradocolor").innerHTML = cuadradoacolor;

   // DIBUJAMOS UN CUADRADO ASCII

   cuadradoascii = "<h2>Cuadrado Ascii</h2>";
   filas = document.getElementById("in1").value;

   //Primera linea del cuadrado
   cuadradoascii += "&#9556";
   for (let index = 0; index < filas - 2; index++) {
      cuadradoascii += "&#9552";
   }
   cuadradoascii += "&#9559";
   cuadradoascii += "<br>";

   //Relleno del cuadrado

   for (let index = 0; index < filas - 2; index++) {
      cuadradoascii += "&#9553"

      for (let index = 0; index < filas - 2; index++) {
         cuadradoascii += "&nbsp"
      }
      cuadradoascii += "&#9553<br>"

   }



   //Última linea del cuadrado

   cuadradoascii += "&#9562";
   for (let index = 0; index < filas - 2; index++) {
      cuadradoascii += "&#9552";
   }
   cuadradoascii += "&#9565";

   document.getElementById("cuadradoascii").innerHTML = cuadradoascii;

}