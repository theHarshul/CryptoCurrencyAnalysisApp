webpackJsonp([7],{

/***/ 874:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactRedux = __webpack_require__(15);

var _store = __webpack_require__(875);

var _store2 = _interopRequireDefault(_store);

var _styles = __webpack_require__(17);

var _Layout = __webpack_require__(877);

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

/***/ 875:
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

var _moduleReducer = __webpack_require__(876);

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

/***/ 876:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stateStorage = __webpack_require__(44);

var _stateStorage2 = _interopRequireDefault(_stateStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = {
    edit: false,
    index: -1,
    menus: [],
    form: {
        _id: '',
        display: '',
        menuType: '',
        resourceURL: ''
    }
};

var moduleReducer = function moduleReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments[1];

    var newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'MODULE_SET':
            {
                _stateStorage2.default.set('moduleState', state);
                break;
            }
        case 'FNDTN_MENU_MANAGER_CLEAR_FORM':
            {
                newState.form = {
                    _id: '',
                    display: '',
                    menuType: '',
                    resourceURL: ''
                };
                newState.index = -1;
                break;
            }
        case 'FNDTN_MENU_MANAGER_SET_MENUS':
            {
                newState.menus = action.payload;
                break;
            }
        case 'FNDTN_MENU_MANAGER_SET_FORM_VALUE':
            {
                newState.form[action.payload.field] = action.payload.value;
                break;
            }
        case 'FNDTN_MENU_MANAGER_EDIT_MENU':
            {
                newState.form = action.payload.menu;
                newState.index = action.payload.index;
                newState.edit = true;
                break;
            }
        case 'FNDTN_MENU_MANAGER_CANCEL_EDIT':
            {
                newState.edit = false;
                break;
            }
        case 'FNDTN_MENU_MANAGER_SAVE_MENU':
            {
                if (action.payload.index >= 0) {
                    newState.menus[action.payload.index] = action.payload.menu;
                } else {
                    newState.menus.push(action.payload.menu);
                }
                break;
            }
        case 'FNDTN_MENU_MANAGER_DELETE_MENU':
            {
                var menus = newState.menus.slice();
                menus.splice(action.payload.index, 1);
                newState.menus = menus;
                break;
            }
    }
    return newState;
};

exports.default = moduleReducer;

/***/ }),

/***/ 877:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(25);

var _reactRedux = __webpack_require__(15);

var _Paper = __webpack_require__(18);

var _Paper2 = _interopRequireDefault(_Paper);

var _styles = __webpack_require__(17);

var _AppHeader = __webpack_require__(57);

var _AppHeader2 = _interopRequireDefault(_AppHeader);

var _AppBody = __webpack_require__(878);

var _AppBody2 = _interopRequireDefault(_AppBody);

var _AppFooter = __webpack_require__(58);

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

/***/ 878:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(25);

var _reactRedux = __webpack_require__(15);

var _MenuManagerForm = __webpack_require__(879);

var _MenuManagerForm2 = _interopRequireDefault(_MenuManagerForm);

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
                        return _react2.default.createElement(_MenuManagerForm2.default, { disptach: _this2.props.disptach });
                    } })
            );
        }
    }]);

    return AppBody;
}(_react2.default.Component);

exports.default = AppBody;

/***/ }),

/***/ 879:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _Grid = __webpack_require__(22);

var _Grid2 = _interopRequireDefault(_Grid);

var _Icon = __webpack_require__(21);

var _Icon2 = _interopRequireDefault(_Icon);

var _IconButton = __webpack_require__(23);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Paper = __webpack_require__(18);

var _Paper2 = _interopRequireDefault(_Paper);

var _styles = __webpack_require__(17);

var _Switch = __webpack_require__(73);

var _Switch2 = _interopRequireDefault(_Switch);

var _Table = __webpack_require__(38);

var _Table2 = _interopRequireDefault(_Table);

var _TextField = __webpack_require__(24);

var _TextField2 = _interopRequireDefault(_TextField);

var _Typography = __webpack_require__(26);

var _Typography2 = _interopRequireDefault(_Typography);

var _moduleActions = __webpack_require__(880);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this license header, choose License Headers in Project Properties.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this template file, choose Tools | Templates
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * and open the template in the editor.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var styles = function styles(theme) {
    return { root: {} };
};

