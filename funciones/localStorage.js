// Función para guardar en el almacenamiento local
function guardarLocalStorage(nombre, valor) {
    localStorage.setItem(nombre, valor);
  }
  
  // Función para obtener del almacenamiento local
  function obtenerLocalStorage(nombre) {
    return localStorage.getItem(nombre);
  }
  
  // Función para modificar en el almacenamiento local
  function modificarLocalStorage(nombre, nuevoValor) {
    localStorage.setItem(nombre, nuevoValor);
  }
  
  // Función para borrar del almacenamiento local
  function borrarLocalStorage(nombre) {
    localStorage.removeItem(nombre);
  }
  
  // Ejemplo de uso:
  guardarLocalStorage('miDato', 'valorInicial');
  console.log('Valor en el almacenamiento local:', obtenerLocalStorage('miDato'));
  
  modificarLocalStorage('miDato', 'nuevoValor');
  console.log('Nuevo valor en el almacenamiento local:', obtenerLocalStorage('miDato'));
  
  borrarLocalStorage('miDato');
  console.log('Valor después de borrar del almacenamiento local:', obtenerLocalStorage('miDato'));