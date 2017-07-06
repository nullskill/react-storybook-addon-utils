'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// tslint:disable-line

var style = {
  swatches: {
    textAlign: 'center',
    padding: '0',
    border: '1px solid rgba(0,0,0,0.1)',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'inline-block',
    width: '175px',
    verticalAlign: 'top',
    wordWrap: 'break-word'
  },
  swatch: {
    height: '80px',
    borderRadius: '4px 4px 0 0',
    transition: 'opacity 0.25s ease-in-out',
    borderBottom: '1px solid rgba(0,0,0,0.1)'
  },
  listStyle: { listStyle: 'none' },
  pushBottom: { marginBottom: '10px' },
  pushLeft: { marginLeft: '10px' },
  soft: { paddingLeft: '10px', paddingRight: '10px' },
  hard: { padding: '0' },
  flush: { margin: '0' },
  font: {
    fontFamily: "-apple-system, '.SFNSText-Regular', 'San Francisco', Roboto, 'Segoe UI', 'Helvetica Neue', 'Lucida Grande', sans-serif",
    fontSize: '14px'
  }
};

exports.default = function (_ref) {
  var root = _ref.root;
  var name = _ref.name;
  var value = _ref.value;
  var _onClick = _ref.onClick;
  var active = _ref.active;
  return _react2.default.createElement(
    'div',
    {
      style: Object.assign({}, style.swatches, style.listStyle, style.hard),
      onClick: function onClick() {
        return _onClick(value);
      }
    },
    _react2.default.createElement('div', {
      style: Object.assign({}, style.swatch, _extends({
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }, root))
    }),
    _react2.default.createElement(
      'div',
      { style: Object.assign({}, style.listStyle, style.soft) },
      name && _react2.default.createElement(
        'h4',
        { style: Object.assign({ float: 'left', fontWeight: 'bold' }, style.font) },
        name
      ),
      _react2.default.createElement(
        'h4',
        { style: Object.assign({ float: 'right', fontWeight: 'normal' }, style.font) },
        active ? 'ACTIVE' : ''
      )
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Td2F0Y2guanN4Il0sIm5hbWVzIjpbInN0eWxlIiwic3dhdGNoZXMiLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiY3Vyc29yIiwiZGlzcGxheSIsIndpZHRoIiwidmVydGljYWxBbGlnbiIsIndvcmRXcmFwIiwic3dhdGNoIiwiaGVpZ2h0IiwidHJhbnNpdGlvbiIsImJvcmRlckJvdHRvbSIsImxpc3RTdHlsZSIsInB1c2hCb3R0b20iLCJtYXJnaW5Cb3R0b20iLCJwdXNoTGVmdCIsIm1hcmdpbkxlZnQiLCJzb2Z0IiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJoYXJkIiwiZmx1c2giLCJtYXJnaW4iLCJmb250IiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwicm9vdCIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2xpY2siLCJhY3RpdmUiLCJPYmplY3QiLCJhc3NpZ24iLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImZsb2F0IiwiZm9udFdlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7O0FBQTJCOztBQUUzQixJQUFNQSxRQUFRO0FBQ1pDLFlBQVU7QUFDUkMsZUFBVyxRQURIO0FBRVJDLGFBQVMsR0FGRDtBQUdSQyxZQUFRLDJCQUhBO0FBSVJDLGtCQUFjLEtBSk47QUFLUkMsWUFBUSxTQUxBO0FBTVJDLGFBQVMsY0FORDtBQU9SQyxXQUFPLE9BUEM7QUFRUkMsbUJBQWUsS0FSUDtBQVNSQyxjQUFVO0FBVEYsR0FERTtBQVlaQyxVQUFRO0FBQ05DLFlBQVEsTUFERjtBQUVOUCxrQkFBYyxhQUZSO0FBR05RLGdCQUFZLDJCQUhOO0FBSU5DLGtCQUFjO0FBSlIsR0FaSTtBQWtCWkMsYUFBVyxFQUFFQSxXQUFXLE1BQWIsRUFsQkM7QUFtQlpDLGNBQVksRUFBRUMsY0FBYyxNQUFoQixFQW5CQTtBQW9CWkMsWUFBVSxFQUFFQyxZQUFZLE1BQWQsRUFwQkU7QUFxQlpDLFFBQU0sRUFBRUMsYUFBYSxNQUFmLEVBQXVCQyxjQUFjLE1BQXJDLEVBckJNO0FBc0JaQyxRQUFNLEVBQUVwQixTQUFTLEdBQVgsRUF0Qk07QUF1QlpxQixTQUFPLEVBQUVDLFFBQVEsR0FBVixFQXZCSztBQXdCWkMsUUFBTTtBQUNKQyxnQkFBWSx3SEFEUjtBQUVKQyxjQUFVO0FBRk47QUF4Qk0sQ0FBZDs7a0JBK0JlO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsTUFBU0MsSUFBVCxRQUFTQSxJQUFUO0FBQUEsTUFBZUMsS0FBZixRQUFlQSxLQUFmO0FBQUEsTUFBc0JDLFFBQXRCLFFBQXNCQSxPQUF0QjtBQUFBLE1BQStCQyxNQUEvQixRQUErQkEsTUFBL0I7QUFBQSxTQUNiO0FBQUE7QUFBQTtBQUNFLGFBQU9DLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCbkMsTUFBTUMsUUFBeEIsRUFBa0NELE1BQU1lLFNBQXhDLEVBQW1EZixNQUFNdUIsSUFBekQsQ0FEVDtBQUVFLGVBQVM7QUFBQSxlQUFNUyxTQUFRRCxLQUFSLENBQU47QUFBQTtBQUZYO0FBSUU7QUFDRSxhQUFPRyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQm5DLE1BQU1XLE1BQXhCO0FBQ0x5Qix3QkFBZ0IsT0FEWDtBQUVMQyw0QkFBb0I7QUFGZixTQUdGUixJQUhFO0FBRFQsTUFKRjtBQVdFO0FBQUE7QUFBQSxRQUFLLE9BQU9LLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCbkMsTUFBTWUsU0FBeEIsRUFBbUNmLE1BQU1vQixJQUF6QyxDQUFaO0FBQ0dVLGNBQ0M7QUFBQTtBQUFBLFVBQUksT0FBT0ksT0FBT0MsTUFBUCxDQUFjLEVBQUVHLE9BQU8sTUFBVCxFQUFpQkMsWUFBWSxNQUE3QixFQUFkLEVBQXFEdkMsTUFBTTBCLElBQTNELENBQVg7QUFDR0k7QUFESCxPQUZKO0FBTUU7QUFBQTtBQUFBLFVBQUksT0FBT0ksT0FBT0MsTUFBUCxDQUFjLEVBQUVHLE9BQU8sT0FBVCxFQUFrQkMsWUFBWSxRQUE5QixFQUFkLEVBQXdEdkMsTUFBTTBCLElBQTlELENBQVg7QUFDR08saUJBQVMsUUFBVCxHQUFvQjtBQUR2QjtBQU5GO0FBWEYsR0FEYTtBQUFBLEMiLCJmaWxlIjoiU3dhdGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JzsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxyXG5cclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgc3dhdGNoZXM6IHtcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBwYWRkaW5nOiAnMCcsXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgcmdiYSgwLDAsMCwwLjEpJyxcclxuICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgd2lkdGg6ICcxNzVweCcsXHJcbiAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcclxuICAgIHdvcmRXcmFwOiAnYnJlYWstd29yZCcsXHJcbiAgfSxcclxuICBzd2F0Y2g6IHtcclxuICAgIGhlaWdodDogJzgwcHgnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNHB4IDRweCAwIDAnLFxyXG4gICAgdHJhbnNpdGlvbjogJ29wYWNpdHkgMC4yNXMgZWFzZS1pbi1vdXQnLFxyXG4gICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xKScsXHJcbiAgfSxcclxuICBsaXN0U3R5bGU6IHsgbGlzdFN0eWxlOiAnbm9uZScgfSxcclxuICBwdXNoQm90dG9tOiB7IG1hcmdpbkJvdHRvbTogJzEwcHgnIH0sXHJcbiAgcHVzaExlZnQ6IHsgbWFyZ2luTGVmdDogJzEwcHgnIH0sXHJcbiAgc29mdDogeyBwYWRkaW5nTGVmdDogJzEwcHgnLCBwYWRkaW5nUmlnaHQ6ICcxMHB4JyB9LFxyXG4gIGhhcmQ6IHsgcGFkZGluZzogJzAnIH0sXHJcbiAgZmx1c2g6IHsgbWFyZ2luOiAnMCcgfSxcclxuICBmb250OiB7XHJcbiAgICBmb250RmFtaWx5OiBcIi1hcHBsZS1zeXN0ZW0sICcuU0ZOU1RleHQtUmVndWxhcicsICdTYW4gRnJhbmNpc2NvJywgUm9ib3RvLCAnU2Vnb2UgVUknLCAnSGVsdmV0aWNhIE5ldWUnLCAnTHVjaWRhIEdyYW5kZScsIHNhbnMtc2VyaWZcIixcclxuICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgfSxcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeyByb290LCBuYW1lLCB2YWx1ZSwgb25DbGljaywgYWN0aXZlIH0pID0+IChcclxuICA8ZGl2XHJcbiAgICBzdHlsZT17T2JqZWN0LmFzc2lnbih7fSwgc3R5bGUuc3dhdGNoZXMsIHN0eWxlLmxpc3RTdHlsZSwgc3R5bGUuaGFyZCl9XHJcbiAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKHZhbHVlKX1cclxuICA+XHJcbiAgICA8ZGl2XHJcbiAgICAgIHN0eWxlPXtPYmplY3QuYXNzaWduKHt9LCBzdHlsZS5zd2F0Y2gsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgICAgIC4uLnJvb3QsXHJcbiAgICAgIH0pfVxyXG4gICAgLz5cclxuICAgIDxkaXYgc3R5bGU9e09iamVjdC5hc3NpZ24oe30sIHN0eWxlLmxpc3RTdHlsZSwgc3R5bGUuc29mdCl9PlxyXG4gICAgICB7bmFtZSAmJiAoXHJcbiAgICAgICAgPGg0IHN0eWxlPXtPYmplY3QuYXNzaWduKHsgZmxvYXQ6ICdsZWZ0JywgZm9udFdlaWdodDogJ2JvbGQnIH0sIHN0eWxlLmZvbnQpfT5cclxuICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgIDwvaDQ+XHJcbiAgICAgICl9XHJcbiAgICAgIDxoNCBzdHlsZT17T2JqZWN0LmFzc2lnbih7IGZsb2F0OiAncmlnaHQnLCBmb250V2VpZ2h0OiAnbm9ybWFsJyB9LCBzdHlsZS5mb250KX0+XHJcbiAgICAgICAge2FjdGl2ZSA/ICdBQ1RJVkUnIDogJyd9XHJcbiAgICAgIDwvaDQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxuIl19