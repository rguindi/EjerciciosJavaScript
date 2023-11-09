let td = document.getElementsByTagName("td");
let contador = 1;

function cambiarFondo() {
  if (this.classList.contains("rojo")) {
    this.classList.remove("rojo");
  } else {
    this.classList.add("rojo");
  }



}

for (let index = 0; index < td.length; index++) {
  td[index].addEventListener("dblclick", cambiarFondo);
}

console.log(td);
