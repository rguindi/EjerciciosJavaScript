function formatearA3cifras(num){                    //Formatear un numeroa a X cifras.
    return num.toLocaleString(undefined,
        { minimumIntegerDigits: 3, useGrouping: false}); //dejo useGrouping para recordar la propiedad (separador de miles) ;
}



export const Funciones = {
    formatearA3cifras,
}