webpackJsonp([1],{

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(36);

var _reduxLogger = __webpack_require__(45);

var _reduxThunk = __webpack_require__(46);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxPromiseMiddleware = __webpack_require__(47);

var _reduxPromiseMiddleware2 = _interopRequireDefault(_reduxPromiseMiddleware);

var _coreReducers = __webpack_require__(50);

var _coreReducers2 = _interopRequireDefault(_coreReducers);

var _moduleReducer = __webpack_require__(541);

var _moduleReducer2 = _interopRequireDefault(_moduleReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var coreReducersList = (0, _coreReducers2.default)();
coreReducersList.moduleState = _moduleReducer2.default;

var reducers = (0, _redux.combineReducers)(coreReducersList);

var middleware = (0, _redux.applyMiddleware)((0, _reduxPromiseMiddleware2.default)(), _reduxThunk2.default, (0, _reduxLogger.createLogger)());

exports.default = (0, _redux.createStore)(reducers, middleware);

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__(3);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(12);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(11);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(5);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Transition = __webpack_require__(27);

var _Transition2 = _interopRequireDefault(_Transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Node = __webpack_require__(1).babelPluginFlowReactPropTypes_proptype_Node || __webpack_require__(0).any;

var babelPluginFlowReactPropTypes_proptype_TransitionCallback = __webpack_require__(27).babelPluginFlowReactPropTypes_proptype_TransitionCallback || __webpack_require__(0).any;

var reflow = function reflow(elem) {
  return elem.offsetHeight;
};

var styles = exports.styles = function styles(theme) {
  return {
    container: {
      height: 0,
      overflow: 'hidden',
      transition: theme.transitions.create('height')
    },
    entered: {
      height: 'auto',
      transitionDuration: '0ms'
    }
  };
};

var babelPluginFlowReactPropTypes_proptype_Props = {
  children: typeof babelPluginFlowReactPropTypes_proptype_Node === 'function' ? babelPluginFlowReactPropTypes_proptype_Node : __webpack_require__(0).shape(babelPluginFlowReactPropTypes_proptype_Node),
  classes: __webpack_require__(0).object,
  in: __webpack_require__(0).bool,
  onEnter: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : __webpack_require__(0).shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onEntering: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : __webpack_require__(0).shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onEntered: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : __webpack_require__(0).shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExit: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : __webpack_require__(0).shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExiting: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : __webpack_require__(0).shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExited: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : __webpack_require__(0).shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  theme: __webpack_require__(0).object,
  transitionDuration: __webpack_require__(0).oneOfType([__webpack_require__(0).number, __webpack_require__(0).string])
};

var Collapse = function (_React$Component) {
  (0, _inherits3.default)(Collapse, _React$Component);

  function Collapse() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Collapse);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Collapse.__proto__ || (0, _getPrototypeOf2.default)(Collapse)).call.apply(_ref, [this].concat(args))), _this), _this.wrapper = null, _this.handleEnter = function (element) {
      element.style.height = '0px';
      if (_this.props.onEnter) {
        _this.props.onEnter(element);
      }
    }, _this.handleEntering = function (element) {
      var _this$props = _this.props,
          transitionDuration = _this$props.transitionDuration,
          theme = _this$props.theme;

      var wrapperHeight = _this.wrapper ? _this.wrapper.clientHeight : 0;

      if (transitionDuration === 'auto') {
        var getAutoHeightDuration = theme.transitions.getAutoHeightDuration;

        element.style.transitionDuration = getAutoHeightDuration(wrapperHeight) + 'ms';
      } else if (typeof transitionDuration === 'number') {
        element.style.transitionDuration = transitionDuration + 'ms';
      } else {
        element.style.transitionDuration = transitionDuration;
      }

      element.style.height = wrapperHeight + 'px';

      if (_this.props.onEntering) {
        _this.props.onEntering(element);
      }
    }, _this.handleEntered = function (element) {
      element.style.transitionDuration = '0ms'; // safari fix
      element.style.height = 'auto';
      reflow(element);
      if (_this.props.onEntered) {
        _this.props.onEntered(element);
      }
    }, _this.handleExit = function (element) {
      var wrapperHeight = _this.wrapper ? _this.wrapper.clientHeight : 0;
      element.style.height = wrapperHeight + 'px';
      if (_this.props.onExit) {
        _this.props.onExit(element);
      }
    }, _this.handleExiting = function (element) {
      var _this$props2 = _this.props,
          transitionDuration = _this$props2.transitionDuration,
          theme = _this$props2.theme;

      var wrapperHeight = _this.wrapper ? _this.wrapper.clientHeight : 0;

      if (transitionDuration) {
        if (transitionDuration === 'auto') {
          var getAutoHeightDuration = theme.transitions.getAutoHeightDuration;

          element.style.transitionDuration = getAutoHeightDuration(wrapperHeight) + 'ms';
        } else if (typeof transitionDuration === 'number') {
          element.style.transitionDuration = transitionDuration + 'ms';
        } else {
          element.style.transitionDuration = transitionDuration;
        }
      }

      element.style.height = '0px';
      if (_this.props.onExiting) {
        _this.props.onExiting(element);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Collapse, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          onEnter = _props.onEnter,
          onEntering = _props.onEntering,
          onExit = _props.onExit,
          onExiting = _props.onExiting,
          transitionDuration = _props.transitionDuration,
          theme = _props.theme,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'classes', 'onEnter', 'onEntering', 'onExit', 'onExiting', 'transitionDuration', 'theme']);


      return _react2.default.createElement(
        _Transition2.default,
        (0, _extends3.default)({
          onEntering: this.handleEntering,
          onEnter: this.handleEnter,
          onEntered: this.handleEntered,
          enteredClassName: classes.entered,
          onExiting: this.handleExiting,
          onExit: this.handleExit
        }, other),
        _react2.default.createElement(
          'div',
          { className: classes.container },
          _react2.default.createElement(
            'div',
            {
              ref: function ref(node) {
                _this2.wrapper = node;
              }
            },
            children
          )
        )
      );
    }
  }]);
  return Collapse;
}(_react2.default.Component);

Collapse.defaultProps = {
  in: false,
  theme: {},
  transitionDuration: 300
};
exports.default = (0, _withStyles2.default)(styles, {
  withTheme: true,
  name: 'MuiCollapse'
})(Collapse);

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadUser = exports.deleteWebsite = exports.saveWebsite = exports.savePassword = exports.saveBirthday = exports.deleteDate = exports.saveDate = exports.deleteAddress = exports.saveAddress = exports.deleteEmailAddress = exports.saveEmailAddress = exports.deletePhone = exports.savePhone = exports.saveUsername = exports.saveJob = exports.saveName = undefined;

var _axios = __webpack_require__(33);

var _axios2 = _interopRequireDefault(_axios);

var _footerActions = __webpack_require__(63);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var DateTimeFormat = new Intl.DateTimeFormat('en-US', { day: "numeric", month: "long", year: "numeric" });

function setUser(user) {
    return {
        type: 'FNDTN_USER_ACCOUNT_SET_USER',
        payload: user
    };
}

function saveName(name) {
    return {
        type: "FNDTN_USER_ACCOUNT_SAVE_NAME",
        payload: name
    };
}

function saveJob(job) {
    return {
        type: "FNDTN_USER_ACCOUNT_SAVE_JOB",
        payload: job
    };
}

function saveUsername(username) {
    return {
        type: "FNDTN_USER_ACCOUNT_SAVE_USERNAME",
        payload: username
    };
}

function savePhone(phone, index) {
    return {
        type: "FNDTN_USER_ACCOUNT_SAVE_PHONE",
        payload: { phone: phone, index: index }
    };
}

function deletePhone(index) {
    return {
        type: "FNDTN_USER_ACCOUNT_DELETE_PHONE",
        payload: { index: index }
    };
}

function saveEmailAddress(email, index) {
    return {
        type: "FNDTN_USER_ACCOUNT_SAVE_EMAIL_ADDRESS",
        payload: { email: email, index: index }
    };
}

function deleteEmailAddress(index) {
    return {
        type: "FNDTN_USER_ACCOUNT_DELETE_EMAIL_ADDRESS",
        payload: { index: index }
    };
}

function saveAddress(address, index) {
    return {
        type: "FNDTN_USER_ACCOUNT_SAVE_ADDRESS",
        payload: { address: address, index: index }
    };
}

function deleteAddress(index) {
    return {
        type: "FNDTN_USER_ACCOUNT_DELETE_ADDRESS",
        payload: { index: index }
    };
}

function saveDate(event, index) {
    return {
        type: "FNDTN_USER_ACCOUNT_SAVE_DATE",
        payload: { event: event, index: index }
    };
}

function deleteDate(index) {
    return {
        type: "FNDTN_USER_ACCOUNT_DELETE_DATE",
        payload: { index: index }
    };
}

function saveBirthday(birthday) {
    return {
        type: "FNDTN_USER_ACCOUNT_SAVE_BIRTHDAY",
        payload: birthday
    };
}

function savePassword(password) {
    return {
        type: "FNDTN_USER_ACCOUNT_SAVE_PASSWORD",
        payload: password
    };
}

function saveWebsite(website, index) {
    return {
        type: "FNDTN_USER_ACCOUNT_SAVE_WEBSITE",
        payload: { website: website, index: index }
    };
}

function deleteWebsite(index) {
    return {
        type: "FNDTN_USER_ACCOUNT_DELETE_WEBSITE",
        payload: { index: index }
    };
}

