function comprobarDNI(dni){

    let correcto = true;
    let letra = dni.charAt(8);
    console.log ("La ultima letra del String es " + letra);

    let numero = dni.substring (0,8);
    console.log ("El numero introducido por parámetro es " + numero);

    let letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";

        if (dni.length !=9) correcto = false;
        else {
                let numerodeletra= parseInt (numero%23);
                
                let letracorrecta= letrasDNI.charAt(numerodeletra);
                if (letra.toLocaleUpperCase()!=letracorrecta.toLocaleUpperCase()){
                    correcto = false;
        }


    return correcto;


                }
            }
    var datos = window.prompt ("Introduce tu DNI");


