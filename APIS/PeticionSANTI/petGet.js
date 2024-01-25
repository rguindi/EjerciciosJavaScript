document.getElementById('b1').addEventListener('click', realizaSolicitud_1);
const ul = document.getElementById('listaCiudades');

function pintar(datos, lugar){
    datos.forEach(ciudad => {
        if(ciudad.cantidad>6000){
        const nuevoElementoLi= document.createElement('LI');
        nuevoElementoLi.textContent=ciudad.nombre;
        nuevoElementoLi.style.cursor='pointer';
        nuevoElementoLi.textContent=ciudad.nombre+": "+ ciudad.cantidad;
        
        lugar.appendChild(nuevoElementoLi);
        }

    });
}


function realizaSolicitud_1(){
    console.log('peticion 1');
    // peticion
    const peticion = new XMLHttpRequest();
    const url='http://192.168.7.100:3000/ciudades?cantidad<6000'
    peticion.open('GET', url, true);
    peticion.onreadystatechange = function(){
        if (peticion.readyState==4){ // hemos recibido
            if(peticion.status==200){
                let datos= JSON.parse(peticion.responseText) // JSON a array objetos
                pintar(datos, ul);
            } else {
                console.error("mala suerte: códido de error", peticion.status);
            }
        }

    }
    peticion.send();
}
