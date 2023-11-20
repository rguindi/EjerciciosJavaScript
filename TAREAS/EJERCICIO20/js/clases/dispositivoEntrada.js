export class DispositivoEntrada {

  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }
  
  get tipoEntrada() {
    return this._tipoEntrada;
  }
  set tipoEntrada(in_tipoEntrada) {
    this._tipoEntrada = in_tipoEntrada;
  }

  get marca() {
    return this._marca;
  }
  set marca(in_marca) {
    this._marca = in_marca;
  }
}
