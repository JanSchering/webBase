/**
 * @description: generische Methode, welche eine APi Response nimmt, auf Fehler prüft
 * und bei fehlerfreiheit die entsprechenden Daten liefert. Bei Fehlern erfolgt ein Logout des Anwenders.
 * @param {any} response Die Server-Antwort, die behandelt werden soll.
 */
export const handleResponse = (response) => {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        location.reload(true);
      }

      const error = response.status;
      return Promise.reject(error);
    }

    return data;
  });
};