function loadUser(dispatch, id) {
    var service = '/services/private/fndtn/users';
    if (id) {
        service = '/services/private/fndtn/userAccountManager/' + id;
    }

    _axios2.default.get(service).then(function (res) {
        dispatch((0, _footerActions.setFooterMessage)('User loaded.'));
        dispatch(setUser(res.data.user));
    }).catch(function (error) {
        console.log(error);
        dispatch((0, _footerActions.setFooterMessage)('Unable to load user: ' + error.message));
    });
}

exports.saveName = saveName;
exports.saveJob = saveJob;
exports.saveUsername = saveUsername;
exports.savePhone = savePhone;
exports.deletePhone = deletePhone;
exports.saveEmailAddress = saveEmailAddress;
exports.deleteEmailAddress = deleteEmailAddress;
exports.saveAddress = saveAddress;
exports.deleteAddress = deleteAddress;
exports.saveDate = saveDate;
exports.deleteDate = deleteDate;
exports.saveBirthday = saveBirthday;
exports.savePassword = savePassword;
exports.saveWebsite = saveWebsite;
exports.deleteWebsite = deleteWebsite;
exports.loadUser = loadUser;

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactRedux = __webpack_require__(14);

var _store = __webpack_require__(267);

var _store2 = _interopRequireDefault(_store);

var _styles = __webpack_require__(15);

var _Layout = __webpack_require__(542);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this license header, choose License Headers in Project Properties.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this template file, choose Tools | Templates
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * and open the template in the editor.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var theme = (0, _styles.createMuiTheme)();

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {};
        return _this;
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _styles.MuiThemeProvider,
                    { theme: theme },
                    _react2.default.createElement(
                        _reactRedux.Provider,
                        { store: _store2.default },
                        _react2.default.createElement(_Layout2.default, null)
                    )
                )
            );
        }
    }]);

    return App;
}(_react2.default.Component);

(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('App'));

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(33);

var _axios2 = _interopRequireDefault(_axios);

var _store = __webpack_require__(267);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var defaultState = { user: {} };

var moduleReducer = function moduleReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments[1];

    var newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'FNDTN_USER_ACCOUNT_SET_USER':
            {
                newState.user = action.payload;
                break;
            }
        case 'FNDTN_USER_ACCOUNT_SAVE_NAME':
            {
                newState.user.name = action.payload;
                break;
            }
        case 'FNDTN_USER_ACCOUNT_SAVE_JOB':
            {
                newState.user.job = action.payload;
                break;
            }
        case 'FNDTN_USER_ACCOUNT_SAVE_USERNAME':
            {
                newState.user.account.username = action.payload;
                break;
            }
        case 'FNDTN_USER_ACCOUNT_SAVE_PHONE':
            {
                if (action.payload.index >= 0) {
                    newState.user.phones[action.payload.index] = action.payload.phone;
                } else {
                    newState.user.phones.push(action.payload.phone);
                }
                break;
            }
        case 'FNDTN_ACCOUNT_DELETE_PHONE':
            {
                var phones = newState.user.phones.slice();
                phones.splice(action.payload.index, 1);
                newState.user.phones = phones;
                break;
            }
        case 'FNDTN_USER_ACCOUNT_SAVE_EMAIL_ADDRESS':
            {
                if (action.payload.index >= 0) {
                    newState.user.emails[action.payload.index] = action.payload.email;
                } else {
                    newState.user.emails.push(action.payload.email);
                }
                break;
            }
        case 'FNDTN_USER_ACCOUNT_DELETE_EMAIL_ADDRESS':
            {
                var emails = newState.user.emails.slice();
                emails.splice(action.payload.index, 1);
                newState.user.emails = emails;
                break;
            }
        case 'FNDTN_USER_ACCOUNT_SAVE_ADDRESS':
            {
                if (action.payload.index >= 0) {
                    newState.user.addresses[action.payload.index] = action.payload.address;
                } else {
                    newState.user.addresses.push(action.payload.address);
                }
                break;
            }
        case 'FNDTN_USER_ACCOUNT_DELETE_ADDRESS':
            {
                var addresses = newState.user.addresses.slice();
                addresses.splice(action.payload.index, 1);
                newState.user.addresses = addresses;
                break;
            }
        case 'FNDTN_USER_ACCOUNT_SAVE_DATE':
            {
                if (action.payload.index >= 0) {
                    newState.user.eventDates[action.payload.index] = action.payload.event;
                } else {
                    newState.user.eventDates.push(action.payload.event);
                }
                break;
            }
        case 'FNDTN_USER_ACCOUNT_DELETE_DATE':
            {
                var eventDates = newState.user.eventDates.slice();
                eventDates.splice(action.payload.index, 1);
                newState.user.eventDates = eventDates;
                break;
            }
        case 'FNDTN_USER_ACCOUNT_SAVE_BIRTHDAY':
            {
                newState.user.birthday = action.payload;
                break;
            }
        case 'FNDTN_USER_ACCOUNT_SAVE_PASSWORD':
            {
                //TODO need to create and call service for updating account password
                console.log('//TODO need to create and call service updatePassword');
                break;
            }
        case 'FNDTN_USER_ACCOUNT_SAVE_WEBSITE':
            {
                if (action.payload.index >= 0) {
                    newState.user.websites[action.payload.index] = action.payload.website;
                } else {
                    newState.user.websites.push(action.payload.website);
                }
                break;
            }
        case 'FNDTN_USER_ACCOUNT_DELETE_WEBSITE':
            {
                var websites = newState.user.websites.slice();
                websites.splice(action.payload.index, 1);
                newState.user.websites = websites;
                break;
            }
    }
    return newState;
};

exports.default = moduleReducer;

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(24);

var _reactRedux = __webpack_require__(14);

var _Paper = __webpack_require__(16);

var _Paper2 = _interopRequireDefault(_Paper);

var _styles = __webpack_require__(15);

var _AppHeader = __webpack_require__(54);

var _AppHeader2 = _interopRequireDefault(_AppHeader);

var _AppFooter = __webpack_require__(57);

var _AppFooter2 = _interopRequireDefault(_AppFooter);

var _UserAccountForm = __webpack_require__(543);

var _UserAccountForm2 = _interopRequireDefault(_UserAccountForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this license header, choose License Headers in Project Properties.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this template file, choose Tools | Templates
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * and open the template in the editor.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var styles = function styles(theme) {
    return {
        layoutPaper: {
            marginTop: '70px'
        }
    };
};

var Layout = function (_React$Component) {
    _inherits(Layout, _React$Component);

    function Layout() {
        _classCallCheck(this, Layout);

        return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));
    }

    _createClass(Layout, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactRouterDom.Router,
                { history: this.props.state.history },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_AppHeader2.default, null),
                    _react2.default.createElement(
                        _Paper2.default,
                        { elevation: 5, className: this.props.classes.layoutPaper },
                        _react2.default.createElement(_UserAccountForm2.default, { dispatch: this.props.dispatch }),
                        _react2.default.createElement(_AppFooter2.default, null)
                    )
                )
            );
        }
    }]);

    return Layout;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        state: { history: state.navigationState.history, userId: state.navigationState.history.location.pathname.substring(1) }
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        dispatch: dispatch
    };
};

exports.default = (0, _styles.withStyles)(styles)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Layout));

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(14);

var _Paper = __webpack_require__(16);

var _Paper2 = _interopRequireDefault(_Paper);

var _NameCard = __webpack_require__(544);

var _NameCard2 = _interopRequireDefault(_NameCard);

var _JobCard = __webpack_require__(549);

var _JobCard2 = _interopRequireDefault(_JobCard);

var _AccountCard = __webpack_require__(550);

var _AccountCard2 = _interopRequireDefault(_AccountCard);

var _PhoneCard = __webpack_require__(551);

var _PhoneCard2 = _interopRequireDefault(_PhoneCard);

var _EmailCard = __webpack_require__(552);

var _EmailCard2 = _interopRequireDefault(_EmailCard);

var _DateCard = __webpack_require__(553);

var _DateCard2 = _interopRequireDefault(_DateCard);

var _BirthdayCard = __webpack_require__(554);

var _BirthdayCard2 = _interopRequireDefault(_BirthdayCard);

var _AddressCard = __webpack_require__(555);

var _AddressCard2 = _interopRequireDefault(_AddressCard);

var _WebsiteCard = __webpack_require__(556);

var _WebsiteCard2 = _interopRequireDefault(_WebsiteCard);

var _FormStyle = __webpack_require__(111);

var _FormStyle2 = _interopRequireDefault(_FormStyle);

var _Card = __webpack_require__(35);

var _Card2 = _interopRequireDefault(_Card);

var _Collapse = __webpack_require__(41);

var _Collapse2 = _interopRequireDefault(_Collapse);

var _Icon = __webpack_require__(18);

var _Icon2 = _interopRequireDefault(_Icon);

var _IconButton = __webpack_require__(20);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Grid = __webpack_require__(19);

var _Grid2 = _interopRequireDefault(_Grid);

var _Typography = __webpack_require__(21);

var _Typography2 = _interopRequireDefault(_Typography);

var _styles = __webpack_require__(15);

var _navigationActions = __webpack_require__(83);

var _moduleActions = __webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this license header, choose License Headers in Project Properties.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this template file, choose Tools | Templates
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * and open the template in the editor.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var styles = function styles(theme) {
    return {
        root: {
            marginTop: theme.spacing.unit * 3,
            width: '100%'
        }
    };
};

var setIcon = function setIcon(name) {
    return _react2.default.createElement(
        _Icon2.default,
        { className: 'material-icons' },
        name
    );
};

