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
      // console.log('componentWillMount()');

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
      // console.log('componentWillUnmount()');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9VdGlsc0RlY29yYXRvci5qc3giXSwibmFtZXMiOlsiVXRpbHNEZWNvcmF0b3IiLCJwcm9wcyIsInN0YXRlIiwib25DaGFuZ2UiLCJzZXRTdGF0ZSIsImNoYW5uZWwiLCJnZXRDaGFubmVsIiwic3RvcnkiLCJvbiIsImVtaXQiLCJjb25maWciLCJuZXh0UHJvcHMiLCJyZW1vdmVMaXN0ZW5lciIsImNvbnRyb2xzIiwic3R5bGVzIiwibWFya3MiLCJkZWZhdWx0Iiwicm9vdCIsIk9iamVjdCIsImFzc2lnbiIsIndyYXAiLCJjb250ZW50Iiwia2V5IiwiaXRlbSIsIml0ZW1zIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJtYXJnaW4iLCJSb290IiwiV3JhcCIsIkNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxjOzs7QUFLbkIsMEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFHakI7QUFIaUIsZ0lBQ1hBLEtBRFc7O0FBQUEsVUFGbkJDLEtBRW1CLEdBRlgsRUFFVzs7QUFBQSxVQWlDbkJDLFFBakNtQixHQWlDUjtBQUFBLGFBQVMsTUFBS0MsUUFBTCxDQUFjRixLQUFkLENBQVQ7QUFBQSxLQWpDUTs7QUFJakIsUUFBSSxNQUFLRCxLQUFMLENBQVdJLE9BQWYsRUFBd0I7QUFDdEIsWUFBS0EsT0FBTCxHQUFlLE1BQUtKLEtBQUwsQ0FBV0ksT0FBMUI7QUFDRCxLQUZELE1BRU87QUFDTCxZQUFLQSxPQUFMLEdBQWUsMEJBQU9DLFVBQVAsRUFBZjtBQUNEOztBQUVELFVBQUtDLEtBQUwsR0FBYSxNQUFLTixLQUFMLENBQVdNLEtBQVgsRUFBYjtBQVZpQjtBQVdsQjs7Ozt5Q0FFb0I7QUFDbkI7O0FBRUEsV0FBS0YsT0FBTCxDQUFhRyxFQUFiLGdCQUFxQixLQUFLTCxRQUExQjtBQUNBLFdBQUtFLE9BQUwsQ0FBYUksSUFBYixDQUFrQixnQkFBTSxNQUF4QixFQUFnQyxLQUFLUixLQUFMLENBQVdTLE1BQTNDO0FBQ0Q7Ozs4Q0FFeUJDLFMsRUFBVztBQUNuQyxVQUFJQSxVQUFVSixLQUFWLEtBQW9CLEtBQUtOLEtBQUwsQ0FBV00sS0FBbkMsRUFBMEM7QUFDeEMsYUFBS0EsS0FBTCxHQUFhSSxVQUFVSixLQUFWLEVBQWI7QUFDRDtBQUNGOzs7MkNBRXNCO0FBQ3JCOztBQUVBLFdBQUtGLE9BQUwsQ0FBYU8sY0FBYixnQkFBaUMsS0FBS1QsUUFBdEM7QUFDQSxXQUFLRSxPQUFMLENBQWFJLElBQWIsQ0FBa0IsZ0JBQU0sUUFBeEI7QUFDRDs7OzZCQUlRO0FBQ1AsVUFBTUMsU0FBUyxLQUFLVCxLQUFMLENBQVdTLE1BQTFCO0FBQ0EsVUFBTUcsV0FBVyxLQUFLWCxLQUFMLENBQVdXLFFBQVgsSUFBdUIsRUFBeEM7O0FBRUEsVUFBTUMsU0FBUztBQUNiQyxlQUFPTCxPQUFPTSxPQUFQLENBQWVELEtBRFQ7QUFFYkUsY0FBTUMsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JULE9BQU9NLE9BQVAsQ0FBZUMsSUFBakMsQ0FGTztBQUdiRyxjQUFNRixPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQlQsT0FBT00sT0FBUCxDQUFlSSxJQUFqQyxDQUhPO0FBSWJDLGlCQUFTSCxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQlQsT0FBT00sT0FBUCxDQUFlSyxPQUFqQztBQUpJLE9BQWY7QUFNQSxXQUFJLElBQUlDLEdBQVIsSUFBZVQsUUFBZixFQUF5QjtBQUN2QixZQUFNVSxPQUFPYixPQUFPRyxRQUFQLENBQWdCUyxHQUFoQixFQUFxQkUsS0FBckIsQ0FBMkJYLFNBQVNTLEdBQVQsQ0FBM0IsQ0FBYjtBQUNBO0FBQ0EsWUFBSUMsS0FBS1IsS0FBTCxJQUFjLElBQWxCLEVBQXdCRCxPQUFPQyxLQUFQLEdBQWVRLEtBQUtSLEtBQXBCO0FBQ3hCRCxlQUFPRyxJQUFQLEdBQWNDLE9BQU9DLE1BQVAsQ0FBY0wsT0FBT0csSUFBckIsRUFBMkJNLEtBQUtOLElBQWhDLENBQWQ7QUFDQUgsZUFBT00sSUFBUCxHQUFjRixPQUFPQyxNQUFQLENBQWNMLE9BQU9NLElBQXJCLEVBQTJCRyxLQUFLSCxJQUFoQyxDQUFkO0FBQ0FOLGVBQU9PLE9BQVAsR0FBaUJILE9BQU9DLE1BQVAsQ0FBY0wsT0FBT08sT0FBckIsRUFBOEJFLEtBQUtGLE9BQW5DLENBQWpCO0FBQ0Q7O0FBRURJLGVBQVNDLElBQVQsQ0FBY0MsS0FBZCxDQUFvQkMsTUFBcEIsR0FBNkIsQ0FBN0I7O0FBRUEsVUFBTUMsT0FBTyxLQUFiO0FBQ0EsVUFBTUMsT0FBT2hCLE9BQU9DLEtBQVAseUJBQTJCLEtBQXhDO0FBQ0EsVUFBTWdCLFVBQVUsS0FBaEI7QUFDQSxhQUNFO0FBQUMsWUFBRDtBQUFBLFVBQU0sT0FBT2IsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JMLE9BQU9HLElBQXpCLENBQWI7QUFDRTtBQUFDLGNBQUQ7QUFBQSxZQUFNLE9BQU9DLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCTCxPQUFPTSxJQUF6QixDQUFiO0FBQ0U7QUFBQyxtQkFBRDtBQUFBLGNBQVMsT0FBT0YsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JMLE9BQU9PLE9BQXpCLENBQWhCO0FBQ0csaUJBQUtkO0FBRFI7QUFERjtBQURGLE9BREY7QUFXRDs7Ozs7O2tCQTNFa0JQLGMiLCJmaWxlIjoiVXRpbHNEZWNvcmF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYWRkb25zIGZyb20gJ0BrYWRpcmEvc3Rvcnlib29rLWFkZG9ucyc7XHJcbmltcG9ydCBDcm9wTWFya3MgZnJvbSAnLi9Dcm9wTWFya3MnO1xyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG5pbXBvcnQgS0VZIGZyb20gJy4va2V5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbHNEZWNvcmF0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuXHJcbiAgc3RhdGUgPSB7ICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIC8vIEEgY2hhbm5lbCBpcyBleHBsaWNpdGx5IHBhc3NlZCBpbiBmb3IgdGVzdGluZ1xyXG4gICAgaWYgKHRoaXMucHJvcHMuY2hhbm5lbCkge1xyXG4gICAgICB0aGlzLmNoYW5uZWwgPSB0aGlzLnByb3BzLmNoYW5uZWw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNoYW5uZWwgPSBhZGRvbnMuZ2V0Q2hhbm5lbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3RvcnkgPSB0aGlzLnByb3BzLnN0b3J5KCk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY29tcG9uZW50V2lsbE1vdW50KCknKTtcclxuICAgIFxyXG4gICAgdGhpcy5jaGFubmVsLm9uKEtFWSwgdGhpcy5vbkNoYW5nZSk7XHJcbiAgICB0aGlzLmNoYW5uZWwuZW1pdChLRVkgKyAnLXNldCcsIHRoaXMucHJvcHMuY29uZmlnKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICBpZiAobmV4dFByb3BzLnN0b3J5ICE9PSB0aGlzLnByb3BzLnN0b3J5KSB7XHJcbiAgICAgIHRoaXMuc3RvcnkgPSBuZXh0UHJvcHMuc3RvcnkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2NvbXBvbmVudFdpbGxVbm1vdW50KCknKTtcclxuXHJcbiAgICB0aGlzLmNoYW5uZWwucmVtb3ZlTGlzdGVuZXIoS0VZLCB0aGlzLm9uQ2hhbmdlKTtcclxuICAgIHRoaXMuY2hhbm5lbC5lbWl0KEtFWSArICctdW5zZXQnKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlID0gc3RhdGUgPT4gdGhpcy5zZXRTdGF0ZShzdGF0ZSlcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5wcm9wcy5jb25maWc7XHJcbiAgICBjb25zdCBjb250cm9scyA9IHRoaXMuc3RhdGUuY29udHJvbHMgfHwge307XHJcblxyXG4gICAgY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgICBtYXJrczogY29uZmlnLmRlZmF1bHQubWFya3MsXHJcbiAgICAgIHJvb3Q6IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZy5kZWZhdWx0LnJvb3QpLFxyXG4gICAgICB3cmFwOiBPYmplY3QuYXNzaWduKHt9LCBjb25maWcuZGVmYXVsdC53cmFwKSxcclxuICAgICAgY29udGVudDogT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnLmRlZmF1bHQuY29udGVudCksXHJcbiAgICB9O1xyXG4gICAgZm9yKGxldCBrZXkgaW4gY29udHJvbHMpIHtcclxuICAgICAgY29uc3QgaXRlbSA9IGNvbmZpZy5jb250cm9sc1trZXldLml0ZW1zW2NvbnRyb2xzW2tleV1dO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh7aXRlbX0pO1xyXG4gICAgICBpZiAoaXRlbS5tYXJrcyAhPSBudWxsKSBzdHlsZXMubWFya3MgPSBpdGVtLm1hcmtzO1xyXG4gICAgICBzdHlsZXMucm9vdCA9IE9iamVjdC5hc3NpZ24oc3R5bGVzLnJvb3QsIGl0ZW0ucm9vdCk7XHJcbiAgICAgIHN0eWxlcy53cmFwID0gT2JqZWN0LmFzc2lnbihzdHlsZXMud3JhcCwgaXRlbS53cmFwKTtcclxuICAgICAgc3R5bGVzLmNvbnRlbnQgPSBPYmplY3QuYXNzaWduKHN0eWxlcy5jb250ZW50LCBpdGVtLmNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luID0gMDtcclxuXHJcbiAgICBjb25zdCBSb290ID0gJ2Rpdic7XHJcbiAgICBjb25zdCBXcmFwID0gc3R5bGVzLm1hcmtzID8gQ3JvcE1hcmtzIDogJ2Rpdic7XHJcbiAgICBjb25zdCBDb250ZW50ID0gJ2Rpdic7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Um9vdCBzdHlsZT17T2JqZWN0LmFzc2lnbih7fSwgc3R5bGVzLnJvb3QpfT5cclxuICAgICAgICA8V3JhcCBzdHlsZT17T2JqZWN0LmFzc2lnbih7fSwgc3R5bGVzLndyYXApfT5cclxuICAgICAgICAgIDxDb250ZW50IHN0eWxlPXtPYmplY3QuYXNzaWduKHt9LCBzdHlsZXMuY29udGVudCl9PlxyXG4gICAgICAgICAgICB7dGhpcy5zdG9yeX1cclxuICAgICAgICAgIDwvQ29udGVudD5cclxuICAgICAgICA8L1dyYXA+XHJcbiAgICAgIDwvUm9vdD5cclxuICAgICk7XHJcblxyXG5cclxuICB9XHJcbn1cclxuIl19