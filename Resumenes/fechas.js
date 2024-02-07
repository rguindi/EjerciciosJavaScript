// 1. Creación de un objeto Date:
// javascript
// Copy code
// Crear un objeto Date con la fecha y hora actuales
let fechaActual = new Date();

// Crear un objeto Date con una fecha específica (año, mes, día)
let fechaEspecifica = new Date(2024, 1, 7); // 7 de febrero de 2024
// 2. Obtención de componentes de fecha y hora:
// javascript
// Copy code
let hora = fechaActual.getHours(); // Obtener la hora (0-23)
let minutos = fechaActual.getMinutes(); // Obtener los minutos (0-59)
let segundos = fechaActual.getSeconds(); // Obtener los segundos (0-59)
let diaSemana = fechaActual.getDay(); // Obtener el día de la semana (0=Domingo, 1=Lunes, ..., 6=Sábado)
let diaMes = fechaActual.getDate(); // Obtener el día del mes (1-31)
let mes = fechaActual.getMonth(); // Obtener el mes (0=Enero, 1=Febrero, ..., 11=Diciembre)
let anio = fechaActual.getFullYear(); // Obtener el año (ej. 2024)
// 3. Formateo de fechas:
// javascript
// Copy code
let fechaFormateada = `${diaMes}/${mes + 1}/${anio} ${hora}:${minutos}:${segundos}`;
console.log(fechaFormateada); // Ejemplo: "7/2/2024 15:30:45"
// 4. Operaciones con fechas:
// javascript
// Copy code
// Añadir un día
fechaActual.setDate(fechaActual.getDate() + 1);

// Restar una hora
fechaActual.setHours(fechaActual.getHours() - 1);
// 5. Comparación de fechas:
// javascript
// Copy code
let fecha1 = new Date(2024, 1, 7);
let fecha2 = new Date(2024, 1, 8);

if (fecha1 < fecha2) {
  console.log("fecha1 es anterior a fecha2");
} else if (fecha1 > fecha2) {
  console.log("fecha1 es posterior a fecha2");
} else {
  console.log("fecha1 y fecha2 son iguales");
}