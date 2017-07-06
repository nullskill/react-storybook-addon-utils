'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybookAddons = require('@kadira/storybook-addons');

var _storybookAddons2 = _interopRequireDefault(_storybookAddons);

var _CropMarks = require('./CropMarks');

var _CropMarks2 = _interopRequireDefault(_CropMarks);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _key = require('./key');

var _key2 = _interopRequireDefault(_key);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UtilsDecorator = function (_Component) {
  _inherits(UtilsDecorator, _Component);

  function UtilsDecorator(props) {
    _classCallCheck(this, UtilsDecorator);

    // A channel is explicitly passed in for testing
    var _this = _possibleConstructorReturn(this, (UtilsDecorator.__proto__ || Object.getPrototypeOf(UtilsDecorator)).call(this, props));

    _this.state = {};

    _this.onChange = function (state) {
      return _this.setState(state);
    };

    if (_this.props.channel) {
      _this.channel = _this.props.channel;
    } else {
      _this.channel = _storybookAddons2.default.getChannel();
    }

    _this.story = _this.props.story();
    return _this;
  }

  _createClass(UtilsDecorator, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.channel.on(_key2.default, this.onChange);
      this.channel.emit(_key2.default + '-set', this.props.config);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.story !== this.props.story) {
        this.story = nextProps.story();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.channel.removeListener(_key2.default, this.onChange);
      this.channel.emit(_key2.default + '-unset');
    }
  }, {
    key: 'render',
    value: function render() {
      var config = this.props.config;
      var controls = this.state.controls || {};

      var styles = {
        marks: config.default.marks,
        root: Object.assign({}, config.default.root),
        wrap: Object.assign({}, config.default.wrap),
        content: Object.assign({}, config.default.content)
      };
      for (var key in controls) {
        var item = config.controls[key].items[controls[key]];
        // console.log({item});
        if (item.marks != null) styles.marks = item.marks;
        styles.root = Object.assign(styles.root, item.root);
        styles.wrap = Object.assign(styles.wrap, item.wrap);
        styles.content = Object.assign(styles.content, item.content);
      }

      console.log(this.story);

      document.body.style.margin = 0;

      var Root = 'div';
      var Wrap = styles.marks ? _CropMarks2.default : 'div';
      var Content = 'div';
      return _react2.default.createElement(
        Root,
        { style: Object.assign({}, styles.root) },
        _react2.default.createElement(
          Wrap,
          { style: Object.assign({}, styles.wrap) },
          _react2.default.createElement(
            Content,
            { style: Object.assign({}, styles.content) },
            this.story
          )
        )
      );
    }
  }]);

  return UtilsDecorator;
}(_react.Component);

