document.getElementById('b1').addEventListener('click', enviarSolicitud_1)


function enviarSolicitud_1(){
//peticion
const peticion = new XMLHttpRequest();
const url = 'http://localhost:3000/ciudades';
peticion.open('GET', url, true);
peticion.send();
}