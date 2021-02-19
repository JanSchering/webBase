const apiBaseUrl = 'http://localhost:5000/';

const apiLoginUrl = apiBaseUrl + 'login';

const apiDataUrl = apiBaseUrl + 'index';

const ITERATIONS = 'iterations'

const LEARNING_RATE =  'alpha'

const apiModelUrl = apiBaseUrl + 'model';

const apiSurfaceUrl = apiBaseUrl + 'cost_surface';




/**
 * General
 */
const LOADING = 'Lädt...';
const SUCCESS_ALERT = 'Erfolgreich';

/**
 * Button-Labels
 */
const BACKTOUEBRSICHT = 'Zurück zur Übersicht';
const LOGIN = 'Login';
const ANLAGE_BUT = 'Neuen Datensatz Anlegen';
const SUCHFORM_BUT = 'Nach Datensätzen suchen';
const SPEICHERN = 'Speichern';
const ABBRECHEN = 'Abbrechen';
const SUCHEN = 'Suchen';
const BEARBEITEN = 'Bearbeiten';

/**
 * Input-Labels
 */
const USERNAME = 'Username:';
const PASSWORD = 'Passwort:';

/**
 * Validation-Errormessages
 */
const MINLENGTH2 = '*Mehr als 2 Zeichen benötigt';
const MINLENGTH6 = '*Mehr als 6 Zeichen benötigt';
const MAXLENGTH = '*Eingabe zu lang';
const PFLICHTFELD = '*Pflichtfeld';
const LOGINFAILED = 'Kombination von Username u. Passwort ungültig';

/**
 * Headlines
 */
const ANLAGE_HEAD = 'Anlegen: ';
const SUCHE_HEAD = 'Suche: ';



/**
 * Partner
 */
const NAME = 'Name:';

/**
 * Errors
 */
const BADREQUEST = 'Unzulässige Kombination von Parametern';
const NOTFOUND = 'Kein Datensatz mit den gegebenen Parametern gefunden';
const ALREADYEXIST = 'Anlage nicht möglich, Datensatz mit gegebener ID existiert bereits';

export default {
  LOADING,
  BACKTOUEBRSICHT,
  LOGIN,
  SPEICHERN,
  ABBRECHEN,
  SUCHEN,
  BEARBEITEN,
  USERNAME,
  PASSWORD,
  MINLENGTH2,
  MINLENGTH6,
  MAXLENGTH,
  PFLICHTFELD,
  LOGINFAILED,
  ANLAGE_BUT,
  SUCHE_HEAD,
  ANLAGE_HEAD,
  NAME,
  SUCCESS_ALERT,
  BADREQUEST,
  NOTFOUND,
  ALREADYEXIST,
  SUCHFORM_BUT,
  apiBaseUrl,
  apiLoginUrl,
  apiDataUrl,
  apiModelUrl,
  apiSurfaceUrl,
  ITERATIONS,
  LEARNING_RATE
};
