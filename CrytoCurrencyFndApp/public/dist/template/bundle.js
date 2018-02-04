webpackJsonp([6],{

/***/ 16:
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

/***/ 23:
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

function navigate(dispatch, url, navigationType) {
    var context = url.substr(0, url.indexOf('#'));
    if (window.location.pathname === context) {
        dispatch(inModule(url));
    } else {
        dispatch(toModule(url));
    }
    //    switch( navigationType ){
    //        case 'TO_MODULE': {
    //            dispatch(toModule(url));
    //            break;
    //        }
    //        case 'IN_MODULE': {
    //            dispatch(inModule(url));
    //            break;
    //        }
    //    }
}

exports.navigate = navigate;

/***/ }),

/***/ 34:
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

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cancelLogin = exports.logout = exports.login = exports.authenticate = undefined;

var _axios = __webpack_require__(26);

var _axios2 = _interopRequireDefault(_axios);

var _cookies = __webpack_require__(48);

var _cookies2 = _interopRequireDefault(_cookies);

var _footerActions = __webpack_require__(34);

var _userActions = __webpack_require__(49);

var _navigationActions = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function authenticate(dispatch, credentials) {
    _axios2.default.post('/services/public/user/authentication', credentials).then(function (res) {
        if (res.data.user) {
            dispatch((0, _footerActions.setFooterMessage)('Authenticated'));
            dispatch((0, _userActions.setUser)({ user: res.data.user }));
            dispatch(setAuthenticated({ authenticated: true, token: res.data.token }));
            var destinationURL = _cookies2.default.get('destinationURL') || '/';
            destinationURL = decodeURIComponent(destinationURL);
            (0, _navigationActions.navigate)(dispatch, destinationURL, 'TO_MODULE');
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
    (0, _navigationActions.navigate)(dispatch, '/', 'TO_MODULE');
}

function logout(dispatch) {
    //ToDo: need to add axios call to clear user session from the server
    if (localStorage.getItem('authenticationState') || localStorage.getItem('userState')) {
        dispatch(unsetAuthenticated());
        dispatch((0, _userActions.unsetUser)());
        _cookies2.default.delete('destinationURL');
        (0, _navigationActions.navigate)(dispatch, '/', 'TO_MODULE');
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
    window.location.pathname === '/' ? (0, _navigationActions.navigate)(dispatch, '/#/authenticate', 'IN_MODULE') : (0, _navigationActions.navigate)(dispatch, '/#/authenticate', 'TO_MODULE');
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

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _authenticationReducer = __webpack_require__(40);

var _authenticationReducer2 = _interopRequireDefault(_authenticationReducer);

var _feedbackReducer = __webpack_require__(41);

var _feedbackReducer2 = _interopRequireDefault(_feedbackReducer);

var _menuReducer = __webpack_require__(42);

var _menuReducer2 = _interopRequireDefault(_menuReducer);

var _navigationReducer = __webpack_require__(43);

var _navigationReducer2 = _interopRequireDefault(_navigationReducer);

var _userReducer = __webpack_require__(44);

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

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stateStorage = __webpack_require__(16);

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

/***/ 41:
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

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stateStorage = __webpack_require__(16);

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

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createHashHistory = __webpack_require__(75);

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
        //        case 'NAVIGATION_CONTEXT': {
        //            //ToDo set navigation Context
        //            console.log('Context: '+action.payload);
        //        }
    }
    return state;
};

exports.default = historyReducer;

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stateStorage = __webpack_require__(16);

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

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(13);

var _reactRouterDom = __webpack_require__(25);

var _AppBar = __webpack_require__(80);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _FontIcon = __webpack_require__(21);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _IconButton = __webpack_require__(20);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _RaisedButton = __webpack_require__(64);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Toolbar = __webpack_require__(82);

var _Paper = __webpack_require__(15);

var _Paper2 = _interopRequireDefault(_Paper);

var _BottomNavigation = __webpack_require__(35);

var _Drawer = __webpack_require__(83);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _MenuItem = __webpack_require__(65);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Divider = __webpack_require__(70);

var _Divider2 = _interopRequireDefault(_Divider);

var _menu = __webpack_require__(81);

var _menu2 = _interopRequireDefault(_menu);

var _authenticationActions = __webpack_require__(36);

var _navigationActions = __webpack_require__(23);

var _menuActions = __webpack_require__(50);

var _reactTapEventPlugin = __webpack_require__(84);

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this license header, choose License Headers in Project Properties.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this template file, choose Tools | Templates
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * and open the template in the editor.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


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
                        (0, _navigationActions.navigate)(this.props.dispatch, '/', 'TO_MODULE');
                        break;
                    }
                default:
                    {
                        (0, _navigationActions.navigate)(this.props.dispatch, '/dist/' + event.currentTarget.id, 'TO_MODULE');
                    }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Paper2.default,
                { zDepth: 3 },
                _react2.default.createElement(_AppBar2.default, {
                    title: 'Gas-N-Go',
                    onLeftIconButtonTouchTap: this.openDrawer.bind(this)
                }),
                _react2.default.createElement(_Toolbar.Toolbar, null),
                _react2.default.createElement(
                    _Drawer2.default,
                    {
                        open: this.props.state.drawerOpen,
                        docked: this.props.state.drawerDocked,
                        onRequestChange: this.closeDrawer.bind(this)
                    },
                    _react2.default.createElement(_AppBar2.default, { showMenuIconButton: false }),
                    _react2.default.createElement(_MenuItem2.default, { id: 'login', onTouchTap: this.handleMenuSelection.bind(this), primaryText: 'Login' }),
                    _react2.default.createElement(_MenuItem2.default, { id: 'logout', onTouchTap: this.handleMenuSelection.bind(this), primaryText: 'Logout' }),
                    _react2.default.createElement(_Divider2.default, null),
                    _react2.default.createElement(_MenuItem2.default, { id: 'home', onTouchTap: this.handleMenuSelection.bind(this), primaryText: 'Home' }),
                    _react2.default.createElement(_MenuItem2.default, { id: 'fndtnUserAccount', onTouchTap: this.handleMenuSelection.bind(this), primaryText: 'User Account' }),
                    _react2.default.createElement(_MenuItem2.default, { id: 'fndtnUserRegistration', onTouchTap: this.handleMenuSelection.bind(this), primaryText: 'User Registration' }),
                    _react2.default.createElement(_Divider2.default, null),
                    _react2.default.createElement(_MenuItem2.default, { id: 'fndtnRouteManager', onTouchTap: this.handleMenuSelection.bind(this), primaryText: 'Route Manager' }),
                    _react2.default.createElement(_MenuItem2.default, { id: 'fndtnUserAccountManager', onTouchTap: this.handleMenuSelection.bind(this), primaryText: 'User Account Manager' }),
                    _react2.default.createElement(_MenuItem2.default, { id: 'fndtnAccessControlManager', onTouchTap: this.handleMenuSelection.bind(this), primaryText: 'Access Control Manager' })
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AppHeader);

/***/ }),

