let contador =1;
function cambiarFondo(){


    this.setAttribute('class', 'rojo');
  
}

let td = document.getElementsByTagName ('td');

for (let index = 0; index < td.length; index++) {
      td[index].addEventListener('dblclick', cambiarFondo)
    }
    
console.log(td);

