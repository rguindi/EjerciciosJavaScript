let contador = 0;
const mostrarContenido = function(var1, var2) {
    console.log(this);
    console.log(var1);
    console.log(var2);
    
    this.innerHTML += ++contador +'-';

}


const td = Array.from(document.querySelectorAll("td"));
td.forEach((celda,indiceOpcional,arrayCompletoOpcional)=>{
    //Añadimos listener
        celda.addEventListener('click', mostrarContenido.bind(indiceOpcional, 'Federico'));

            //borramos contenido celdas
            celda.innerHTML='';
});

