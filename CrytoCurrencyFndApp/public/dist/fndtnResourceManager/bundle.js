webpackJsonp([6],{

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactRedux = __webpack_require__(15);

var _store = __webpack_require__(720);

var _store2 = _interopRequireDefault(_store);

var _styles = __webpack_require__(17);

var _Layout = __webpack_require__(722);

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

/***/ 720:
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

var _moduleReducer = __webpack_require__(721);

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

/***/ 721:
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
    resources: [],
    form: {
        _id: '',
        name: '',
        file: '',
        url: '',
        static: false,
        public: false,
        protected: false
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
        case 'FNDTN_RESOURCE_MANAGER_CLEAR_FORM':
            {
                newState.form = {
                    _id: '',
                    name: '',
                    file: '',
                    url: '',
                    static: false,
                    public: false,
                    protected: false
                };
                newState.index = -1;
                break;
            }
        case 'FNDTN_RESOURCE_MANAGER_SET_RESOURCES':
            {
                newState.resources = action.payload;
                break;
            }
        case 'FNDTN_RESOURCE_MANAGER_SET_FORM_VALUE':
            {
                newState.form[action.payload.field] = action.payload.value;
                break;
            }
        case 'FNDTN_RESOURCE_MANAGER_EDIT_RESOURCE':
            {
                newState.form = action.payload.resource;
                newState.index = action.payload.index;
                newState.edit = true;
                break;
            }
        case 'FNDTN_RESOURCE_MANAGER_CANCEL_EDIT':
            {
                newState.edit = false;
                break;
            }
        case 'FNDTN_RESOURCE_MANAGER_SAVE_RESOURCE':
            {
                if (action.payload.index >= 0) {
                    newState.resources[action.payload.index] = action.payload.resource;
                } else {
                    newState.resources.push(action.payload.resource);
                }
                break;
            }
        case 'FNDTN_RESOURCE_MANAGER_DELETE_RESOURCE':
            {
                var resources = newState.resources.slice();
                resources.splice(action.payload.index, 1);
                newState.resources = resources;
                break;
            }
    }
    return newState;
};

exports.default = moduleReducer;

/***/ }),

/***/ 722:
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

var _Paper = __webpack_require__(18);

var _Paper2 = _interopRequireDefault(_Paper);

var _styles = __webpack_require__(17);

var _AppHeader = __webpack_require__(57);

var _AppHeader2 = _interopRequireDefault(_AppHeader);

var _AppBody = __webpack_require__(723);

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

/***/ 723:
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

var _ResourceManagerForm = __webpack_require__(724);

var _ResourceManagerForm2 = _interopRequireDefault(_ResourceManagerForm);

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
                        return _react2.default.createElement(_ResourceManagerForm2.default, { disptach: _this2.props.disptach });
                    } })
            );
        }
    }]);

    return AppBody;
}(_react2.default.Component);

exports.default = AppBody;

/***/ }),

/***/ 724:
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

var _Switch = __webpack_require__(79);

var _Switch2 = _interopRequireDefault(_Switch);

var _Table = __webpack_require__(38);

var _Table2 = _interopRequireDefault(_Table);

var _TextField = __webpack_require__(26);

var _TextField2 = _interopRequireDefault(_TextField);

var _Typography = __webpack_require__(25);

var _Typography2 = _interopRequireDefault(_Typography);

var _moduleActions = __webpack_require__(728);

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

