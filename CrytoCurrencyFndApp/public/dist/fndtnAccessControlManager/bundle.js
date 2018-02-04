webpackJsonp([2],{

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deleteRoleResource = exports.addRoleResource = exports.updateRoleResource = exports.toggleResourceRight = exports.loadRoleResources = exports.setSelectedRoleId = exports.loadAvailableMenus = exports.loadAvailableResources = exports.loadRoles = exports.setActiveTab = undefined;

var _axios = __webpack_require__(33);

var _axios2 = _interopRequireDefault(_axios);

var _footerActions = __webpack_require__(63);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Actions
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function setActiveTab(value) {
    return {
        type: 'FNDTN_ACCESS_CONTROL_MANAGER_SELECT_TAB',
        payload: value
    };
}

function setAvailableResources(resources) {
    return {
        type: 'FNDTN_ACCESS_CONTROL_MANAGER_SET_AVAILABLE_RESOURCES',
        payload: resources
    };
}

function setRoles(roles) {
    return {
        type: 'FNDTN_ACCESS_CONTROL_MANAGER_SET_ROLES',
        payload: roles
    };
}

function setRoleResources(roleResources) {
    return {
        type: 'FNDTN_ACCESS_CONTROL_MANAGER_LOAD_ROLE_RESOURCES',
        payload: roleResources
    };
}

function setAvailableResources(availableResources) {
    return {
        type: 'FNDTN_ACCESS_CONTROL_MANAGER_SET_AVAILABLE_RESOURCES',
        payload: availableResources
    };
}

function setAvailableMenus(availableMenus) {
    return {
        type: 'FNDTN_ACCESS_CONTROL_MANAGER_SET_AVAILABLE_MENUS',
        payload: availableMenus
    };
}

function toggleResourceRight(method, index) {
    return {
        type: 'FNDTN_ACCESS_CONTROL_MANAGER_TOGGLE_RESOURCE_RIGHT',
        payload: { method: method, index: index }
    };
}

function setSelectedRoleId(roleId) {
    return {
        type: 'FNDTN_ACCESS_CONTROL_MANAGER_SET_SELECTED_ROLE',
        payload: { roleId: roleId }
    };
}

function saveRoleResource(dispatch, roleResource) {
    _axios2.default.post('/services/private/fndtn/roleResources', roleResource).then(function (res) {
        loadRoleResources(dispatch, roleResource.roleId);
    }).catch(function (error) {
        console.log(error.response.data);
        dispatch((0, _footerActions.setFooterMessage)('Unable to save role resource: ' + error.response.data.message));
    });
}

function loadRoles(dispatch, search) {
    _axios2.default.post('/services/private/fndtn/roles/find', search).then(function (res) {
        dispatch((0, _footerActions.setFooterMessage)('Roles loaded.'));
        dispatch(setRoles(res.data.roles));
    }).catch(function (error) {
        console.log(error.response.data);
        dispatch((0, _footerActions.setFooterMessage)('Unable to load all roles: ' + error.response.data.message));
    });
}

function deleteRoleResource(dispatch, roleResourceId, roleId) {
    _axios2.default.delete('/services/private/fndtn/roleResources/' + roleResourceId).then(function (res) {
        dispatch((0, _footerActions.setFooterMessage)('Role resource ' + roleResourceId + ' has been removed.'));
        loadRoleResources(dispatch, roleId);
    }).catch(function (error) {
        dispatch((0, _footerActions.setFooterMessage)('Unable to remove role resource ' + roleResourceId + ' from the current role. error: ' + error.message));
    });
}

function updateRoleResource(dispatch, method, roleResource) {
    var updatedRoleResource = {
        _id: roleResource._id,
        get: roleResource.get,
        put: roleResource.put,
        post: roleResource.post,
        delete: roleResource.delete,
        roleId: roleResource.roleId,
        resourceId: roleResource.resourceId
    };
    updatedRoleResource[method] = !updatedRoleResource[method];
    saveRoleResource(dispatch, updatedRoleResource);
}

function addRoleResource(dispatch, roleId, resource) {
    var roleResource = {
        get: false,
        put: false,
        post: false,
        delete: false,
        resourceId: resource._id,
        roleId: roleId };
    saveRoleResource(dispatch, roleResource);
}

function loadAvailableResources(dispatch, search) {
    _axios2.default.post('/services/private/fndtn/resources/find', search).then(function (res) {
        dispatch((0, _footerActions.setFooterMessage)('Available Resources loaded.'));
        dispatch(setAvailableResources(res.data.resources));
    }).catch(function (error) {
        console.log(error.response.data);
        dispatch((0, _footerActions.setFooterMessage)('Unable to load all resources: ' + error.response.data.message));
    });
}

function loadAvailableMenus(dispatch, search) {
    _axios2.default.post('/services/private/fndtn/menus/find', search).then(function (res) {
        dispatch((0, _footerActions.setFooterMessage)('Available Menus loaded.'));
        dispatch(setAvailableMenus(res.data.menus));
    }).catch(function (error) {
        console.log(error.response.data);
        dispatch((0, _footerActions.setFooterMessage)('Unable to load all menus: ' + error.response.data.message));
    });
}

function loadRoleResources(dispatch, roleId) {
    _axios2.default.get('/services/private/fndtn/roleResources/findByRoleId/' + roleId).then(function (res) {
        dispatch((0, _footerActions.setFooterMessage)('Role Resources loaded.'));
        dispatch(setRoleResources(res.data.roleResources));
    }).catch(function (error) {
        console.log(error.response.data);
        dispatch((0, _footerActions.setFooterMessage)('Unable to load all resources for the selected role: ' + error.response.data.message));
    });
}

exports.setActiveTab = setActiveTab;
exports.loadRoles = loadRoles;
exports.loadAvailableResources = loadAvailableResources;
exports.loadAvailableMenus = loadAvailableMenus;
exports.setSelectedRoleId = setSelectedRoleId;
exports.loadRoleResources = loadRoleResources;
exports.toggleResourceRight = toggleResourceRight;
exports.updateRoleResource = updateRoleResource;
exports.addRoleResource = addRoleResource;
exports.deleteRoleResource = deleteRoleResource;

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactRedux = __webpack_require__(14);

var _store = __webpack_require__(589);

var _store2 = _interopRequireDefault(_store);

var _styles = __webpack_require__(15);

var _Layout = __webpack_require__(591);

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

/***/ 589:
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

var _moduleReducer = __webpack_require__(590);

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

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stateStorage = __webpack_require__(48);

var _stateStorage2 = _interopRequireDefault(_stateStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = {
    selectedTab: 1,
    roles: [],
    roleResources: [],
    availableResources: [],
    roleMenus: [],
    availableMenus: [],
    roleRoles: [],
    availableRoles: [],
    resourceFilter: '',
    roleFilter: '',
    menuFilter: '',
    selectedRole: ''
};

var templateReducer = function templateReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments[1];

    var newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'FNDTN_ACCESS_CONTROL_MANAGER_SAVE_ROLE_RESOURCE':
            {
                if (action.payload.index >= 0) {
                    newState.roleResources[action.payload.index] = action.payload.roleResource;
                } else {
                    newState.roleResources.push(action.payload.roleResource);
                }
                break;
            }
        case 'FNDTN_ACCESS_CONTROL_MANAGER_SELECT_TAB':
            {
                newState.selectedTab = action.payload;
                break;
            }
        case 'FNDTN_ACCESS_CONTROL_MANAGER_SET_ROLES':
            {
                newState.roles = action.payload;
                break;
            }
        case 'FNDTN_ACCESS_CONTROL_MANAGER_SET_SELECTED_ROLE':
            {
                newState.selectedRole = action.payload.roleId;
                break;
            }
        case 'FNDTN_ACCESS_CONTROL_MANAGER_LOAD_ROLE_RESOURCES':
            {
                newState.roleResources = action.payload;
                break;
            }
        case 'FNDTN_ACCESS_CONTROL_MANAGER_TOGGLE_RESOURCE_RIGHT':
            {
                newState.roleResources[action.payload.index][action.payload.method] = !state.roleResources[action.payload.index][action.payload.method];
                break;
            }
        case 'FNDTN_ACCESS_CONTROL_MANAGER_LOAD_ROLE_MENUS':
            {
                newState.roleMenus = action.payload;
                break;
            }
        case 'FNDTN_ACCESS_CONTROL_MANAGER_LOAD_ROLE_ROLES':
            {
                newState.roleRoles = action.payload;
                break;
            }
        case 'FNDTN_ACCESS_CONTROL_MANAGER_SET_AVAILABLE_RESOURCES':
            {
                newState.availableResources = action.payload;
                break;
            }
        case 'FNDTN_ACCESS_CONTROL_MANAGER_SET_AVAILABLE_MENUS':
            {
                newState.availableMenus = action.payload;
                break;
            }
        case 'FNDTN_ACCESS_CONTROL_MANAGER_SET_AVAILABLE_ROLES':
            {
                newState.availableRoles = action.payload;
                break;
            }
    }
    return newState;
};

exports.default = templateReducer;

/***/ }),

