/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2011 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (martinwittemann)

************************************************************************ */

/**
 * Simple color theme
 */
qx.Theme.define("ae.theme.material.Color",
{
  colors :
  {
    // main
    "background" : "white",
    "dark-blue" : "#5685D6",
    "light-background" : "#F4F4F4",
    "font" : "#262626",

    "highlight" : "#03a9f4", // bright blue
    "highlight-shade" : "red", // bright blue
    
    // backgrounds
    "background-selected" : "#888888",
    "background-selected-disabled" : "#CDCDCD",
    "background-selected-dark" : "#03a9f4",
    "background-hovered" : "#EEEEEE",
    "background-disabled" : "#F7F7F7",
    "background-disabled-checked" : "#BBBBBB",
    "background-pane" : "#FAFBFE",

    "list-selected" : "#EEE",
    "list-selected-disabled" : "#EDEDED",
    
    // tabview
    "tabview-unselected" : "#888888",
    "tabview-button-border" : "red",
    "tabview-label-active-disabled" : "red",
    "tabview-button-selected" : "#03a9f4",

    // text colors
    "link" : "#000",
    
    "arrow-gray" : qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 0.6)" : "#444444",

    // scrollbar
    "scrollbar-bright" : "#F1F1F1",
    "scrollbar-dark" : "#EBEBEB",

    // form
    "button" : "#E8F0E3",
    //"button-hovered" : "red",
    "button-border" : "#BBB",
    "button-border-hovered" : "#CCC",
    "invalid" : "#FF0000",
    "button-box-bright" : "#E9E9E9",
    "button-box-dark" : "#E3E3E3",
    "button-box-bright-pressed" : "#BBBBBB",
    "button-box-dark-pressed" : "#F5F5F5",
    "border-lead" : "#888888",

    // window
    "window-border" : "#dddddd",
    "window-border-inner" : "#F4F4F4",

    // group box
    "white-box-border" : "#BCBCBC",

    // shadows
    "shadow" : qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 0.4)" : "#666666",

    // borders
    // 'border-main' is an alias of 'background-selected' (compatibility reasons)
    "border-main" : "#03a9f4",
    "border-light" : "#B7B7B7",
    "border-light-shadow" : "#686868",

    // separator
    "border-separator" : "#808080",

    // text
    "text" : "black",
    "text-disabled" : "#A7A6AA",
    "text-selected" : "white",
    "text-placeholder" : "#CBC8CD",

    // tooltip
    "tooltip" : "black",
    "tooltip-text" : "white",

    // table
    "table-header" : [ 255, 255, 255 ],
    "table-focus-indicator" : "#03a9f4",

    // used in table code
    "table-header-cell" : "white",
    "table-row-background-focused-selected" : "#EEE",
    "table-row-background-focused" : "#EEE",
    "table-row-background-selected" : "#EEE",
    "table-row-background-even" : "white",
    "table-row-background-odd" : "white",
    "table-row-selected" : [ 255, 255, 255 ],
    "table-row" : [ 0, 0, 0],
    "table-row-line" : "#EEE",
    "table-column-line" : "transparent",

    // used in progressive code
    "progressive-table-header" : "#AAAAAA",
    "progressive-table-row-background-even" : [ 250, 248, 243 ],
    "progressive-table-row-background-odd" : [ 255, 255, 255 ],
    "progressive-progressbar-background" : "gray",
    "progressive-progressbar-indicator-done" : "#CCCCCC",
    "progressive-progressbar-indicator-undone" : "white",
    "progressive-progressbar-percent-background" : "gray",
    "progressive-progressbar-percent-text" : "white",
    
    "radiobutton-center":"#000"
  }
});
