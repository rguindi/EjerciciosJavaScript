
export class Persona {

    static contadorPersonas = 100;
    
    static max = 107;

    constructor (a, b, c){
        this._id = ++Persona.contadorPersonas;
        this._nombre = a;
        this._apellido = b;
        this._edad = c;

        if (Persona.contadorPersonas > Persona.max) {
            console.log('AVISO: Hay más de 6 objetos creados');
        }
    }

    get nombre(){
        return this._nombre[0].toUpperCase() + this._nombre.toLowerCase().slice(1);
    }

    set nombre (nombre){
        this._nombre = nombre.toUpperCase();
    }

    get apellido(){
        return this._apellido[0].toUpperCase() + this._apellido.toLowerCase().slice(1);
    }

    set apellido (apellido){
        this._apellido = apellido.toUpperCase();
    }

    get edad(){
        return this._edad;
    }

    set edad (edad){
        this._edad = edad;
    }

    toString(){
        return `${this._id}:
            ${this.nombre} ${this.apellido} 
            Edad: ${this.edad}`; 
    }

}