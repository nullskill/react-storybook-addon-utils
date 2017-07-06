'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybookAddons = require('@kadira/storybook-addons');

var _storybookAddons2 = _interopRequireDefault(_storybookAddons);

var _UtilsPanel = require('./UtilsPanel');

var _UtilsPanel2 = _interopRequireDefault(_UtilsPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// tslint:disable-line
var ADDON_ID = 'storybook-addon-utils';
var PANEL_ID = ADDON_ID + '/utils-panel';

_storybookAddons2.default.register(ADDON_ID, function (api) {
  var channel = _storybookAddons2.default.getChannel();
  _storybookAddons2.default.addPanel(PANEL_ID, {
    title: 'Utils',
    render: function render() {
      return _react2.default.createElement(_UtilsPanel2.default, { channel: channel, api: api });
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWdpc3Rlci5qc3giXSwibmFtZXMiOlsiQURET05fSUQiLCJQQU5FTF9JRCIsInJlZ2lzdGVyIiwiYXBpIiwiY2hhbm5lbCIsImdldENoYW5uZWwiLCJhZGRQYW5lbCIsInRpdGxlIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBSDJCO0FBSzNCLElBQU1BLFdBQVcsdUJBQWpCO0FBQ0EsSUFBTUMsV0FBY0QsUUFBZCxpQkFBTjs7QUFFQSwwQkFBT0UsUUFBUCxDQUFnQkYsUUFBaEIsRUFBMEIsVUFBQ0csR0FBRCxFQUFTO0FBQ2pDLE1BQU1DLFVBQVUsMEJBQU9DLFVBQVAsRUFBaEI7QUFDQSw0QkFBT0MsUUFBUCxDQUFnQkwsUUFBaEIsRUFBMEI7QUFDeEJNLFdBQU8sT0FEaUI7QUFFeEJDLFlBQVE7QUFBQSxhQUNOLHNEQUFZLFNBQVNKLE9BQXJCLEVBQThCLEtBQUtELEdBQW5DLEdBRE07QUFBQTtBQUZnQixHQUExQjtBQU1ELENBUkQiLCJmaWxlIjoicmVnaXN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXHJcbmltcG9ydCBhZGRvbnMgZnJvbSAnQGthZGlyYS9zdG9yeWJvb2stYWRkb25zJztcclxuXHJcbmltcG9ydCBVdGlsc1BhbmVsIGZyb20gJy4vVXRpbHNQYW5lbCc7XHJcblxyXG5jb25zdCBBRERPTl9JRCA9ICdzdG9yeWJvb2stYWRkb24tdXRpbHMnO1xyXG5jb25zdCBQQU5FTF9JRCA9IGAke0FERE9OX0lEfS91dGlscy1wYW5lbGA7XHJcblxyXG5hZGRvbnMucmVnaXN0ZXIoQURET05fSUQsIChhcGkpID0+IHtcclxuICBjb25zdCBjaGFubmVsID0gYWRkb25zLmdldENoYW5uZWwoKTtcclxuICBhZGRvbnMuYWRkUGFuZWwoUEFORUxfSUQsIHtcclxuICAgIHRpdGxlOiAnVXRpbHMnLFxyXG4gICAgcmVuZGVyOiAoKSA9PiAoXHJcbiAgICAgIDxVdGlsc1BhbmVsIGNoYW5uZWw9e2NoYW5uZWx9IGFwaT17YXBpfSAvPlxyXG4gICAgKSxcclxuICB9KTtcclxufSk7XHJcbiJdfQ==