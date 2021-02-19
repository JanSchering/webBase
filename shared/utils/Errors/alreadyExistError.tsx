import BaseError from "./baseError";

/**
 * @description Repräsentiert den Server-Fehler: Datensatz der angelegt werden soll existiert bereits.
 */
class AlreadyExistError extends BaseError {
  constructor(public status: number, public message: string) {
    super();
  }
}

export default AlreadyExistError;
