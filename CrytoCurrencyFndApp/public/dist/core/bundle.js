webpackJsonp([0],{

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Styles = {
    row: {
        width: '100%'
    },
    m1: {
        width: '' + 1 * 100 / 12 + '%',
        float: 'left'
    },
    m2: {
        width: '' + 2 * 100 / 12 + '%',
        float: 'left'
    },
    m3: {
        width: '' + 3 * 100 / 12 + '%',
        float: 'left'
    },
    m4: {
        width: '' + 4 * 100 / 12 + '%',
        float: 'left'
    },
    m5: {
        width: '' + 5 * 100 / 12 + '%',
        float: 'left'
    },
    m6: {
        width: '' + 6 * 100 / 12 + '%',
        float: 'left'
    },
    m7: {
        width: '' + 7 * 100 / 12 + '%',
        float: 'left'
    },
    m8: {
        width: '' + 8 * 100 / 12 + '%',
        float: 'left'
    },
    m9: {
        width: '' + 9 * 100 / 12 + '%',
        float: 'left'
    },
    m10: {
        width: '' + 10 * 100 / 12 + '%',
        float: 'left'
    },
    m11: {
        width: '' + 11 * 100 / 12 + '%',
        float: 'left'
    },
    mw1: {
        width: '' + 1 * 100 / 12 + '%'
    },
    mw2: {
        width: '' + 2 * 100 / 12 + '%'
    },
    mw3: {
        width: '' + 3 * 100 / 12 + '%'
    },
    mw4: {
        width: '' + 4 * 100 / 12 + '%'
    },
    mw5: {
        width: '' + 5 * 100 / 12 + '%'
    },
    mw6: {
        width: '' + 6 * 100 / 12 + '%'
    },
    mw7: {
        width: '' + 7 * 100 / 12 + '%'
    },
    mw8: {
        width: '' + 8 * 100 / 12 + '%'
    },
    mw9: {
        width: '' + 9 * 100 / 12 + '%'
    },
    mw10: {
        width: '' + 10 * 100 / 12 + '%'
    },
    mw11: {
        width: '' + 11 * 100 / 12 + '%'
    },
    headerStyle: {
        width: '33%',
        float: 'left'
    },
    clearBoth: {
        clear: 'both'
    },
    clearRight: {
        clear: 'right'
    },
    floatLeft: {
        float: 'left'
    },
    floatRight: {
        float: 'right'
    },
    textAlignLeft: {
        textAlign: 'left'
    },
    textAlignRight: {
        textAlign: 'right'
    },
    textAlignCenter: {
        textAlign: 'center'
    },
    marginAuto: {
        margin: 'auto'
    },
    bgColor: {
        color: 'green'
    },
    centerDiv: {
        margin: 'auto',
        width: '50%'
    },
    iconButton: {
        paddingTop: '0px',
        paddingBottom: '0px',
        float: 'right'
    }
};

function Style(styleList) {
    var compositStyle = {};
    styleList.forEach(function (style) {
        compositStyle = Object.assign(compositStyle, Styles[style]);
    });
    return compositStyle;
}

exports.default = Style;

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cancelLogin = exports.logout = exports.login = exports.authenticate = undefined;

var _axios = __webpack_require__(33);

var _axios2 = _interopRequireDefault(_axios);

var _cookies = __webpack_require__(659);

var _cookies2 = _interopRequireDefault(_cookies);

var _footerActions = __webpack_require__(71);

var _userActions = __webpack_require__(660);

var _navigationActions = __webpack_require__(94);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function authenticate(dispatch, credentials) {
    _axios2.default.post('/services/public/user/authentication', credentials).then(function (res) {
        if (res.data.user) {
            dispatch((0, _footerActions.setFooterMessage)('Authenticated'));
            dispatch((0, _userActions.setUser)({ user: res.data.user }));
            dispatch(setAuthenticated({ authenticated: true, token: res.data.token }));
            var destinationURL = _cookies2.default.get('destinationURL') || '/';
            destinationURL = decodeURIComponent(destinationURL);
            (0, _navigationActions.navigate)(dispatch, destinationURL);
        } else {
            dispatch((0, _footerActions.setFooterMessage)('Faild Authentication'));
        }
    }).catch(function (err) {
        dispatch((0, _footerActions.setFooterMessage)('Faild Authentication'));
    });
}

//Actions
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
;

function cancelLogin(dispatch) {
    dispatch(unsetAuthenticated());
    dispatch((0, _userActions.unsetUser)());
    _cookies2.default.delete('destinationURL');
    (0, _navigationActions.navigate)(dispatch, '/');
}

function logout(dispatch) {
    //ToDo: need to add axios call to clear user session from the server
    if (localStorage.getItem('authenticationState') || localStorage.getItem('userState')) {
        dispatch(unsetAuthenticated());
        dispatch((0, _userActions.unsetUser)());
        _cookies2.default.delete('destinationURL');
        (0, _navigationActions.navigate)(dispatch, '/');
        dispatch((0, _footerActions.setFooterMessage)('Logged Out'));
    }
};

function login(dispatch, token) {
    _axios2.default.get('/services/public/user/authentication/verify').then(function (res) {
        !res.data.valid ? dispatchLogin(dispatch) : dispatch((0, _footerActions.setFooterMessage)('Authenticated'));
    }).catch(function (error) {
        dispatchLogin(dispatch);
    });
};

function dispatchLogin(dispatch) {
    dispatch((0, _footerActions.setFooterMessage)('Enter Username/E-Mail and Password'));
    window.location.pathname === '/' ? (0, _navigationActions.navigate)(dispatch, '/#/authenticate') : (0, _navigationActions.navigate)(dispatch, '/#/authenticate');
}

function setAuthenticated(val) {
    return {
        type: "SET_AUTHENTICATED",
        payload: val
    };
}

function unsetAuthenticated() {
    return {
        type: "UNSET_AUTHENTICATED",
        payload: null
    };
}

function openAuthenticationDialog() {
    return {
        type: "OPEN_AUTHENTICATION_DIALOG",
        payload: null
    };
};

function closeAuthenticationDialog() {
    return {
        type: "CLOSE_AUTHENTICATION_DIALOG",
        payload: null
    };
};

exports.authenticate = authenticate;
exports.login = login;
exports.logout = logout;
exports.cancelLogin = cancelLogin;

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.closeMenuDrawer = exports.openMenuDrawer = exports.setMenuState = exports.getUserMenu = undefined;

var _axios = __webpack_require__(33);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setMenuState() {
    return { type: 'SET_MENU_STATE' };
} /* 
   * To change this license header, choose License Headers in Project Properties.
   * To change this template file, choose Tools | Templates
   * and open the template in the editor.
   */


function openMenuDrawer() {
    return { type: 'OPEN_MENU_DRAWER' };
}

function closeMenuDrawer() {
    return { type: 'CLOSE_MENU_DRAWER' };
}

function getUserMenu(dispatch, user) {
    _axios2.default.get('');
}

//Actions
exports.getUserMenu = getUserMenu;
exports.setMenuState = setMenuState;
exports.openMenuDrawer = openMenuDrawer;
exports.closeMenuDrawer = closeMenuDrawer;

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactRedux = __webpack_require__(15);

var _store = __webpack_require__(467);

var _store2 = _interopRequireDefault(_store);

var _styles = __webpack_require__(17);

var _Layout = __webpack_require__(564);

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

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var stateStorage = {};

stateStorage.get = function (stateName) {
    return JSON.parse(localStorage.getItem(stateName)) || undefined;
};

stateStorage.set = function (stateName, state) {
    localStorage.setItem(stateName, JSON.stringify(state));
};

stateStorage.remove = function (stateName) {
    localStorage.removeItem(stateName);
};

exports.default = stateStorage;

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(35);

var _reduxLogger = __webpack_require__(41);

var _reduxThunk = __webpack_require__(42);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxPromiseMiddleware = __webpack_require__(43);

var _reduxPromiseMiddleware2 = _interopRequireDefault(_reduxPromiseMiddleware);

var _coreReducers = __webpack_require__(55);

var _coreReducers2 = _interopRequireDefault(_coreReducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var coreReducersList = (0, _coreReducers2.default)(); /* 
                                                       * To change this license header, choose License Headers in Project Properties.
                                                       * To change this template file, choose Tools | Templates
                                                       * and open the template in the editor.
                                                       */

var reducers = (0, _redux.combineReducers)(coreReducersList);

var middleware = (0, _redux.applyMiddleware)((0, _reduxPromiseMiddleware2.default)(), _reduxThunk2.default, (0, _reduxLogger.createLogger)());

exports.default = (0, _redux.createStore)(reducers, middleware);

/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stateStorage = __webpack_require__(44);

var _stateStorage2 = _interopRequireDefault(_stateStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /* 
                                                                                                                                                                                                     * To change this license header, choose License Headers in Project Properties.
                                                                                                                                                                                                     * To change this template file, choose Tools | Templates
                                                                                                                                                                                                     * and open the template in the editor.
                                                                                                                                                                                                     */


var defaultState = _stateStorage2.default.get('authenticationState') || { authenticated: false, open: true, drawerOpen: false };

var authenticationReducer = function authenticationReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments[1];

    switch (action.type) {
        case 'SET_AUTHENTICATED':
            {
                state = Object.assign.apply(Object, [{}].concat(_toConsumableArray(state), [{ authenticated: action.payload.authenticated, token: action.payload.token }]));
                document.cookie = "authenticationToken=" + action.payload.token + "; path=\/";
                _stateStorage2.default.set('authenticationState', state);
                break;
            }
        case 'UNSET_AUTHENTICATED':
            {
                state = Object.assign.apply(Object, [{}].concat(_toConsumableArray(state), [{ authenticated: false, token: undefined, drawerOpen: false }]));
                document.cookie = "authenticationToken=; path=\/";
                _stateStorage2.default.remove('authenticationState');
                break;
            }
        case 'OPEN_AUTHENTICATION':
            {
                state = Object.assign.apply(Object, [{}].concat(_toConsumableArray(state), [{ open: true }]));
                break;
            }
        case 'CLOSE_AUTHENTICATION':
            {
                state = Object.assign.apply(Object, [{}].concat(_toConsumableArray(state), [{ open: true }]));
                break;
            }
    }
    return state;
};

exports.default = authenticationReducer;

/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var defaultFeedback = {
    message: ''
};

var feedbackReducer = function feedbackReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultFeedback;
    var action = arguments[1];

    switch (action.type) {
        case 'FEEDBACK_POST_MESSAGE':
            {
                state = Object.assign.apply(Object, [{}].concat(_toConsumableArray(state), [{ message: action.payload }]));
                break;
            }
    }
    return state;
};

exports.default = feedbackReducer;

/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stateStorage = __webpack_require__(44);

var _stateStorage2 = _interopRequireDefault(_stateStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = _stateStorage2.default.get('menuState') || { menu: {}, drawerOpen: false, drawerDocked: false }; /* 
                                                                                                                     * To change this license header, choose License Headers in Project Properties.
                                                                                                                     * To change this template file, choose Tools | Templates
                                                                                                                     * and open the template in the editor.
                                                                                                                     */


var menuReducer = function menuReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments[1];

    var newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'SET_MENU_STATE':
            {
                newState.menu = action.payload.menu;
                state = newState;
                break;
            }
        case 'OPEN_MENU_DRAWER':
            {
                newState.drawerOpen = true;
                break;
            }
        case 'CLOSE_MENU_DRAWER':
            {
                newState.drawerOpen = false;
                break;
            }
        case 'DOCK_MENU_DRAWER':
            {
                newState.drawerDocked = true;
                break;
            }
        case 'UNDOCK_MENU_DRAWER':
            {
                newState.drawerDocked = false;
                break;
            }
    }
    return newState;
};

exports.default = menuReducer;

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createHashHistory = __webpack_require__(200);

var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultHistory = {
    history: (0, _createHashHistory2.default)()
}; /* 
    * To change this license header, choose License Headers in Project Properties.
    * To change this template file, choose Tools | Templates
    * and open the template in the editor.
    */


var historyReducer = function historyReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultHistory;
    var action = arguments[1];

    switch (action.type) {
        case 'NAVIGATE_IN_MODULE':
            {
                var location = action.payload.substring(action.payload.indexOf('#') + 1);
                state.history.push(location);
                break;
            }
        case 'NAVIGATE_TO_MODULE':
            {
                window.location.href = action.payload;
                break;
            }
    }
    return state;
};