var UserAccountForm = function (_React$Component) {
    _inherits(UserAccountForm, _React$Component);

    function UserAccountForm() {
        _classCallCheck(this, UserAccountForm);

        return _possibleConstructorReturn(this, (UserAccountForm.__proto__ || Object.getPrototypeOf(UserAccountForm)).call(this));
    }

    _createClass(UserAccountForm, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Grid2.default,
                { container: true },
                _react2.default.createElement(_Grid2.default, { item: true, xs: 1 }),
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, xs: 10 },
                    _react2.default.createElement(
                        _Paper2.default,
                        null,
                        _react2.default.createElement(
                            _Grid2.default,
                            { container: true, justify: 'center' },
                            _react2.default.createElement(
                                _Grid2.default,
                                { item: true, xl: 12 },
                                _react2.default.createElement(
                                    _Typography2.default,
                                    { type: 'display2' },
                                    'User Account'
                                )
                            )
                        ),
                        _react2.default.createElement(_NameCard2.default, {
                            dispatch: this.props.dispatch.bind(this),
                            record: this.props.state.name || {}
                        }),
                        _react2.default.createElement(_JobCard2.default, {
                            dispatch: this.props.dispatch.bind(this),
                            record: this.props.state.job || {}
                        }),
                        _react2.default.createElement(_AccountCard2.default, {
                            dispatch: this.props.dispatch.bind(this),
                            record: this.props.state.account || {}
                        }),
                        _react2.default.createElement(_PhoneCard2.default, {
                            dispatch: this.props.dispatch.bind(this),
                            list: this.props.state.phones || []
                        }),
                        _react2.default.createElement(_EmailCard2.default, {
                            dispatch: this.props.dispatch.bind(this),
                            list: this.props.state.emails || []
                        }),
                        _react2.default.createElement(_BirthdayCard2.default, {
                            dispatch: this.props.dispatch.bind(this),
                            record: this.props.state.birthday || new Date()
                        }),
                        _react2.default.createElement(_DateCard2.default, {
                            dispatch: this.props.dispatch.bind(this),
                            list: this.props.state.eventDates || []
                        }),
                        _react2.default.createElement(_AddressCard2.default, {
                            dispatch: this.props.dispatch.bind(this),
                            list: this.props.state.addresses || []
                        }),
                        _react2.default.createElement(_WebsiteCard2.default, {
                            dispatch: this.props.dispatch.bind(this),
                            list: this.props.state.websites || []
                        })
                    )
                ),
                _react2.default.createElement(_Grid2.default, { item: true, xs: 1 })
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            (0, _moduleActions.loadUser)(this.props.dispatch, this.props.userAccountId);
        }
    }]);

    return UserAccountForm;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        //    state: state.userState.user,
        state: state.moduleState.user,
        //    moduleState: state.moduleState,
        userAccountId: state.navigationState.history.location.pathname.substring(1) || undefined
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        dispatch: dispatch
    };
};

exports.default = (0, _styles.withStyles)(styles)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UserAccountForm));

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _TextField = __webpack_require__(22);

var _TextField2 = _interopRequireDefault(_TextField);

var _Card = __webpack_require__(35);

var _Card2 = _interopRequireDefault(_Card);

var _Collapse = __webpack_require__(41);

var _Collapse2 = _interopRequireDefault(_Collapse);

var _Grid = __webpack_require__(19);

var _Grid2 = _interopRequireDefault(_Grid);

var _Icon = __webpack_require__(18);

var _Icon2 = _interopRequireDefault(_Icon);

