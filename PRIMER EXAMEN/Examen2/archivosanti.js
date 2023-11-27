



// Seleccionamos todos los elementos
let arrayHijos = Array.from(document.body.querySelectorAll('*'));
let todosElementos = arrayHijos.filter((elemento, indice, array)=>elemento.tagName!='SCRIPT' && elemento.tagName != '');
console.log(todosElementos);

//Insertamos primer DIV
let primerDiv = document.createElement ('DIV');
primerDiv.setAttribute ('id', 'primerDiv');
let bodyprimer = document.body.firstElementChild;
document.body.insertBefore(primerDiv, bodyprimer);
let ultimoDiv = document.createElement ('DIV');


//Insertamos ultimo div antes del script
// let script = document.body.lastElementChild;
let script = document.getElementsByTagName('script')[0];
// let script = document.querySelector('script'); 
ultimoDiv.id =  'ultimoDIV';
document.body.insertBefore(ultimoDiv, script);

todosElementos.forEach(element => {
    ultimoDiv.appendChild(element).id;
});


let indice = document.createElement ('ul');
todosElementos.forEach(element => {
    


});












// arrayHijos.pop();  //Borramos el elemento script
// arrayHijos.pop();  //Borramos el div creado del array
// arrayHijos.shift();  //Borramos el elemento Div creado del array


// //Añadimos todos los elementos al ultimo DIV
// arrayHijos.forEach(element => {
//     ultimoDiv.appendChild(element);
// });




// // Haciendo la lista


// let ul = document.createElement ('ul');

// primerDiv.appendChild (ul);


// let h1 = ultimoDiv.querySelectorAll ('h1');
// let arrayH1 = Array.from (h1);

// arrayH1.forEach(element => {
//     let ancla = document.createElement ('a');
//     let li = document.createElement ('li');
//     ancla.innerText = element.innerText;
//     li.appendChild(ancla);
//     ul.appendChild (li);


//     // let texto = element.ariaValueMax;
//     // ul.appendChild (nuevoel);
    
//     // let nuevoel = element.cloneNode(false);
//     // let li = document.createElement ('li');

//     // let h2 = ultimoDiv.querySelectorAll ('h2');
//     // let arrayH2 = Array.from (h2);


//     // for (let index = contador; index < arrayH1.length; index++) {
        
//     //     ul.appendChild (arrayH2[index]);
//     //     contador++;
//     // }

// });