var MenuManagerForm = function (_React$Component) {
    _inherits(MenuManagerForm, _React$Component);

    function MenuManagerForm() {
        _classCallCheck(this, MenuManagerForm);

        return _possibleConstructorReturn(this, (MenuManagerForm.__proto__ || Object.getPrototypeOf(MenuManagerForm)).call(this));
    }

    _createClass(MenuManagerForm, [{
        key: 'setFormValue',
        value: function setFormValue(event) {
            this.props.dispatch((0, _moduleActions.setFormValue)(event.currentTarget.id, event.currentTarget.value));
        }
    }, {
        key: 'toggleFormValue',
        value: function toggleFormValue(event, isInputChecked) {
            this.props.dispatch((0, _moduleActions.setFormValue)(event.currentTarget.id, isInputChecked));
        }
    }, {
        key: 'edit',
        value: function edit(event) {
            var id = parseInt(event.currentTarget.id);
            var menu = Object.assign({}, this.props.state.menus[id]);
            this.props.dispatch((0, _moduleActions.editMenu)(menu, id));
        }
    }, {
        key: 'delete',
        value: function _delete(event) {
            var index = event.currentTarget.id;
            (0, _moduleActions.deleteMenu)(this.props.dispatch, this.props.state.menus[index], index);
        }
    }, {
        key: 'find',
        value: function find(event) {

            var query = {};
            if (this.props.state.form.name !== '') {
                query.file = this.props.state.form.name;
            }

            (0, _moduleActions.loadMenus)(this.props.dispatch, query);
        }
    }, {
        key: 'add',
        value: function add(event) {
            this.props.dispatch((0, _moduleActions.clearForm)());
            this.props.dispatch((0, _moduleActions.editMenu)(this.props.state.form, -1));
        }
    }, {
        key: 'cancel',
        value: function cancel(event) {
            this.props.dispatch((0, _moduleActions.clearForm)());
            this.props.dispatch((0, _moduleActions.cancelEdit)());
        }
    }, {
        key: 'save',
        value: function save() {
            (0, _moduleActions.saveMenu)(this.props.dispatch, this.props.state.form, this.props.state.index);
        }
    }, {
        key: 'row',
        value: function row(menu, index) {
            return _react2.default.createElement(
                _Table.TableRow,
                { hover: true, key: "row" + menu._id, id: "row" + menu._id, color: 'accent' },
                _react2.default.createElement(
                    _Table.TableCell,
                    null,
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
                ),
                _react2.default.createElement(
                    _Table.TableCell,
                    null,
                    menu.display
                ),
                _react2.default.createElement(
                    _Table.TableCell,
                    null,
                    menu.menuType
                ),
                _react2.default.createElement(
                    _Table.TableCell,
                    null,
                    menu.resourceURL
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
                                    'Menu Manager'
                                )
                            )
                        ),
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
                                        'Action'
                                    ),
                                    _react2.default.createElement(
                                        _Table.TableCell,
                                        null,
                                        'Display'
                                    ),
                                    _react2.default.createElement(
                                        _Table.TableCell,
                                        null,
                                        'Menu Type'
                                    ),
                                    _react2.default.createElement(
                                        _Table.TableCell,
                                        null,
                                        'Resource URL'
                                    )
                                ),
                                _react2.default.createElement(
                                    _Table.TableRow,
                                    null,
                                    _react2.default.createElement(
                                        _Table.TableCell,
                                        null,
                                        _react2.default.createElement(
                                            _IconButton2.default,
                                            {
                                                id: "search",
                                                onClick: this.props.state.edit ? this.save.bind(this) : this.find.bind(this)
                                            },
                                            _react2.default.createElement(
                                                _Icon2.default,
                                                null,
                                                this.props.state.edit ? "done" : "search"
                                            )
                                        ),
                                        _react2.default.createElement(
                                            _IconButton2.default,
                                            {
                                                id: "cancel",
                                                onClick: this.props.state.edit ? this.cancel.bind(this) : this.add.bind(this)
                                            },
                                            _react2.default.createElement(
                                                _Icon2.default,
                                                null,
                                                this.props.state.edit ? "close" : "add"
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _Table.TableCell,
                                        null,
                                        _react2.default.createElement(_TextField2.default, {
                                            id: 'display',
                                            name: 'display',
                                            value: this.props.state.form.display,
                                            onChange: this.setFormValue.bind(this),
                                            label: 'Dispaly',
                                            fullWidth: true
                                        })
                                    ),
                                    _react2.default.createElement(
                                        _Table.TableCell,
                                        null,
                                        _react2.default.createElement(_TextField2.default, {
                                            id: 'menuType',
                                            name: 'menuType',
                                            value: this.props.state.form.menuType,
                                            onChange: this.setFormValue.bind(this),
                                            label: 'Menu Type',
                                            fullWidth: true
                                        })
                                    ),
                                    _react2.default.createElement(
                                        _Table.TableCell,
                                        null,
                                        _react2.default.createElement(_TextField2.default, {
                                            id: 'resourceURL',
                                            name: 'resourceURL',
                                            value: this.props.state.form.resourceURL,
                                            onChange: this.setFormValue.bind(this),
                                            label: 'Resource URL',
                                            fullWidth: true
                                        })
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _Table.TableBody,
                                null,
                                this.props.state.menus.map(function (menu, index) {
                                    return _this2.row(menu, index);
                                })
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
            (0, _moduleActions.loadMenus)(this.props.dispatch, {});
        }
    }]);

    return MenuManagerForm;
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

exports.default = (0, _styles.withStyles)(styles)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MenuManagerForm));

