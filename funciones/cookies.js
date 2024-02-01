// Función para crear una cookie
function crearCookie(nombre, valor, dias) {
    const fechaExpiracion = new Date();
    fechaExpiracion.setDate(fechaExpiracion.getDate() + dias);
  
    const cookie = `${nombre}=${valor};expires=${fechaExpiracion.toUTCString()};path=/`;
    document.cookie = cookie;
  }
  
  // Función para obtener el valor de una cookie por nombre
  function obtenerCookie(nombre) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
      const [cookieNombre, cookieValor] = cookie.split('=');
      if (cookieNombre === nombre) {
        return cookieValor;
      }
    }
    return null;
  }
  
  // Función para modificar una cookie existente
  function modificarCookie(nombre, nuevoValor, nuevosDias) {
    if (obtenerCookie(nombre) !== null) {
      borrarCookie(nombre);
    }
    crearCookie(nombre, nuevoValor, nuevosDias);
  }
  
  // Función para borrar una cookie por nombre
  function borrarCookie(nombre) {
    document.cookie = `${nombre}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
  }
  
  // Ejemplo de uso:
  crearCookie('miCookie', 'valorInicial', 7);  // Crear una cookie que expira en 7 días
  console.log('Valor de la cookie:', obtenerCookie('miCookie'));
  
  modificarCookie('miCookie', 'nuevoValor', 14);  // Modificar la cookie para que expire en 14 días
  console.log('Nuevo valor de la cookie:', obtenerCookie('miCookie'));
  
  borrarCookie('miCookie');  // Borrar la cookie
  console.log('Valor después de borrar la cookie:', obtenerCookie('miCookie'));