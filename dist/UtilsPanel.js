'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _Swatch = require('./Swatch');

var _Swatch2 = _interopRequireDefault(_Swatch);

var _ButtonGroup = require('./ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Instruction = require('./Instruction');

var _Instruction2 = _interopRequireDefault(_Instruction);

var _key = require('./key');

var _key2 = _interopRequireDefault(_key);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getConfig(config) {
  return config;
}

function getStateFromConfig() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var controls = config.controls || [];
  var state = {
    controls: {}
  };
  controls.forEach(function (control, key) {
    var items = (control.items || []).map(function (i, key) {
      return _extends({}, i, { key: key });
    });
    var item = items.filter(function (i) {
      return i.enable;
    })[0] || items[0];
    if (!item) return;
    state.controls[key] = item.key;
  });
  // console.log({config, state});
  return state;
}

var UtilsPanel = function (_Component) {
  _inherits(UtilsPanel, _Component);

  function UtilsPanel(props) {
    _classCallCheck(this, UtilsPanel);

    var _this = _possibleConstructorReturn(this, (UtilsPanel.__proto__ || Object.getPrototypeOf(UtilsPanel)).call(this, props));

    _this.state = {};


    _this.props.channel.on(_key2.default + '-set', function (rawConfig) {
      var config = getConfig(rawConfig);
      // console.log(this.getQueryParam(KEY), getStateFromConfig(config));
      var state = (0, _deepmerge2.default)(getStateFromConfig(config), _this.getQueryParam(_key2.default), { arrayMerge: function arrayMerge(d, s) {
          return s;
        } });
      // console.log({state});
      _this.setGlobalState(_extends({ config: config }, state));
    });

    _this.props.channel.on(_key2.default + '-unset', function () {
      _this.resetGlobalState({});
    });
    return _this;
  }

  _createClass(UtilsPanel, [{
    key: 'getQueryParam',
    value: function getQueryParam() {
      var state = this.props.api.getQueryParam(_key2.default);
      if (!state) return {};
      return JSON.parse(state);
    }
  }, {
    key: 'setQueryParam',
    value: function setQueryParam() {
      var state = Object.assign({}, this.state, { config: undefined });
      this.props.api.setQueryParams(_defineProperty({}, _key2.default, JSON.stringify(state)));
    }
  }, {
    key: 'resetGlobalState',
    value: function resetGlobalState(state) {
      console.log('resetGlobalState');
    }
  }, {
    key: 'setGlobalState',
    value: function setGlobalState(state) {
      var _this2 = this;

      this.setState(state, function () {
        _this2.props.channel.emit(_key2.default, _this2.state);
        _this2.setQueryParam();
      });
    }
  }, {
    key: 'onClick',
    value: function onClick(key, val) {
      var _this3 = this;

      return function (e) {
        // console.log('onClick', key, val);
        var controls = Object.assign({}, _this3.state.controls, _defineProperty({}, key, val));
        _this3.setGlobalState({ controls: controls });
      };
    }
  }, {
    key: 'renderItems',
    value: function renderItems(control, superkey) {
      var _this4 = this;

      var items = control.items || [];
      var controlState = this.state.controls || {};
      if (control.type === 'bg') {
        return _react2.default.createElement(
          'div',
          null,
          items.filter(function (i) {
            return i;
          }).map(function (item, key) {
            return _react2.default.createElement(
              'div',
              { key: key, style: { display: 'inline-block', padding: '5px' } },
              _react2.default.createElement(_Swatch2.default, _extends({}, item, { onClick: _this4.onClick(superkey, key), active: controlState[superkey] === key }))
            );
          })
        );
      }
      return _react2.default.createElement(
        _ButtonGroup2.default,
        null,
        items.map(function (item, key) {
          return _react2.default.createElement(
            _Button2.default,
            { key: key, onClick: _this4.onClick(superkey, key), active: controlState[superkey] === key },
            item.name
          );
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var config = this.state.config;

      if (!config) return _react2.default.createElement(_Instruction2.default, null);

      return _react2.default.createElement(
        'div',
        { style: { display: 'inline-block', padding: '15px' } },
        (config.controls || []).map(function (control, key) {
          return _react2.default.createElement(
            'div',
            { key: key },
            _react2.default.createElement(
              'h2',
              null,
              control.name || 'Control',
              ':'
            ),
            _this5.renderItems(control, key)
          );
        })
      );
    }
  }]);

  return UtilsPanel;
}(_react.Component);

exports.default = UtilsPanel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9VdGlsc1BhbmVsLmpzeCJdLCJuYW1lcyI6WyJnZXRDb25maWciLCJjb25maWciLCJnZXRTdGF0ZUZyb21Db25maWciLCJjb250cm9scyIsInN0YXRlIiwiZm9yRWFjaCIsImNvbnRyb2wiLCJrZXkiLCJpdGVtcyIsIm1hcCIsImkiLCJpdGVtIiwiZmlsdGVyIiwiZW5hYmxlIiwiVXRpbHNQYW5lbCIsInByb3BzIiwiY2hhbm5lbCIsIm9uIiwicmF3Q29uZmlnIiwiZ2V0UXVlcnlQYXJhbSIsImFycmF5TWVyZ2UiLCJkIiwicyIsInNldEdsb2JhbFN0YXRlIiwicmVzZXRHbG9iYWxTdGF0ZSIsImFwaSIsIkpTT04iLCJwYXJzZSIsIk9iamVjdCIsImFzc2lnbiIsInVuZGVmaW5lZCIsInNldFF1ZXJ5UGFyYW1zIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiZW1pdCIsInNldFF1ZXJ5UGFyYW0iLCJ2YWwiLCJlIiwic3VwZXJrZXkiLCJjb250cm9sU3RhdGUiLCJ0eXBlIiwiZGlzcGxheSIsInBhZGRpbmciLCJvbkNsaWNrIiwibmFtZSIsInJlbmRlckl0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EsU0FBVCxDQUFtQkMsTUFBbkIsRUFBMkI7QUFDekIsU0FBT0EsTUFBUDtBQUNEOztBQUVELFNBQVNDLGtCQUFULEdBQXlDO0FBQUEsTUFBYkQsTUFBYSx1RUFBSixFQUFJOztBQUN2QyxNQUFNRSxXQUFXRixPQUFPRSxRQUFQLElBQW1CLEVBQXBDO0FBQ0EsTUFBTUMsUUFBUTtBQUNaRCxjQUFVO0FBREUsR0FBZDtBQUdBQSxXQUFTRSxPQUFULENBQWlCLFVBQUNDLE9BQUQsRUFBVUMsR0FBVixFQUFrQjtBQUNqQyxRQUFNQyxRQUFRLENBQUNGLFFBQVFFLEtBQVIsSUFBaUIs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QkFBS0MsV0FBTCxDQUFpQnpDLE9BQWpCLEVBQTBCQyxHQUExQjtBQUZILFdBRDJCO0FBQUEsU0FBNUI7QUFESCxPQURGO0FBVUQ7Ozs7OztrQkE1RmtCTyxVIiwiZmlsZSI6IlV0aWxzUGFuZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZGVlcG1lcmdlIGZyb20gJ2RlZXBtZXJnZSc7XHJcbmltcG9ydCBTd2F0Y2ggZnJvbSAnLi9Td2F0Y2gnO1xyXG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnLi9CdXR0b25Hcm91cCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xyXG5pbXBvcnQgSW5zdHJ1Y3Rpb24gZnJvbSAnLi9JbnN0cnVjdGlvbic7XHJcbmltcG9ydCBLRVkgZnJvbSAnLi9rZXknXHJcblxyXG5mdW5jdGlvbiBnZXRDb25maWcoY29uZmlnKSB7XHJcbiAgcmV0dXJuIGNvbmZpZztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U3RhdGVGcm9tQ29uZmlnKGNvbmZpZyA9IHt9KSB7XHJcbiAgY29uc3QgY29udHJvbHMgPSBjb25maWcuY29udHJvbHMgfHwgW107XHJcbiAgY29uc3Qgc3RhdGUgPSB7XHJcbiAgICBjb250cm9sczoge30sXHJcbiAgfTtcclxuICBjb250cm9scy5mb3JFYWNoKChjb250cm9sLCBrZXkpID0+IHtcclxuICAgIGNvbnN0IGl0ZW1zID0gKGNvbnRyb2wuaXRlbXMgfHwgW10pLm1hcCgoaSwga2V5KSA9PiAoey4uLmksIGtleX0pKTtcclxuICAgIGNvbnN0IGl0ZW0gPSBpdGVtcy5maWx0ZXIoaSA9PiBpLmVuYWJsZSlbMF0gfHwgaXRlbXNbMF07XHJcbiAgICBpZiAoIWl0ZW0pIHJldHVybjtcclxuICAgIHN0YXRlLmNvbnRyb2xzW2tleV0gPSBpdGVtLmtleTtcclxuICB9KVxyXG4gIC8vIGNvbnNvbGUubG9nKHtjb25maWcsIHN0YXRlfSk7XHJcbiAgcmV0dXJuIHN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlsc1BhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgc3RhdGUgPSB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnByb3BzLmNoYW5uZWwub24oS0VZICsgJy1zZXQnLCAocmF3Q29uZmlnKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbmZpZyA9IGdldENvbmZpZyhyYXdDb25maWcpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmdldFF1ZXJ5UGFyYW0oS0VZKSwgZ2V0U3RhdGVGcm9tQ29uZmlnKGNvbmZpZykpO1xyXG4gICAgICBjb25zdCBzdGF0ZSA9IGRlZXBtZXJnZShnZXRTdGF0ZUZyb21Db25maWcoY29uZmlnKSwgdGhpcy5nZXRRdWVyeVBhcmFtKEtFWSksIHthcnJheU1lcmdlOiAoZCwgcykgPT4gc30pO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh7c3RhdGV9KTtcclxuICAgICAgdGhpcy5zZXRHbG9iYWxTdGF0ZSh7IGNvbmZpZywgLi4uc3RhdGUgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnByb3BzLmNoYW5uZWwub24oS0VZICsgJy11bnNldCcsICgpID0+IHtcclxuICAgICAgdGhpcy5yZXNldEdsb2JhbFN0YXRlKHt9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIGdldFF1ZXJ5UGFyYW0oKSB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMucHJvcHMuYXBpLmdldFF1ZXJ5UGFyYW0oS0VZKTtcclxuICAgIGlmICghc3RhdGUpIHJldHVybiB7fTtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKHN0YXRlKTtcclxuICB9XHJcbiAgc2V0UXVlcnlQYXJhbSgpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSwge2NvbmZpZzogdW5kZWZpbmVkfSk7XHJcbiAgICB0aGlzLnByb3BzLmFwaS5zZXRRdWVyeVBhcmFtcyh7XHJcbiAgICAgIFtLRVldOiBKU09OLnN0cmluZ2lmeShzdGF0ZSksXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlc2V0R2xvYmFsU3RhdGUoc3RhdGUpIHtcclxuICAgIGNvbnNvbGUubG9nKCdyZXNldEdsb2JhbFN0YXRlJyk7XHJcbiAgfVxyXG4gIHNldEdsb2JhbFN0YXRlKHN0YXRlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMuY2hhbm5lbC5lbWl0KEtFWSwgdGhpcy5zdGF0ZSk7XHJcbiAgICAgIHRoaXMuc2V0UXVlcnlQYXJhbSgpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG5cclxuICBvbkNsaWNrKGtleSwgdmFsKSB7XHJcbiAgICByZXR1cm4gKGUpID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ29uQ2xpY2snLCBrZXksIHZhbCk7XHJcbiAgICAgIGNvbnN0IGNvbnRyb2xzID0gT2JqZWN0LmFzc2lnbigge30sICB0aGlzLnN0YXRlLmNvbnRyb2xzLCB7W2tleV06IHZhbH0pXHJcbiAgICAgIHRoaXMuc2V0R2xvYmFsU3RhdGUoe2NvbnRyb2xzfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlckl0ZW1zKGNvbnRyb2wsIHN1cGVya2V5KSB7XHJcbiAgICBjb25zdCBpdGVtcyA9IGNvbnRyb2wuaXRlbXMgfHwgW107XHJcbiAgICBjb25zdCBjb250cm9sU3RhdGUgPSB0aGlzLnN0YXRlLmNvbnRyb2xzIHx8IHt9O1xyXG4gICAgaWYgKGNvbnRyb2wudHlwZSA9PT0gJ2JnJykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7IGl0ZW1zLmZpbHRlcihpID0+IGkpLm1hcCggKGl0ZW0sIGtleSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17a2V5fSBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgcGFkZGluZzogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgPFN3YXRjaCB7Li4uaXRlbX0gb25DbGljaz17dGhpcy5vbkNsaWNrKHN1cGVya2V5LCBrZXkpfSBhY3RpdmU9e2NvbnRyb2xTdGF0ZVtzdXBlcmtleV0gPT09IGtleX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDxCdXR0b25Hcm91cD5cclxuICAgICAgeyBpdGVtcy5tYXAoIChpdGVtLCBrZXkpID0+IChcclxuICAgICAgICA8QnV0dG9uIGtleT17a2V5fSBvbkNsaWNrPXt0aGlzLm9uQ2xpY2soc3VwZXJrZXksIGtleSl9IGFjdGl2ZT17Y29udHJvbFN0YXRlW3N1cGVya2V5XSA9PT0ga2V5fT5cclxuICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICkpfVxyXG4gICAgPC9CdXR0b25Hcm91cD5cclxuXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLnN0YXRlLmNvbmZpZztcclxuXHJcbiAgICBpZiAoIWNvbmZpZykgcmV0dXJuIDxJbnN0cnVjdGlvbiAvPjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBwYWRkaW5nOiAnMTVweCcgfX0+XHJcbiAgICAgICAgeyhjb25maWcuY29udHJvbHMgfHwgW10pLm1hcCgoY29udHJvbCwga2V5KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17a2V5fT5cclxuICAgICAgICAgICAgPGgyPntjb250cm9sLm5hbWUgfHwgJ0NvbnRyb2wnfTo8L2gyPlxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJJdGVtcyhjb250cm9sLCBrZXkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19