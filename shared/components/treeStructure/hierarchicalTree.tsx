import React, { useState, useEffect } from 'react';
import TreeNode from './treeNode';

/**
 * @description Stellt eine Datenstruktur als interaktive Baumstruktur dar.
 * @example { title : "a", content: { subTitle: "b" } }
 * ==> Eine Baumstruktur mit zwei Ebenen
 * Erste Ebene: "title: a", "content:" ==> Content aufklappbar mit zweiter Ebene
 * Zweite Ebene: "title: b",
 * @param {ObjectConstructor} data Die Datenstruktur, welche dargestellt werden soll
 * @returns Baumstruktur als JSX.Element
 */
const HierarchicalTree = (data: object): JSX.Element => {
  // Ein Objekt, welches den Anzeigestatus der Knotenpunkte trackt
  const [bookkeeping, setBookkeeping] = useState(() => prepareBookkeeping(data));

  const handleClick = (key): void => {
    let newBookkeeping = { ...bookkeeping };
    newBookkeeping[key] = !bookkeeping[key];
    setBookkeeping(newBookkeeping);
  };

  let content: Array<JSX.Element> = sophisticatedDeepTree(data, bookkeeping, 0, handleClick);

  return <div style={{ width: 'max-content' }}>{content}</div>;
};

/**
 * @description Maps through an objects' attributes.
 * Creates a flattened object of all attributes and gives them
 * a boolean indicator, stating if their corresponding TreeNode is open/closed
 * @param {object} data
 */
const prepareBookkeeping = (data: object): object => {
  const flattenedDataForBookkeeping = {};
  const helper = (data, prefix) => {
    Object.keys(data).map(key => {
      const uniqueAttributeName = key + prefix.toString();
      if (data[key] && typeof data[key] === 'object') {
        flattenedDataForBookkeeping[uniqueAttributeName] = true;
        prefix = prefix + 1;
        helper(data[key], prefix);
      } else {
        flattenedDataForBookkeeping[uniqueAttributeName] = false;
      }
    });
  };

  helper(data, 0);
  return flattenedDataForBookkeeping;
};

/**
 * @description Hilfsfunktion um tiefere Objektebenen zu behandeln.
 * Prüft den Inhalt von @param {dataChunk}. Macht rekursiven Aufruf,
 * wenn datachunk eine weitere Objektebene beinhaltet.
 * @param dataChunk Das Datenobjekt, das geprüft werden soll
 * @param key der Attributname des dataChunks im Herkunftsobjekt
 * @param prefix ein Präfix, der Einzigartigkeit der Bookkeeping-Attribute sicherstellt
 * @param bookkeeping Das Bookkeeping Objekt, tracked den Status der Knoten
 */
const handleRecursion = (dataChunk, key, prefix, bookkeeping, handleClick): Array<JSX.Element> => {
  if (dataChunk === null) {
    return [
      <div key={key + prefix}>
        INFO: Leeres Feld, keine Daten hinterlegt
      </div>,
    ];
  } else if (dataChunk && typeof dataChunk === 'object') {
    prefix = prefix + 1;
    return sophisticatedDeepTree(dataChunk, bookkeeping, prefix, handleClick);
  } else {
    return [
      <div key={key + prefix}>
        {dataChunk}
      </div>,
    ];
  }
};

/**
 * @description Baut eine Baumstruktur aus einem Objekt auf.
 * @param data Das Objekt, aus dem eine Baumstruktur aufgebaut werden soll
 * @param bookkeeping "Buchhalter", der den Status der Knoten tracked
 * @param prefix Eine Startnummer, die genutzt wird um einzigartige Attributnamen für den
 *                Buchhalter zu kreieren.
 * @param handleClick Funktion, die behandelt was passieren soll wenn ein Knoten geklickt wird
 */
const sophisticatedDeepTree = (data, bookkeeping, prefix, handleClick): Array<JSX.Element> => {
  return Object.keys(data).map((key, index) => {
    const uniqueAttributeName = key + prefix.toString();
    const isPrimitiveOrNull = () => {
      return typeof data[key] != 'object' || data[key] === null;
    };
    const label = (
      <span className="node" onClick={() => handleClick(uniqueAttributeName)}>
        {key}
      </span>
    );
    const dataChunk = data[key];
    return (
      <TreeNode
        key={index}
        nodeLabel={label}
        isChildPrimitive={isPrimitiveOrNull()}
        collapsed={bookkeeping[uniqueAttributeName]}
        onClick={() => handleClick(uniqueAttributeName)}
      >
        {handleRecursion(dataChunk, key, prefix, bookkeeping, handleClick)}
      </TreeNode>
    );
  });
};

export default HierarchicalTree;
export { sophisticatedDeepTree, handleRecursion, prepareBookkeeping };