var ResourceManagerForm = function (_React$Component) {
    _inherits(ResourceManagerForm, _React$Component);

    function ResourceManagerForm() {
        _classCallCheck(this, ResourceManagerForm);

        return _possibleConstructorReturn(this, (ResourceManagerForm.__proto__ || Object.getPrototypeOf(ResourceManagerForm)).call(this));
    }

    _createClass(ResourceManagerForm, [{
        key: 'setFormValue',
        value: function setFormValue(event) {
            this.props.dispatch((0, _moduleActions.setFormValue)(event.currentTarget.id, event.currentTarget.value));
        }
    }, {
        key: 'toggleFormValue',
        value: function toggleFormValue(event) {
            this.props.dispatch((0, _moduleActions.setFormValue)(event.currentTarget.id, !this.props.state.form[event.currentTarget.id]));
        }
    }, {
        key: 'edit',
        value: function edit(event) {
            var id = parseInt(event.currentTarget.id);
            var resource = Object.assign({}, this.props.state.resources[id]);
            this.props.dispatch((0, _moduleActions.editResource)(resource, id));
        }
    }, {
        key: 'delete',
        value: function _delete(event) {
            var index = event.currentTarget.id;
            (0, _moduleActions.deleteResource)(this.props.dispatch, this.props.state.resources[index], index);
        }
    }, {
        key: 'find',
        value: function find(event) {

            var query = {};
            if (this.props.state.form.file !== '') {
                query.file = this.props.state.form.file;
            }

            if (this.props.state.form.url !== '') {
                query.url = this.props.state.form.url;
            }

            (0, _moduleActions.loadResources)(this.props.dispatch, query);
        }
    }, {
        key: 'add',
        value: function add(event) {
            this.props.dispatch((0, _moduleActions.clearForm)());
            this.props.dispatch((0, _moduleActions.editResource)(this.props.state.form, -1));
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
            (0, _moduleActions.saveResource)(this.props.dispatch, this.props.state.form, this.props.state.index);
        }
    }, {
        key: 'row',
        value: function row(resource, index) {
            return _react2.default.createElement(
                _Table.TableRow,
                { hover: true, key: "row" + resource._id, id: "row" + resource._id, color: 'accent' },
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
                    resource.name
                ),
                _react2.default.createElement(
                    _Table.TableCell,
                    null,
                    resource.file
                ),
                _react2.default.createElement(
                    _Table.TableCell,
                    null,
                    resource.url
                ),
                _react2.default.createElement(
                    _Table.TableCell,
                    null,
                    _react2.default.createElement(_Switch2.default, {
                        id: index,
                        name: 'static',
                        checked: resource.static
                    })
                ),
                _react2.default.createElement(
                    _Table.TableCell,
                    null,
                    _react2.default.createElement(_Switch2.default, {
                        id: index,
                        name: 'public',
                        checked: resource.public
                    })
                ),
                _react2.default.createElement(
                    _Table.TableCell,
                    null,
                    _react2.default.createElement(_Switch2.default, {
                        id: index,
                        name: 'protected',
                        checked: resource.protected
                    })
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
                                    'Resource Manager'
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
                                        'Name'
                                    ),
                                    _react2.default.createElement(
                                        _Table.TableCell,
                                        null,
                                        'File/Directory'
                                    ),
                                    _react2.default.createElement(
                                        _Table.TableCell,
                                        null,
                                        'URL'
                                    ),
                                    _react2.default.createElement(
                                        _Table.TableCell,
                                        null,
                                        'Static'
                                    ),
                                    _react2.default.createElement(
                                        _Table.TableCell,
                                        null,
                                        'Public'
                                    ),
                                    _react2.default.createElement(
                                        _Table.TableCell,
                                        null,
                                        'Protected'
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
                                            id: 'name',
                                            name: 'name',
                                            value: this.props.state.form.name,
                                            onChange: this.setFormValue.bind(this),
                                            label: 'Name',
                                            fullWidth: true
                                        })
                                    ),
                                    _react2.default.createElement(
                                        _Table.TableCell,
                                        null,
                                        _react2.default.createElement(_TextField2.default, {
                                            id: 'file',
                                            name: 'file',
                                            value: this.props.state.form.file,
                                            onChange: this.setFormValue.bind(this),
                                            label: 'Relative File',
                                            fullWidth: true
                                        })
                                    ),
                                    _react2.default.createElement(
                                        _Table.TableCell,
                                        null,
                                        _react2.default.createElement(_TextField2.default, {
                                            id: 'url',
                                            name: 'url',
                                            value: this.props.state.form.url,
                                            onChange: this.setFormValue.bind(this),
                                            label: 'Relative URL',
                                            fullWidth: true
                                        })
                                    ),
                                    _react2.default.createElement(
                                        _Table.TableCell,
                                        null,
                                        _react2.default.createElement(_Switch2.default, {
                                            id: 'static',
                                            name: 'static',
                                            checked: this.props.state.form.static,
                                            onClick: this.toggleFormValue.bind(this)
                                        })
                                    ),
                                    _react2.default.createElement(
                                        _Table.TableCell,
                                        null,
                                        _react2.default.createElement(_Switch2.default, {
                                            id: 'public',
                                            name: 'public',
                                            checked: this.props.state.form.public,
                                            onClick: this.toggleFormValue.bind(this)
                                        })
                                    ),
                                    _react2.default.createElement(
                                        _Table.TableCell,
                                        null,
                                        _react2.default.createElement(_Switch2.default, {
                                            id: 'protected',
                                            name: 'protected',
                                            checked: this.props.state.form.protected,
                                            onClick: this.toggleFormValue.bind(this)
                                        })
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _Table.TableBody,
                                null,
                                this.props.state.resources.map(function (resource, index) {
                                    return _this2.row(resource, index);
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
            (0, _moduleActions.loadResources)(this.props.dispatch, {});
        }
    }]);

    return ResourceManagerForm;
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

exports.default = (0, _styles.withStyles)(styles)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ResourceManagerForm));

