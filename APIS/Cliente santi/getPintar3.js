// peticion GET con JSON que FUNCIONA CON PROMESAS
// const dirIP_api = '127.0.0.1'; // O asignar el valor que necesitas
// const PUERTO_EXPRESS = 3000; // O asignar el valor que necesitas
 
function getCiudad(idCiudad){

        return new Promise((resolve, reject)=>{

            const peticion=new XMLHttpRequest();   

                    //NO TERMINADO

        });

 
}
 
document.getElementById('getCiudad').addEventListener('submit', (event)=>{
    event.preventDefault();
    const idCiudad= document.getElementById('id-ciudad').value;
    datos=getCiudad(idCiudad);
    console.log(datos);
    // pintamos los datos en la página
    document.getElementById('p1').innerHTML=datos.nombre+ ": "+datos.cantidad;
 
    
});
