//CREACION DE TABLAS  (GET)
const tabla = document.getElementById('tabla');

const peticion1 = document.getElementById('peticion1');
peticion1.addEventListener('click', enviarSolicitud_1);

const peticion2 = document.getElementById('peticion2');
peticion2.addEventListener('click', enviarSolicitud_2);

const peticion3 = document.getElementById('peticion3');
peticion3.addEventListener('click', enviarSolicitud_3);


function enviarSolicitud_1(event){
    tabla.innerHTML = '';
    event.preventDefault();
    console.log('peticion 1');
    //peticion
    const peticion = new XMLHttpRequest();
    const url = 'http://127.0.0.1:3000/world/city';
    peticion.open('GET', url, true);
    peticion.onreadystatechange = function(){ //Evento q salta al cambiar de estado
        console.log(peticion.readyState);
        if (peticion.readyState==4){  //Estado 4 es ya recibida respuesta
    
            if (peticion.status==200){ //200 respuesta correcta
                let datos = JSON.parse(peticion.responseText);  //de JSON a array
                console.log('Datos recibidos; ', datos);

                //PINTAMOS LA TABLA
                let tr = document.createElement('tr');
                let th = document.createElement('th');
                th.innerHTML = 'ID';           
                tr.appendChild(th);
                th2 = document.createElement('th');
                th2.innerHTML = 'Nombre';
                tr.appendChild(th2);
                th3 = document.createElement('th');
                th3.innerHTML = 'Codigo de Pais';
                tr.appendChild(th3);
                th4 = document.createElement('th');
                th4.innerHTML = 'Distrito';
                tr.appendChild(th4);
                th5 = document.createElement('th');
                th5.innerHTML = 'Poblacion';
                tr.appendChild(th5);
                tabla.appendChild(tr);
                
                
                datos.forEach(element => {
                    let tr = document.createElement('tr');
                    let td = document.createElement('td');
                    td.innerHTML = element['ID'];
                    tr.appendChild(td);
                    td2 = document.createElement('td');
                    td2.innerHTML = element['Name'];
                    tr.appendChild(td2);
                    td3 = document.createElement('td');
                    td3.innerHTML = element['CountryCode'];
                    tr.appendChild(td3);
                    td4 = document.createElement('td');
                    td4.innerHTML = element['District'];
                    tr.appendChild(td4);
                    td5 = document.createElement('td');
                    td5.innerHTML = element['Population'];
                    tr.appendChild(td5);
                    tabla.appendChild(tr);

                    
                });

            }else{
                console.log('Mala suerte. codigo: ', peticion.status);
            }
            console.log(peticion.responseText);
        }
    }
    peticion.send();
    }

function enviarSolicitud_2(event){
    tabla.innerHTML = '';
    event.preventDefault();
    console.log('peticion 1');
    //peticion
    const peticion = new XMLHttpRequest();
    const url = 'http://127.0.0.1:3000/world/city';
    peticion.open('GET', url, true);
    peticion.onreadystatechange = function(){ //Evento q salta al cambiar de estado
        console.log(peticion.readyState);
        if (peticion.readyState==4){  //Estado 4 es ya recibida respuesta
    
            if (peticion.status==200){ //200 respuesta correcta
                let datos = JSON.parse(peticion.responseText);  //de JSON a array
                console.log('Datos recibidos; ', datos);

                //PINTAMOS LA TABLA
                let tr = document.createElement('tr');
                let th = document.createElement('th');
                th.innerHTML = 'ID';           
                tr.appendChild(th);
                th2 = document.createElement('th');
                th2.innerHTML = 'Nombre';
                tr.appendChild(th2);
                th3 = document.createElement('th');
                th3.innerHTML = 'Codigo de Pais';
                tr.appendChild(th3);
                th4 = document.createElement('th');
                th4.innerHTML = 'Distrito';
                tr.appendChild(th4);
                th5 = document.createElement('th');
                th5.innerHTML = 'Poblacion';
                tr.appendChild(th5);
                tabla.appendChild(tr);
                
                
                datos.forEach(element => {
                    if(element['Population'] > 1000000){
                    let tr = document.createElement('tr');
                    let td = document.createElement('td');
                    td.innerHTML = element['ID'];
                    tr.appendChild(td);
                    td2 = document.createElement('td');
                    td2.innerHTML = element['Name'];
                    tr.appendChild(td2);
                    td3 = document.createElement('td');
                    td3.innerHTML = element['CountryCode'];
                    tr.appendChild(td3);
                    td4 = document.createElement('td');
                    td4.innerHTML = element['District'];
                    tr.appendChild(td4);
                    td5 = document.createElement('td');
                    td5.innerHTML = element['Population'];
                    tr.appendChild(td5);
                    tabla.appendChild(tr);
                    }

                    
                });

            }else{
                console.log('Mala suerte. codigo: ', peticion.status);
            }
            console.log(peticion.responseText);
        }
    }
    peticion.send();
    }

