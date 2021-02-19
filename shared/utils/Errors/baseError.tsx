/**
 * @description eine abstrakte Fehlerklasse auf der spezifische Fehlerklassen aufgebaut werden können.
 * Die spezifischen Fehlerklassen werden zur spezifischen Fehlerbehandlung genutzt.
 */
class BaseError {
  constructor() {
    Error.apply(this, arguments);
  }
}

Object.setPrototypeOf(BaseError, new Error());

export default BaseError;
