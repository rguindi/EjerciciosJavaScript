let td = document.getElementsByTagName("td");
let contador = 1;

function cambiarFondo() {
  if (this.classList.contains("rojo")) {           //Lineas 5 a 9 alternan la clase de color
    this.classList.remove("rojo");
  } else {
    this.classList.add("rojo");
  }

    this.firstChild.innerText = (contador++) + "-";  //Al sppan creado le añado el contador con el guion
}

for (let index = 0; index < td.length; index++) {
  const span = document.createElement('span');
  td[index].insertBefore(span, td[index].firstChild);     //Creo un elemento spam en cada td que introduzo antes del texto
  td[index].addEventListener("dblclick", cambiarFondo);

}

console.log(td);
