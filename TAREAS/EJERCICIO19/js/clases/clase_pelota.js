import { misFunciones } from "../libreria/misfunciones.js";
import { Bola } from "./clase_bola.js";
export class Pelota extends Bola {
  constructor(radio, posX, posY, colorBola, linearGradient, vx, vy) {
    super(radio, posX, posY, colorBola, linearGradient);
    this._vx = vx;
    this._vy = vy;
  }

  get vx() {
    return this._vx;
  }
  set vx(in_vx) {
    this._vx = in_vx;
  }

  get vy() {
    return this._vy;
  }
  set vy(in_vy) {
    this._vy = in_vy;
  }

  chocarParedes() {}

  chocarParedes() {}
}