/***/ 591:
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

var _AppBody = __webpack_require__(592);

var _AppBody2 = _interopRequireDefault(_AppBody);

var _AppFooter = __webpack_require__(57);

var _AppFooter2 = _interopRequireDefault(_AppFooter);

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

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(24);

var _AccessControlManager = __webpack_require__(593);

var _AccessControlManager2 = _interopRequireDefault(_AccessControlManager);

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
                        return _react2.default.createElement(_AccessControlManager2.default, null);
                    } })
            );
        }
    }]);

    return AppBody;
}(_react2.default.Component);

exports.default = AppBody;

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(14);

var _AppBar = __webpack_require__(155);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Divider = __webpack_require__(106);

var _Divider2 = _interopRequireDefault(_Divider);

var _Grid = __webpack_require__(19);

var _Grid2 = _interopRequireDefault(_Grid);

var _Paper = __webpack_require__(16);

var _Paper2 = _interopRequireDefault(_Paper);

var _Tabs = __webpack_require__(269);

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Table = __webpack_require__(34);

var _Table2 = _interopRequireDefault(_Table);

var _Typography = __webpack_require__(21);

var _Typography2 = _interopRequireDefault(_Typography);

var _AccessControlManagerRoles = __webpack_require__(661);

var _AccessControlManagerRoles2 = _interopRequireDefault(_AccessControlManagerRoles);

