import { Producto } from "./producto.js";

export class Orden{

     
    static numeroorden = 0;

    constructor(){
       
        this._id = ++Orden.numeroorden;
        
        this._arrayProductos = [];
    }

    agregarProducto (producto){
        if (this._arrayProductos.length>=5){
            console.log("No caben más productos en la Orden: " + this.id);
        }else
        this._arrayProductos.push(producto);

    }

    get id (){      
      return (this._id.toLocaleString(undefined,
    { minimumIntegerDigits: 3, useGrouping: false}));
    }


    get productos (){
        let p = "";
        let suma=0;
        this._arrayProductos.forEach(element => {
            p += element.nombre + "\t\t" + element.precio.toFixed(2) + " €" + "\n    ";
            suma += element.precio;
        });

        p+= "-----------------\nTotal: " + suma.toFixed(2) + " €";
        return p;
    }




    resumenOrden(){
      let resumen = "____________________\n Orden: " + this.id + "\n"+ "\t"+this.productos;

      console.log(resumen);
      
      

    }



}