exports.default = historyReducer;

/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stateStorage = __webpack_require__(44);

var _stateStorage2 = _interopRequireDefault(_stateStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = _stateStorage2.default.get('userState') || {}; /* 
                                                                   * To change this license header, choose License Headers in Project Properties.
                                                                   * To change this template file, choose Tools | Templates
                                                                   * and open the template in the editor.
                                                                   */


var userReducer = function userReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments[1];

    var newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'SET_USER':
            {
                state = JSON.parse(JSON.stringify(action.payload));
                _stateStorage2.default.set('userState', state);
                break;
            }
        case 'UNSET_USER':
            {
                state = {};
                _stateStorage2.default.remove('userState');
                break;
            }
    }
    return state;
};

exports.default = userReducer;

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _authenticationReducer = __webpack_require__(469);

var _authenticationReducer2 = _interopRequireDefault(_authenticationReducer);

var _feedbackReducer = __webpack_require__(470);

var _feedbackReducer2 = _interopRequireDefault(_feedbackReducer);

var _menuReducer = __webpack_require__(471);

var _menuReducer2 = _interopRequireDefault(_menuReducer);

var _navigationReducer = __webpack_require__(472);

var _navigationReducer2 = _interopRequireDefault(_navigationReducer);

var _userReducer = __webpack_require__(473);

