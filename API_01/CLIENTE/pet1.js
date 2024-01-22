document.getElementById('b1').addEventListener('click', enviarSolicitud_1)


function enviarSolicitud_1(){
console.log('peticion 1');
//peticion
const peticion = new XMLHttpRequest();
const url = 'http://localhost:3000/ciudades';
peticion.open('GET', url, true);
peticion.onreadystatechange = function(){ //Evento q salga al cambiar de estado
    console.log(peticion.readyState);
    if (peticion.readyState==4){  //Estado 4 es ya recibida respuesta

        if (peticion.status==200){ //200 respuesta correcta
            let datos = JSON.parse(peticion.responseText);  //de JSON a array
            console.log('Datos recibidos; ', datos);
        }else{
            console.log('Mala suerte. codigo: ', peticion.status);
        }
        console.log(peticion.responseText);
    }
}
peticion.send();
}