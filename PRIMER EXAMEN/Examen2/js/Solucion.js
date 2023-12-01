



// Seleccionamos todos los elementos antes de modificar el DOM
let arrayHijos = Array.from(document.body.querySelectorAll('*'));
let todosElementos = arrayHijos.filter((elemento, indice, array)=>elemento.tagName!='SCRIPT' && elemento.tagName != '');
console.log(todosElementos);

//Insertamos primer DIV
let primerDiv = document.createElement ('DIV');
primerDiv.setAttribute ('id', 'primerDiv');
let bodyprimer = document.body.firstElementChild;
document.body.insertBefore(primerDiv, bodyprimer);


//Insertamos ultimo div antes del script
// let script = document.body.lastElementChild;
let ultimoDiv = document.createElement ('DIV');
let script = document.getElementsByTagName('script')[0];
// let script = document.querySelector('script'); 
ultimoDiv.id =  'ultimoDIV';
document.body.insertBefore(ultimoDiv, script);

//Insertamos todos los elementos al ultimo DIV
todosElementos.forEach(element => {
    ultimoDiv.appendChild(element);
});

// let ulprincipal= document.createElement ('ul');
// ulprincipal.id = 'listaprincipal';
// primerDiv.appendChild (ulprincipal);




let contadorh1 = 0;
let contadorh2 = 0;

todosElementos.forEach((element, index) => {
    switch (element.tagName) {
        case 'H1':
            element.id = 'h1' + contadorh1;
            contadorh1++;
            let ancla = document.createElement('a');
            let ul2 = document.createElement('ul');
            ul2.id = 'ulh1' + contadorh1;
            ancla.innerText = element.innerText;
            ancla.setAttribute('href', '#' + element.id);
            ul2.appendChild(ancla);
            // let nodoCopia = ul2.cloneNode(false);
            primerDiv.appendChild(ul2);
            break;
        case 'H2':
            element.id = 'h2' + contadorh2;
            contadorh2++;
            let ancla2 = document.createElement('a');
            let li2 = document.createElement('li');
            ancla2.innerText = element.innerText;
            ancla2.setAttribute('href', '#' + element.id);
            li2.appendChild(ancla2);
            // let nodoCopia2 = li2.cloneNode(false);

            let meter =document.getElementById('ulh1' + (contadorh1));
            meter.appendChild(li2);
           
            break;
    }
    
});



