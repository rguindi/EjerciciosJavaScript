export class tabla {
  constructor(filas, columnas) {
    let table = document.createElement("table");
    for (let index = 0; index < filas; index++) {
      let row = document.createElement("tr");
      for (let col = 0; col < columnas; col++) {
        let col = document.createElement("td");
        row.appendChild(col);
      }
      table.appendChild(row);
    }

    this._tabla = table;
    this._arrayTabla = Array.from(table.getElementsByTagName("td"));
  }

  get tabla() {
    return this._tabla;
  }
  set tabla(in_tabla) {
    this._tabla = in_tabla;
  }
  get arrayTabla() {
    return this._arrayTabla;
  }
  set arrayTabla(in_arrayTabla) {
    this._arrayTabla = in_arrayTabla;
  }


  insertar (padre) {
    padre.appendChild(this.tabla);
  }



}
