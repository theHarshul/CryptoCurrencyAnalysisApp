webpackJsonp([4],{

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactRedux = __webpack_require__(15);

var _store = __webpack_require__(713);

var _store2 = _interopRequireDefault(_store);

var _styles = __webpack_require__(17);

var _Layout = __webpack_require__(715);

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

/***/ 713:
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

var _moduleReducer = __webpack_require__(714);

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

/***/ 714:
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
    users: [],
    form: {
        _id: '',
        username: '',
        first: '',
        middle: '',
        last: '',
        email: '',
        phone: ''
    }
};

var templateReducer = function templateReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments[1];

    var newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'FNDTN_USER_ACCOUNT_MANAGER_SET_USERS':
            {
                newState.users = action.payload;
                break;
            }
    }
    return newState;
};

exports.default = templateReducer;

/***/ }),

/***/ 715:
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

var _AppBody = __webpack_require__(716);

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

/***/ 716:
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

var _UserAccountManagerForm = __webpack_require__(717);

var _UserAccountManagerForm2 = _interopRequireDefault(_UserAccountManagerForm);

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
                        return _react2.default.createElement(_UserAccountManagerForm2.default, { disptach: _this2.props.disptach });
                    } })
            );
        }
    }]);

    return AppBody;
}(_react2.default.Component);

exports.default = AppBody;

/***/ }),

/***/ 717:
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

var _Table = __webpack_require__(38);

var _Table2 = _interopRequireDefault(_Table);

var _TextField = __webpack_require__(26);

var _TextField2 = _interopRequireDefault(_TextField);

var _Typography = __webpack_require__(25);

var _Typography2 = _interopRequireDefault(_Typography);

var _moduleActions = __webpack_require__(718);