var _IconButton = __webpack_require__(20);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _moduleActions = __webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this license header, choose License Headers in Project Properties.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this template file, choose Tools | Templates
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * and open the template in the editor.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var NameCard = function (_React$Component) {
    _inherits(NameCard, _React$Component);

    _createClass(NameCard, [{
        key: 'cancel',
        value: function cancel() {
            this.clearForm();
            this.toggleExpanded();
        }
    }, {
        key: 'clearForm',
        value: function clearForm() {
            this.setState({ form: {} });
        }
    }]);

    function NameCard() {
        _classCallCheck(this, NameCard);

        var _this = _possibleConstructorReturn(this, (NameCard.__proto__ || Object.getPrototypeOf(NameCard)).call(this));

        _this.state = {
            expanded: false,
            form: {}
        };
        return _this;
    }

    _createClass(NameCard, [{
        key: 'edit',
        value: function edit() {
            var form = JSON.parse(JSON.stringify(this.props.record));
            this.setState({
                form: form
            });
            this.toggleExpanded();
        }
    }, {
        key: 'save',
        value: function save() {
            this.props.dispatch((0, _moduleActions.saveName)(this.state.form));
            this.toggleExpanded();
            this.clearForm();
        }
    }, {
        key: 'setFieldValue',
        value: function setFieldValue(event) {
            var newState = Object.assign(this.state.form);
            newState[event.target.name] = event.target.value;
            this.setState(newState);
        }
    }, {
        key: 'toggleExpanded',
        value: function toggleExpanded() {
            this.setState({ expanded: !this.state.expanded });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Card2.default,
                null,
                _react2.default.createElement(
                    _Card.CardContent,
                    null,
                    _react2.default.createElement(
                        _Grid2.default,
                        { container: true },
                        _react2.default.createElement(
                            _Grid2.default,
                            { item: true, xs: 1 },
                            _react2.default.createElement(
                                _Icon2.default,
                                { className: 'material-icons' },
                                'account_circle'
                            )
                        ),
                        _react2.default.createElement(
                            _Grid2.default,
                            { item: true, xs: 1 },
                            'Name'
                        ),
                        _react2.default.createElement(
                            _Grid2.default,
                            { item: true, xs: 9 },
                            (this.props.record.first || '') + " " + (this.props.record.middle || '') + " " + (this.props.record.last || '') + " ( " + (this.props.record.prefered || this.props.record.first) + " )"
                        ),
                        _react2.default.createElement(
                            _Grid2.default,
                            { item: true, xs: 1 },
                            _react2.default.createElement(
                                _IconButton2.default,
                                {
                                    onClick: this.state.expanded ? this.cancel.bind(this) : this.edit.bind(this)
                                },
                                _react2.default.createElement(
                                    _Icon2.default,
                                    null,
                                    this.state.expanded ? 'close' : 'mode_edit'
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _Collapse2.default,
                    { 'in': this.state.expanded, transitionDuration: 'auto', unmountOnExit: true },
                    _react2.default.createElement(
                        _Card.CardContent,
                        null,
                        _react2.default.createElement(
                            _Grid2.default,
                            { container: true },
                            _react2.default.createElement(_Grid2.default, { item: true, xs: 1 }),
                            _react2.default.createElement(
                                _Grid2.default,
                                { item: true, xs: 10 },
                                _react2.default.createElement(
                                    _Grid2.default,
                                    { container: true },
                                    _react2.default.createElement(
                                        _Grid2.default,
                                        { item: true, xs: 3 },
                                        _react2.default.createElement(_TextField2.default, {
                                            id: 'first',
                                            name: 'first',
                                            value: this.state.form.first,
                                            label: 'First',
                                            fullWidth: true,
                                            onChange: this.setFieldValue.bind(this)
                                        })
                                    ),
                                    _react2.default.createElement(
                                        _Grid2.default,
                                        { item: true, xs: 3 },
                                        _react2.default.createElement(_TextField2.default, {
                                            id: 'middle',
                                            name: 'middle',
                                            value: this.state.form.middle,
                                            label: 'Middle',
                                            fullWidth: true,
                                            onChange: this.setFieldValue.bind(this)
                                        })
                                    ),
                                    _react2.default.createElement(
                                        _Grid2.default,
                                        { item: true, xs: 3 },
                                        _react2.default.createElement(_TextField2.default, {
                                            id: 'last',
                                            name: 'last',
                                            value: this.state.form.last,
                                            label: 'Last',
                                            fullWidth: true,
                                            onChange: this.setFieldValue.bind(this)
                                        })
                                    ),
                                    _react2.default.createElement(
                                        _Grid2.default,
                                        { item: true, xs: 3 },
                                        _react2.default.createElement(_TextField2.default, {
                                            id: 'prefered',
                                            name: 'prefered',
                                            value: this.state.form.prefered,
                                            label: 'Prefered',
                                            fullWidth: true,
                                            onChange: this.setFieldValue.bind(this)
                                        })
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _Grid2.default,
                                { item: true, xs: 1 },
                                _react2.default.createElement(
                                    _IconButton2.default,
                                    {
                                        onClick: this.save.bind(this)
                                    },
                                    _react2.default.createElement(
                                        _Icon2.default,
                                        null,
                                        'done'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return NameCard;
}(_react2.default.Component);

exports.default = NameCard;

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _TextField = __webpack_require__(22);

var _TextField2 = _interopRequireDefault(_TextField);

var _Card = __webpack_require__(35);

var _Card2 = _interopRequireDefault(_Card);

var _Collapse = __webpack_require__(41);

var _Collapse2 = _interopRequireDefault(_Collapse);

var _Icon = __webpack_require__(18);

var _Icon2 = _interopRequireDefault(_Icon);

var _IconButton = __webpack_require__(20);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Grid = __webpack_require__(19);

var _Grid2 = _interopRequireDefault(_Grid);

var _styles = __webpack_require__(15);

var _moduleActions = __webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this license header, choose License Headers in Project Properties.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this template file, choose Tools | Templates
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * and open the template in the editor.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var styles = function styles(theme) {
    return {
        root: {}
    };
};

var setIcon = function setIcon(name) {
    return _react2.default.createElement(
        _Icon2.default,
        { className: 'material-icons' },
        name
    );
};

var JobCard = function (_React$Component) {
    _inherits(JobCard, _React$Component);

    _createClass(JobCard, [{
        key: 'cancel',
        value: function cancel() {
            this.clearForm();
            this.toggleExpanded();
        }
    }, {
        key: 'clearForm',
        value: function clearForm() {
            this.setState({ form: {} });
        }
    }]);

    function JobCard() {
        _classCallCheck(this, JobCard);

        var _this = _possibleConstructorReturn(this, (JobCard.__proto__ || Object.getPrototypeOf(JobCard)).call(this));

        _this.state = {
            expanded: false,
            form: {}
        };
        return _this;
    }

    _createClass(JobCard, [{
        key: 'edit',
        value: function edit() {
            var form = JSON.parse(JSON.stringify(this.props.record));
            this.setState({
                form: form
            });
            this.toggleExpanded();
        }
    }, {
        key: 'save',
        value: function save() {
            this.props.dispatch((0, _moduleActions.saveJob)(this.state.form));
            this.toggleExpanded();
            this.clearForm();
        }
    }, {
        key: 'setFieldValue',
        value: function setFieldValue(event) {
            var newState = Object.assign({}, this.state.form);
            newState[event.target.name] = event.target.value;
            this.setState({ form: newState });
        }
    }, {
        key: 'toggleExpanded',
        value: function toggleExpanded() {
            this.setState({ expanded: !this.state.expanded });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Card2.default,
                null,
                _react2.default.createElement(
                    _Card.CardContent,
                    null,
                    _react2.default.createElement(
                        _Grid2.default,
                        { container: true },
                        _react2.default.createElement(
                            _Grid2.default,
                            { item: true, xs: 1 },
                            _react2.default.createElement(
                                _Icon2.default,
                                { className: 'material-icons' },
                                'business'
                            )
                        ),
                        _react2.default.createElement(
                            _Grid2.default,
                            { item: true, xs: 1 },
                            'Job'
                        ),
                        _react2.default.createElement(
                            _Grid2.default,
                            { item: true, xs: 9 },
                            _react2.default.createElement(
                                _Grid2.default,
                                { container: true },
                                _react2.default.createElement(
                                    _Grid2.default,
                                    { item: true, xs: 6 },
                                    _react2.default.createElement(
                                        'strong',
                                        null,
                                        'Company: '
                                    ),
                                    this.props.record.company || ''
                                ),
                                _react2.default.createElement(
                                    _Grid2.default,
                                    { item: true, xs: 6 },
                                    _react2.default.createElement(
                                        'strong',
                                        null,
                                        ' Title: '
                                    ),
                                    this.props.record.title || ''
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _Grid2.default,
                            { item: true, xs: 1 },
                            _react2.default.createElement(
                                _IconButton2.default,
                                {
                                    onClick: this.state.expanded ? this.cancel.bind(this) : this.edit.bind(this)
                                },
                                _react2.default.createElement(
                                    _Icon2.default,
                                    null,
                                    this.state.expanded ? 'close' : 'mode_edit'
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _Collapse2.default,
                    { 'in': this.state.expanded, transitionDuration: 'auto', unmountOnExit: true },
                    _react2.default.createElement(
                        _Card.CardContent,
                        null,
                        _react2.default.createElement(
                            _Grid2.default,
                            { container: true },
                            _react2.default.createElement(_Grid2.default, { item: true, xs: 1 }),
                            _react2.default.createElement(
                                _Grid2.default,
                                { item: true, xs: 10 },
                                _react2.default.createElement(
                                    _Grid2.default,
                                    { container: true },
                                    _react2.default.createElement(
                                        _Grid2.default,
                                        { item: true, xs: 6 },
                                        _react2.default.createElement(_TextField2.default, {
                                            id: 'company',
                                            name: 'company',
                                            value: this.state.form.company,
                                            label: 'Company',
                                            fullWidth: true,
                                            onChange: this.setFieldValue.bind(this)
                                        })
                                    ),
                                    _react2.default.createElement(
                                        _Grid2.default,
                                        { item: true, xs: 6 },
                                        _react2.default.createElement(_TextField2.default, {
                                            id: 'title',
                                            name: 'title',
                                            value: this.state.form.title,
                                            label: 'Title',
                                            fullWidth: true,
                                            onChange: this.setFieldValue.bind(this)
                                        })
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _Grid2.default,
                                { item: true, xs: 1 },
                                _react2.default.createElement(
                                    _IconButton2.default,
                                    {
                                        onClick: this.save.bind(this)
                                    },
                                    _react2.default.createElement(
                                        _Icon2.default,
                                        null,
                                        'done'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return JobCard;
}(_react2.default.Component);

;

exports.default = (0, _styles.withStyles)(styles)(JobCard);

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _TextField = __webpack_require__(22);

var _TextField2 = _interopRequireDefault(_TextField);

var _Card = __webpack_require__(35);

var _Card2 = _interopRequireDefault(_Card);

var _Collapse = __webpack_require__(41);

var _Collapse2 = _interopRequireDefault(_Collapse);

var _Icon = __webpack_require__(18);

var _Icon2 = _interopRequireDefault(_Icon);

var _IconButton = __webpack_require__(20);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Grid = __webpack_require__(19);

var _Grid2 = _interopRequireDefault(_Grid);

var _Table = __webpack_require__(34);

var _Table2 = _interopRequireDefault(_Table);

var _moduleActions = __webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this license header, choose License Headers in Project Properties.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this template file, choose Tools | Templates
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * and open the template in the editor.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var AccountCard = function (_React$Component) {
    _inherits(AccountCard, _React$Component);

    _createClass(AccountCard, [{
        key: 'cancel',
        value: function cancel() {
            this.clearForm();
            this.toggleExpanded();
        }
    }, {
        key: 'clearForm',
        value: function clearForm() {
            this.setState({ form: {
                    username: '',
                    password: '',
                    confirmPassword: '',
                    oldPassword: ''
                }
            });
        }
    }]);

    function AccountCard() {
        _classCallCheck(this, AccountCard);

        var _this = _possibleConstructorReturn(this, (AccountCard.__proto__ || Object.getPrototypeOf(AccountCard)).call(this));

        _this.state = {
            expanded: false,
            validForm: true,
            errorText: {
                password: null
            },
            form: {}
        };
        return _this;
    }

    _createClass(AccountCard, [{
        key: 'edit',
        value: function edit() {
            var form = JSON.parse(JSON.stringify(this.props.record));
            form.password = '';
            form.confirmPassword = '';
            form.oldPassword = '';
            this.setState({
                form: form
            });
            this.toggleExpanded();
        }
    }, {
        key: 'save',
        value: function save() {
            this.props.dispatch((0, _moduleActions.saveUsername)(this.state.form.username));
            if (this.state.form.password && this.state.form.oldPassword && this.state.form.password === this.state.form.confirmPassword) {
                this.props.dispatch((0, _moduleActions.savePassword)(this.state.form.password));
            }
            this.toggleExpanded();
            this.clearForm();
        }
    }, {
        key: 'setFieldValue',
        value: function setFieldValue(event) {
            var newState = Object.assign(this.state.form);
            newState[event.target.name] = event.target.value;
            this.setState({ form: newState });
            this.validateForm();
        }
    }, {
        key: 'toggleExpanded',
        value: function toggleExpanded() {
            this.setState({ expanded: !this.state.expanded });
        }
    }, {
        key: 'validateForm',
        value: function validateForm() {
            if (this.state.form.password !== this.state.form.confirmPassword) {
                this.setState({ errorText: { password: 'Passwords Do Not Match!' } });
            } else {
                this.setState({ errorText: { password: null } });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Card2.default,
                null,
                _react2.default.createElement(
                    _Card.CardContent,
                    null,
                    _react2.default.createElement(
                        _Grid2.default,
                        { container: true },
                        _react2.default.createElement(
                            _Grid2.default,
                            { item: true, xs: 1 },
                            _react2.default.createElement(
                                _Icon2.default,
                                { className: 'material-icons' },
                                'account_circle'
                            )
                        ),
                        _react2.default.createElement(
                            _Grid2.default,
                            { item: true, xs: 1 },
                            'Account'
                        ),
                        _react2.default.createElement(
                            _Grid2.default,
                            { item: true, xs: 9 },
                            _react2.default.createElement(
                                'strong',
                                null,
                                'Username: '
                            ),
                            this.props.record.username
                        ),
                        _react2.default.createElement(
                            _Grid2.default,
                            { item: true, xs: 1 },
                            _react2.default.createElement(
                                _IconButton2.default,
                                {
                                    onClick: this.state.expanded ? this.cancel.bind(this) : this.edit.bind(this)
                                },
                                _react2.default.createElement(
                                    _Icon2.default,
                                    null,
                                    this.state.expanded ? 'close' : 'mode_edit'
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _Collapse2.default,
                    { 'in': this.state.expanded, transitionDuration: 'auto', unmountOnExit: true },
                    _react2.default.createElement(
                        _Card.CardContent,
                        null,
                        _react2.default.createElement(
                            _Grid2.default,
                            { container: true },
                            _react2.default.createElement(
                                _Grid2.default,
                                { container: true },
                                _react2.default.createElement(_Grid2.default, { item: true, xs: 1 }),
                                _react2.default.createElement(
                                    _Grid2.default,
                                    { item: true, xs: 10 },
                                    _react2.default.createElement(_TextField2.default, {
                                        id: 'username',
                                        name: 'username',
                                        label: 'Username',
                                        fullWidth: true,
                                        onChange: this.setFieldValue.bind(this)
                                    })
                                ),
                                _react2.default.createElement(
                                    _Grid2.default,
                                    { item: true, xs: 1 },
                                    _react2.default.createElement(
                                        _IconButton2.default,
                                        {
                                            onClick: this.save.bind(this)
                                        },
                                        _react2.default.createElement(
                                            _Icon2.default,
                                            null,
                                            'done'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _Grid2.default,
                                { container: true },
                                _react2.default.createElement(_Grid2.default, { item: true, xs: 1 }),
                                _react2.default.createElement(
                                    _Grid2.default,
                                    { item: true, xs: 10 },
                                    _react2.default.createElement(
                                        _Grid2.default,
                                        { container: true },
                                        _react2.default.createElement(
                                            _Grid2.default,
                                            { item: true, xs: 4 },
                                            _react2.default.createElement(_TextField2.default, {
                                                id: 'oldPassword',
                                                name: 'oldPassword',
                                                value: this.state.form.oldPassword,
                                                label: 'Old Password',
                                                fullWidth: true,
                                                onChange: this.setFieldValue.bind(this)
                                            })
                                        ),
                                        _react2.default.createElement(
                                            _Grid2.default,
                                            { item: true, xs: 4 },
                                            _react2.default.createElement(_TextField2.default, {
                                                id: 'password',
                                                name: 'password',
                                                value: this.state.form.password,
                                                label: 'Password',
                                                floatingLabelFixed: false,
                                                fullWidth: true,
                                                onChange: this.setFieldValue.bind(this),
                                                errorText: this.state.errorText.password
                                            })
                                        ),
                                        _react2.default.createElement(
                                            _Grid2.default,
                                            { item: true, xs: 4 },
                                            _react2.default.createElement(_TextField2.default, {
                                                id: 'confirmPassword',
                                                name: 'confirmPassword',
                                                value: this.state.form.confirmPassword,
                                                label: 'Confirm Password',
                                                fullWidth: true,
                                                onChange: this.setFieldValue.bind(this)
                                            })
                                        )
                                    )
                                ),
                                _react2.default.createElement(_Grid2.default, { item: true, xs: 1 })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AccountCard;
}(_react2.default.Component);

exports.default = AccountCard;

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _TextField = __webpack_require__(22);

var _TextField2 = _interopRequireDefault(_TextField);

var _Card = __webpack_require__(35);

var _Card2 = _interopRequireDefault(_Card);

var _Collapse = __webpack_require__(41);

var _Collapse2 = _interopRequireDefault(_Collapse);

var _Grid = __webpack_require__(19);

var _Grid2 = _interopRequireDefault(_Grid);

var _Icon = __webpack_require__(18);

var _Icon2 = _interopRequireDefault(_Icon);

var _IconButton = __webpack_require__(20);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _moduleActions = __webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this license header, choose License Headers in Project Properties.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this template file, choose Tools | Templates
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * and open the template in the editor.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var PhoneCard = function (_React$Component) {
    _inherits(PhoneCard, _React$Component);

    function PhoneCard() {
        _classCallCheck(this, PhoneCard);

        var _this = _possibleConstructorReturn(this, (PhoneCard.__proto__ || Object.getPrototypeOf(PhoneCard)).call(this));

        _this.state = {
            expanded: false,
            form: {
                _id: -1,
                phone: '',
                label: ''
            }
        };
        return _this;
    }

    _createClass(PhoneCard, [{
        key: 'toggleExpand',
        value: function toggleExpand() {
            this.setState({ expanded: !this.state.expanded });
        }
    }, {
        key: 'clearForm',
        value: function clearForm() {
            this.setState({
                form: {
                    _id: -1,
                    phone: '',
                    label: ''
                }
            });
        }
    }, {
        key: 'addOrClose',
        value: function addOrClose() {
            this.clearForm();
            this.toggleExpand();
        }
    }, {
        key: 'delete',
        value: function _delete(event) {
            this.props.dispatch((0, _moduleActions.deletePhone)(parseInt(event.currentTarget.id)));
        }
    }, {
        key: 'edit',
        value: function edit(event) {
            var id = parseInt(event.currentTarget.id);
            var newState = {
                form: {
                    _id: id,
                    phone: this.props.list[id].phone,
                    label: this.props.list[id].label
                }
            };
            this.setState(newState);
            if (!this.state.expanded) this.toggleExpand();
        }
    }, {
        key: 'setFieldValue',
        value: function setFieldValue(event) {
            var newState = Object.assign({}, this.state.form);
            newState[event.target.name] = event.target.value;
            this.setState({ form: newState });
        }
    }, {
        key: 'save',
        value: function save() {
            this.props.dispatch((0, _moduleActions.savePhone)(this.state.form, parseInt(this.state.form._id)));
            this.toggleExpand();
            this.clearForm();
        }
    }, {
        key: 'row',
        value: function row(phone, index) {
            return _react2.default.createElement(
                _Grid2.default,
                { container: true, key: 'phone' + index },
                _react2.default.createElement(_Grid2.default, { item: true, xs: 2 }),
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, xs: 1 },
                    _react2.default.createElement(
                        'strong',
                        null,
                        phone.label,
                        ':'
                    )
                ),
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, xs: 8 },
                    phone.phone
                ),
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, xs: 1 },
                    _react2.default.createElement(
                        _IconButton2.default,
                        {
                            id: index,
                            onClick: this.edit.bind(this)
                        },
                        _react2.default.createElement(
                            _Icon2.default,
                            null,
                            'mode_edit'
                        )
                    ),
                    _react2.default.createElement(
                        _IconButton2.default,
                        {
                            id: index,
                            onClick: this.delete.bind(this)
                        },
                        _react2.default.createElement(
                            _Icon2.default,
                            null,
                            'delete'
                        )
                    )
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _Card2.default,
                null,
                _react2.default.createElement(
                    _Card.CardContent,
                    null,
                    _react2.default.createElement(
                        _Grid2.default,
                        { container: true },
                        _react2.default.createElement(
                            _Grid2.default,
                            { item: true, xs: 1 },
                            _react2.default.createElement(
                                _Icon2.default,
                                { className: 'material-icons' },
                                'phone'
                            )
                        ),
                        _react2.default.createElement(
                            _Grid2.default,
                            { item: true, xs: 1 },
                            'Phones'
                        ),
                        _react2.default.createElement(_Grid2.default, { item: true, xs: 9 }),
                        _react2.default.createElement(
                            _Grid2.default,
                            { item: true, xs: 1 },
                            _react2.default.createElement(
                                _IconButton2.default,
                                {
                                    onClick: this.addOrClose.bind(this)
                                },
                                _react2.default.createElement(
                                    _Icon2.default,
                                    null,
                                    this.state.expanded ? 'close' : 'add'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _Grid2.default,
                        { container: true },
                        this.props.list.map(function (phone, index) {
                            return _this2.row(phone, index);
                        })
                    )
                ),
                _react2.default.createElement(
                    _Collapse2.default,
                    { 'in': this.state.expanded, transitionDuration: 'auto', unmountOnExit: true },
                    _react2.default.createElement(
                        _Card.CardContent,
                        null,
                        _react2.default.createElement(
                            _Grid2.default,
                            { container: true },
                            _react2.default.createElement(_Grid2.default, { item: true, xs: 1 }),
                            _react2.default.createElement(
                                _Grid2.default,
                                { item: true, xs: 10 },
                                _react2.default.createElement(
                                    _Grid2.default,
                                    { container: true },
                                    _react2.default.createElement(
                                        _Grid2.default,
                                        { item: true, xs: 6 },
                                        _react2.default.createElement(_TextField2.default, {
                                            id: 'label',
                                            name: 'label',
                                            value: this.state.form.label,
                                            label: 'Label',
                                            fullWidth: true,
                                            onChange: this.setFieldValue.bind(this)
                                        })
                                    ),
                                    _react2.default.createElement(
                                        _Grid2.default,
                                        { item: true, xs: 6 },
                                        _react2.default.createElement(_TextField2.default, {
                                            id: 'phone',
                                            name: 'phone',
                                            value: this.state.form.phone,
                                            label: 'Phone Number',
                                            fullWidth: true,
                                            onChange: this.setFieldValue.bind(this)
                                        })
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _Grid2.default,
                                { item: true, xs: 1 },
                                _react2.default.createElement(
                                    _IconButton2.default,
                                    {
                                        onClick: this.save.bind(this),
                                        disabled: this.state.form.phone === '' || this.state.form.label === ''
                                    },
                                    _react2.default.createElement(
                                        _Icon2.default,
                                        null,
                                        'done'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return PhoneCard;
}(_react2.default.Component);

exports.default = PhoneCard;

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _TextField = __webpack_require__(22);

var _TextField2 = _interopRequireDefault(_TextField);

var _Card = __webpack_require__(35);

var _Card2 = _interopRequireDefault(_Card);

var _Collapse = __webpack_require__(41);

var _Collapse2 = _interopRequireDefault(_Collapse);

var _Grid = __webpack_require__(19);

var _Grid2 = _interopRequireDefault(_Grid);

var _Icon = __webpack_require__(18);

var _Icon2 = _interopRequireDefault(_Icon);

var _IconButton = __webpack_require__(20);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _moduleActions = __webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this license header, choose License Headers in Project Properties.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this template file, choose Tools | Templates
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * and open the template in the editor.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var EmailCard = function (_React$Component) {
    _inherits(EmailCard, _React$Component);

    function EmailCard() {
        _classCallCheck(this, EmailCard);

        var _this = _possibleConstructorReturn(this, (EmailCard.__proto__ || Object.getPrototypeOf(EmailCard)).call(this));

        _this.state = {
            expanded: false,
            form: {
                _id: -1,
                address: '',
                label: ''
            }
        };
        return _this;
    }

    _createClass(EmailCard, [{
        key: 'toggleExpand',
        value: function toggleExpand() {
            this.setState({ expanded: !this.state.expanded });
        }
    }, {
        key: 'clearForm',
        value: function clearForm() {
            this.setState({
                form: {
                    _id: -1,
                    address: '',
                    label: ''
                }
            });
        }
    }, {
        key: 'addOrClose',
        value: function addOrClose() {
            this.clearForm();
            this.toggleExpand();
        }
    }, {
        key: 'delete',
        value: function _delete(event) {
            this.props.dispatch((0, _moduleActions.deleteEmailAddress)(parseInt(event.currentTarget.id)));
        }
    }, {
        key: 'edit',
        value: function edit(event) {
            var id = parseInt(event.currentTarget.id);
            var newState = {
                form: {
                    _id: id,
                    address: this.props.list[id].address,
                    label: this.props.list[id].label
                }
            };
            this.setState(newState);
            if (!this.state.expanded) this.toggleExpand();
        }
    }, {
        key: 'setFieldValue',
        value: function setFieldValue(event) {
            var newState = Object.assign({}, this.state.form);
            newState[event.target.name] = event.target.value;
            this.setState({ form: newState });
        }
    }, {
        key: 'save',
        value: function save() {
            this.props.dispatch((0, _moduleActions.saveEmailAddress)(this.state.form, parseInt(this.state.form._id)));
            this.toggleExpand();
            this.clearForm();
        }
    }, {
        key: 'row',
        value: function row(email, index) {
            return _react2.default.createElement(
                _Grid2.default,
                { container: true, key: 'email' + index },
                _react2.default.createElement(_Grid2.default, { item: true, xs: 2 }),
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, xs: 1 },
                    _react2.default.createElement(
                        'strong',
                        null,
                        email.label,
                        ':'
                    )
                ),
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, xs: 8 },
                    email.address
                ),
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, xs: 1 },
                    _react2.default.createElement(
                        _IconButton2.default,
                        {
                            id: index,
                            onClick: this.edit.bind(this)
                        },
                        _react2.default.createElement(
                            _Icon2.default,
                            null,
                            'mode_edit'
                        )
                    ),
                    _react2.default.createElement(
                        _IconButton2.default,
                        {
                            id: index,
                            onClick: this.delete.bind(this)
                        },
                        _react2.default.createElement(
                            _Icon2.default,
                            null,
                            'delete'
                        )
                    )
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _Card2.default,
                null,
                _react2.default.createElement(
                    _Card.CardContent,
                    null,
                    _react2.default.createElement(
                        _Grid2.default,
                        { container: true },
                        _react2.default.createElement(
                            _Grid2.default,
                            { item: true, xs: 1 },
                            _react2.default.createElement(
                                _Icon2.default,
                                null,
                                'mail'
                            )
                        ),
                        _react2.default.createElement(
                            _Grid2.default,
                            { item: true, xs: 1 },
                            'E-Mails'
                        ),
                        _react2.default.createElement(_Grid2.default, { item: true, xs: 9 }),
                        _react2.default.createElement(
                            _Grid2.default,
                            { item: true, xs: 1 },
                            _react2.default.createElement(
                                _IconButton2.default,
                                {
                                    onClick: this.addOrClose.bind(this)
                                },
                                _react2.default.createElement(
                                    _Icon2.default,
                                    null,
                                    this.state.expanded ? 'close' : 'add'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _Grid2.default,
                        { container: true },
                        this.props.list.map(function (email, index) {
                            return _this2.row(email, index);
                        })
                    )
                ),
                _react2.default.createElement(
                    _Collapse2.default,
                    { 'in': this.state.expanded, transitionDuration: 'auto', unmountOnExit: true },
                    _react2.default.createElement(
                        _Card.CardContent,
                        null,
                        _react2.default.createElement(
                            _Grid2.default,
                            { container: true },
                            _react2.default.createElement(_Grid2.default, { item: true, xs: 1 }),
                            _react2.default.createElement(
                                _Grid2.default,
                                { item: true, xs: 10 },
                                _react2.default.createElement(
                                    _Grid2.default,
                                    { container: true },
                                    _react2.default.createElement(
                                        _Grid2.default,
                                        { item: true, xs: 6 },
                                        _react2.default.createElement(_TextField2.default, {
                                            id: 'label',
                                            name: 'label',
                                            value: this.state.form.label,
                                            label: 'Label',
                                            fullWidth: true,
                                            onChange: this.setFieldValue.bind(this)
                                        })
                                    ),
                                    _react2.default.createElement(
                                        _Grid2.default,
                                        { item: true, xs: 6 },
                                        _react2.default.createElement(_TextField2.default, {
                                            id: 'address',
                                            name: 'address',
                                            value: this.state.form.address,
                                            label: 'E-Mail Address',
                                            fullWidth: true,
                                            onChange: this.setFieldValue.bind(this)
                                        })
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _Grid2.default,
                                { item: true, xs: 1 },
                                _react2.default.createElement(
                                    _IconButton2.default,
                                    {
                                        onClick: this.save.bind(this),
                                        disabled: this.state.form.address === '' || this.state.form.label === ''
                                    },
                                    _react2.default.createElement(
                                        _Icon2.default,
                                        null,
                                        'done'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return EmailCard;
}(_react2.default.Component);

exports.default = EmailCard;

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Card = __webpack_require__(35);

var _Card2 = _interopRequireDefault(_Card);

var _Collapse = __webpack_require__(41);

var _Collapse2 = _interopRequireDefault(_Collapse);

var _Grid = __webpack_require__(19);

var _Grid2 = _interopRequireDefault(_Grid);

var _Icon = __webpack_require__(18);

var _Icon2 = _interopRequireDefault(_Icon);

var _IconButton = __webpack_require__(20);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _TextField = __webpack_require__(22);

var _TextField2 = _interopRequireDefault(_TextField);

var _FormStyle = __webpack_require__(111);

var _FormStyle2 = _interopRequireDefault(_FormStyle);

var _moduleActions = __webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this license header, choose License Headers in Project Properties.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this template file, choose Tools | Templates
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * and open the template in the editor.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var DateTimeFormat = new Intl.DateTimeFormat('en-US', { day: "numeric", month: "long", year: "numeric" });

var DateCard = function (_React$Component) {
    _inherits(DateCard, _React$Component);

    function DateCard() {
        _classCallCheck(this, DateCard);

        var _this = _possibleConstructorReturn(this, (DateCard.__proto__ || Object.getPrototypeOf(DateCard)).call(this));

        _this.state = {
            expanded: false,
            form: {
                _id: -1,
                eventDate: new Date(),
                label: ''
            }
        };
        return _this;
    }

    _createClass(DateCard, [{
        key: 'toggleExpand',
        value: function toggleExpand() {
            this.setState({ expanded: !this.state.expanded });
        }
    }, {
        key: 'clearForm',
        value: function clearForm() {
            this.setState({
                form: {
                    _id: -1,
                    eventDate: undefined,
                    label: ''
                }
            });
        }
    }, {
        key: 'addOrClose',
        value: function addOrClose() {
            this.clearForm();
            this.toggleExpand();
        }
    }, {
        key: 'delete',
        value: function _delete(event) {
            var id = parseInt(event.currentTarget.id);
            this.props.dispatch((0, _moduleActions.deleteDate)(id));
        }
    }, {
        key: 'edit',
        value: function edit(event) {
            var id = parseInt(event.currentTarget.id);
            var newState = {
                form: {
                    _id: id,
                    eventDate: new Date(this.props.list[id].eventDate),
                    label: this.props.list[id].label
                }
            };
            this.setState(newState);
            if (!this.state.expanded) this.toggleExpand();
        }
    }, {
        key: 'setFieldValue',
        value: function setFieldValue(event) {
            var newState = Object.assign({}, this.state.form);
            newState[event.target.name] = event.target.value;
            this.setState({ form: newState });
        }
    }, {
        key: 'setEventDate',
        value: function setEventDate(event, eventDate) {
            var newState = Object.assign({}, this.state.form);
            newState.eventDate = eventDate;
            this.setState({ form: newState });
        }
    }, {
        key: 'save',
        value: function save() {
            this.props.dispatch((0, _moduleActions.saveDate)({
                label: this.state.form.label,
                eventDate: this.state.form.eventDate.toISOString() }, this.state.form._id));
            this.toggleExpand();
            this.clearForm();
        }
    }, {
        key: 'row',
        value: function row(event, index) {
            return _react2.default.createElement(
                _Grid2.default,
                { container: true, key: 'crap' + index },
                _react2.default.createElement(_Grid2.default, { item: true, xs: 2 }),
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, xs: 1 },
                    _react2.default.createElement(
                        'strong',
                        null,
                        event.label,
                        ': '
                    )
                ),
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, xs: 8 },
                    DateTimeFormat.format(new Date(event.eventDate))
                ),
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, xs: 1 },
                    _react2.default.createElement(
                        _IconButton2.default,
                        {
                            id: index,
                            onClick: this.edit.bind(this)
                        },
                        _react2.default.createElement(
                            _Icon2.default,
                            null,
                            'mode_edit'
                        )
                    ),
                    _react2.default.createElement(
                        _IconButton2.default,
                        {
                            id: index,
                            onClick: this.delete.bind(this)
                        },
                        _react2.default.createElement(
                            _Icon2.default,
                            null,
                            'delete'
                        )
                    )
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _Card2.default,
                null,
                _react2.default.createElement(
                    _Card.CardContent,
                    null,
                    _react2.default.createElement(
                        _Grid2.default,
                        { container: true },
                        _react2.default.createElement(
                            _Grid2.default,
                            { item: true, xs: 1 },
                            _react2.default.createElement(
                                _Icon2.default,
                                null,
                                'event'
                            )
                        ),
                        _react2.default.createElement(
                            _Grid2.default,
                            { item: true, xs: 1 },
                            'Life Events'
                        ),
                        _react2.default.createElement(_Grid2.default, { item: true, xs: 9 }),
                        _react2.default.createElement(
                            _Grid2.default,
                            { item: true, xs: 1 },
                            _react2.default.createElement(
                                _IconButton2.default,
                                {
                                    onClick: this.addOrClose.bind(this)
                                },
                                _react2.default.createElement(
                                    _Icon2.default,
                                    null,
                                    this.state.expanded ? 'close' : 'add'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _Grid2.default,
                        { container: true },
                        this.props.list.map(function (event, index) {
                            return _this2.row(event, index);
                        })
                    )
                ),
                _react2.default.createElement(
                    _Collapse2.default,
                    { 'in': this.state.expanded, transitionDuration: 'auto', unmountOnExit: true },
                    _react2.default.createElement(
                        _Card.CardContent,
                        null,
                        _react2.default.createElement(
                            _Grid2.default,
                            { container: true },
                            _react2.default.createElement(_Grid2.default, { item: true, xs: 2 }),
                            _react2.default.createElement(
                                _Grid2.default,
                                { item: true, xs: 4 },
                                _react2.default.createElement(_TextField2.default, {
                                    id: 'label',
                                    name: 'label',
                                    value: this.state.form.label,
                                    label: 'Label',
                                    fullWidth: true,
                                    onChange: this.setFieldValue.bind(this)
                                })
                            ),
                            _react2.default.createElement(
                                _Grid2.default,
                                { item: true, xs: 4 },
                                _react2.default.createElement(_TextField2.default, {
                                    id: 'eventDate',
                                    name: 'eventDate',
                                    type: 'date',
                                    fullWidth: true,
                                    onChange: this.setEventDate.bind(this),
                                    value: DateTimeFormat.format(this.state.form.eventDate)
                                })
                            ),
                            _react2.default.createElement(
                                _Grid2.default,
                                { item: true, xs: 2 },
                                _react2.default.createElement(
                                    _IconButton2.default,
                                    {
                                        onClick: this.save.bind(this),
                                        disabled: this.state.form.label === ''
                                    },
                                    _react2.default.createElement(
                                        _Icon2.default,
                                        null,
                                        'done'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return DateCard;
}(_react2.default.Component);

exports.default = DateCard;

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Card = __webpack_require__(35);

var _Card2 = _interopRequireDefault(_Card);

var _Collapse = __webpack_require__(41);

var _Collapse2 = _interopRequireDefault(_Collapse);

var _Grid = __webpack_require__(19);

var _Grid2 = _interopRequireDefault(_Grid);

var _Icon = __webpack_require__(18);

var _Icon2 = _interopRequireDefault(_Icon);

var _TextField = __webpack_require__(22);

var _TextField2 = _interopRequireDefault(_TextField);

var _moduleActions = __webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this license header, choose License Headers in Project Properties.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this template file, choose Tools | Templates
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * and open the template in the editor.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var DateTimeFormat = new Intl.DateTimeFormat('en-US', { day: "numeric", month: "numeric", year: "numeric" });

var BirthdayCard = function (_React$Component) {
    _inherits(BirthdayCard, _React$Component);

    function BirthdayCard() {
        _classCallCheck(this, BirthdayCard);

        return _possibleConstructorReturn(this, (BirthdayCard.__proto__ || Object.getPrototypeOf(BirthdayCard)).call(this));
    }

    _createClass(BirthdayCard, [{
        key: 'save',
        value: function save(nullValue, birthday) {
            this.props.dispatch((0, _moduleActions.saveBirthday)(birthday.toISOString()));
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Card2.default,
                null,
                _react2.default.createElement(
                    _Card.CardContent,
                    null,
                    _react2.default.createElement(
                        _Grid2.default,
                        { container: true },
                        _react2.default.createElement(
                            _Grid2.default,
                            { item: true, xs: 1 },
                            _react2.default.createElement(
                                _Icon2.default,
                                null,
                                'cake'
                            )
                        ),
                        _react2.default.createElement(
                            _Grid2.default,
                            { item: true, xs: 1 },
                            'Birthday'
                        ),
                        _react2.default.createElement(
                            _Grid2.default,
                            { item: true, xs: 9 },
                            _react2.default.createElement(_TextField2.default, {
                                id: 'birthday',
                                onChange: this.save.bind(this),
                                value: "Crap"
                            })
                        ),
                        _react2.default.createElement(_Grid2.default, { item: true, xs: 1 })
                    )
                )
            );
        }
    }]);

    return BirthdayCard;
}(_react2.default.Component);

exports.default = BirthdayCard;

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _TextField = __webpack_require__(22);

var _TextField2 = _interopRequireDefault(_TextField);

var _Card = __webpack_require__(35);

var _Card2 = _interopRequireDefault(_Card);

var _Grid = __webpack_require__(19);

var _Grid2 = _interopRequireDefault(_Grid);

var _Collapse = __webpack_require__(41);

var _Collapse2 = _interopRequireDefault(_Collapse);

var _Icon = __webpack_require__(18);

var _Icon2 = _interopRequireDefault(_Icon);

var _IconButton = __webpack_require__(20);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _FormStyle = __webpack_require__(111);

var _FormStyle2 = _interopRequireDefault(_FormStyle);

var _moduleActions = __webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this license header, choose License Headers in Project Properties.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this template file, choose Tools | Templates
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * and open the template in the editor.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var AddressCard = function (_React$Component) {
    _inherits(AddressCard, _React$Component);

    function AddressCard() {
        _classCallCheck(this, AddressCard);

        var _this = _possibleConstructorReturn(this, (AddressCard.__proto__ || Object.getPrototypeOf(AddressCard)).call(this));

        _this.state = {
            expanded: false,
            form: {
                _id: -1,
                lable: '',
                line1: '',
                line2: '',
                city: '',
                state: '',
                county: '',
                country: '',
                zip: ''
            }
        };
        return _this;
    }

    _createClass(AddressCard, [{
        key: 'toggleExpand',
        value: function toggleExpand() {
            this.setState({ expanded: !this.state.expanded });
        }
    }, {
        key: 'clearForm',
        value: function clearForm() {
            this.setState({
                form: {
                    _id: -1,
                    lable: '',
                    line1: '',
                    line2: '',
                    city: '',
                    state: '',
                    county: '',
                    country: '',
                    zip: ''
                }
            });
        }
    }, {
        key: 'addOrClose',
        value: function addOrClose() {
            this.clearForm();
            this.toggleExpand();
        }
    }, {
        key: 'delete',
        value: function _delete(event) {
            var id = parseInt(event.currentTarget.id);
            this.props.dispatch((0, _moduleActions.deleteAddress)(id));
        }
    }, {
        key: 'edit',
        value: function edit(event) {
            var id = parseInt(event.currentTarget.id);
            var newState = Object.assign({}, this.props.list[id]);
            newState._id = id;
            this.setState({ form: newState });
            if (!this.state.expanded) this.toggleExpand();
        }
    }, {
        key: 'setFieldValue',
        value: function setFieldValue(event) {
            var newState = Object.assign({}, this.state.form);
            newState[event.target.name] = event.target.value;
            this.setState({ form: newState });
        }
    }, {
        key: 'save',
        value: function save() {
            this.props.dispatch((0, _moduleActions.saveAddress)(this.state.form, this.state.form._id));
            this.toggleExpand();
            this.clearForm();
        }
    }, {
        key: 'row',
        value: function row(address, index) {
            return _react2.default.createElement(
                _Grid2.default,
                { container: true, key: 'address' + index },
                _react2.default.createElement(_Grid2.default, { item: true, xs: 2 }),
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, xs: 1 },
                    _react2.default.createElement(
                        'strong',
                        null,
                        address.label,
                        ': '
                    )
                ),
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, xs: 8 },
                    address.line1 + ", " + (address.line2 ? address.line2 + ", " : "") + address.city + ", " + address.state + " " + address.zip
                ),
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, xs: 1 },
                    _react2.default.createElement(
                        _IconButton2.default,
                        {
                            id: index,
                            onClick: this.edit.bind(this)
                        },
                        _react2.default.createElement(
                            _Icon2.default,
                            null,
                            'mode_edit'
                        )
                    ),
                    _react2.default.createElement(
                        _IconButton2.default,
                        {
                            id: index,
                            onClick: this.delete.bind(this)
                        },
                        _react2.default.createElement(
                            _Icon2.default,
                            null,
                            'delete'
                        )
                    )
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _Card2.default,
                null,
                _react2.default.createElement(
                    _Card.CardContent,
                    null,
                    _react2.default.createElement(
                        _Grid2.default,
                        { container: true },
                        _react2.default.createElement(
                            _Grid2.default,
                            { item: true, xs: 1 },
                            _react2.default.createElement(
                                _Icon2.default,
                                null,
                                'place'
                            )
                        ),
                        _react2.default.createElement(
                            _Grid2.default,
                            { item: true, xs: 1 },
                            'Addresses'
                        ),
                        _react2.default.createElement(_Grid2.default, { item: true, xs: 9 }),
                        _react2.default.createElement(
                            _Grid2.default,
                            { item: true, xs: 1 },
                            _react2.default.createElement(
                                _IconButton2.default,
                                {
                                    onClick: this.addOrClose.bind(this)
                                },
                                _react2.default.createElement(
                                    _Icon2.default,
                                    null,
                                    this.state.expanded ? 'close' : 'add'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _Grid2.default,
                        { container: true },
                        this.props.list.map(function (address, index) {
                            return _this2.row(address, index);
                        })
                    )
                ),
                _react2.default.createElement(
                    _Collapse2.default,
                    { 'in': this.state.expanded, transitionDuration: 'auto', unmountOnExit: true },
                    _react2.default.createElement(
                        _Card.CardContent,
                        null,
                        _react2.default.createElement(
                            _Grid2.default,
                            { container: true },
                            _react2.default.createElement(_Grid2.default, { item: true, xs: 2 }),
                            _react2.default.createElement(
                                _Grid2.default,
                                { item: true, xs: 9 },
                                _react2.default.createElement(
                                    _Grid2.default,
                                    { container: true },
                                    _react2.default.createElement(
                                        _Grid2.default,
                                        { item: true, xs: 4 },
                                        _react2.default.createElement(_TextField2.default, {
                                            id: 'label',
                                            name: 'label',
                                            value: this.state.form.label,
                                            label: 'Label',
                                            fullWidth: true,
                                            onChange: this.setFieldValue.bind(this)
                                        })
                                    ),
                                    _react2.default.createElement(
                                        _Grid2.default,
                                        { item: true, xs: 4 },
                                        _react2.default.createElement(_TextField2.default, {
                                            id: 'line1',
                                            name: 'line1',
                                            value: this.state.form.line1,
                                            label: 'Line 1',
                                            fullWidth: true,
                                            onChange: this.setFieldValue.bind(this)
                                        })
                                    ),
                                    _react2.default.createElement(
                                        _Grid2.default,
                                        { item: true, xs: 4 },
                                        _react2.default.createElement(_TextField2.default, {
                                            id: 'line2',
                                            name: 'line2',
                                            value: this.state.form.line2,
                                            label: 'Line 2',
                                            fullWidth: true,
                                            onChange: this.setFieldValue.bind(this)
                                        })
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _Grid2.default,
                                { item: true, xs: 1 },
                                _react2.default.createElement(
                                    _IconButton2.default,
                                    {
                                        onClick: this.save.bind(this),
                                        disabled: this.state.form.address === '' || this.state.form.label === ''
                                    },
                                    _react2.default.createElement(
                                        _Icon2.default,
                                        null,
                                        'done'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _Grid2.default,
                            { container: true },
                            _react2.default.createElement(_Grid2.default, { item: true, xs: 2 }),
                            _react2.default.createElement(
                                _Grid2.default,
                                { item: true, xs: 9 },
                                _react2.default.createElement(
                                    _Grid2.default,
                                    { container: true },
                                    _react2.default.createElement(
                                        _Grid2.default,
                                        { item: true, xs: 4 },
                                        _react2.default.createElement(_TextField2.default, {
                                            id: 'city',
                                            name: 'city',
                                            value: this.state.form.city,
                                            label: 'City',
                                            fullWidth: true,
                                            onChange: this.setFieldValue.bind(this)
                                        })
                                    ),
                                    _react2.default.createElement(
                                        _Grid2.default,
                                        { item: true, xs: 4 },
                                        _react2.default.createElement(_TextField2.default, {
                                            id: 'state',
                                            name: 'state',
                                            value: this.state.form.state,
                                            label: 'State',
                                            fullWidth: true,
                                            onChange: this.setFieldValue.bind(this)
                                        })
                                    ),
                                    _react2.default.createElement(
                                        _Grid2.default,
                                        { item: true, xs: 4 },
                                        _react2.default.createElement(_TextField2.default, {
                                            id: 'zip',
                                            name: 'zip',
                                            value: this.state.form.zip,
                                            label: 'Zip',
                                            fullWidth: true,
                                            onChange: this.setFieldValue.bind(this)
                                        })
                                    )
                                )
                            ),
                            _react2.default.createElement(_Grid2.default, { item: true, xs: 1 })
                        )
                    )
                )
            );
        }
    }]);

    return AddressCard;
}(_react2.default.Component);

exports.default = AddressCard;

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _TextField = __webpack_require__(22);

var _TextField2 = _interopRequireDefault(_TextField);

var _Card = __webpack_require__(35);

var _Card2 = _interopRequireDefault(_Card);

var _Collapse = __webpack_require__(41);

var _Collapse2 = _interopRequireDefault(_Collapse);

var _Grid = __webpack_require__(19);

var _Grid2 = _interopRequireDefault(_Grid);

var _Icon = __webpack_require__(18);

var _Icon2 = _interopRequireDefault(_Icon);

var _IconButton = __webpack_require__(20);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Table = __webpack_require__(34);

var _Table2 = _interopRequireDefault(_Table);

var _moduleActions = __webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this license header, choose License Headers in Project Properties.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this template file, choose Tools | Templates
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * and open the template in the editor.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var WebsiteCard = function (_React$Component) {
    _inherits(WebsiteCard, _React$Component);

    function WebsiteCard() {
        _classCallCheck(this, WebsiteCard);

        var _this = _possibleConstructorReturn(this, (WebsiteCard.__proto__ || Object.getPrototypeOf(WebsiteCard)).call(this));

        _this.state = {
            expanded: false,
            form: {
                _id: -1,
                url: '',
                label: ''
            }
        };
        return _this;
    }

    _createClass(WebsiteCard, [{
        key: 'toggleExpand',
        value: function toggleExpand() {
            this.setState({ expanded: !this.state.expanded });
        }
    }, {
        key: 'clearForm',
        value: function clearForm() {
            this.setState({
                form: {
                    _id: -1,
                    url: '',
                    label: ''
                }
            });
        }
    }, {
        key: 'addOrClose',
        value: function addOrClose() {
            this.clearForm();
            this.toggleExpand();
        }
    }, {
        key: 'delete',
        value: function _delete(event) {
            this.props.dispatch((0, _moduleActions.deleteWebsite)(parseInt(event.currentTarget.id)));
        }
    }, {
        key: 'edit',
        value: function edit(event) {
            var id = parseInt(event.currentTarget.id);
            var newState = {
                form: {
                    _id: id,
                    url: this.props.list[id].url,
                    label: this.props.list[id].label
                }
            };
            this.setState(newState);
            if (!this.state.expanded) this.toggleExpand();
        }
    }, {
        key: 'setFieldValue',
        value: function setFieldValue(event) {
            var newState = Object.assign({}, this.state.form);
            newState[event.target.name] = event.target.value;
            this.setState({ form: newState });
        }
    }, {
        key: 'save',
        value: function save() {
            this.props.dispatch((0, _moduleActions.saveWebsite)(this.state.form, parseInt(this.state.form._id)));
            this.toggleExpand();
            this.clearForm();
        }
    }, {
        key: 'row',
        value: function row(website, index) {
            return _react2.default.createElement(
                _Grid2.default,
                { container: true, key: 'website' + index },
                _react2.default.createElement(_Grid2.default, { item: true, xs: 2 }),
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, xs: 9 },
                    _react2.default.createElement(
                        'a',
                        { href: website.url, target: '_blank' },
                        website.label
                    )
                ),
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, xs: 1 },
                    _react2.default.createElement(
                        _IconButton2.default,
                        {
                            id: index,
                            onClick: this.edit.bind(this)
                        },
                        _react2.default.createElement(
                            _Icon2.default,
                            null,
                            'mode_edit'
                        )
                    ),
                    _react2.default.createElement(
                        _IconButton2.default,
                        {
                            id: index,
                            onClick: this.delete.bind(this)
                        },
                        _react2.default.createElement(
                            _Icon2.default,
                            null,
                            'delete'
                        )
                    )
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _Card2.default,
                null,
                _react2.default.createElement(
                    _Card.CardContent,
                    null,
                    _react2.default.createElement(
                        _Grid2.default,
                        { container: true },
                        _react2.default.createElement(
                            _Grid2.default,
                            { item: true, xs: 1 },
                            _react2.default.createElement(
                                _Icon2.default,
                                null,
                                'web'
                            )
                        ),
                        _react2.default.createElement(
                            _Grid2.default,
                            { item: true, xs: 1 },
                            'Websites'
                        ),
                        _react2.default.createElement(_Grid2.default, { item: true, xs: 9 }),
                        _react2.default.createElement(
                            _Grid2.default,
                            { item: true, xs: 1 },
                            _react2.default.createElement(
                                _IconButton2.default,
                                {
                                    onClick: this.addOrClose.bind(this)
                                },
                                _react2.default.createElement(
                                    _Icon2.default,
                                    null,
                                    this.state.expanded ? 'close' : 'add'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _Grid2.default,
                        { container: true },
                        this.props.list.map(function (website, index) {
                            return _this2.row(website, index);
                        })
                    )
                ),
                _react2.default.createElement(
                    _Collapse2.default,
                    { 'in': this.state.expanded, transitionDuration: 'auto', unmountOnExit: true },
                    _react2.default.createElement(
                        _Card.CardContent,
                        null,
                        _react2.default.createElement(
                            _Grid2.default,
                            { container: true },
                            _react2.default.createElement(_Grid2.default, { item: true, xs: 2 }),
                            _react2.default.createElement(
                                _Grid2.default,
                                { item: true, xs: 9 },
                                _react2.default.createElement(
                                    _Grid2.default,
                                    { container: true },
                                    _react2.default.createElement(
                                        _Grid2.default,
                                        { item: true, xs: 6 },
                                        _react2.default.createElement(_TextField2.default, {
                                            id: 'label',
                                            name: 'label',
                                            value: this.state.form.label,
                                            label: 'Label',
                                            fullWidth: true,
                                            onChange: this.setFieldValue.bind(this)
                                        })
                                    ),
                                    _react2.default.createElement(
                                        _Grid2.default,
                                        { item: true, xs: 6 },
                                        _react2.default.createElement(_TextField2.default, {
                                            id: 'url',
                                            name: 'url',
                                            value: this.state.form.url,
                                            label: 'Website URL',
                                            fullWidth: true,
                                            onChange: this.setFieldValue.bind(this)
                                        })
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _Grid2.default,
                                { item: true, xs: 1 },
                                _react2.default.createElement(
                                    _IconButton2.default,
                                    {
                                        onClick: this.save.bind(this),
                                        disabled: this.state.form.url === '' || this.state.form.label === ''
                                    },
                                    _react2.default.createElement(
                                        _Icon2.default,
                                        null,
                                        'done'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return WebsiteCard;
}(_react2.default.Component);

exports.default = WebsiteCard;

/***/ })

},[540]);