function enviarSolicitud_3(event){
    tabla.innerHTML = '';
    event.preventDefault();
    console.log('peticion 1');
    //peticion
    const peticion = new XMLHttpRequest();
    const url = 'http://127.0.0.1:3000/world/city';
    peticion.open('GET', url, true);
    peticion.onreadystatechange = function(){ //Evento q salta al cambiar de estado
        console.log(peticion.readyState);
        if (peticion.readyState==4){  //Estado 4 es ya recibida respuesta
    
            if (peticion.status==200){ //200 respuesta correcta
                let datos = JSON.parse(peticion.responseText);  //de JSON a array
                console.log('Datos recibidos; ', datos);

                //PINTAMOS LA TABLA
                let tr = document.createElement('tr');
                let th = document.createElement('th');
                th.innerHTML = 'ID';           
                tr.appendChild(th);
                th2 = document.createElement('th');
                th2.innerHTML = 'Nombre';
                tr.appendChild(th2);
                th3 = document.createElement('th');
                th3.innerHTML = 'Codigo de Pais';
                tr.appendChild(th3);
                th4 = document.createElement('th');
                th4.innerHTML = 'Distrito';
                tr.appendChild(th4);
                th5 = document.createElement('th');
                th5.innerHTML = 'Poblacion';
                tr.appendChild(th5);
                tabla.appendChild(tr);
                
                
                datos.forEach(element => {
                    if((element['Population'] > 1000000) && (element['Name'].startsWith('A'))){
                    let tr = document.createElement('tr');
                    let td = document.createElement('td');
                    td.innerHTML = element['ID'];
                    tr.appendChild(td);
                    td2 = document.createElement('td');
                    td2.innerHTML = element['Name'];
                    tr.appendChild(td2);
                    td3 = document.createElement('td');
                    td3.innerHTML = element['CountryCode'];
                    tr.appendChild(td3);
                    td4 = document.createElement('td');
                    td4.innerHTML = element['District'];
                    tr.appendChild(td4);
                    td5 = document.createElement('td');
                    td5.innerHTML = element['Population'];
                    tr.appendChild(td5);
                    tabla.appendChild(tr);
                    }

                    
                });

            }else{
                console.log('Mala suerte. codigo: ', peticion.status);
            }
            console.log(peticion.responseText);
        }
    }
    peticion.send();
    }



    //INSERCION DE DATOS (POST)

// peticion POST con XMLHttpRequest
const dirIP_api = '127.0.0.1'; // O asignar el valor que necesitas
const PUERTO_EXPRESS = 3000; // O asignar el valor que necesitas

document.getElementById('miFormulario').addEventListener('submit', (event)=>{
    event.preventDefault();
    const newCity= {
        nombre: document.getElementById('nombre').value,
        cp: document.getElementById('cp').value,
        distrito: document.getElementById('distrito').value,
        poblacion: document.getElementById('poblacion').value,
       
    }
    console.log(newCity);
    const peticion=new XMLHttpRequest();
    const url=`http://${dirIP_api}:${PUERTO_EXPRESS}/world/city`;
    peticion.open('POST', url);
    peticion.setRequestHeader('Content-type', 'application/json');  // Siempre tiene que estar esta línea si se envían datos
    peticion.send(JSON.stringify(newCity)); //convertimos objeto a texto JSON
    peticion.addEventListener('load', function(){
        tabla.innerHTML = peticion.responseText;
        
    });
       // Manejar el evento error en caso de problemas de red
       peticion.addEventListener('error', function () {
       console.error('Error de red al realizar la solicitud');
    })
});


// OJO!!!  en  la API es necsario lo siguiente:
// Middleware para manejar datos codificados en formato x-www-form-urlencoded
//app.use(express.urlencoded({ extended: true }))

document.getElementById('miFormulario').addEventListener('submit', (event)=>{
    event.preventDefault();
       const nombre = document.getElementById('nombre').value;
       const cp = document.getElementById('cp').value;
       const distrito = document.getElementById('distrito').value;
       const poblacion = document.getElementById('poblacion').value;

    const peticion=new XMLHttpRequest();
    const url=`http://${dirIP_api}:${PUERTO_EXPRESS}/world/city`;
    peticion.open('POST', url);
    peticion.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    const datosCodificados= `nombre=${encodeURIComponent(nombre)}&cp=${encodeURIComponent(cp)}&distrito=${encodeURIComponent(distrito)}&poblacion=${encodeURIComponent(poblacion)}`;
    peticion.send(datosCodificados);
    
    peticion.addEventListener('load', function(){
        tabla.innerHTML = peticion.responseText;
    });
       // Manejar el evento error en caso de problemas de red
       peticion.addEventListener('error', function () {
       console.error('Error de red al realizar la solicitud');
    })
});



// peticion POST con FormData

document.getElementById('miFormulario').addEventListener('submit', (event) => {
    event.preventDefault();
    // Obtener datos del formulario
    const datosForm = new FormData(document.getElementById('miFormulario'));
    console.log(datosForm);
    const nombre=datosForm.get('nombre'); // name de los input del form
    const cp = datosForm.get('cp');                     
    const distrito = datosForm.get('distrito');
    const poblacion = datosForm.get('poblacion');
    //datosForm.append('otrodato', 'valortexto');
    //console.log(datosForm.get('otrodato'));
    console.log(nombre);
    console.log(cp);
    console.log(distrito);
    console.log(poblacion);
    const peticion= new XMLHttpRequest();
    const url = `http://${dirIP_api}:${PUERTO_EXPRESS}/world/city`;
    peticion.open('POST', url);
    peticion.send(datosForm);
    peticion.addEventListener('load', function(){
        //procesamos los datos
        console.log(peticion.responseText);
    });
});