var _userReducer2 = _interopRequireDefault(_userReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function coreReducers() {
    var reducerList = {
        authenticationState: _authenticationReducer2.default,
        footerState: _feedbackReducer2.default,
        menuState: _menuReducer2.default,
        navigationState: _navigationReducer2.default,
        userState: _userReducer2.default
    };
    return reducerList;
} /* 
   * To change this license header, choose License Headers in Project Properties.
   * To change this template file, choose Tools | Templates
   * and open the template in the editor.
   */
exports.default = coreReducers;

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(24);

var _reactRedux = __webpack_require__(15);

var _Grid = __webpack_require__(22);

var _Grid2 = _interopRequireDefault(_Grid);

var _styles = __webpack_require__(17);

var _Paper = __webpack_require__(18);

var _Paper2 = _interopRequireDefault(_Paper);

var _AppHeader = __webpack_require__(57);

var _AppHeader2 = _interopRequireDefault(_AppHeader);

var _AppBody = __webpack_require__(665);

var _AppBody2 = _interopRequireDefault(_AppBody);

var _AppFooter = __webpack_require__(58);

var _AppFooter2 = _interopRequireDefault(_AppFooter);

var _authenticationActions = __webpack_require__(172);

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
            flexGrow: 1,
            marginTop: 30
        },
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
                    { className: this.props.classes.root },
                    _react2.default.createElement(_AppHeader2.default, null),
                    _react2.default.createElement(
                        _Paper2.default,
                        { elevation: 5, className: this.props.classes.layoutPaper },
                        _react2.default.createElement(_AppBody2.default, { dispatch: this.props.dispatch }),
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
        state: { history: state.navigationState.history }
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        dispatch: dispatch
    };
};

