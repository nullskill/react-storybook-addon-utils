'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybookAddons = require('@kadira/storybook-addons');

var _storybookAddons2 = _interopRequireDefault(_storybookAddons);

var _CropMarks = require('./CropMarks');

var _CropMarks2 = _interopRequireDefault(_CropMarks);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __html = '\nimport { storiesOf } from "@kadira/storybook";\nimport utils from "react-storybook-addon-utils";\n\nstoriesOf("First Component", module)\n  .addDecorator(utils(' + JSON.stringify(_config2.default, null, 4) + '))\n  .add("First Button", () => &lt;button&gt;Click me&lt;/button&gt;)\n  ;\n';
// `.trim();

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { style: {
        padding: '20px',
        fontFamily: "-apple-system,'.SFNSText-Regular', 'San Francisco', Roboto, 'Segoe UI', 'Helvetica Neue', 'Lucida Grande', sans-serif",
        fontSize: '14px'
      } },
    _react2.default.createElement(
      'h5',
      { style: { fontSize: '16px' } },
      'Setup Instructions'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Please add the background decorator definition to your story. The background decorate accepts an array of items, which should include a name for your color (preferably the css class name) and the corresponding color / image value.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Below is an example of how to add the background decorator to your story definition.'
    ),
    _react2.default.createElement(
      'pre',
      {
        style: {
          padding: '30px',
          display: 'block',
          background: 'rgba(19,19,19,0.9)',
          color: 'rgba(255,255,255,0.95)',
          marginTop: '15px',
          lineHeight: '1.75em'
        }
      },
      _react2.default.createElement('code', { dangerouslySetInnerHTML: { __html: __html } })
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnN0cnVjdGlvbi5qc3giXSwibmFtZXMiOlsiX19odG1sIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhZGRpbmciLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJkaXNwbGF5IiwiYmFja2dyb3VuZCIsImNvbG9yIiwibWFyZ2luVG9wIiwibGluZUhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGdMQUtrQkMsS0FBS0MsU0FBTCxtQkFBdUIsSUFBdkIsRUFBNkIsQ0FBN0IsQ0FMbEIsbUZBQU47QUFTQTs7a0JBRWU7QUFBQSxTQUNiO0FBQUE7QUFBQSxNQUFLLE9BQU87QUFDVkMsaUJBQVMsTUFEQztBQUVWQyxvQkFBWSx1SEFGRjtBQUdWQyxrQkFBVTtBQUhBLE9BQVo7QUFLRTtBQUFBO0FBQUEsUUFBSSxPQUFPLEVBQUVBLFVBQVUsTUFBWixFQUFYO0FBQUE7QUFBQSxLQUxGO0FBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU5GO0FBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVRGO0FBVUU7QUFBQTtBQUFBO0FBQ0UsZUFBTztBQUNMRixtQkFBUyxNQURKO0FBRUxHLG1CQUFTLE9BRko7QUFHTEMsc0JBQVksb0JBSFA7QUFJTEMsaUJBQU8sd0JBSkY7QUFLTEMscUJBQVcsTUFMTjtBQU1MQyxzQkFBWTtBQU5QO0FBRFQ7QUFTQyw4Q0FBTSx5QkFBeUIsRUFBRVYsY0FBRixFQUEvQjtBQVREO0FBVkYsR0FEYTtBQUFBLEMiLCJmaWxlIjoiSW5zdHJ1Y3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYWRkb25zIGZyb20gJ0BrYWRpcmEvc3Rvcnlib29rLWFkZG9ucyc7XHJcbmltcG9ydCBDcm9wTWFya3MgZnJvbSAnLi9Dcm9wTWFya3MnO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcclxuXHJcbmNvbnN0IF9faHRtbCA9IGBcclxuaW1wb3J0IHsgc3Rvcmllc09mIH0gZnJvbSBcIkBrYWRpcmEvc3Rvcnlib29rXCI7XHJcbmltcG9ydCB1dGlscyBmcm9tIFwicmVhY3Qtc3Rvcnlib29rLWFkZG9uLXV0aWxzXCI7XHJcblxyXG5zdG9yaWVzT2YoXCJGaXJzdCBDb21wb25lbnRcIiwgbW9kdWxlKVxyXG4gIC5hZGREZWNvcmF0b3IodXRpbHMoJHtKU09OLnN0cmluZ2lmeShjb25maWcsIG51bGwsIDQpfSkpXHJcbiAgLmFkZChcIkZpcnN0IEJ1dHRvblwiLCAoKSA9PiAmbHQ7YnV0dG9uJmd0O0NsaWNrIG1lJmx0Oy9idXR0b24mZ3Q7KVxyXG4gIDtcclxuYFxyXG4vLyBgLnRyaW0oKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuICA8ZGl2IHN0eWxlPXt7XHJcbiAgICBwYWRkaW5nOiAnMjBweCcsXHJcbiAgICBmb250RmFtaWx5OiBcIi1hcHBsZS1zeXN0ZW0sJy5TRk5TVGV4dC1SZWd1bGFyJywgJ1NhbiBGcmFuY2lzY28nLCBSb2JvdG8sICdTZWdvZSBVSScsICdIZWx2ZXRpY2EgTmV1ZScsICdMdWNpZGEgR3JhbmRlJywgc2Fucy1zZXJpZlwiLFxyXG4gICAgZm9udFNpemU6ICcxNHB4JyxcclxuICB9fT5cclxuICAgIDxoNSBzdHlsZT17eyBmb250U2l6ZTogJzE2cHgnIH19PlNldHVwIEluc3RydWN0aW9uczwvaDU+XHJcbiAgICA8cD5QbGVhc2UgYWRkIHRoZSBiYWNrZ3JvdW5kIGRlY29yYXRvciBkZWZpbml0aW9uIHRvIHlvdXIgc3RvcnkuXHJcbiAgICBUaGUgYmFja2dyb3VuZCBkZWNvcmF0ZSBhY2NlcHRzIGFuIGFycmF5IG9mIGl0ZW1zLCB3aGljaCBzaG91bGQgaW5jbHVkZSBhXHJcbiAgICBuYW1lIGZvciB5b3VyIGNvbG9yIChwcmVmZXJhYmx5IHRoZSBjc3MgY2xhc3MgbmFtZSkgYW5kIHRoZSBjb3JyZXNwb25kaW5nIGNvbG9yIC8gaW1hZ2UgdmFsdWUuPC9wPlxyXG4gICAgPHA+QmVsb3cgaXMgYW4gZXhhbXBsZSBvZiBob3cgdG8gYWRkIHRoZSBiYWNrZ3JvdW5kIGRlY29yYXRvciB0byB5b3VyIHN0b3J5IGRlZmluaXRpb24uPC9wPlxyXG4gICAgPHByZVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIHBhZGRpbmc6ICczMHB4JyxcclxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDE5LDE5LDE5LDAuOSknLFxyXG4gICAgICAgIGNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjk1KScsXHJcbiAgICAgICAgbWFyZ2luVG9wOiAnMTVweCcsXHJcbiAgICAgICAgbGluZUhlaWdodDogJzEuNzVlbScsXHJcbiAgICAgIH19XHJcbiAgICA+PGNvZGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sIH19IC8+PC9wcmU+XHJcbiAgPC9kaXY+XHJcbik7XHJcbiJdfQ==