'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = CropMarks;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CropMark = require('./CropMark');

var _CropMark2 = _interopRequireDefault(_CropMark);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CropMarks(_ref) {
  var _ref$width = _ref.width;
  var width = _ref$width === undefined ? 'auto' : _ref$width;
  var _ref$height = _ref.height;
  var height = _ref$height === undefined ? 'auto' : _ref$height;
  var background = _ref.background;
  var cropMarkColor = _ref.cropMarkColor;
  var _ref$cropMarksVisible = _ref.cropMarksVisible;
  var cropMarksVisible = _ref$cropMarksVisible === undefined ? true : _ref$cropMarksVisible;
  var border = _ref.border;
  var children = _ref.children;
  var _ref$style = _ref.style;
  var style = _ref$style === undefined ? {} : _ref$style;


  var styles = {
    // display: 'flex',
    position: 'relative',
    boxSizing: 'border-box',
    background: background,
    width: width,
    height: height,
    border: border
  };
  var props = {
    color: cropMarkColor
  };

  if (cropMarksVisible) {
    return _react2.default.createElement(
      'div',
      { style: Object.assign({}, styles, style) },
      children,
      _react2.default.createElement(_CropMark2.default, _extends({}, props, { edge: 'topLeft' })),
      _react2.default.createElement(_CropMark2.default, _extends({}, props, { edge: 'topRight' })),
      _react2.default.createElement(_CropMark2.default, _extends({}, props, { edge: 'bottomLeft' })),
      _react2.default.createElement(_CropMark2.default, _extends({}, props, { edge: 'bottomRight' }))
    );
  } else {
    return _react2.default.createElement(
      'div',
      { style: styles },
      children
    );
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Dcm9wTWFya3MuanN4Il0sIm5hbWVzIjpbIkNyb3BNYXJrcyIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsImNyb3BNYXJrQ29sb3IiLCJjcm9wTWFya3NWaXNpYmxlIiwiYm9yZGVyIiwiY2hpbGRyZW4iLCJzdHlsZSIsInN0eWxlcyIsInBvc2l0aW9uIiwiYm94U2l6aW5nIiwicHJvcHMiLCJjb2xvciIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7a0JBR3dCQSxTOztBQUh4Qjs7OztBQUNBOzs7Ozs7QUFFZSxTQUFTQSxTQUFULE9BU1o7QUFBQSx3QkFSREMsS0FRQztBQUFBLE1BUkRBLEtBUUMsOEJBUk8sTUFRUDtBQUFBLHlCQVBEQyxNQU9DO0FBQUEsTUFQREEsTUFPQywrQkFQUSxNQU9SO0FBQUEsTUFOREMsVUFNQyxRQU5EQSxVQU1DO0FBQUEsTUFMREMsYUFLQyxRQUxEQSxhQUtDO0FBQUEsbUNBSkRDLGdCQUlDO0FBQUEsTUFKREEsZ0JBSUMseUNBSmtCLElBSWxCO0FBQUEsTUFIREMsTUFHQyxRQUhEQSxNQUdDO0FBQUEsTUFGREMsUUFFQyxRQUZEQSxRQUVDO0FBQUEsd0JBRERDLEtBQ0M7QUFBQSxNQUREQSxLQUNDLDhCQURPLEVBQ1A7OztBQUVELE1BQU1DLFNBQVU7QUFDZDtBQUNBQyxjQUFVLFVBRkk7QUFHZEMsZUFBVyxZQUhHO0FBSWRSLDBCQUpjO0FBS2RGLGdCQUxjO0FBTWRDLGtCQU5jO0FBT2RJO0FBUGMsR0FBaEI7QUFTQSxNQUFNTSxRQUFRO0FBQ1pDLFdBQU9UO0FBREssR0FBZDs7QUFJQSxNQUFJQyxnQkFBSixFQUFzQjtBQUNwQixXQUNFO0FBQUE7QUFBQSxRQUFLLE9BQU9TLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCTixNQUFsQixFQUEwQkQsS0FBMUIsQ0FBWjtBQUNHRCxjQURIO0FBRUUscUVBQWVLLEtBQWYsSUFBdUIsTUFBSyxTQUE1QixJQUZGO0FBR0UscUVBQWVBLEtBQWYsSUFBdUIsTUFBSyxVQUE1QixJQUhGO0FBSUUscUVBQWVBLEtBQWYsSUFBdUIsTUFBSyxZQUE1QixJQUpGO0FBS0UscUVBQWVBLEtBQWYsSUFBdUIsTUFBSyxhQUE1QjtBQUxGLEtBREY7QUFTRCxHQVZELE1BVU87QUFDTCxXQUNFO0FBQUE7QUFBQSxRQUFLLE9BQU9ILE1BQVo7QUFDR0Y7QUFESCxLQURGO0FBS0Q7QUFFRiIsImZpbGUiOiJDcm9wTWFya3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ3JvcE1hcmsgZnJvbSAnLi9Dcm9wTWFyayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcm9wTWFya3MgKHtcclxuICB3aWR0aCA9ICdhdXRvJyxcclxuICBoZWlnaHQgPSAnYXV0bycsXHJcbiAgYmFja2dyb3VuZCxcclxuICBjcm9wTWFya0NvbG9yLFxyXG4gIGNyb3BNYXJrc1Zpc2libGUgPSB0cnVlLFxyXG4gIGJvcmRlcixcclxuICBjaGlsZHJlbixcclxuICBzdHlsZSA9IHt9LFxyXG59KSB7XHJcblxyXG4gIGNvbnN0IHN0eWxlcyA9ICB7XHJcbiAgICAvLyBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG4gICAgYmFja2dyb3VuZCxcclxuICAgIHdpZHRoLFxyXG4gICAgaGVpZ2h0LFxyXG4gICAgYm9yZGVyLFxyXG4gIH07XHJcbiAgY29uc3QgcHJvcHMgPSB7XHJcbiAgICBjb2xvcjogY3JvcE1hcmtDb2xvcixcclxuICB9O1xyXG5cclxuICBpZiAoY3JvcE1hcmtzVmlzaWJsZSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17T2JqZWN0LmFzc2lnbih7fSwgc3R5bGVzLCBzdHlsZSl9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8Q3JvcE1hcmsgeyAuLi5wcm9wcyB9IGVkZ2U9J3RvcExlZnQnIC8+XHJcbiAgICAgICAgPENyb3BNYXJrIHsgLi4ucHJvcHMgfSBlZGdlPSd0b3BSaWdodCcgLz5cclxuICAgICAgICA8Q3JvcE1hcmsgeyAuLi5wcm9wcyB9IGVkZ2U9J2JvdHRvbUxlZnQnIC8+XHJcbiAgICAgICAgPENyb3BNYXJrIHsgLi4ucHJvcHMgfSBlZGdlPSdib3R0b21SaWdodCcgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXN9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbn1cclxuIl19