exports.default = (0, _styles.withStyles)(styles)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Layout));

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _AppBar = __webpack_require__(167);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Button = __webpack_require__(93);

var _Button2 = _interopRequireDefault(_Button);

var _Chip = __webpack_require__(261);

var _Chip2 = _interopRequireDefault(_Chip);

var _Divider = __webpack_require__(117);

var _Divider2 = _interopRequireDefault(_Divider);

var _Drawer = __webpack_require__(169);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _IconButton = __webpack_require__(23);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Icon = __webpack_require__(21);

var _Icon2 = _interopRequireDefault(_Icon);

var _Menu = __webpack_require__(119);

var _Toolbar = __webpack_require__(171);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Paper = __webpack_require__(18);

var _Paper2 = _interopRequireDefault(_Paper);

var _Typography = __webpack_require__(25);

var _Typography2 = _interopRequireDefault(_Typography);

var _styles = __webpack_require__(17);

var _AppSideNav = __webpack_require__(640);

var _AppSideNav2 = _interopRequireDefault(_AppSideNav);

var _menuActions = __webpack_require__(276);

var _reactTapEventPlugin = __webpack_require__(277);

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

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
        },
        flex: {
            flex: 1
        },
        menuButton: {
            marginLeft: -12,
            marginRight: 20
        }
    };
};

