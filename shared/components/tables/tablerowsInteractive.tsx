import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Utils from '../../utils/generalutilFunctions';
import { MDBBtn } from 'mdbreact';

import Constants from '../../utils/textConstants';

/**
 * @description: Eine designierte Komponente, welche dem Aufbau und der Funktionalität des Tabellenkorpus der "Processing" Phase dient.
 * Die Tabelle gibt die Anträge in Zeilenform aus und ist interaktiv. Bei klick auf einen Antrag/eine Zeile wird der Anwender auf die Detailansicht
 * des ausgewählten Antrags weitergeleitet
 * @requires: siehe JavaDoc of type Props
 * @returns {Array<JSX.Element>} Ein Array von klickbaren <tr>-Elementen mit Mouse-Over Element
 */
const TableRowsInteractive = (props: Props): Array<JSX.Element> => {
  let { daten, header, clickFunction } = props;

  const handleClick = objekt => {
    clickFunction(objekt);
  };

  let rows = daten.map((objekt, index) => {
    return (
      <tr
        key={index}
        onClick={() => {
          handleClick(daten[index]);
        }}
      >
        {Utils.mapObjectToArrayOfTableCellsByHeaders(objekt, header)}
        <td>
          <MDBBtn>{Constants.BEARBEITEN}</MDBBtn>
        </td>
      </tr>
    );
  });

  return rows;
};

/**
 *  @param daten: Die darzustellenden Anträge als Array von Objekten
 *  @param header: Die Attributnamen, welche aus den Antraegen ausgelesen und
 * deren Werte in den jeweiligen Zeilen dargestellt werden sollen.
 */
type Props = {
  daten: Array<Object>;
  header: object;
  clickFunction?: Function;
};

export default TableRowsInteractive;
