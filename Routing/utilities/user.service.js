import Constants from '../../shared/utils/textConstants';
import { handleResponse } from './serviceUtils';

export const userService = {
  login,
  logout,
};

/**
 * @description Die Funktion ruft einen Login Service mit den übergebenen Credentials auf.
 * Ist der Aufruf erfolgreich, wird im Localstore ein User Objekt hinterlegt, in welchem die
 * Credentials gespeichert sind um für zukünftige Aufrufe genutzt werden zu können.
 * @param {string} username
 * @param {string} password
 */
function login(username, password) {
  var headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', 'Basic ' + btoa(`${username}:${password}`));

  const requestOptions = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
    headers: headers,
    credentials: 'omit',
  };

  return fetch(Constants.apiLoginUrl, requestOptions)
    .then(handleResponse)
    .then(user => {
      // login successful if there's a user in the response
      if (user) {
        // store user details and basic auth credentials in local storage
        // to keep user logged in between page refreshes
        user.authdata = window.btoa(username + ':' + password);
        window.localStorage.setItem('user', JSON.stringify(user));
      }

      return user;
    })
    .catch(error => {
      window.alert(error);
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}