(0, _reactTapEventPlugin2.default)();

var AppHeader = function (_React$Component) {
    _inherits(AppHeader, _React$Component);

    function AppHeader() {
        _classCallCheck(this, AppHeader);

        return _possibleConstructorReturn(this, (AppHeader.__proto__ || Object.getPrototypeOf(AppHeader)).call(this));
    }

    _createClass(AppHeader, [{
        key: 'openDrawer',
        value: function openDrawer(event) {
            this.props.dispatch((0, _menuActions.openMenuDrawer)());
        }
    }, {
        key: 'closeDrawer',
        value: function closeDrawer(event) {
            this.props.dispatch((0, _menuActions.closeMenuDrawer)());
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: this.props.classes.root },
                _react2.default.createElement(
                    _AppBar2.default,
                    { position: 'fixed' },
                    _react2.default.createElement(
                        _Toolbar2.default,
                        null,
                        _react2.default.createElement(
                            _IconButton2.default,
                            {
                                className: this.props.classes.menuButton,
                                onClick: this.openDrawer.bind(this),
                                color: 'contrast',
                                'arial-label': 'Menu'
                            },
                            _react2.default.createElement(
                                _Icon2.default,
                                null,
                                'menu'
                            )
                        ),
                        _react2.default.createElement(
                            _Typography2.default,
                            {
                                color: 'inherit',
                                className: this.props.classes.flex,
                                type: 'title'
                            },
                            'Gass-N-Go'
                        ),
                        _react2.default.createElement(
                            _Button2.default,
                            {
                                color: 'contrast'
                            },
                            'Login'
                        )
                    )
                ),
                _react2.default.createElement(
                    _Drawer2.default,
                    {
                        open: this.props.state.drawerOpen,
                        onRequestClose: this.closeDrawer.bind(this)
                    },
                    _react2.default.createElement(_AppSideNav2.default, null)
                )
            );
        }
    }]);

    return AppHeader;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        state: {
            token: state.authenticationState.token,
            drawerOpen: state.menuState.drawerOpen,
            drawerDocked: state.menuState.drawerDocked
        }
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        dispatch: dispatch
    };
};

exports.default = (0, _styles.withStyles)(styles)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AppHeader));

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _Paper = __webpack_require__(18);

var _Paper2 = _interopRequireDefault(_Paper);

var _Typography = __webpack_require__(25);

var _Typography2 = _interopRequireDefault(_Typography);

var _styles = __webpack_require__(17);

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
            width: '100%',
            position: 'fixed',
            left: 0,
            bottom: 0
        }
    };
};

