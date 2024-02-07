// Crear una cookie con nombre 'usuario' y valor 'juan'
document.cookie = "usuario=juan";

// Crear una cookie que expira en una fecha específica (en este caso, en un año)
var fechaExpiracion = new Date();
fechaExpiracion.setFullYear(fechaExpiracion.getFullYear() + 1);
document.cookie = "preferencias=color=azul; expires=" + fechaExpiracion.toUTCString();

// Crear una cookie que solo es válida en cierto path
document.cookie = "sesion=activo; path=/";

// Leer todas las cookies
var cookies = document.cookie.split(';');
for (var i = 0; i < cookies.length; i++) {
  var cookie = cookies[i].trim();
  console.log(cookie);
}

// Actualizar una cookie (reemplazar su valor)
document.cookie = "usuario=nuevo_valor";

// Eliminar una cookie (establecer su fecha de expiración en el pasado)
document.cookie = "usuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

// Establecer la duración de una cookie
// Duración de un año
var fechaExpiracion = new Date();
fechaExpiracion.setFullYear(fechaExpiracion.getFullYear() + 1);
document.cookie = "nombre=valor; expires=" + fechaExpiracion.toUTCString();

// Duración de 30 días utilizando max-age
document.cookie = "nombre=valor; max-age=" + (30 * 24 * 60 * 60); // 30 días en segundos