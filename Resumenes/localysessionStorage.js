 // Crear un elemento en el almacenamiento local
 localStorage.setItem('usuario', 'juan');

 // Crear un elemento con expiración en el almacenamiento local (no es soportado por localStorage, pero podría ser simulado)
 // Se necesitaría JavaScript para verificar la expiración al leerlo
 var preferencias = { color: 'azul', expiracion: new Date().getTime() + (365 * 24 * 60 * 60 * 1000) }; // Un año en milisegundos
 localStorage.setItem('preferencias', JSON.stringify(preferencias));

 // Leer un elemento del almacenamiento local
 var usuario = localStorage.getItem('usuario');
 console.log(usuario);

 // Actualizar un elemento en el almacenamiento local
 localStorage.setItem('usuario', 'nuevo_valor');

 // Eliminar un elemento del almacenamiento local
 localStorage.removeItem('usuario');

 // Limpiar todo el almacenamiento local
 localStorage.clear();


 localStorage.setItem('clave', 'valor');
 localStorage.getItem('clave');
 localStorage.removeItem('clave');
 localStorage.clear();
 //es lo mismo que :
 window.localStorage.setItem('clave', 'valor');
window.localStorage.getItem('clave');
window.localStorage.removeItem('clave');
window.localStorage.clear();







 // Crear un elemento en el almacenamiento de sesión
 sessionStorage.setItem('usuario', 'juan');

 // Crear un elemento con expiración en el almacenamiento de sesión (no es soportado por sessionStorage)
 // Se necesitaría JavaScript para verificar la expiración al leerlo
 var preferencias = { color: 'azul', expiracion: new Date().getTime() + (365 * 24 * 60 * 60 * 1000) }; // Un año en milisegundos
 sessionStorage.setItem('preferencias', JSON.stringify(preferencias));

 // Leer un elemento del almacenamiento de sesión
 var usuario = sessionStorage.getItem('usuario');
 console.log(usuario);

 // Actualizar un elemento en el almacenamiento de sesión
 sessionStorage.setItem('usuario', 'nuevo_valor');

 // Eliminar un elemento del almacenamiento de sesión
 sessionStorage.removeItem('usuario');

 // Limpiar todo el almacenamiento de sesión
 sessionStorage.clear();


 sessionStorage.setItem('clave', 'valor');
sessionStorage.getItem('clave');
sessionStorage.removeItem('clave');
sessionStorage.clear();

//Es lo mismo que 
window.sessionStorage.setItem('clave', 'valor');
window.sessionStorage.getItem('clave');
window.sessionStorage.removeItem('clave');
window.sessionStorage.clear();