var AppFooter = function (_React$Component) {
    _inherits(AppFooter, _React$Component);

    function AppFooter() {
        _classCallCheck(this, AppFooter);

        return _possibleConstructorReturn(this, (AppFooter.__proto__ || Object.getPrototypeOf(AppFooter)).call(this));
    }

    _createClass(AppFooter, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Paper2.default,
                { elevation: 3, className: this.props.classes.root },
                _react2.default.createElement(
                    _Typography2.default,
                    { gutterBottom: true, noWrap: true },
                    'Messages: ',
                    this.props.state.message
                )
            );
        }
    }]);

    return AppFooter;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        state: state.footerState
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        dispatch: dispatch
    };
};

exports.default = (0, _styles.withStyles)(styles)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AppFooter));

/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _Divider = __webpack_require__(117);

var _Divider2 = _interopRequireDefault(_Divider);

var _Drawer = __webpack_require__(169);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _Menu = __webpack_require__(119);

var _styles = __webpack_require__(17);

var _authenticationActions = __webpack_require__(172);

var _navigationActions = __webpack_require__(94);

var _menuActions = __webpack_require__(276);

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
        },
        flex: {
            flex: 1
        },
        menuButton: {
            marginLeft: -12,
            marginRight: 20
        }
    };
};

var AppSideNav = function (_React$Component) {
    _inherits(AppSideNav, _React$Component);

    function AppSideNav() {
        _classCallCheck(this, AppSideNav);

        var _this = _possibleConstructorReturn(this, (AppSideNav.__proto__ || Object.getPrototypeOf(AppSideNav)).call(this));

        _this.state = {};
        return _this;
    }

    _createClass(AppSideNav, [{
        key: 'handleMenuSelection',
        value: function handleMenuSelection(event) {
            console.log(event.currentTarget.id);
            this.props.dispatch((0, _menuActions.closeMenuDrawer)());
            switch (event.currentTarget.id) {
                case 'login':
                    {
                        (0, _authenticationActions.login)(this.props.dispatch, this.props.state.token);
                        break;
                    }
                case 'logout':
                    {
                        (0, _authenticationActions.logout)(this.props.dispatch);
                        break;
                    }
                case 'home':
                    {
                        (0, _navigationActions.navigate)(this.props.dispatch, '/');
                        break;
                    }
                default:
                    {
                        (0, _navigationActions.navigate)(this.props.dispatch, '/dist/' + event.currentTarget.id);
                    }
            }
        }
    }, {
        key: 'row',
        value: function row(menuItem, index) {
            return _react2.default.createElement(
                _Menu.MenuItem,
                { id: menuItem.rsourceURL, onclick: this.handleMenuSelection.bind(this) },
                menuItem.display
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Menu.MenuList,
                    null,
                    _react2.default.createElement(
                        _Menu.MenuItem,
                        { id: 'login', onClick: this.handleMenuSelection.bind(this) },
                        'Login'
                    ),
                    _react2.default.createElement(
                        _Menu.MenuItem,
                        { id: 'logout', onClick: this.handleMenuSelection.bind(this) },
                        'Logout'
                    )
                ),
                _react2.default.createElement(_Divider2.default, null),
                _react2.default.createElement(
                    _Menu.MenuItem,
                    { id: 'home', onClick: this.handleMenuSelection.bind(this) },
                    'Home'
                ),
                _react2.default.createElement(
                    _Menu.MenuItem,
                    { id: 'fndtnUserAccount', onClick: this.handleMenuSelection.bind(this) },
                    'User Account'
                ),
                _react2.default.createElement(
                    _Menu.MenuItem,
                    { id: 'fndtnUserRegistration', onClick: this.handleMenuSelection.bind(this) },
                    'User Registration'
                ),
                _react2.default.createElement(_Divider2.default, null),
                _react2.default.createElement(
                    _Menu.MenuItem,
                    { id: 'fndtnResourceManager', onClick: this.handleMenuSelection.bind(this) },
                    'Resource Manager'
                ),
                _react2.default.createElement(
                    _Menu.MenuItem,
                    { id: 'fndtnUserAccountManager', onClick: this.handleMenuSelection.bind(this) },
                    'User Account Manager'
                ),
                _react2.default.createElement(
                    _Menu.MenuItem,
                    { id: 'fndtnAccessControlManager', onClick: this.handleMenuSelection.bind(this) },
                    'Access Control Manager'
                )
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log("// TODO: need to handle the AppSideNav DidMount phase.");
        }
    }]);

    return AppSideNav;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        state: {
            token: state.authenticationState.token,
            drawerOpen: state.menuState.drawerOpen,
            drawerDocked: state.menuState.drawerDocked,
            menu: state.menuState.menu
        }
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        dispatch: dispatch
    };
};

