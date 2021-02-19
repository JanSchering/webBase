import React from 'react';
import treeStyles from '../../css/treeview.module.css';

/**
 * @description: Erzeugt einen auf/zuklappbaren Knotenpunkt mit Beschriftung {nodeLabel}.
 * Wenn aufgeklappt, werden die Children-Elemente angezeigt.
 * @requires: siehe JavaDoc von @type {Props}
 * @returns {React.Element} Auf/Zuklappbarer Knoten mit Child Elementen
 */
const TreeNode = (props: Props): JSX.Element => {
  const {
    collapsed,
    className = '',
    itemClassName = '',
    treeViewClassName = '',
    childrenClassName = '',
    nodeLabel = 'Node',
    children,
    onClick,
    isChildPrimitive,
    ...rest
  } = props;

  let arrowClassName = treeStyles.treeview_arrow;
  let containerClassName = treeStyles.treeview_children;
  if (collapsed) {
    arrowClassName += ' ' + treeStyles.treeview_arrowCollapsed;
    containerClassName += ' ' + treeStyles.treeview_childrenCollapsed;
  }
  const arrow = <div {...rest} className={className + ' ' + arrowClassName} onClick={() => props.onClick()} />;

  const buildStructure = (): JSX.Element => {
    if (isChildPrimitive) {
      return (
        <div className={treeStyles.treeview + ' ' + itemClassName}>
          {arrow}
          {nodeLabel}: &nbsp;
          {children}
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <div className={treeStyles.treeview + ' ' + itemClassName}>
            {arrow}
            {nodeLabel}
          </div>
          <div className={containerClassName + ' ' + childrenClassName + treeStyles.treeview_arrange}>{collapsed ? null : children}</div>
        </React.Fragment>
      );
    }
  };

  return <div className={treeStyles.treeview + ' ' + treeStyles.grad + ' ' + treeViewClassName}>{buildStructure()}</div>;
};

/**
 * @props
 *  nodeLabel: Beschriftung des Auf/Zuklappbaren Knotenpunktes
 *  onClick: Funktion, die das klicken des Knotens behandelt, sollte in Zusammenhang mit {collapsed} stehen
 *  collapsed: der initiale Status des Knotens
 *  children: Die Children-Elemente, die bei aufgeklapptem Knoten angezeigt werden
 *  isChildPrimitive: gibt an, ob [@param {children}] ein primitive ist.
 *  ...className: attribute mit denen das aussehen der verschiedenen Elemente der Baumstruktur über classNames angepasst werden
 *                können.
 *
 */
type Props = {
  nodeLabel?: JSX.Element;
  className?: string;
  itemClassName?: string;
  childrenClassName?: string;
  isChildPrimitive: boolean;
  treeViewClassName?: string;
  onClick: Function;
  collapsed: boolean;
  children: any;
};

export default TreeNode;
