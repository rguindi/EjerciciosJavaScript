
export class Persona {

    static contadorPersonas = 100;
    constructor (a, b, c){
        this._id = ++Persona.contadorPersonas;
        this._nombre = a;
        this._apellido = b;
        this._edad = c;
    }

    get nombre(){
        return this._nombre[0].toUpperCase() + this._nombre.toLowerCase().slice(1);
    }

    set nombre (nombre){
        this._nombre = nombre.toUpperCase();
    }

    toString(){
        return `${this.id}:
            ${this.nombre} ${this.apellido} 
            Edad: ${this.edad}`; 
    }

}