exports.default = (0, _styles.withStyles)(styles)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AppSideNav));

/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Cookie = {
    get: function get(name) {
        var list = document.cookie.split(';');
        var cookies = {};
        for (var i = 0; i < list.length; i++) {
            cookies[list[i].split('=')[0].trim()] = list[i].split('=')[1];
        }
        return cookies[name];
    },

    set: function set(name, value, options) {
        document.cookie = name + '=' + value;
    },

    delete: function _delete(name) {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
};

exports.default = Cookie;

/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function setUser(user) {
    return {
        type: "SET_USER",
        payload: user
    };
};

function unsetUser() {
    return {
        type: "UNSET_USER"
    };
};

exports.setUser = setUser;
exports.unsetUser = unsetUser;

/***/ }),

/***/ 665:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(24);

var _reactRedux = __webpack_require__(15);

var _Authentication = __webpack_require__(666);

var _Authentication2 = _interopRequireDefault(_Authentication);

var _Welcome = __webpack_require__(687);

var _Welcome2 = _interopRequireDefault(_Welcome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this license header, choose License Headers in Project Properties.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this template file, choose Tools | Templates
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * and open the template in the editor.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var AppBody = function (_React$Component) {
    _inherits(AppBody, _React$Component);

    function AppBody() {
        _classCallCheck(this, AppBody);

        return _possibleConstructorReturn(this, (AppBody.__proto__ || Object.getPrototypeOf(AppBody)).call(this));
    }

    _createClass(AppBody, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', render: function render() {
                        return _react2.default.createElement(_Welcome2.default, null);
                    } }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/authenticate', render: function render() {
                        return _react2.default.createElement(_Authentication2.default, { dispatch: _this2.props.dispatch });
                    } })
            );
        }
    }]);

    return AppBody;
}(_react2.default.Component);

exports.default = AppBody;

/***/ }),

/***/ 666:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _TextField = __webpack_require__(26);

var _TextField2 = _interopRequireDefault(_TextField);

var _Button = __webpack_require__(93);

var _Button2 = _interopRequireDefault(_Button);

var _Dialog = __webpack_require__(283);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Grid = __webpack_require__(22);

var _Grid2 = _interopRequireDefault(_Grid);

var _Table = __webpack_require__(38);

var _Table2 = _interopRequireDefault(_Table);

var _FormStyle = __webpack_require__(122);

var _FormStyle2 = _interopRequireDefault(_FormStyle);

