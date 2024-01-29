function operacionAsincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = true;

      if (exito) {
        resolve("La operación fue exitosa");
      } else {
        reject("La operación falló");
      }
    }, 2000); // Simulación de una operación asíncrona (por ejemplo, una solicitud HTTP)
  });
}

operacionAsincrona()
  .then((resultado) => {
    console.log("Éxito:", resultado);
    return "Datos adicionales";
  })
  .then((datosAdicionales) => {
    console.log("Datos adicionales:", datosAdicionales);
  })
  .catch((error) => {
    console.error("Error:", error);
});