var _AccessControlManagerResources = __webpack_require__(662);

var _AccessControlManagerResources2 = _interopRequireDefault(_AccessControlManagerResources);

var _AccessControlManagerMenus = __webpack_require__(663);

var _AccessControlManagerMenus2 = _interopRequireDefault(_AccessControlManagerMenus);

var _moduleActions = __webpack_require__(166);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this license header, choose License Headers in Project Properties.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this template file, choose Tools | Templates
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * and open the template in the editor.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var AccessControlManager = function (_React$Component) {
    _inherits(AccessControlManager, _React$Component);

    function AccessControlManager() {
        _classCallCheck(this, AccessControlManager);

        return _possibleConstructorReturn(this, (AccessControlManager.__proto__ || Object.getPrototypeOf(AccessControlManager)).call(this));
    }

    _createClass(AccessControlManager, [{
        key: 'tabSelected',
        value: function tabSelected(event, value) {
            this.props.dispatch((0, _moduleActions.setActiveTab)(value));
        }
    }, {
        key: 'roleSelected',
        value: function roleSelected(event) {
            this.props.dispatch((0, _moduleActions.setSelectedRoleId)(event.currentTarget.id));
            (0, _moduleActions.loadRoleResources)(this.props.dispatch, event.currentTarget.id);
        }
    }, {
        key: 'roleRow',
        value: function roleRow(role, index) {
            var selected = role._id === this.props.state.selectedRole;
            return _react2.default.createElement(
                _Table.TableRow,
                {
                    hover: true,
                    key: "row" + role._id,
                    id: role._id,
                    color: 'accent',
                    onClick: this.roleSelected.bind(this),
                    selected: selected },
                _react2.default.createElement(
                    _Table.TableCell,
                    null,
                    role.name
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _Grid2.default,
                { container: true },
                _react2.default.createElement(_Grid2.default, { item: true, xs: 1 }),
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, xs: 10 },
                    _react2.default.createElement(
                        _Paper2.default,
                        { elevation: 5 },
                        _react2.default.createElement(
                            _Grid2.default,
                            { container: true, justify: 'center' },
                            _react2.default.createElement(
                                _Grid2.default,
                                { item: true },
                                _react2.default.createElement(
                                    _Typography2.default,
                                    { type: 'display2' },
                                    'Access Control Manager'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _Grid2.default,
                            { container: true },
                            _react2.default.createElement(
                                _Grid2.default,
                                { item: true, xs: 2 },
                                _react2.default.createElement(
                                    _Table2.default,
                                    null,
                                    _react2.default.createElement(
                                        _Table.TableHead,
                                        null,
                                        _react2.default.createElement(
                                            _Table.TableRow,
                                            null,
                                            _react2.default.createElement(
                                                _Table.TableCell,
                                                null,
                                                'Role'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _Table.TableBody,
                                        null,
                                        this.props.state.roles.map(function (role, index) {
                                            return _this2.roleRow(role, index);
                                        })
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _Grid2.default,
                                { item: true, xs: 10 },
                                _react2.default.createElement(
                                    _Grid2.default,
                                    { container: true },
                                    _react2.default.createElement(
                                        _Grid2.default,
                                        { item: true, xs: 12 },
                                        _react2.default.createElement(
                                            _AppBar2.default,
                                            { position: 'static', color: 'default' },
                                            _react2.default.createElement(
                                                _Tabs2.default,
                                                {
                                                    value: this.props.state.selectedTab,
                                                    onChange: this.tabSelected.bind(this),
                                                    indicatorColor: 'primary',
                                                    textColor: 'primary',
                                                    fullWidth: true
                                                },
                                                _react2.default.createElement(_Tabs.Tab, { label: 'Roles' }),
                                                _react2.default.createElement(_Tabs.Tab, { label: 'Resources' }),
                                                _react2.default.createElement(_Tabs.Tab, { label: 'Menus' })
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    _Grid2.default,
                                    { container: true },
                                    _react2.default.createElement(
                                        _Grid2.default,
                                        { item: true, xs: 12 },
                                        this.props.state.selectedTab === 0 && _react2.default.createElement(_AccessControlManagerRoles2.default, {
                                            roleRoles: this.props.state.roleRoles,
                                            selectedRole: this.props.state.selectedRole,
                                            availableRoles: this.props.state.availableRoles,
                                            dispatch: this.props.dispatch
                                        }),
                                        this.props.state.selectedTab === 1 && _react2.default.createElement(_AccessControlManagerResources2.default, {
                                            roleResources: this.props.state.roleResources,
                                            selectedRole: this.props.state.selectedRole,
                                            availableResources: this.props.state.availableResources,
                                            resourceFilter: this.props.state.resourceFilter,
                                            dispatch: this.props.dispatch
                                        }),
                                        this.props.state.selectedTab === 2 && _react2.default.createElement(_AccessControlManagerMenus2.default, {
                                            roleMenus: this.props.state.roleMenus,
                                            selectedRole: this.props.state.selectedRole,
                                            availableMenus: this.props.state.availableMenus,
                                            dispatch: this.props.dispatch
                                        })
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(_Grid2.default, { item: true, xs: 1 })
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            (0, _moduleActions.loadRoles)(this.props.dispatch, {});
            (0, _moduleActions.loadAvailableResources)(this.props.dispatch, {});
            (0, _moduleActions.loadAvailableMenus)(this.props.dispatch, {});
        }
    }]);

    return AccessControlManager;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        state: state.moduleState
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        dispatch: dispatch
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AccessControlManager);

/***/ }),

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this license header, choose License Headers in Project Properties.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this template file, choose Tools | Templates
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * and open the template in the editor.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var AccessControlManagerRoles = function (_React$Component) {
    _inherits(AccessControlManagerRoles, _React$Component);

    function AccessControlManagerRoles() {
        _classCallCheck(this, AccessControlManagerRoles);

        return _possibleConstructorReturn(this, (AccessControlManagerRoles.__proto__ || Object.getPrototypeOf(AccessControlManagerRoles)).call(this));
    }

    _createClass(AccessControlManagerRoles, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            console.log("// TODO: need to handle the AccessControlManagerRoles WillMount phase.");
        }
    }, {
        key: 'componentWillReciveProps',
        value: function componentWillReciveProps() {
            console.log("// TODO: need to handle the AccessControlManagerRoles WillReciveProps phase.");
        }

        // Uncomment if need to control the component update phase.
        //    shouldComponentUpdate(){
        //        console.log("// TODO: need to handle the AccessControlManagerRoles shouldComponentUpdate phase.");
        //        return(true);
        //    }

    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate() {
            console.log("// TODO: need to handle the AccessControlManagerRoles componentWillUpdate phase.");
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'h1',
                null,
                'Roles'
            );
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            console.log("// TODO: need to handle the AccessControlManagerRoles componentDidUpdate phase.");
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log("// TODO: need to handle the AccessControlManagerRoles DidMount phase.");
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log("// TODO: need to handle the AccessControlManagerRoles DidMount phase.");
        }
    }]);

    return AccessControlManagerRoles;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        state: state
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        dispatch: dispatch
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AccessControlManagerRoles);

/***/ }),

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Grid = __webpack_require__(19);

var _Grid2 = _interopRequireDefault(_Grid);

var _IconButton = __webpack_require__(20);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Icon = __webpack_require__(18);

var _Icon2 = _interopRequireDefault(_Icon);

var _List = __webpack_require__(109);

var _List2 = _interopRequireDefault(_List);

var _Switch = __webpack_require__(71);

var _Switch2 = _interopRequireDefault(_Switch);

var _Typography = __webpack_require__(21);

var _Typography2 = _interopRequireDefault(_Typography);

var _TextField = __webpack_require__(22);

var _TextField2 = _interopRequireDefault(_TextField);

var _Table = __webpack_require__(34);

var _Table2 = _interopRequireDefault(_Table);

var _styles = __webpack_require__(15);

var _moduleActions = __webpack_require__(166);

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
            backgroundColor: theme.palette.background.paper,
            position: 'relative',
            overflow: 'auto',
            maxHeight: 750
        }
    };
};

var AccessControlManagerResources = function (_React$Component) {
    _inherits(AccessControlManagerResources, _React$Component);

    function AccessControlManagerResources() {
        _classCallCheck(this, AccessControlManagerResources);

        return _possibleConstructorReturn(this, (AccessControlManagerResources.__proto__ || Object.getPrototypeOf(AccessControlManagerResources)).call(this));
    }

    _createClass(AccessControlManagerResources, [{
        key: 'filterResourceList',
        value: function filterResourceList(event) {
            var query = {};
            if (event.currentTarget.value) {
                query.name = event.currentTarget.value;
            }
            (0, _moduleActions.loadAvailableResources)(this.props.dispatch, query);
        }
    }, {
        key: 'toggleRoleResourceRight',
        value: function toggleRoleResourceRight(event) {
            var token = event.currentTarget.id.split(":");
            (0, _moduleActions.updateRoleResource)(this.props.dispatch, token[0], this.props.roleResources[token[1]]);
        }
    }, {
        key: 'addResource',
        value: function addResource(event) {
            (0, _moduleActions.addRoleResource)(this.props.dispatch, this.props.selectedRole, this.props.availableResources[event.currentTarget.id]);
        }
    }, {
        key: 'deleteResource',
        value: function deleteResource(event) {
            (0, _moduleActions.deleteRoleResource)(this.props.dispatch, event.currentTarget.id, this.props.selectedRole);
        }
    }, {
        key: 'resourceListItem',
        value: function resourceListItem(resource, index) {
            return _react2.default.createElement(
                _List.ListItem,
                { onClick: this.selectedResource.bind(this), key: resource._id },
                _react2.default.createElement('listItemText', { primary: resource.name })
            );
        }
    }, {
        key: 'roleResourceRow',
        value: function roleResourceRow(roleResource, index) {
            return _react2.default.createElement(
                _List.ListItem,
                { button: true, key: roleResource._id },
                _react2.default.createElement(_List.ListItemText, {
                    primary: roleResource.resource.name
                }),
                _react2.default.createElement(
                    _List.ListItemSecondaryAction,
                    null,
                    'Get',
                    _react2.default.createElement(_Switch2.default, { id: 'get:' + index, checked: roleResource.get, onClick: this.toggleRoleResourceRight.bind(this) }),
                    'Put',
                    _react2.default.createElement(_Switch2.default, { id: 'put:' + index, checked: roleResource.put, onClick: this.toggleRoleResourceRight.bind(this) }),
                    'Post',
                    _react2.default.createElement(_Switch2.default, { id: 'post:' + index, checked: roleResource.post, onClick: this.toggleRoleResourceRight.bind(this) }),
                    'Delete',
                    _react2.default.createElement(_Switch2.default, { id: 'delete:' + index, checked: roleResource.delete, onClick: this.toggleRoleResourceRight.bind(this) }),
                    _react2.default.createElement(
                        _IconButton2.default,
                        { 'aria-label': 'Delete', id: roleResource._id, onClick: this.deleteResource.bind(this) },
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
        key: 'availableResourceRow',
        value: function availableResourceRow(resource, index) {
            return _react2.default.createElement(
                _List.ListItem,
                { button: true, key: resource._id },
                _react2.default.createElement(
                    _List.ListItemIcon,
                    null,
                    _react2.default.createElement(
                        _Icon2.default,
                        null,
                        resource.static ? "web" : "settings_applications"
                    )
                ),
                _react2.default.createElement(_List.ListItemText, {
                    primary: resource.name
                }),
                _react2.default.createElement(
                    _List.ListItemSecondaryAction,
                    null,
                    _react2.default.createElement(
                        _IconButton2.default,
                        {
                            id: index,
                            onClick: this.addResource.bind(this)
                        },
                        _react2.default.createElement(
                            _Icon2.default,
                            null,
                            'add'
                        )
                    )
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var classes = this.props.classes;

            return _react2.default.createElement(
                _Grid2.default,
                { container: true },
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, xs: 8 },
                    _react2.default.createElement(
                        _Typography2.default,
                        { type: 'title' },
                        'Assinged'
                    ),
                    _react2.default.createElement(
                        _List2.default,
                        null,
                        this.props.roleResources.map(function (resource, index) {
                            return _this2.roleResourceRow(resource, index);
                        })
                    )
                ),
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, xs: 4 },
                    _react2.default.createElement(
                        _Typography2.default,
                        { type: 'title' },
                        'Available'
                    ),
                    _react2.default.createElement(_TextField2.default, {
                        id: 'resourceFilter',
                        name: 'resourceFilter',
                        value: this.props.resourceFilter,
                        onChange: this.filterResourceList.bind(this),
                        label: 'Name',
                        fullWidth: true
                    }),
                    _react2.default.createElement(
                        _List2.default,
                        { className: classes.root },
                        this.props.availableResources.map(function (resource, index) {
                            return _this2.availableResourceRow(resource, index);
                        })
                    )
                )
            );
        }
    }]);

    return AccessControlManagerResources;
}(_react2.default.Component);

exports.default = (0, _styles.withStyles)(styles)(AccessControlManagerResources);

/***/ }),

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Grid = __webpack_require__(19);

var _Grid2 = _interopRequireDefault(_Grid);

var _IconButton = __webpack_require__(20);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Icon = __webpack_require__(18);

var _Icon2 = _interopRequireDefault(_Icon);

var _List = __webpack_require__(109);

var _List2 = _interopRequireDefault(_List);

var _Switch = __webpack_require__(71);

var _Switch2 = _interopRequireDefault(_Switch);

var _Typography = __webpack_require__(21);

var _Typography2 = _interopRequireDefault(_Typography);

var _TextField = __webpack_require__(22);

var _TextField2 = _interopRequireDefault(_TextField);

var _Table = __webpack_require__(34);

var _Table2 = _interopRequireDefault(_Table);

var _styles = __webpack_require__(15);

var _moduleActions = __webpack_require__(166);

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
            backgroundColor: theme.palette.background.paper,
            position: 'relative',
            overflow: 'auto',
            maxHeight: 750
        }
    };
};

var AccessControlManagerMenus = function (_React$Component) {
    _inherits(AccessControlManagerMenus, _React$Component);

    function AccessControlManagerMenus() {
        _classCallCheck(this, AccessControlManagerMenus);

        return _possibleConstructorReturn(this, (AccessControlManagerMenus.__proto__ || Object.getPrototypeOf(AccessControlManagerMenus)).call(this));
    }

    _createClass(AccessControlManagerMenus, [{
        key: 'filterMenuList',
        value: function filterMenuList(event) {
            var query = {};
            if (event.currentTarget.value) {
                query.name = event.currentTarget.value;
            }
            (0, _moduleActions.loadAvailableMenus)(this.props.dispatch, query);
        }
    }, {
        key: 'roleListItem',
        value: function roleListItem(role, index) {
            return _react2.default.createElement(
                _List.ListItem,
                { button: true, key: role._id },
                _react2.default.createElement(_List.ListItemText, { primary: role.role })
            );
        }
    }, {
        key: 'addMenu',
        value: function addMenu(event) {
            (0, _moduleActions.addRoleMenu)(this.props.dispatch, this.props.selectedRole, this.props.availableMenus[event.currentTarget.id]);
        }
    }, {
        key: 'deleteMenu',
        value: function deleteMenu(event) {
            (0, _moduleActions.deleteRoleMenu)(this.props.dispatch, event.currentTarget.id, this.props.selectedRole);
        }
    }, {
        key: 'roleMenuRow',
        value: function roleMenuRow(roleMenu, index) {
            return _react2.default.createElement(
                _List.ListItem,
                { button: true, key: roleMenu._id },
                _react2.default.createElement(_List.ListItemText, {
                    primary: roleMenu.menu.name
                }),
                _react2.default.createElement(
                    _List.ListItemSecondaryAction,
                    null,
                    _react2.default.createElement(
                        _IconButton2.default,
                        { 'aria-label': 'Delete', id: roleMenu._id, onClick: this.deleteMenu.bind(this) },
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
        key: 'availableMenuRow',
        value: function availableMenuRow(menu, index) {
            return _react2.default.createElement(
                _List.ListItem,
                { button: true, key: menu._id },
                _react2.default.createElement(
                    _List.ListItemIcon,
                    null,
                    _react2.default.createElement(
                        _Icon2.default,
                        null,
                        'menu'
                    )
                ),
                _react2.default.createElement(_List.ListItemText, {
                    primary: menu.display
                }),
                _react2.default.createElement(
                    _List.ListItemSecondaryAction,
                    null,
                    _react2.default.createElement(
                        _IconButton2.default,
                        {
                            id: index,
                            onClick: this.addMenu.bind(this)
                        },
                        _react2.default.createElement(
                            _Icon2.default,
                            null,
                            'add'
                        )
                    )
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var classes = this.props.classes;

            return _react2.default.createElement(
                _Grid2.default,
                { container: true },
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, xs: 8 },
                    _react2.default.createElement(
                        _Typography2.default,
                        { type: 'title' },
                        'Assinged'
                    ),
                    _react2.default.createElement(
                        _List2.default,
                        null,
                        this.props.roleMenus.map(function (resource, index) {
                            return _this2.roleMenuRow(resource, index);
                        })
                    )
                ),
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, xs: 4 },
                    _react2.default.createElement(
                        _Typography2.default,
                        { type: 'title' },
                        'Available'
                    ),
                    _react2.default.createElement(_TextField2.default, {
                        id: 'menuFilter',
                        name: 'menuFilter',
                        value: this.props.resourceFilter,
                        onChange: this.filterMenuList.bind(this),
                        label: 'Display',
                        fullWidth: true
                    }),
                    _react2.default.createElement(
                        _List2.default,
                        { className: classes.root },
                        this.props.availableMenus.map(function (menu, index) {
                            return _this2.availableMenuRow(menu, index);
                        })
                    )
                )
            );
        }
    }]);

    return AccessControlManagerMenus;
}(_react2.default.Component);

exports.default = (0, _styles.withStyles)(styles)(AccessControlManagerMenus);

/***/ })

},[588]);