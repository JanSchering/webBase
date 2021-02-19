import * as React from 'react';
import { dataService } from '../../Routing/utilities/data.service';
import Constants from './textConstants';

/**
 * @description: Eine einfache Utility Funktion, die durch ein Array an Stringwerten (headern) iteriert.
 * Die erhaltenen Werte werden jeweils als key verwendet um entsprechend hinterlegte Werte aus einem Objekt zu holen.
 * Für jeden Wert wird eine Tabellenzelle angelegt.
 * @returns: Ein Array bestehend aus <td>-Elementen. Repräsentiert den Inhalt einer Zeile einer Tabelle
 *
 * @param object: Objekt, in welchem die Werte hinterlegt sind, die gemappt werden sollen.
 * @param headers: objekt, jedes Attribut stellt eine Spalte dar, die von dem Objekt auf die Zellen gemappt werden sollen.
 */
const mapObjectToArrayOfTableCellsByHeaders = (object: object, headers: object): Array<JSX.Element> => {
  let cells: Array<JSX.Element> = Object.keys(headers).map(key => {
    return <td key={key}>{object[key]}</td>;
  });
  return cells;
};

/**
 * @description eine Funktion zum automatisieren der Erstellung von Optionen für Select-Boxen.
 * Nimmt ein Objekt/Type-Objekt und liefert eine Liste mit Options mit allen Attributwerten
 * @param enumObject Das Objekt über das iteriert und dessen Werte als Optionen dienen sollen.
 * @returns {Array<JSX.Element>}
 */
const buildSelectOptionsFromTypeEnum = (enumObject): Array<JSX.Element> => {
  let optionArray: Array<JSX.Element> = [];

  optionArray.push(
    <option key="default" value="">
      ...
    </option>
  );

  Object.keys(enumObject).map(key => {
    optionArray.push(
      <option key={key} value={key}>
        {enumObject[key]}
      </option>
    );
  });
  return optionArray;
};


export default { mapObjectToArrayOfTableCellsByHeaders, buildSelectOptionsFromTypeEnum, };