var _authenticationActions = __webpack_require__(172);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this license header, choose License Headers in Project Properties.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this template file, choose Tools | Templates
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * and open the template in the editor.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Authentication = function (_React$Component) {
    _inherits(Authentication, _React$Component);

    function Authentication() {
        _classCallCheck(this, Authentication);

        return _possibleConstructorReturn(this, (Authentication.__proto__ || Object.getPrototypeOf(Authentication)).call(this));
    }

    _createClass(Authentication, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            //        verifyAuthenticated(this.props.dispatch, this.props.state);
        }
    }, {
        key: 'login',
        value: function login() {
            (0, _authenticationActions.authenticate)(this.props.dispatch, {
                username: this.state.username,
                password: this.state.password
            });
        }
    }, {
        key: 'cancel',
        value: function cancel() {
            (0, _authenticationActions.cancelLogin)(this.props.dispatch);
        }
    }, {
        key: 'setPassword',
        value: function setPassword(event) {
            this.setState({ password: event.target.value });
        }
    }, {
        key: 'setUsername',
        value: function setUsername(event) {
            this.setState({ username: event.target.value });
        }
    }, {
        key: 'render',
        value: function render() {
            var actions = [];

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Dialog2.default,
                    {
                        title: 'Authentication',
                        actions: actions,
                        open: true
                    },
                    _react2.default.createElement(
                        _Dialog.DialogTitle,
                        null,
                        'User Authentication'
                    ),
                    _react2.default.createElement(
                        _Dialog.DialogContent,
                        null,
                        _react2.default.createElement(
                            _Grid2.default,
                            { container: true },
                            _react2.default.createElement(
                                _Grid2.default,
                                { item: true, xs: 6 },
                                _react2.default.createElement(_TextField2.default, {
                                    id: 'username',
                                    label: 'Username or E-Mail',
                                    fullWidth: true,
                                    onChange: this.setUsername.bind(this)
                                })
                            ),
                            _react2.default.createElement(
                                _Grid2.default,
                                { item: true, xs: 6 },
                                _react2.default.createElement(_TextField2.default, {
                                    id: 'password',
                                    type: 'password',
                                    label: 'Password',
                                    fullWidth: true,
                                    onChange: this.setPassword.bind(this)
                                })
                            )
                        ),
                        _react2.default.createElement(
                            _Grid2.default,
                            { container: true },
                            _react2.default.createElement(
                                _Grid2.default,
                                { item: true, xs: 6 },
                                _react2.default.createElement(
                                    _Button2.default,
                                    {
                                        id: 'login',
                                        raised: true,
                                        color: 'primary',
                                        onClick: this.login.bind(this)
                                    },
                                    'Login'
                                )
                            ),
                            _react2.default.createElement(
                                _Grid2.default,
                                { item: true, xs: 6 },
                                _react2.default.createElement(
                                    _Button2.default,
                                    {
                                        id: 'cancel',
                                        raised: true,
                                        color: 'primary',
                                        onClick: this.cancel.bind(this)
                                    },
                                    'Cancel'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Authentication;
}(_react2.default.Component);

exports.default = Authentication;

/***/ }),

/***/ 687:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _Paper = __webpack_require__(18);

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this license header, choose License Headers in Project Properties.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this template file, choose Tools | Templates
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * and open the template in the editor.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Welcome = function (_React$Component) {
    _inherits(Welcome, _React$Component);

    function Welcome() {
        _classCallCheck(this, Welcome);

        var _this = _possibleConstructorReturn(this, (Welcome.__proto__ || Object.getPrototypeOf(Welcome)).call(this));

        _this.state = {};
        return _this;
    }

    _createClass(Welcome, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    'Welcome ',
                    this.props.state.user ? this.props.state.user.name.first : 'Friend'
                )
            );
        }
    }]);

    return Welcome;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        state: { user: state.userState.user }
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        dispatch: dispatch
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Welcome);

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function setFooterMessage(message) {
    return {
        type: "FEEDBACK_POST_MESSAGE",
        payload: message
    };
};

exports.setFooterMessage = setFooterMessage;

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function inModule(url) {
    return {
        type: "NAVIGATE_IN_MODULE",
        payload: url
    };
};

function toModule(url) {
    return {
        type: 'NAVIGATE_TO_MODULE',
        payload: url
    };
}

function navigationContext(context) {
    return {
        type: 'NAVIGATION_CONTEXT',
        payload: context
    };
}

function navigate(dispatch, url) {
    var context = url.substr(0, url.indexOf('#'));
    if (window.location.pathname === context) {
        dispatch(inModule(url));
    } else {
        dispatch(toModule(url));
    }
}

exports.navigate = navigate;

/***/ })

},[428]);