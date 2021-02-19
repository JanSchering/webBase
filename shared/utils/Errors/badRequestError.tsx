import BaseError from "./baseError";

/**
 * @description Repräsentiert den Server-Fehler: Ungültige Datenkombination im Request-Body
 */
class BadRequestError extends BaseError {
  constructor(public status: number, public message: string) {
    super();
  }
}

export default BadRequestError;
