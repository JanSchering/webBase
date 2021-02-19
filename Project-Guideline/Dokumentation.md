## Dokumentation

Dieses Kapitel geht auf das Verfahren zur Dokumentation der Anwendung ein.

### JavaDoc

Jede Functional-Component sollte über einen JavaDoc Kommentar verfügen. Dieser sollte grundlegend nach folgendem Schema aufgebaut sein:

/\*\* <br /> \* @description Beschreibung des Prozesses, welchen die Komponente abbildet. <br /> \* @params Beschreibung der Parameter, mit welchen der Prozess aufgerufen werden soll <br /> \* @returns Beschreibung, was das Ergebnis des Prozesses ist <br />
\*/

Zusätzlich zu den Functional-Components sollten auch alle Funktionen mit JavaDoc-Kommentaren versehen werden, welche exportiert und außerhalb des Ortes der Deklarierung verwendet werden sollen. Interne Hilfsfunktionen und Variablen (bspw. von Functional-Components ) müssen nicht zwingend mit JavaDoc versehen werden. Hier sollte jedoch Fallspezifisch entschieden werden ob ein einfacher Kommentar oder ein JavaDoc-Kommentar das Verständnis der Funktion erhöht.

#### Beispiel

Ein Beispiel einer Korrekt annotierten Functional Component

    /**
    * @description Komponente zur Darstellung eines Tooltips: Ein interaktives Symbol (bspw. "?"),
    * welches bei Klick einen zugehörigen Text (bspw. Hilfstext) ein- oder ausblendet.
    * @param {string} symbol Das interaktive Symbol
    * @param {string} text Der Text, der ein- oder ausgeblendet wird.
    *
    */
    const Tooltip = (symbol, text) => {
        // Status des Tooltips
        const [toggled, setToggled] = useState(false);

        return (
            <React.Fragment>
                <a onClick={() => setToggled(!toggled)}>{symbol}</a>
                {toggled ? <p>text</p> : <></>}
            </React.Fragment>
        )
    }

### Jest

neben der Sicherstellung der Funktionalität der Anwendung dienen die Jest Test-Suites zusätzlich der Dokumentation der Anwendung. Test-Suites bilden die Prozesse ab, eine deskriptive Beschreibung der Test-Suites ist dadurch in Summe eine deskriptive Beschreibung der Anwendung.

### Typisierung

Wie im vorherigen Kapitel bereits erläutert liegt ein Teil des Nutzens der Typisierung auch in der Dokumentation des Codes. Die Typisierung erleichtert bei zukünftiger Betrachtung das nachvollziehen der Funktionsweise und des Datenflusses der Anwendung.