var _navigationActions = __webpack_require__(94);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this license header, choose License Headers in Project Properties.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this template file, choose Tools | Templates
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * and open the template in the editor.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var UserAccountManagerForm = function (_React$Component) {
    _inherits(UserAccountManagerForm, _React$Component);

    function UserAccountManagerForm() {
        _classCallCheck(this, UserAccountManagerForm);

        return _possibleConstructorReturn(this, (UserAccountManagerForm.__proto__ || Object.getPrototypeOf(UserAccountManagerForm)).call(this));
    }

    _createClass(UserAccountManagerForm, [{
        key: 'setFormValue',
        value: function (_setFormValue) {
            function setFormValue(_x) {
                return _setFormValue.apply(this, arguments);
            }

            setFormValue.toString = function () {
                return _setFormValue.toString();
            };

            return setFormValue;
        }(function (event) {
            this.props.dispatch(setFormValue(event.currentTarget.id, event.currentTarget.value));
        })
    }, {
        key: 'edit',
        value: function edit(event) {
            var index = event.currentTarget.id;
            (0, _navigationActions.navigate)(this.props.dispatch, '/dist/fndtnUserAccount/#/' + this.props.state.users[index]._id);
        }
    }, {
        key: 'delete',
        value: function _delete(event) {
            var index = event.currentTarget.id;
            (0, _moduleActions.deleteUser)(this.props.dispatch, this.props.state.users[index], index);
        }
    }, {
        key: 'find',
        value: function find(event) {

            var query = {};
            if (this.props.state.form.username !== '') {
                query.username = this.props.state.form.username;
            }

            if (this.props.state.form.middle !== '') {
                query.middle = this.props.state.form.middle;
            }

            if (this.props.state.form.first !== '') {
                query.first = this.props.state.form.first;
            }

            if (this.props.state.form.last !== '') {
                query.last = this.props.state.form.last;
            }

            (0, _moduleActions.loadUsers)(this.props.dispatch, query);
        }
    }, {
        key: 'cancel',
        value: function cancel(event) {
            this.props.dispatch(clearForm());
            this.props.dispatch(cancelEdit());
        }
    }, {
        key: 'row',
        value: function row(user, index) {
            return _react2.default.createElement(
                _Table.TableRow,
                { key: "row" + user._id, id: "row" + user._id },
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
                    user.account.username
                ),
                _react2.default.createElement(
                    _Table.TableCell,
                    { colSpan: '3' },
                    user.name.first + ' ' + user.name.middle + ' ' + user.name.last
                ),
                _react2.default.createElement(
                    _Table.TableCell,
                    null,
                    user.emails[0].label + ': ' + user.emails[0].address
                ),
                _react2.default.createElement(
                    _Table.TableCell,
                    null,
                    user.phones[0].label + ': ' + user.phones[0].phone
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
                                { item: true },
                                _react2.default.createElement(
                                    _Typography2.default,
                                    { type: 'display2' },
                                    'User Account Manager'
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
                                        _react2.default.createElement(
                                            _IconButton2.default,
                                            {
                                                id: "search",
                                                onClick: this.find.bind(this)
                                            },
                                            _react2.default.createElement(
                                                _Icon2.default,
                                                null,
                                                'search'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _Table.TableCell,
                                        null,
                                        _react2.default.createElement(_TextField2.default, {
                                            id: 'username',
                                            name: 'username',
                                            value: this.props.state.form.username,
                                            onChange: this.setFormValue.bind(this),
                                            label: 'Username',
                                            fullWidth: true
                                        })
                                    ),
                                    _react2.default.createElement(
                                        _Table.TableCell,
                                        null,
                                        _react2.default.createElement(_TextField2.default, {
                                            id: 'first',
                                            name: 'first',
                                            value: this.props.state.form.first,
                                            onChange: this.setFormValue.bind(this),
                                            label: 'First Name',
                                            fullWidth: true
                                        })
                                    ),
                                    _react2.default.createElement(
                                        _Table.TableCell,
                                        null,
                                        _react2.default.createElement(_TextField2.default, {
                                            id: 'middle',
                                            name: 'middle',
                                            value: this.props.state.form.middle,
                                            onChange: this.setFormValue.bind(this),
                                            label: 'Middle Name',
                                            fullWidth: true
                                        })
                                    ),
                                    _react2.default.createElement(
                                        _Table.TableCell,
                                        null,
                                        _react2.default.createElement(_TextField2.default, {
                                            id: 'last',
                                            name: 'last',
                                            value: this.props.state.form.last,
                                            onChange: this.setFormValue.bind(this),
                                            label: 'Last Name',
                                            fullWidth: true
                                        })
                                    ),
                                    _react2.default.createElement(
                                        _Table.TableCell,
                                        null,
                                        _react2.default.createElement(_TextField2.default, {
                                            id: 'email',
                                            name: 'email',
                                            value: this.props.state.form.email,
                                            onChange: this.setFormValue.bind(this),
                                            label: 'E-Mail Address',
                                            fullWidth: true
                                        })
                                    ),
                                    _react2.default.createElement(
                                        _Table.TableCell,
                                        null,
                                        _react2.default.createElement(_TextField2.default, {
                                            id: 'phone',
                                            name: 'phone',
                                            value: this.props.state.form.phone,
                                            onChange: this.setFormValue.bind(this),
                                            label: 'Phone Number',
                                            fullWidth: true
                                        })
                                    )
                                ),
                                _react2.default.createElement(
                                    _Table.TableRow,
                                    null,
                                    _react2.default.createElement(_Table.TableCell, null),
                                    _react2.default.createElement(
                                        _Table.TableCell,
                                        null,
                                        'Username'
                                    ),
                                    _react2.default.createElement(
                                        _Table.TableCell,
                                        { colSpan: '3' },
                                        'Name'
                                    ),
                                    _react2.default.createElement(
                                        _Table.TableCell,
                                        null,
                                        'E-Mail'
                                    ),
                                    _react2.default.createElement(
                                        _Table.TableCell,
                                        null,
                                        'Phone'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _Table.TableBody,
                                null,
                                this.props.state.users.map(function (user, index) {
                                    return _this2.row(user, index);
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
            (0, _moduleActions.loadUsers)(this.props.dispatch, {});
        }
    }]);

    return UserAccountManagerForm;
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UserAccountManagerForm);

/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deleteUser = exports.loadUsers = undefined;

var _axios = __webpack_require__(33);

var _axios2 = _interopRequireDefault(_axios);

var _footerActions = __webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function setUsers(users) {
    return {
        type: 'FNDTN_USER_ACCOUNT_MANAGER_SET_USERS',
        payload: users
    };
}

//Actions


function editUser(user, index) {
    return {
        type: 'FNDTN_USER_ACCOUNT_MANAGER_EDIT_USER',
        payload: { user: user, index: index }
    };
}

function _deleteUser(index) {
    return {
        type: 'FNDTN_USER_ACCOUNT_MANAGER_DELETE_USER',
        payload: { index: index }
    };
}

function deleteUser(dispatch, user, index) {
    var userId = user._id;
    _axios2.default.delete('/services/private/fndtn/users/' + userId).then(function (res) {
        dispatch(_deleteUser(index));
        dispatch((0, _footerActions.setFooterMessage)('User deleted.'));
    }).catch(function (error) {
        console.log(error.response.data);
        dispatch((0, _footerActions.setFooterMessage)('Unable to delete User: ' + error.response.data.message));
    });
}

function loadUsers(dispatch, search) {
    _axios2.default.post('/services/private/fndtn/userAccountManager/find', search).then(function (res) {
        dispatch((0, _footerActions.setFooterMessage)('Users loaded.'));
        dispatch(setUsers(res.data.users));
    }).catch(function (error) {
        console.log(error.response.data);
        dispatch((0, _footerActions.setFooterMessage)('Unable to load all users: ' + error.response.data.message));
    });
};

exports.loadUsers = loadUsers;
exports.deleteUser = deleteUser;

/***/ })

},[712]);