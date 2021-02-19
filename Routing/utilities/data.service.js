import { handleResponse } from './serviceUtils';
import BadRequestError from '../../shared/utils/Errors/badRequestError';
import NotFoundError from '../../shared/utils/Errors/notFoundError';
import AlreadyExistError from '../../shared/utils/Errors/alreadyExistError';

import Constants from '../../shared/utils/textConstants';

export const dataService = {
  requestGET,
  requestPATCH,
  requestPOST,
  requestDELETE,
  getAuthorizationHeader,
  requestFile,
};

/**
 * @description util function, that defines a @type {Headers} Object with the necessary headers for the API requests. It also
 * tries reading the credentials from the local storage and set them into a Request header
 * @returns returns a headers object containing a {Content-Type} and, if existant, an {Authorization} Header
 *
 **/
function getAuthorizationHeader() {
  if (window.localStorage.getItem('user')) {
    let header = new Headers();
    var userData = JSON.parse(localStorage.getItem('user'));
    var credential = userData.authdata;
    header.append('Authorization', 'Basic ' + credential);
    header.append('Content-Type', 'application/json');
    return header;
  }
}

/**
 * @description: Diese Funktion dient dazu, Daten die in Form eines Oktet-Streams
 * von Einer Api geliefert werden anzufragen, in base64 umzuwandeln und zurückzugeben
 * @param {string} url Die Adresse, über welche die Api erreichbar ist, welche die Daten liefert
 * @example: möglicher Anwendungsfall ist eine Api, welche Dateien liefert.
 */
async function requestFile(url) {
  var headers = getAuthorizationHeader();

  const requestOptions = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
    headers: headers,
    credentials: 'omit',
  };

  const blobToBase64 = async function (blob) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();

      reader.onloadend = (e) => {
        const dataUrl = e.target.result;
        resolve(dataUrl);
      };

      reader.onerror = reject;

      reader.readAsDataURL(blob);
    });
  };

  return fetch(url, requestOptions)
    .then((response) => {
      return response.blob();
    })
    .then((blob) => {
      return blobToBase64(blob).then((resolvedPromise) => {
        return resolvedPromise;
      });
    });
}

/**
 * @description This function can be used to send GET Requests to arbitrary endpoints.
 * @returns returns a JSON Object consisting of the retrieved data
 * @param {string} url : The URL, that the function will try to retrieve data from
 */
function requestGET(url) {
  var headers = getAuthorizationHeader();

  const requestOptions = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
    credentials: 'omit',
    headers: headers,
  };

  return fetch(url, requestOptions)
    .then(handleResponse)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      if (error == 400) {
        throw new BadRequestError('400', Constants.BADREQUEST);
      } else if (error == 404) {
        throw new NotFoundError('404', Constants.NOTFOUND);
      } else if (error == 409) {
        throw new AlreadyExistError('409', Constants.ALREADYEXIST);
      } else {
        throw error;
      }
    });
}

/**
 * @description Eine Funktion um PATCH-Requests an eine beliebige URL zu senden
 * @param {*} url Die URL, an welche die Anfrage gesendet werden soll.
 * @param {*} data Der Körper der Anfrage - Die Daten die an die URL mit der Anfrage gesendet werden sollen.
 */
function requestPATCH(url, data) {
  var headers = getAuthorizationHeader();

  const requestOptions = {
    method: 'PATCH',
    mode: 'cors',
    cache: 'default',
    headers: headers,
    credentials: 'omit',
    body: JSON.stringify(data),
  };

  return fetch(url, requestOptions)
    .then(handleResponse)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      if (error == 400) {
        throw new BadRequestError('400', Constants.BADREQUEST);
      } else if (error == 404) {
        throw new NotFoundError('404', Constants.NOTFOUND);
      } else if (error == 409) {
        throw new AlreadyExistError('409', Constants.AlreadyExistError);
      } else {
        throw error;
      }
    });
}

/**
 * @description Eine Funktion zum Senden von POST-Requests an beliebige URLS.
 * @param {*} url Die URL, an welche die Anfrage gesendet werden soll.
 * @param {*} data Der Körper der Anfrage - Die Daten, die mit der Anfrage gesendet werden sollen.
 */
function requestPOST(url, data) {
  var headers = getAuthorizationHeader();

  const requestOptions = {
    method: 'POST',
    mode: 'cors',
    cache: 'default',
    headers: headers,
    credentials: 'omit',
    body: JSON.stringify(data),
  };

  return fetch(url, requestOptions)
    .then(handleResponse)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      if (error == 400) {
        throw new BadRequestError('400', Constants.BADREQUEST);
      } else if (error == 404) {
        throw new NotFoundError('404', Constants.NOTFOUND);
      } else if (error == 409) {
        throw new AlreadyExistError('409', Constants.ALREADYEXIST);
      } else {
        throw error;
      }
    });
}

/**
 * @description Eine Funktion zum Senden von DELETE-Requests an beliebige URLS.
 * @param {*} url Die URL, an welche die Anfrage gesendet werden soll.
 */
function requestDELETE(url) {
  var headers = getAuthorizationHeader();

  const requestOptions = {
    method: 'DELETE',
    mode: 'cors',
    cache: 'default',
    credentials: 'omit',
    headers: headers,
  };

  return fetch(url, requestOptions)
    .then(handleResponse)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      if (error == 400) {
        throw new BadRequestError('400', Constants.BADREQUEST);
      } else if (error == 404) {
        throw new NotFoundError('404', Constants.NOTFOUND);
      } else if (error == 409) {
        throw new AlreadyExistError('409', Constants.ALREADYEXIST);
      } else {
        throw error;
      }
    });
}