/***/ }),

/***/ 880:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.clearForm = exports.deleteMenu = exports.cancelEdit = exports.saveMenu = exports.editMenu = exports.setFormValue = exports.loadMenus = undefined;

var _axios = __webpack_require__(33);

var _axios2 = _interopRequireDefault(_axios);

var _footerActions = __webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function setMenus(menus) {
    return {
        type: 'FNDTN_MENU_MANAGER_SET_MENUS',
        payload: menus
    };
}

//Actions


function setFormValue(field, value) {
    return {
        type: 'FNDTN_MENU_MANAGER_SET_FORM_VALUE',
        payload: { field: field, value: value }
    };
}

function editMenu(menu, index) {
    return {
        type: 'FNDTN_MENU_MANAGER_EDIT_MENU',
        payload: { menu: menu, index: index }
    };
}

function clearForm() {
    return {
        type: 'FNDTN_MENU_MANAGER_CLEAR_FORM'
    };
}

function cancelEdit() {
    return {
        type: 'FNDTN_MENU_MANAGER_CANCEL_EDIT'
    };
}

function _saveMenu(menu, index) {
    return {
        type: 'FNDTN_MENU_MANAGER_SAVE_MENU',
        payload: { menu: menu, index: index }
    };
}

function _deleteResource(index) {
    return {
        type: 'FNDTN_MENU_MANAGER_DELETE_MENU',
        payload: { index: index }
    };
}

function saveMenu(dispatch, menu, index) {
    _axios2.default.post('/services/private/fndtn/menus', menu).then(function (res) {
        dispatch(_saveMenu(menu, index));
        dispatch(clearForm());
        dispatch(cancelEdit());
    }).catch(function (error) {
        console.log(error.response.data);
        dispatch((0, _footerActions.setFooterMessage)('Unable to save menu: ' + error.response.data.message));
    });
}

function deleteMenu(dispatch, menu, index) {
    var menuId = menu._id;
    _axios2.default.delete('/services/private/fndtn/menus/' + menuId).then(function (res) {
        dispatch(_deleteMenu(index));
        dispatch((0, _footerActions.setFooterMessage)('Menu deleted.'));
    }).catch(function (error) {
        console.log(error.response.data);
        dispatch((0, _footerActions.setFooterMessage)('Unable to delete menu: ' + error.response.data.message));
    });
}

function loadMenus(dispatch, search) {
    _axios2.default.post('/services/private/fndtn/menus/find', search).then(function (res) {
        dispatch((0, _footerActions.setFooterMessage)('Menus loaded.'));
        dispatch(setMenus(res.data.menus));
    }).catch(function (error) {
        console.log(error.response.data);
        dispatch((0, _footerActions.setFooterMessage)('Unable to load all menus: ' + error.response.data.message));
    });
};

exports.loadMenus = loadMenus;
exports.setFormValue = setFormValue;
exports.editMenu = editMenu;
exports.saveMenu = saveMenu;
exports.cancelEdit = cancelEdit;
exports.deleteMenu = deleteMenu;
exports.clearForm = clearForm;

/***/ })

},[874]);