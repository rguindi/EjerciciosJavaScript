
function formatearA4cifras(num){
    return num.toLocaleString(undefined,
        { minimumIntegerDigits: 4, useGrouping: false}); //dejo useGrouping para recordar la propiedad);
}

export const misFunciones = {
    formatearA4cifras,
}
