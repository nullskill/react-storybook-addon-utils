'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fullscreen = {
  position: 'absolute',
  height: '100%',
  width: '100%'
};
var centered = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

exports.default = {
  default: {
    root: _extends({}, fullscreen, {
      backgroundSize: 'cover'
    })
  },
  controls: [{
    name: 'Backgrounds',
    type: 'bg',
    items: [{
      name: 'No',
      root: {
        background: 'transparent'
      }
    }, {
      name: 'Image',
      root: {
        enable: true,
        backgroundImage: 'url("//mcheck.mgbeta.ru/images/bg3.jpg")'
      }
    }, {
      name: 'Gray',
      root: {
        background: '#eeeeee'
      }
    }]
  }, {
    name: 'Centered',
    items: [{
      name: 'No'
    }, {
      name: 'Yes',
      enable: true,
      root: _extends({}, centered)
    }]
  }, {
    name: 'Border',
    items: [{
      name: 'No'
    }, {
      name: 'Yes',
      wrap: {
        border: '1px black dotted'
      }
    }, {
      name: 'Marks',
      marks: true,
      enable: true
    }]
  }, {
    name: 'Paddings',
    items: [{
      name: 'No',
      enable: true
    }, {
      name: '10px',
      wrap: {
        padding: 10
      }
    }, {
      name: '50px',
      wrap: {
        padding: 50
      }
    }]
  }, {
    name: 'Width',
    items: [{
      name: 'No fix',
      enable: true
    }, {
      name: '100px',
      content: {
        width: 100
      }
    }, {
      name: '200px',
      content: {
        width: 200
      }
    }]
  }]
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25maWcuanMiXSwibmFtZXMiOlsiZnVsbHNjcmVlbiIsInBvc2l0aW9uIiwiaGVpZ2h0Iiwid2lkdGgiLCJjZW50ZXJlZCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJkZWZhdWx0Iiwicm9vdCIsImJhY2tncm91bmRTaXplIiwiY29udHJvbHMiLCJuYW1lIiwidHlwZSIsIml0ZW1zIiwiYmFja2dyb3VuZCIsImVuYWJsZSIsImJhY2tncm91bmRJbWFnZSIsIndyYXAiLCJib3JkZXIiLCJtYXJrcyIsInBhZGRpbmciLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQU1BLGFBQWE7QUFDakJDLFlBQVUsVUFETztBQUVqQkMsVUFBTyxNQUZVO0FBR2pCQyxTQUFPO0FBSFUsQ0FBbkI7QUFLQSxJQUFNQyxXQUFXO0FBQ2ZDLFdBQVMsTUFETTtBQUVmQyxrQkFBZ0IsUUFGRDtBQUdmQyxjQUFZO0FBSEcsQ0FBakI7O2tCQU1lO0FBQ2JDLFdBQVM7QUFDUEMsdUJBQ0tULFVBREw7QUFFRVUsc0JBQWdCO0FBRmxCO0FBRE8sR0FESTtBQU9iQyxZQUFVLENBQ1I7QUFDRUMsVUFBTSxhQURSO0FBRUVDLFVBQU0sSUFGUjtBQUdFQyxXQUFPLENBQ0w7QUFDRUYsWUFBTSxJQURSO0FBRUVILFlBQU07QUFDSk0sb0JBQVk7QUFEUjtBQUZSLEtBREssRUFPTDtBQUNFSCxZQUFNLE9BRFI7QUFFRUgsWUFBTTtBQUNKTyxnQkFBUSxJQURKO0FBRUpDLHlCQUFpQjtBQUZiO0FBRlIsS0FQSyxFQWNMO0FBQ0VMLFlBQU0sTUFEUjtBQUVFSCxZQUFNO0FBQ0pNLG9CQUFZO0FBRFI7QUFGUixLQWRLO0FBSFQsR0FEUSxFQTBCUjtBQUNFSCxVQUFNLFVBRFI7QUFFRUUsV0FBTyxDQUNMO0FBQ0VGLFlBQU07QUFEUixLQURLLEVBSUw7QUFDRUEsWUFBTSxLQURSO0FBRUVJLGNBQVEsSUFGVjtBQUdFUCx5QkFDS0wsUUFETDtBQUhGLEtBSks7QUFGVCxHQTFCUSxFQXlDUjtBQUNFUSxVQUFNLFFBRFI7QUFFRUUsV0FBTyxDQUNMO0FBQ0VGLFlBQU07QUFEUixLQURLLEVBSUw7QUFDRUEsWUFBTSxLQURSO0FBRUVNLFlBQU07QUFDSkMsZ0JBQVE7QUFESjtBQUZSLEtBSkssRUFVTDtBQUNFUCxZQUFNLE9BRFI7QUFFRVEsYUFBTyxJQUZUO0FBR0VKLGNBQVE7QUFIVixLQVZLO0FBRlQsR0F6Q1EsRUE0RFI7QUFDRUosVUFBTSxVQURSO0FBRUVFLFdBQU8sQ0FDTDtBQUNFRixZQUFNLElBRFI7QUFFRUksY0FBUTtBQUZWLEtBREssRUFLTDtBQUNFSixZQUFNLE1BRFI7QUFFRU0sWUFBTTtBQUNKRyxpQkFBUztBQURMO0FBRlIsS0FMSyxFQVdMO0FBQ0VULFlBQU0sTUFEUjtBQUVFTSxZQUFNO0FBQ0pHLGlCQUFTO0FBREw7QUFGUixLQVhLO0FBRlQsR0E1RFEsRUFpRlI7QUFDRVQsVUFBTSxPQURSO0FBRUVFLFdBQU8sQ0FDTDtBQUNFRixZQUFNLFFBRFI7QUFFRUksY0FBUTtBQUZWLEtBREssRUFLTDtBQUNFSixZQUFNLE9BRFI7QUFFRVUsZUFBUztBQUNQbkIsZUFBTztBQURBO0FBRlgsS0FMSyxFQVdMO0FBQ0VTLFlBQU0sT0FEUjtBQUVFVSxlQUFTO0FBQ1BuQixlQUFPO0FBREE7QUFGWCxLQVhLO0FBRlQsR0FqRlE7QUFQRyxDIiwiZmlsZSI6ImNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZ1bGxzY3JlZW4gPSB7XG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICBoZWlnaHQ6JzEwMCUnLFxuICB3aWR0aDogJzEwMCUnLFxufVxuY29uc3QgY2VudGVyZWQgPSB7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBkZWZhdWx0OiB7XG4gICAgcm9vdDoge1xuICAgICAgLi4uZnVsbHNjcmVlbixcbiAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgIH0sXG4gIH0sXG4gIGNvbnRyb2xzOiBbXG4gICAge1xuICAgICAgbmFtZTogJ0JhY2tncm91bmRzJyxcbiAgICAgIHR5cGU6ICdiZycsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ05vJyxcbiAgICAgICAgICByb290OiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdJbWFnZScsXG4gICAgICAgICAgcm9vdDoge1xuICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKFwiLy9tY2hlY2subWdiZXRhLnJ1L2ltYWdlcy9iZzMuanBnXCIpJyxcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnR3JheScsXG4gICAgICAgICAgcm9vdDoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJyNlZWVlZWUnLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0NlbnRlcmVkJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnTm8nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ1llcycsXG4gICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICAgIC4uLmNlbnRlcmVkXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0JvcmRlcicsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ05vJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdZZXMnLFxuICAgICAgICAgIHdyYXA6IHtcbiAgICAgICAgICAgIGJvcmRlcjogJzFweCBibGFjayBkb3R0ZWQnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ01hcmtzJyxcbiAgICAgICAgICBtYXJrczogdHJ1ZSxcbiAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnUGFkZGluZ3MnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdObycsXG4gICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJzEwcHgnLFxuICAgICAgICAgIHdyYXA6IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwLFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICc1MHB4JyxcbiAgICAgICAgICB3cmFwOiB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1MCxcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnV2lkdGgnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdObyBmaXgnLFxuICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICcxMDBweCcsXG4gICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnMjAwcHgnLFxuICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgIHdpZHRoOiAyMDAsXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgXVxuICAgIH0sXG4gIF1cbn1cbiJdfQ==