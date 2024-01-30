function leerArchivo() {
  return new Promise((resolve, reject) => {
    // Simulación de la lectura de un archivo después de 2 segundos
    setTimeout(() => {
      const exito = true;

      if (exito) {
        const contenido = "Este es el contenido del archivo.";
        resolve(contenido);
      } else {
        reject("Error al leer el archivo.");
      }
    }, 2000);
  });
}

// Uso de la promesa
leerArchivo()
  .then((contenido) => {
    console.log("Contenido leído:", contenido);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
