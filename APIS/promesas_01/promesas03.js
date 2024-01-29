function mitad(numerito){
    return new Promise((resolve, reject)=>{
        if(numerito %2===0){
            resolve(numerito/2);
        } else {
            reject(`Error: el número ${numerito} no es par`);
        }
    });
}
let num=6
mitad(7).then(console.log).catch(console.log);
mitad(num).then(console.log).catch(console.log);
mitad(5).then(console.log).catch(console.log);
mitad(4).then(console.log).catch(console.log);
mitad(8).then(console.log).catch(console.log);
// las salida es asíncrona, primero las que salen bien y luego las erróneas
