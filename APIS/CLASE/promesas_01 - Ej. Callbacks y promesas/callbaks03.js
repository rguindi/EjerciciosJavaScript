//callback igual que 01, pero con un parámetro estra
function leerArchivo(parametroExtra, callbackExito, callbackError) {
    // Simulación de la lectura de un archivo después de 2 segundos
    setTimeout(() => {
      const exito = true;
  
      if (exito) {
        const contenido = `Este es el contenido del archivo. Parámetro extra: ${parametroExtra}`;
        callbackExito(contenido);
      } else {
        callbackError("Error al leer el archivo.");
      }
    }, 2000);
  }
  
  // Definir funciones de devolución de llamada
  function manejarExito(contenido) {
    console.log("Contenido leído:", contenido);
  }
  
  function manejarError(error) {
    console.error("Error:", error);
  }
  
  // Uso de devoluciones de llamada con un parámetro adicional
  const parametroAdicional = "Texto adicional";
  leerArchivo(parametroAdicional, manejarExito, manejarError);
  