/***/ 48:
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

/***/ 49:
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

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.closeMenuDrawer = exports.openMenuDrawer = exports.setMenuState = exports.getUserMenu = undefined;

var _axios = __webpack_require__(26);

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

function getUserMenu(dispatch, user) {}

//Actions
exports.getUserMenu = getUserMenu;
exports.setMenuState = setMenuState;
exports.openMenuDrawer = openMenuDrawer;
exports.closeMenuDrawer = closeMenuDrawer;

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(13);

var _Paper = __webpack_require__(15);

var _Paper2 = _interopRequireDefault(_Paper);

var _BottomNavigation = __webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this license header, choose License Headers in Project Properties.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this template file, choose Tools | Templates
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * and open the template in the editor.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var AppFooter = function (_React$Component) {
    _inherits(AppFooter, _React$Component);

    function AppFooter() {
        _classCallCheck(this, AppFooter);

        var _this = _possibleConstructorReturn(this, (AppFooter.__proto__ || Object.getPrototypeOf(AppFooter)).call(this));

        _this.state = {};
        return _this;
    }

    _createClass(AppFooter, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Paper2.default,
                { zDepth: 3 },
                _react2.default.createElement(
                    _BottomNavigation.BottomNavigation,
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        this.props.state.message
                    )
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AppFooter);

/***/ }),

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _reactRedux = __webpack_require__(13);

var _store = __webpack_require__(705);

var _store2 = _interopRequireDefault(_store);

var _MuiThemeProvider = __webpack_require__(76);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _Layout = __webpack_require__(707);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this license header, choose License Headers in Project Properties.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this template file, choose Tools | Templates
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * and open the template in the editor.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


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
                    _MuiThemeProvider2.default,
                    null,
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

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(68);

var _reduxLogger = __webpack_require__(72);

var _reduxThunk = __webpack_require__(73);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxPromiseMiddleware = __webpack_require__(74);

var _reduxPromiseMiddleware2 = _interopRequireDefault(_reduxPromiseMiddleware);

var _coreReducers = __webpack_require__(39);

var _coreReducers2 = _interopRequireDefault(_coreReducers);

var _moduleReducer = __webpack_require__(706);

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

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stateStorage = __webpack_require__(16);

var _stateStorage2 = _interopRequireDefault(_stateStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var defaultState = _stateStorage2.default.get('templateState') || {};

var templateReducer = function templateReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments[1];

    switch (action.type) {
        case 'TEMPLATE_SET':
            {
                state = Object.assign.apply(Object, [{}].concat(_toConsumableArray(state), [{ message: "Hello World" }]));
                _stateStorage2.default.set('templateState', state);
                break;
            }
    }
    return state;
};

exports.default = templateReducer;

/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(25);

var _reactRedux = __webpack_require__(13);

var _AppHeader = __webpack_require__(46);

var _AppHeader2 = _interopRequireDefault(_AppHeader);

var _AppBody = __webpack_require__(708);

var _AppBody2 = _interopRequireDefault(_AppBody);

var _AppFooter = __webpack_require__(51);

var _AppFooter2 = _interopRequireDefault(_AppFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this license header, choose License Headers in Project Properties.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this template file, choose Tools | Templates
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * and open the template in the editor.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


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
                    _react2.default.createElement(_AppBody2.default, { dispatch: this.props.dispatch }),
                    _react2.default.createElement(_AppFooter2.default, null)
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Layout);

/***/ }),

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(25);

var _reactRedux = __webpack_require__(13);

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
            return _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', render: function render() {
                        return _react2.default.createElement(
                            'h1',
                            null,
                            'TemplateForm'
                        );
                    } })
            );
        }
    }]);

    return AppBody;
}(_react2.default.Component);

exports.default = AppBody;

/***/ })

},[704]);