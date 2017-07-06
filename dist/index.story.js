'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import centered from '@kadira/react-storybook-decorator-centered';

(0, _storybook.storiesOf)('First Component', module)
// .addDecorator(centered)
.add('First Button', function () {
  return _react2.default.createElement(
    'button',
    null,
    'Click me'
  );
}); // tslint:disable-line


(0, _storybook.storiesOf)('Second Component', module)
//   // .addDecorator(centered)
.addDecorator((0, _index2.default)(_config2.default)).add('Second Button', function () {
  return _react2.default.createElement(
    'button',
    null,
    'Click me'
  );
}).add('Div', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: 100, border: '1px red solid' } },
    'Click me'
  );
});
//   ;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5zdG9yeS5qc3giXSwibmFtZXMiOlsibW9kdWxlIiwiYWRkIiwiYWRkRGVjb3JhdG9yIiwid2lkdGgiLCJib3JkZXIiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7QUFHQTs7OztBQUNBOzs7Ozs7QUFIQTs7QUFLQSwwQkFBVSxpQkFBVixFQUE2QkEsTUFBN0I7QUFDRTtBQURGLENBRUdDLEdBRkgsQ0FFTyxjQUZQLEVBRXVCO0FBQUEsU0FBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU47QUFBQSxDQUZ2QixFLENBUDJCOzs7QUFhM0IsMEJBQVUsa0JBQVYsRUFBOEJELE1BQTlCO0FBQ0E7QUFEQSxDQUVHRSxZQUZILENBRWdCLHNDQUZoQixFQUdHRCxHQUhILENBR08sZUFIUCxFQUd3QjtBQUFBLFNBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOO0FBQUEsQ0FIeEIsRUFJR0EsR0FKSCxDQUlPLEtBSlAsRUFJYztBQUFBLFNBQU07QUFBQTtBQUFBLE1BQUssT0FBTyxFQUFDRSxPQUFPLEdBQVIsRUFBYUMsUUFBUSxlQUFyQixFQUFaO0FBQUE7QUFBQSxHQUFOO0FBQUEsQ0FKZDtBQUtBIiwiZmlsZSI6ImluZGV4LnN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JzsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxyXG5pbXBvcnQgeyBzdG9yaWVzT2YgfSBmcm9tICdAa2FkaXJhL3N0b3J5Ym9vayc7XHJcbi8vIGltcG9ydCBjZW50ZXJlZCBmcm9tICdAa2FkaXJhL3JlYWN0LXN0b3J5Ym9vay1kZWNvcmF0b3ItY2VudGVyZWQnO1xyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XHJcbmltcG9ydCBiYWNrZ3JvdW5kcyBmcm9tICcuL2luZGV4JztcclxuXHJcbnN0b3JpZXNPZignRmlyc3QgQ29tcG9uZW50JywgbW9kdWxlKVxyXG4gIC8vIC5hZGREZWNvcmF0b3IoY2VudGVyZWQpXHJcbiAgLmFkZCgnRmlyc3QgQnV0dG9uJywgKCkgPT4gPGJ1dHRvbj5DbGljayBtZTwvYnV0dG9uPilcclxuICA7XHJcblxyXG5cclxuc3Rvcmllc09mKCdTZWNvbmQgQ29tcG9uZW50JywgbW9kdWxlKVxyXG4vLyAgIC8vIC5hZGREZWNvcmF0b3IoY2VudGVyZWQpXHJcbiAgLmFkZERlY29yYXRvcihiYWNrZ3JvdW5kcyhjb25maWcpKVxyXG4gIC5hZGQoJ1NlY29uZCBCdXR0b24nLCAoKSA9PiA8YnV0dG9uPkNsaWNrIG1lPC9idXR0b24+IClcclxuICAuYWRkKCdEaXYnLCAoKSA9PiA8ZGl2IHN0eWxlPXt7d2lkdGg6IDEwMCwgYm9yZGVyOiAnMXB4IHJlZCBzb2xpZCd9fT5DbGljayBtZTwvZGl2PiApXHJcbi8vICAgO1xyXG4iXX0=