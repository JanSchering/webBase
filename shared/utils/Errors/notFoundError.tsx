import BaseError from "./baseError";

/**
 *@description Repräsentiert den Server-Fehler: Keine Daten gefunden
 */
class NotFoundError extends BaseError {
  constructor(public status: number, public message: string) {
    super();
  }
}

export default NotFoundError;
