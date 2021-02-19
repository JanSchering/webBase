import { createBrowserHistory } from "history";

/**
 * @description: Das history Objekt dient der Verwaltung der Routerhistorie.
 * wenn einem Router dieses Objekt als historie übergeben wird, können alle Child
 * Komponenten durch import dieses Objekts auf die Routerfunktionalität zugreifen.
 */
export const history = createBrowserHistory();
