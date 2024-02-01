// 1. Validar un Correo Electrónico
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 2. Validar un DNI (Documento Nacional de Identidad) Español (formato simple)
const dniRegex = /^\d{8}[a-zA-Z]$/;

// 3. Limitar la Longitud de una Cadena entre 10 y 100 caracteres
const stringLengthRegex = /^.{10,100}$/;

// 4. Contener una Cadena en Cualquier Lugar (buscar 'cadena' en cualquier parte)
const containsStringRegex = /cadena/i;

// 5. Validar que una Cadena Contenga Solo Mayúsculas
const uppercaseOnlyRegex = /^[A-Z]+$/;

// 6. Validar un Número Entero Positivo o Negativo (similar al anterior)
const integerRegex = /^-?\d+$/;

// 7. Validar una Fecha en Formato YYYY-MM-DD (similar al anterior)
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

// 8. Validar una Dirección IPv4 (similar al anterior)
const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;

// 5. Validar una Fecha en Formato YYYY-MM-DD
const dateReggex = /^\d{4}-\d{2}-\d{2}$/;

// / 2. Validar un Número de Teléfono con Formato (Ejemplo: +1234567890)
const phoneNumberRegex = /^\+\d{10,}$/;

// 3. Validar una URL Simple (HTTP/HTTPS)
const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

// 4. Validar un Número Entero Positivo o Negativo
const integerRegexg = /^-?\d+$/;