exports.default = UtilsDecorator;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9VdGlsc0RlY29yYXRvci5qc3giXSwibmFtZXMiOlsiVXRpbHNEZWNvcmF0b3IiLCJwcm9wcyIsInN0YXRlIiwib25DaGFuZ2UiLCJzZXRTdGF0ZSIsImNoYW5uZWwiLCJnZXRDaGFubmVsIiwic3RvcnkiLCJvbiIsImVtaXQiLCJjb25maWciLCJuZXh0UHJvcHMiLCJyZW1vdmVMaXN0ZW5lciIsImNvbnRyb2xzIiwic3R5bGVzIiwibWFya3MiLCJkZWZhdWx0Iiwicm9vdCIsIk9iamVjdCIsImFzc2lnbiIsIndyYXAiLCJjb250ZW50Iiwia2V5IiwiaXRlbSIsIml0ZW1zIiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwibWFyZ2luIiwiUm9vdCIsIldyYXAiLCJDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztJQUVxQkEsYzs7O0FBS25CLDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBR2pCO0FBSGlCLGdJQUNYQSxLQURXOztBQUFBLFVBRm5CQyxLQUVtQixHQUZYLEVBRVc7O0FBQUEsVUE2Qm5CQyxRQTdCbUIsR0E2QlI7QUFBQSxhQUFTLE1BQUtDLFFBQUwsQ0FBY0YsS0FBZCxDQUFUO0FBQUEsS0E3QlE7O0FBSWpCLFFBQUksTUFBS0QsS0FBTCxDQUFXSSxPQUFmLEVBQXdCO0FBQ3RCLFlBQUtBLE9BQUwsR0FBZSxNQUFLSixLQUFMLENBQVdJLE9BQTFCO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsWUFBS0EsT0FBTCxHQUFlLDBCQUFPQyxVQUFQLEVBQWY7QUFDRDs7QUFFRCxVQUFLQyxLQUFMLEdBQWEsTUFBS04sS0FBTCxDQUFXTSxLQUFYLEVBQWI7QUFWaUI7QUFXbEI7Ozs7eUNBRW9CO0FBQ25CLFdBQUtGLE9BQUwsQ0FBYUcsRUFBYixnQkFBcUIsS0FBS0wsUUFBMUI7QUFDQSxXQUFLRSxPQUFMLENBQWFJLElBQWIsQ0FBa0IsZ0JBQU0sTUFBeEIsRUFBZ0MsS0FBS1IsS0FBTCxDQUFXUyxNQUEzQztBQUNEOzs7OENBRXlCQyxTLEVBQVc7QUFDbkMsVUFBSUEsVUFBVUosS0FBVixLQUFvQixLQUFLTixLQUFMLENBQVdNLEtBQW5DLEVBQTBDO0FBQ3hDLGFBQUtBLEtBQUwsR0FBYUksVUFBVUosS0FBVixFQUFiO0FBQ0Q7QUFDRjs7OzJDQUVzQjtBQUNyQixXQUFLRixPQUFMLENBQWFPLGNBQWIsZ0JBQWlDLEtBQUtULFFBQXRDO0FBQ0EsV0FBS0UsT0FBTCxDQUFhSSxJQUFiLENBQWtCLGdCQUFNLFFBQXhCO0FBQ0Q7Ozs2QkFJUTtBQUNQLFVBQU1DLFNBQVMsS0FBS1QsS0FBTCxDQUFXUyxNQUExQjtBQUNBLFVBQU1HLFdBQVcsS0FBS1gsS0FBTCxDQUFXVyxRQUFYLElBQXVCLEVBQXhDOztBQUVBLFVBQU1DLFNBQVM7QUFDYkMsZUFBT0wsT0FBT00sT0FBUCxDQUFlRCxLQURUO0FBRWJFLGNBQU1DLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCVCxPQUFPTSxPQUFQLENBQWVDLElBQWpDLENBRk87QUFHYkcsY0FBTUYsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JULE9BQU9NLE9BQVAsQ0FBZUksSUFBakMsQ0FITztBQUliQyxpQkFBU0gsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JULE9BQU9NLE9BQVAsQ0FBZUssT0FBakM7QUFKSSxPQUFmO0FBTUEsV0FBSSxJQUFJQyxHQUFSLElBQWVULFFBQWYsRUFBeUI7QUFDdkIsWUFBTVUsT0FBT2IsT0FBT0csUUFBUCxDQUFnQlMsR0FBaEIsRUFBcUJFLEtBQXJCLENBQTJCWCxTQUFTUyxHQUFULENBQTNCLENBQWI7QUFDQTtBQUNBLFlBQUlDLEtBQUtSLEtBQUwsSUFBYyxJQUFsQixFQUF3QkQsT0FBT0MsS0FBUCxHQUFlUSxLQUFLUixLQUFwQjtBQUN4QkQsZUFBT0csSUFBUCxHQUFjQyxPQUFPQyxNQUFQLENBQWNMLE9BQU9HLElBQXJCLEVBQTJCTSxLQUFLTixJQUFoQyxDQUFkO0FBQ0FILGVBQU9NLElBQVAsR0FBY0YsT0FBT0MsTUFBUCxDQUFjTCxPQUFPTSxJQUFyQixFQUEyQkcsS0FBS0gsSUFBaEMsQ0FBZDtBQUNBTixlQUFPTyxPQUFQLEdBQWlCSCxPQUFPQyxNQUFQLENBQWNMLE9BQU9PLE9BQXJCLEVBQThCRSxLQUFLRixPQUFuQyxDQUFqQjtBQUNEOztBQUVESSxjQUFRQyxHQUFSLENBQVksS0FBS25CLEtBQWpCOztBQUVBb0IsZUFBU0MsSUFBVCxDQUFjQyxLQUFkLENBQW9CQyxNQUFwQixHQUE2QixDQUE3Qjs7QUFFQSxVQUFNQyxPQUFPLEtBQWI7QUFDQSxVQUFNQyxPQUFPbEIsT0FBT0MsS0FBUCx5QkFBMkIsS0FBeEM7QUFDQSxVQUFNa0IsVUFBVSxLQUFoQjtBQUNBLGFBQ0U7QUFBQyxZQUFEO0FBQUEsVUFBTSxPQUFPZixPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkwsT0FBT0csSUFBekIsQ0FBYjtBQUNFO0FBQUMsY0FBRDtBQUFBLFlBQU0sT0FBT0MsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JMLE9BQU9NLElBQXpCLENBQWI7QUFDRTtBQUFDLG1CQUFEO0FBQUEsY0FBUyxPQUFPRixPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkwsT0FBT08sT0FBekIsQ0FBaEI7QUFDRyxpQkFBS2Q7QUFEUjtBQURGO0FBREYsT0FERjtBQVdEOzs7Ozs7a0JBekVrQlAsYyIsImZpbGUiOiJVdGlsc0RlY29yYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBhZGRvbnMgZnJvbSAnQGthZGlyYS9zdG9yeWJvb2stYWRkb25zJztcclxuaW1wb3J0IENyb3BNYXJrcyBmcm9tICcuL0Nyb3BNYXJrcyc7XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcclxuXHJcbmltcG9ydCBLRVkgZnJvbSAnLi9rZXknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlsc0RlY29yYXRvciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG5cclxuICBzdGF0ZSA9IHsgIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgLy8gQSBjaGFubmVsIGlzIGV4cGxpY2l0bHkgcGFzc2VkIGluIGZvciB0ZXN0aW5nXHJcbiAgICBpZiAodGhpcy5wcm9wcy5jaGFubmVsKSB7XHJcbiAgICAgIHRoaXMuY2hhbm5lbCA9IHRoaXMucHJvcHMuY2hhbm5lbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2hhbm5lbCA9IGFkZG9ucy5nZXRDaGFubmVsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zdG9yeSA9IHRoaXMucHJvcHMuc3RvcnkoKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIHRoaXMuY2hhbm5lbC5vbihLRVksIHRoaXMub25DaGFuZ2UpO1xyXG4gICAgdGhpcy5jaGFubmVsLmVtaXQoS0VZICsgJy1zZXQnLCB0aGlzLnByb3BzLmNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgaWYgKG5leHRQcm9wcy5zdG9yeSAhPT0gdGhpcy5wcm9wcy5zdG9yeSkge1xyXG4gICAgICB0aGlzLnN0b3J5ID0gbmV4dFByb3BzLnN0b3J5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMuY2hhbm5lbC5yZW1vdmVMaXN0ZW5lcihLRVksIHRoaXMub25DaGFuZ2UpO1xyXG4gICAgdGhpcy5jaGFubmVsLmVtaXQoS0VZICsgJy11bnNldCcpO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UgPSBzdGF0ZSA9PiB0aGlzLnNldFN0YXRlKHN0YXRlKVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLnByb3BzLmNvbmZpZztcclxuICAgIGNvbnN0IGNvbnRyb2xzID0gdGhpcy5zdGF0ZS5jb250cm9scyB8fCB7fTtcclxuXHJcbiAgICBjb25zdCBzdHlsZXMgPSB7XHJcbiAgICAgIG1hcmtzOiBjb25maWcuZGVmYXVsdC5tYXJrcyxcclxuICAgICAgcm9vdDogT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnLmRlZmF1bHQucm9vdCksXHJcbiAgICAgIHdyYXA6IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZy5kZWZhdWx0LndyYXApLFxyXG4gICAgICBjb250ZW50OiBPYmplY3QuYXNzaWduKHt9LCBjb25maWcuZGVmYXVsdC5jb250ZW50KSxcclxuICAgIH07XHJcbiAgICBmb3IobGV0IGtleSBpbiBjb250cm9scykge1xyXG4gICAgICBjb25zdCBpdGVtID0gY29uZmlnLmNvbnRyb2xzW2tleV0uaXRlbXNbY29udHJvbHNba2V5XV07XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHtpdGVtfSk7XHJcbiAgICAgIGlmIChpdGVtLm1hcmtzICE9IG51bGwpIHN0eWxlcy5tYXJrcyA9IGl0ZW0ubWFya3M7XHJcbiAgICAgIHN0eWxlcy5yb290ID0gT2JqZWN0LmFzc2lnbihzdHlsZXMucm9vdCwgaXRlbS5yb290KTtcclxuICAgICAgc3R5bGVzLndyYXAgPSBPYmplY3QuYXNzaWduKHN0eWxlcy53cmFwLCBpdGVtLndyYXApO1xyXG4gICAgICBzdHlsZXMuY29udGVudCA9IE9iamVjdC5hc3NpZ24oc3R5bGVzLmNvbnRlbnQsIGl0ZW0uY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2codGhpcy5zdG9yeSk7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW4gPSAwO1xyXG5cclxuICAgIGNvbnN0IFJvb3QgPSAnZGl2JztcclxuICAgIGNvbnN0IFdyYXAgPSBzdHlsZXMubWFya3MgPyBDcm9wTWFya3MgOiAnZGl2JztcclxuICAgIGNvbnN0IENvbnRlbnQgPSAnZGl2JztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSb290IHN0eWxlPXtPYmplY3QuYXNzaWduKHt9LCBzdHlsZXMucm9vdCl9PlxyXG4gICAgICAgIDxXcmFwIHN0eWxlPXtPYmplY3QuYXNzaWduKHt9LCBzdHlsZXMud3JhcCl9PlxyXG4gICAgICAgICAgPENvbnRlbnQgc3R5bGU9e09iamVjdC5hc3NpZ24oe30sIHN0eWxlcy5jb250ZW50KX0+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0b3J5fVxyXG4gICAgICAgICAgPC9Db250ZW50PlxyXG4gICAgICAgIDwvV3JhcD5cclxuICAgICAgPC9Sb290PlxyXG4gICAgKTtcclxuXHJcblxyXG4gIH1cclxufVxyXG4iXX0=