/***/ }),

/***/ 728:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.clearForm = exports.deleteResource = exports.cancelEdit = exports.saveResource = exports.editResource = exports.setFormValue = exports.loadResources = undefined;

var _axios = __webpack_require__(33);

var _axios2 = _interopRequireDefault(_axios);

var _footerActions = __webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function setResources(resources) {
    return {
        type: 'FNDTN_RESOURCE_MANAGER_SET_RESOURCES',
        payload: resources
    };
}

//Actions


function setFormValue(field, value) {
    return {
        type: 'FNDTN_RESOURCE_MANAGER_SET_FORM_VALUE',
        payload: { field: field, value: value }
    };
}

function editResource(resource, index) {
    return {
        type: 'FNDTN_RESOURCE_MANAGER_EDIT_RESOURCE',
        payload: { resource: resource, index: index }
    };
}

function clearForm() {
    return {
        type: 'FNDTN_RESOURCE_MANAGER_CLEAR_FORM'
    };
}

function cancelEdit() {
    return {
        type: 'FNDTN_RESOURCE_MANAGER_CANCEL_EDIT'
    };
}

function _saveResource(resource, index) {
    return {
        type: 'FNDTN_RESOURCE_MANAGER_SAVE_RESOURCE',
        payload: { resource: resource, index: index }
    };
}

function _deleteResource(index) {
    return {
        type: 'FNDTN_RESOURCE_MANAGER_DELETE_RESOURCE',
        payload: { index: index }
    };
}

function saveResource(dispatch, resource, index) {
    _axios2.default.post('/services/private/fndtn/resources', resource).then(function (res) {
        dispatch(_saveResource(resource, index));
        dispatch(clearForm());
        dispatch(cancelEdit());
    }).catch(function (error) {
        console.log(error.response.data);
        dispatch((0, _footerActions.setFooterMessage)('Unable to save resource: ' + error.response.data.message));
    });
}

function deleteResource(dispatch, resource, index) {
    var resourceId = resource._id;
    _axios2.default.delete('/services/private/fndtn/resources/' + resourceId).then(function (res) {
        dispatch(_deleteResource(index));
        dispatch((0, _footerActions.setFooterMessage)('Resource deleted.'));
    }).catch(function (error) {
        console.log(error.response.data);
        dispatch((0, _footerActions.setFooterMessage)('Unable to delete resource: ' + error.response.data.message));
    });
}

function loadResources(dispatch, search) {
    _axios2.default.post('/services/private/fndtn/resources/find', search).then(function (res) {
        dispatch((0, _footerActions.setFooterMessage)('Resources loaded.'));
        dispatch(setResources(res.data.resources));
    }).catch(function (error) {
        console.log(error.response.data);
        dispatch((0, _footerActions.setFooterMessage)('Unable to load all resources: ' + error.response.data.message));
    });
};

exports.loadResources = loadResources;
exports.setFormValue = setFormValue;
exports.editResource = editResource;
exports.saveResource = saveResource;
exports.cancelEdit = cancelEdit;
exports.deleteResource = deleteResource;
exports.clearForm = clearForm;

/***/ })

},[719]);