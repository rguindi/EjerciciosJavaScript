function comprobarDNI(dni){

    let correcto = true;
    let letra = dni.charAt(8);
    console.log ("La ultima letra del Dni introducido es " + letra);

    let numero = dni.substring (0,8);
    console.log ("El DNI sin letra es " + numero);

    let letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";

        if (dni.length !=9) {
            correcto = false;
            console.log ("El DNI introducido no tiene la longitud correcta");
        }
        else {
                let numerodeletra= parseInt (numero%23);
                
                let letracorrecta= letrasDNI.charAt(numerodeletra);
                if (letra.toLocaleUpperCase()!=letracorrecta.toLocaleUpperCase()){
                    correcto = false;
                    console.log ("La letra no se corresponde con ese numero");
        }


    return correcto;


                }
            }
    var resultado = comprobarDNI(window.prompt ("Introduce tu DNI"));

    if (resultado) window.alert ("El formato de DNI es Correcto");
    else window.alert ("Formato de DNI Incorrecto");




