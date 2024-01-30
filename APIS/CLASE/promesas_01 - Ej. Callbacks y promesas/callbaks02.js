// callback igual que 01, pero con las funciones definidas en los argumentos de llamada
function leerArchivo(callbackExito, callbackError) {
    // Simulación de la lectura de un archivo después de 2 segundos
    setTimeout(() => {
      const exito = true;
  
      if (exito) {
        const contenido = "Este es el contenido del archivo!.";
        callbackExito(contenido);
      } else {
        callbackError("Error al leer el archivo.");
      }
    }, 2000);
  }
  
  console.log('uso de callbacks');
  

  

  // Uso de devoluciones de llamada
  leerArchivo(
    (contenido) => {
      console.log("Contenido leído:", contenido);
    },
    (error) => {
      console.error("Error:", error);
    }
  );
  