"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  "display": "inline-block",
  "fontWeight": "400",
  "lineHeight": "1.25",
  "textAlign": "center",
  "whiteSpace": "nowrap",
  "verticalAlign": "middle",
  "userSelect": "none",
  "border": "1px solid transparent",
  "padding": ".5rem 1rem",
  "fontSize": "1rem",
  "borderRadius": ".25rem",
  "transition": "all .2s ease-in-out",
  "color": "#fff",

  "backgroundColor": "#0275d8",
  "borderColor": "#0275d8",

  outline: 'none'
};

var styleActive = {
  "backgroundColor": "#025aa5",
  "borderColor": "#01549b"
};

function Button(props) {
  return _react2.default.createElement(
    "button",
    { onClick: props.onClick, style: Object.assign({}, style, props.active ? styleActive : {}, props.style || {}) },
    props.children
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CdXR0b24uanN4Il0sIm5hbWVzIjpbIkJ1dHRvbiIsInN0eWxlIiwib3V0bGluZSIsInN0eWxlQWN0aXZlIiwicHJvcHMiLCJvbkNsaWNrIiwiT2JqZWN0IiwiYXNzaWduIiwiYWN0aXZlIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7O2tCQTJCd0JBLE07O0FBM0J4Qjs7Ozs7O0FBQ0EsSUFBTUMsUUFBUTtBQUNaLGFBQVcsY0FEQztBQUVaLGdCQUFjLEtBRkY7QUFHWixnQkFBYyxNQUhGO0FBSVosZUFBYSxRQUpEO0FBS1osZ0JBQWMsUUFMRjtBQU1aLG1CQUFpQixRQU5MO0FBT1osZ0JBQWMsTUFQRjtBQVFaLFlBQVUsdUJBUkU7QUFTWixhQUFXLFlBVEM7QUFVWixjQUFZLE1BVkE7QUFXWixrQkFBZ0IsUUFYSjtBQVlaLGdCQUFjLHFCQVpGO0FBYVosV0FBUyxNQWJHOztBQWVaLHFCQUFtQixTQWZQO0FBZ0JaLGlCQUFlLFNBaEJIOztBQWtCWkMsV0FBUztBQWxCRyxDQUFkOztBQXFCQSxJQUFNQyxjQUFjO0FBQ2xCLHFCQUFtQixTQUREO0FBRWxCLGlCQUFlO0FBRkcsQ0FBcEI7O0FBS2UsU0FBU0gsTUFBVCxDQUFpQkksS0FBakIsRUFBd0I7QUFDckMsU0FDRTtBQUFBO0FBQUEsTUFBUSxTQUFTQSxNQUFNQyxPQUF2QixFQUFnQyxPQUFPQyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQk4sS0FBbEIsRUFBeUJHLE1BQU1JLE1BQU4sR0FBZUwsV0FBZixHQUE2QixFQUF0RCxFQUEwREMsTUFBTUgsS0FBTixJQUFlLEVBQXpFLENBQXZDO0FBQ0dHLFVBQU1LO0FBRFQsR0FERjtBQUtEIiwiZmlsZSI6IkJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gIFwiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wiLFxyXG4gIFwiZm9udFdlaWdodFwiOiBcIjQwMFwiLFxyXG4gIFwibGluZUhlaWdodFwiOiBcIjEuMjVcIixcclxuICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxyXG4gIFwid2hpdGVTcGFjZVwiOiBcIm5vd3JhcFwiLFxyXG4gIFwidmVydGljYWxBbGlnblwiOiBcIm1pZGRsZVwiLFxyXG4gIFwidXNlclNlbGVjdFwiOiBcIm5vbmVcIixcclxuICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCB0cmFuc3BhcmVudFwiLFxyXG4gIFwicGFkZGluZ1wiOiBcIi41cmVtIDFyZW1cIixcclxuICBcImZvbnRTaXplXCI6IFwiMXJlbVwiLFxyXG4gIFwiYm9yZGVyUmFkaXVzXCI6IFwiLjI1cmVtXCIsXHJcbiAgXCJ0cmFuc2l0aW9uXCI6IFwiYWxsIC4ycyBlYXNlLWluLW91dFwiLFxyXG4gIFwiY29sb3JcIjogXCIjZmZmXCIsXHJcblxyXG4gIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAyNzVkOFwiLFxyXG4gIFwiYm9yZGVyQ29sb3JcIjogXCIjMDI3NWQ4XCIsXHJcblxyXG4gIG91dGxpbmU6ICdub25lJyxcclxufTtcclxuXHJcbmNvbnN0IHN0eWxlQWN0aXZlID0ge1xyXG4gIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAyNWFhNVwiLFxyXG4gIFwiYm9yZGVyQ29sb3JcIjogXCIjMDE1NDliXCJcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uIChwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9IHN0eWxlPXtPYmplY3QuYXNzaWduKHt9LCBzdHlsZSwgcHJvcHMuYWN0aXZlID8gc3R5bGVBY3RpdmUgOiB7fSwgcHJvcHMuc3R5bGUgfHwge30sKX0+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvYnV0dG9uPlxyXG4gIClcclxufVxyXG4iXX0=