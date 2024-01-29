// callback básica
function leerArchivo( callbackExito, callbackError) {
    // Simulación de la lectura de un archivo después de 2 segundos
    setTimeout(() => {
      const exito = true;
  
      if (exito) {
        const contenido = "Este es el contenido del archivo.";
        callbackExito(contenido);
      } else {
        callbackError("Error al leer el archivo.");
      }
    }, 2000);
  }

  console.log('Utilizando callbaks');
  
  // Definir funciones de devolución de llamada
  function manejarExito(contenido) {
    console.log("Contenido leído:", contenido);
  }
  
  function manejarError(error) {
    console.error("Error:", error);
  }
  
  // Uso de devoluciones de llamada
  leerArchivo(manejarExito, manejarError);
  