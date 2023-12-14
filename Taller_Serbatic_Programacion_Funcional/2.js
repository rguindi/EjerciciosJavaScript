function crearContador(){
     let contador = 0;

     function incrementar(){
        contador++;

        return contador;
     }

     function disminuir(){
        contador--;
 
        return contador;
     }

     function getContador(){
    
        return contador;
     }

     return {
     incrementar:incrementar,
     disminuir:disminuir,
     getContador:getContador,
    };

}

let miContador = crearContador();
function mostrarContador() {
    document.getElementById('valorContador').textContent = miContador.getContador();
    
}