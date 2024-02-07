// Peticion POST con ASYNC/AWAIT
const dirIP_api = '127.0.0.1'; // O asignar el valor que necesitas
const PUERTO_EXPRESS = 3000; // O asignar el valor que necesitas
 
async function crearCiudad(nuevaCiudad) {
    const url = `http://${dirIP_api}:${PUERTO_EXPRESS}/ciudades/add`;
    const datoPromesa = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(nuevaCiudad),
        headers: {
            'Content-Type': 'application/json'
        }
    });
 
    console.log(datoPromesa);
    // Convertimos a JSON, ya que el resultado de datoPromesa es una promesa que no se puede visualizar
    return await datoPromesa.json();;
}
 
document.getElementById('addCiudad').addEventListener('submit', async (event) => {
    event.preventDefault();
 
    // Insertamos los valores de los campos input en un objeto nuevaCiudad
    const nuevaCiudad = {
        nuevoNombre: document.getElementById('nuevoNombre').value,
        habitantes: document.getElementById('habitantes').value
    }
 
    const datos = await crearCiudad(nuevaCiudad);
 
    // Pintamos los datos
    document.getElementById('p1').innerHTML = datos.nuevoNombre + ": " + datos.habitantes;
});
