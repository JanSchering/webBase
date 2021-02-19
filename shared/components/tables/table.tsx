import * as React from 'react';
import {MDBTable} from 'mdbreact';

/**
 * @description: Klassen-Komponente, die zur Darstellung der Datentabellen dient
 * @requires: siehe JavaDoc zu @type Props
 * @returns {JSX.Element} Eine Tabelle, aufgebaut aus den übergebenen Überschriften und Inhalt
 */
const ContentTable = (props: Props): JSX.Element => {
  const { hover = false, headers = {}, content = <></> } = props;
  return (
    <MDBTable striped bordered hover={hover}>
      <thead>
        <tr>{renderHeaders(headers)}</tr>
      </thead>
      <tbody>{content}</tbody>
    </MDBTable>
  );
};

/**
 * @description A function that takes an Array of Strings and turns them into table Headers.
 * @param headers the Headers of the Columns
 * @returns {Array<JSX.Element>} Ein Array von <th>-Elementen
 */
const renderHeaders = (headers: object): Array<JSX.Element> => {
  let elements: Array<JSX.Element> = Object.keys(headers).map((key, index) => {
    return <th key={index}>{headers[key]}</th>;
  });
  return elements;
};

/**
 * @param headers: erwartet ein String Array, jedes Element wird zu einer Spaltenüberschrift in der Tabelle
 * @param content: erwartet ein array mit <tr> Elementen, jedes Element im Array wird zu einer Spalte in der Tabelle
 * @param hover: Indikator, ob es sich um eine interaktive Tabelle handeln soll/ ob die Zeilen bei hovern mit der Maus
 *    hervorgehoben werden sollen.
 */
type Props = {
  headers?: object;
  content?: Array<JSX.Element>;
  hover?: boolean;
};

export default ContentTable;
export { renderHeaders };
