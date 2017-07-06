'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CropMark;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CropMark(_ref) {
  var edge = _ref.edge;
  var length = _ref.length;
  var _ref$offset = _ref.offset;
  var offset = _ref$offset === undefined ? 5 : _ref$offset;
  var _ref$color = _ref.color;
  var color = _ref$color === undefined ? 'rgba(0, 0, 0, 0.15)' : _ref$color;
  var _ref$size = _ref.size;
  var size = _ref$size === undefined ? 20 : _ref$size;

  var base = void 0;
  var xAxis = void 0;
  var yAxis = void 0;
  // const s = -(size - 1);
  var s = -(size - 1);
  switch (edge) {
    case 'topLeft':
      base = {
        top: s,
        right: 'auto',
        bottom: 'auto',
        left: s
      };
      xAxis = {
        top: 'null',
        right: offset,
        bottom: 0,
        left: 0
      };
      yAxis = {
        top: 0,
        right: 0,
        bottom: offset,
        left: 'auto'
        // top: 'null',
        // right: 0,
        // bottom: offset,
        // left: 'auto',
      };
      break;

    case 'topRight':
      base = {
        top: s,
        right: s,
        bottom: 'auto',
        left: 'auto'
      };
      xAxis = {
        top: 'auto',
        right: 0,
        bottom: 0,
        left: offset
      };
      yAxis = {
        top: 0,
        right: 'auto',
        bottom: offset,
        left: 0
      };
      break;

    case 'bottomLeft':
      base = {
        top: 'auto',
        right: 'auto',
        bottom: s,
        left: s
      };
      xAxis = {
        top: 0,
        right: offset,
        bottom: 'auto',
        left: 0
      };
      yAxis = {
        top: offset,
        right: 0,
        bottom: 0,
        left: 'auto'
      };
      break;

    case 'bottomRight':
      base = {
        top: 'null',
        right: s,
        bottom: s,
        left: 'auto'
      };
      xAxis = {
        top: 0,
        right: 0,
        bottom: 'auto',
        left: offset
      };
      yAxis = {
        top: offset,
        right: 'auto',
        bottom: 0,
        left: 0
      };
      break;

    default: // Ignore.
  }

  base.position = 'absolute';
  xAxis.position = 'absolute';
  yAxis.position = 'absolute';
  base.width = size;
  base.height = size;
  xAxis.borderBottom = 'solid 1px ' + color;
  yAxis.borderRight = 'solid 1px ' + color;
  var styles = { base: base, xAxis: xAxis, yAxis: yAxis };

  var el = void 0;
  if (size > 0) {
    el = _react2.default.createElement(
      'div',
      { style: styles.base },
      _react2.default.createElement('div', { style: styles.xAxis }),
      _react2.default.createElement('div', { style: styles.yAxis })
    );
  }
  return el;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Dcm9wTWFyay5qc3giXSwibmFtZXMiOlsiQ3JvcE1hcmsiLCJlZGdlIiwibGVuZ3RoIiwib2Zmc2V0IiwiY29sb3IiLCJzaXplIiwiYmFzZSIsInhBeGlzIiwieUF4aXMiLCJzIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlckJvdHRvbSIsImJvcmRlclJpZ2h0Iiwic3R5bGVzIiwiZWwiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUV3QkEsUTs7QUFGeEI7Ozs7OztBQUVlLFNBQVNBLFFBQVQsT0FNWjtBQUFBLE1BTERDLElBS0MsUUFMREEsSUFLQztBQUFBLE1BSkRDLE1BSUMsUUFKREEsTUFJQztBQUFBLHlCQUhEQyxNQUdDO0FBQUEsTUFIREEsTUFHQywrQkFIUSxDQUdSO0FBQUEsd0JBRkRDLEtBRUM7QUFBQSxNQUZEQSxLQUVDLDhCQUZPLHFCQUVQO0FBQUEsdUJBRERDLElBQ0M7QUFBQSxNQUREQSxJQUNDLDZCQURNLEVBQ047O0FBQ0QsTUFBSUMsYUFBSjtBQUNBLE1BQUlDLGNBQUo7QUFDQSxNQUFJQyxjQUFKO0FBQ0E7QUFDQSxNQUFNQyxJQUFJLEVBQUVKLE9BQU8sQ0FBVCxDQUFWO0FBQ0EsVUFBUUosSUFBUjtBQUNFLFNBQUssU0FBTDtBQUNFSyxhQUFPO0FBQ0xJLGFBQUtELENBREE7QUFFTEUsZUFBTyxNQUZGO0FBR0xDLGdCQUFRLE1BSEg7QUFJTEMsY0FBTUo7QUFKRCxPQUFQO0FBTUFGLGNBQVE7QUFDTkcsYUFBSyxNQURDO0FBRU5DLGVBQU9SLE1BRkQ7QUFHTlMsZ0JBQVEsQ0FIRjtBQUlOQyxjQUFNO0FBSkEsT0FBUjtBQU1BTCxjQUFRO0FBQ05FLGFBQUssQ0FEQztBQUVOQyxlQUFPLENBRkQ7QUFHTkMsZ0JBQVFULE1BSEY7QUFJTlUsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBUk0sT0FBUjtBQVVBOztBQUVGLFNBQUssVUFBTDtBQUNFUCxhQUFPO0FBQ0xJLGFBQUtELENBREE7QUFFTEUsZUFBT0YsQ0FGRjtBQUdMRyxnQkFBUSxNQUhIO0FBSUxDLGNBQU07QUFKRCxPQUFQO0FBTUFOLGNBQVE7QUFDTkcsYUFBSyxNQURDO0FBRU5DLGVBQU8sQ0FGRDtBQUdOQyxnQkFBUSxDQUhGO0FBSU5DLGNBQU1WO0FBSkEsT0FBUjtBQU1BSyxjQUFRO0FBQ05FLGFBQUssQ0FEQztBQUVOQyxlQUFPLE1BRkQ7QUFHTkMsZ0JBQVFULE1BSEY7QUFJTlUsY0FBTTtBQUpBLE9BQVI7QUFNQTs7QUFFRixTQUFLLFlBQUw7QUFDRVAsYUFBTztBQUNMSSxhQUFLLE1BREE7QUFFTEMsZUFBTyxNQUZGO0FBR0xDLGdCQUFRSCxDQUhIO0FBSUxJLGNBQU1KO0FBSkQsT0FBUDtBQU1BRixjQUFRO0FBQ05HLGFBQUssQ0FEQztBQUVOQyxlQUFPUixNQUZEO0FBR05TLGdCQUFRLE1BSEY7QUFJTkMsY0FBTTtBQUpBLE9BQVI7QUFNQUwsY0FBUTtBQUNORSxhQUFLUCxNQURDO0FBRU5RLGVBQU8sQ0FGRDtBQUdOQyxnQkFBUSxDQUhGO0FBSU5DLGNBQU07QUFKQSxPQUFSO0FBTUE7O0FBRUYsU0FBSyxhQUFMO0FBQ0VQLGFBQU87QUFDTEksYUFBSyxNQURBO0FBRUxDLGVBQU9GLENBRkY7QUFHTEcsZ0JBQVFILENBSEg7QUFJTEksY0FBTTtBQUpELE9BQVA7QUFNQU4sY0FBUTtBQUNORyxhQUFLLENBREM7QUFFTkMsZUFBTyxDQUZEO0FBR05DLGdCQUFRLE1BSEY7QUFJTkMsY0FBTVY7QUFKQSxPQUFSO0FBTUFLLGNBQVE7QUFDTkUsYUFBS1AsTUFEQztBQUVOUSxlQUFPLE1BRkQ7QUFHTkMsZ0JBQVEsQ0FIRjtBQUlOQyxjQUFNO0FBSkEsT0FBUjtBQU1BOztBQUVGLFlBekZGLENBeUZXO0FBekZYOztBQTRGQVAsT0FBS1EsUUFBTCxHQUFnQixVQUFoQjtBQUNBUCxRQUFNTyxRQUFOLEdBQWlCLFVBQWpCO0FBQ0FOLFFBQU1NLFFBQU4sR0FBaUIsVUFBakI7QUFDQVIsT0FBS1MsS0FBTCxHQUFhVixJQUFiO0FBQ0FDLE9BQUtVLE1BQUwsR0FBY1gsSUFBZDtBQUNBRSxRQUFNVSxZQUFOLGtCQUFtQ2IsS0FBbkM7QUFDQUksUUFBTVUsV0FBTixrQkFBa0NkLEtBQWxDO0FBQ0EsTUFBTWUsU0FBUyxFQUFFYixVQUFGLEVBQVFDLFlBQVIsRUFBZUMsWUFBZixFQUFmOztBQUdBLE1BQUlZLFdBQUo7QUFDQSxNQUFJZixPQUFPLENBQVgsRUFBYztBQUNaZSxTQUNFO0FBQUE7QUFBQSxRQUFLLE9BQVFELE9BQU9iLElBQXBCO0FBQ0UsNkNBQUssT0FBUWEsT0FBT1osS0FBcEIsR0FERjtBQUVFLDZDQUFLLE9BQVFZLE9BQU9YLEtBQXBCO0FBRkYsS0FERjtBQU1EO0FBQ0QsU0FBT1ksRUFBUDtBQUVEIiwiZmlsZSI6IkNyb3BNYXJrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyb3BNYXJrKHtcclxuICBlZGdlLFxyXG4gIGxlbmd0aCxcclxuICBvZmZzZXQgPSA1LFxyXG4gIGNvbG9yID0gJ3JnYmEoMCwgMCwgMCwgMC4xNSknLFxyXG4gIHNpemUgPSAyMCxcclxufSkge1xyXG4gIGxldCBiYXNlO1xyXG4gIGxldCB4QXhpcztcclxuICBsZXQgeUF4aXM7XHJcbiAgLy8gY29uc3QgcyA9IC0oc2l6ZSAtIDEpO1xyXG4gIGNvbnN0IHMgPSAtKHNpemUgLSAxKTtcclxuICBzd2l0Y2ggKGVkZ2UpIHtcclxuICAgIGNhc2UgJ3RvcExlZnQnOlxyXG4gICAgICBiYXNlID0ge1xyXG4gICAgICAgIHRvcDogcyxcclxuICAgICAgICByaWdodDogJ2F1dG8nLFxyXG4gICAgICAgIGJvdHRvbTogJ2F1dG8nLFxyXG4gICAgICAgIGxlZnQ6IHNcclxuICAgICAgfTtcclxuICAgICAgeEF4aXMgPSB7XHJcbiAgICAgICAgdG9wOiAnbnVsbCcsXHJcbiAgICAgICAgcmlnaHQ6IG9mZnNldCxcclxuICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgfTtcclxuICAgICAgeUF4aXMgPSB7XHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgIGJvdHRvbTogb2Zmc2V0LFxyXG4gICAgICAgIGxlZnQ6ICdhdXRvJyxcclxuICAgICAgICAvLyB0b3A6ICdudWxsJyxcclxuICAgICAgICAvLyByaWdodDogMCxcclxuICAgICAgICAvLyBib3R0b206IG9mZnNldCxcclxuICAgICAgICAvLyBsZWZ0OiAnYXV0bycsXHJcbiAgICAgIH07XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgJ3RvcFJpZ2h0JzpcclxuICAgICAgYmFzZSA9IHtcclxuICAgICAgICB0b3A6IHMsXHJcbiAgICAgICAgcmlnaHQ6IHMsXHJcbiAgICAgICAgYm90dG9tOiAnYXV0bycsXHJcbiAgICAgICAgbGVmdDogJ2F1dG8nLFxyXG4gICAgICB9O1xyXG4gICAgICB4QXhpcyA9IHtcclxuICAgICAgICB0b3A6ICdhdXRvJyxcclxuICAgICAgICByaWdodDogMCxcclxuICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgbGVmdDogb2Zmc2V0LFxyXG4gICAgICB9O1xyXG4gICAgICB5QXhpcyA9IHtcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgcmlnaHQ6ICdhdXRvJyxcclxuICAgICAgICBib3R0b206IG9mZnNldCxcclxuICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICB9O1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICdib3R0b21MZWZ0JzpcclxuICAgICAgYmFzZSA9IHtcclxuICAgICAgICB0b3A6ICdhdXRvJyxcclxuICAgICAgICByaWdodDogJ2F1dG8nLFxyXG4gICAgICAgIGJvdHRvbTogcyxcclxuICAgICAgICBsZWZ0OiBzLFxyXG4gICAgICB9O1xyXG4gICAgICB4QXhpcyA9IHtcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgcmlnaHQ6IG9mZnNldCxcclxuICAgICAgICBib3R0b206ICdhdXRvJyxcclxuICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICB9O1xyXG4gICAgICB5QXhpcyA9IHtcclxuICAgICAgICB0b3A6IG9mZnNldCxcclxuICAgICAgICByaWdodDogMCxcclxuICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgbGVmdDogJ2F1dG8nLFxyXG4gICAgICB9O1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICdib3R0b21SaWdodCc6XHJcbiAgICAgIGJhc2UgPSB7XHJcbiAgICAgICAgdG9wOiAnbnVsbCcsXHJcbiAgICAgICAgcmlnaHQ6IHMsXHJcbiAgICAgICAgYm90dG9tOiBzLFxyXG4gICAgICAgIGxlZnQ6ICdhdXRvJyxcclxuICAgICAgfTtcclxuICAgICAgeEF4aXMgPSB7XHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgIGJvdHRvbTogJ2F1dG8nLFxyXG4gICAgICAgIGxlZnQ6IG9mZnNldCxcclxuICAgICAgfTtcclxuICAgICAgeUF4aXMgPSB7XHJcbiAgICAgICAgdG9wOiBvZmZzZXQsXHJcbiAgICAgICAgcmlnaHQ6ICdhdXRvJyxcclxuICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgfTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgZGVmYXVsdDogLy8gSWdub3JlLlxyXG4gIH1cclxuXHJcbiAgYmFzZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgeEF4aXMucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gIHlBeGlzLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICBiYXNlLndpZHRoID0gc2l6ZTtcclxuICBiYXNlLmhlaWdodCA9IHNpemU7XHJcbiAgeEF4aXMuYm9yZGVyQm90dG9tID0gYHNvbGlkIDFweCAkeyBjb2xvciB9YDtcclxuICB5QXhpcy5ib3JkZXJSaWdodCA9IGBzb2xpZCAxcHggJHsgY29sb3IgfWA7XHJcbiAgY29uc3Qgc3R5bGVzID0geyBiYXNlLCB4QXhpcywgeUF4aXMgfTtcclxuXHJcblxyXG4gIGxldCBlbDtcclxuICBpZiAoc2l6ZSA+IDApIHtcclxuICAgIGVsID0gKFxyXG4gICAgICA8ZGl2IHN0eWxlPXsgc3R5bGVzLmJhc2UgfT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXsgc3R5bGVzLnhBeGlzIH0gLz5cclxuICAgICAgICA8ZGl2IHN0eWxlPXsgc3R5bGVzLnlBeGlzIH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gZWw7XHJcblxyXG59XHJcbiJdfQ==