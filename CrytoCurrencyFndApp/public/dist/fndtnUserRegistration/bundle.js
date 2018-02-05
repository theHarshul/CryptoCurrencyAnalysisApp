webpackJsonp([3],{

/***/ 427:
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
var reqCountSpecial = 1;
var reqCountUpper = 1;
var reqCountLower = 1;
var reqCountNumber = 1;
var reqLength = 8;

var Validation = {
    email: function email(_email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var valid = re.test(_email);
        return valid;
    },
    phone: function phone(_phone, format) {
        console.log('ToDo: need to complete ReduxValidation.phone');
        return true;
    },
    equal: function equal(value1, value2) {
        return value1 === value2;
    },
    date: function date(_date, format) {
        console.log('ToDo: need to complete ReduxValidation.equal');
        return true;
    },
    password: function password(_password) {
        var special = (_password.match(/([!"#$%&\'()*+,\-\./:;<=>?@[\]\\^_`{|}~])/g) || []).length >= reqCountSpecial;
        var upper = (_password.match(/[A-Z]/g) || []).length >= reqCountUpper;
        var lower = (_password.match(/[a-z]/g) || []).length >= reqCountLower;
        var number = (_password.match(/[0-9]/g) || []).length >= reqCountNumber;
        var length = _password.length >= reqLength;
        return special && upper && lower && number && length;
    }
};

exports.default = Validation;

/***/ }),

/***/ 915:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactRedux = __webpack_require__(15);

var _store = __webpack_require__(916);

var _store2 = _interopRequireDefault(_store);

var _styles = __webpack_require__(17);

var _Layout = __webpack_require__(918);

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

/***/ 916:
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

var _moduleReducer = __webpack_require__(917);

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

/***/ 917:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stateStorage = __webpack_require__(44);

var _stateStorage2 = _interopRequireDefault(_stateStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = _stateStorage2.default.get('moduleState') || {
    errorText: {
        username: '',
        password: '',
        passwordConfirm: '',
        email: '',
        emailConfirm: ''
    },
    form: {
        captcha: '',
        first: '',
        middle: '',
        last: '',
        username: '',
        email: '',
        emailConfirm: '',
        password: '',
        passwordConfirm: '',
        phone: ''
    }
};

var moduleReducer = function moduleReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments[1];

    var newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'FNDTN_REGISTRATION_STATE_SET':
            {
                _stateStorage2.default.set('moduleState', newState);
                break;
            }
        case 'FNDTN_REGISTRATION_SET_FIELD_VALUE':
            {
                newState.form[action.payload.attribute] = action.payload.value;
                state = newState;
                break;
            }
        case 'FNDTN_REGISTRATION_SET_FIELD_ERROR_TEXT':
            {
                newState.errorText[action.payload.attribute] = action.payload.value;
                state = newState;
                break;
            }
    }
    return state;
};

exports.default = moduleReducer;

/***/ }),

/***/ 918:
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

var _RegistrationForm = __webpack_require__(919);

var _RegistrationForm2 = _interopRequireDefault(_RegistrationForm);

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
                        _react2.default.createElement(_RegistrationForm2.default, { dispatch: this.props.dispatch }),
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

/***/ 919:
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

var _reactGoogleRecaptcha = __webpack_require__(426);

var _reactGoogleRecaptcha2 = _interopRequireDefault(_reactGoogleRecaptcha);

var _Button = __webpack_require__(93);

var _Button2 = _interopRequireDefault(_Button);

var _Grid = __webpack_require__(22);

var _Grid2 = _interopRequireDefault(_Grid);

var _Paper = __webpack_require__(18);

var _Paper2 = _interopRequireDefault(_Paper);

var _TextField = __webpack_require__(24);

var _TextField2 = _interopRequireDefault(_TextField);

var _Typography = __webpack_require__(26);

var _Typography2 = _interopRequireDefault(_Typography);

var _styles = __webpack_require__(17);

var _moduleActions = __webpack_require__(925);

var _Validation = __webpack_require__(427);

var _Validation2 = _interopRequireDefault(_Validation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this license header, choose License Headers in Project Properties.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this template file, choose Tools | Templates
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * and open the template in the editor.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var styles = function styles(theme) {
    return {};
};

var RegistrationForm = function (_React$Component) {
    _inherits(RegistrationForm, _React$Component);

    function RegistrationForm() {
        _classCallCheck(this, RegistrationForm);

        return _possibleConstructorReturn(this, (RegistrationForm.__proto__ || Object.getPrototypeOf(RegistrationForm)).call(this));
    }

    _createClass(RegistrationForm, [{
        key: 'setFieldValue',
        value: function setFieldValue(event) {
            this.props.dispatch((0, _moduleActions.setFieldValue)(event.target.name, event.target.value));
            switch (event.target.name) {
                case 'username':
                    {
                        (0, _moduleActions.userAvailable)(this.props.dispatch, event.target.value);
                        break;
                    }
                case 'password':
                    {
                        this.props.dispatch((0, _moduleActions.setFieldErrorText)(event.target.name, _Validation2.default.password(event.target.value) ? '' : 'Password not valid'));
                        break;
                    }
                case 'passwordConfirm':
                    {
                        this.props.dispatch((0, _moduleActions.setFieldErrorText)(event.target.name, _Validation2.default.equal(event.target.value, this.props.state.form.password) ? '' : 'Password does not match'));
                        break;
                    }
                case 'email':
                    {
                        (0, _moduleActions.emailUsed)(this.props.dispatch, event.target.value);
                        break;
                    }
                case 'emailConfirm':
                    {
                        this.props.dispatch((0, _moduleActions.setFieldErrorText)(event.target.name, _Validation2.default.email(event.target.value, this.props.state.form.email) ? '' : 'E-Mail does not match'));
                        break;
                    }
                case 'phone':
                    {
                        this.props.dispatch((0, _moduleActions.setFieldErrorText)(event.target.name, _Validation2.default.phone(event.target.value, this.props.state.form.email) ? '' : 'Phone format invalid'));
                        break;
                    }
            }
        }
    }, {
        key: 'register',
        value: function register() {
            (0, _moduleActions.registerUser)(this.props.dispatch, this.props.state.form);
        }
    }, {
        key: 'setCaptchaValue',
        value: function setCaptchaValue(value) {
            this.props.dispatch((0, _moduleActions.setFieldValue)('captcha', value));
        }
    }, {
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
                            { container: true },
                            _react2.default.createElement(
                                _Grid2.default,
                                { container: true, justify: 'center' },
                                _react2.default.createElement(
                                    _Grid2.default,
                                    { item: true, xl: 11 },
                                    _react2.default.createElement(
                                        _Typography2.default,
                                        { type: 'display2' },
                                        'User Registration'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _Grid2.default,
                                { container: true, justify: 'center' },
                                _react2.default.createElement(
                                    _Grid2.default,
                                    { item: true, xs: 11 },
                                    _react2.default.createElement(_TextField2.default, {
                                        id: 'first',
                                        name: 'first',
                                        value: this.props.state.form.first,
                                        label: 'First',
                                        fullWidth: true,
                                        onChange: this.setFieldValue.bind(this)
                                    })
                                )
                            ),
                            _react2.default.createElement(
                                _Grid2.default,
                                { container: true, justify: 'center' },
                                _react2.default.createElement(
                                    _Grid2.default,
                                    { item: true, xs: 11 },
                                    _react2.default.createElement(_TextField2.default, {
                                        id: 'middle',
                                        name: 'middle',
                                        value: this.props.state.form.middle,
                                        label: 'Middle',
                                        fullWidth: true,
                                        onChange: this.setFieldValue.bind(this)
                                    })
                                )
                            ),
                            _react2.default.createElement(
                                _Grid2.default,
                                { container: true, justify: 'center' },
                                _react2.default.createElement(
                                    _Grid2.default,
                                    { item: true, xs: 11 },
                                    _react2.default.createElement(_TextField2.default, {
                                        id: 'last',
                                        name: 'last',
                                        value: this.props.state.form.last,
                                        label: 'Last',
                                        fullWidth: true,
                                        onChange: this.setFieldValue.bind(this)
                                    })
                                )
                            ),
                            _react2.default.createElement(
                                _Grid2.default,
                                { container: true, justify: 'center' },
                                _react2.default.createElement(
                                    _Grid2.default,
                                    { item: true, xs: 11 },
                                    _react2.default.createElement(_TextField2.default, {
                                        id: 'username',
                                        name: 'username',
                                        value: this.props.state.form.username,
                                        label: 'Username',
                                        fullWidth: true,
                                        onChange: this.setFieldValue.bind(this),
                                        helperText: this.props.state.errorText.username,
                                        error: !this.props.state.errorText.username === ''
                                    })
                                )
                            ),
                            _react2.default.createElement(
                                _Grid2.default,
                                { container: true, justify: 'center' },
                                _react2.default.createElement(
                                    _Grid2.default,
                                    { item: true, xs: 11 },
                                    _react2.default.createElement(_TextField2.default, {
                                        id: 'password',
                                        name: 'password',
                                        value: this.props.state.form.password,
                                        label: 'Password',
                                        fullWidth: true,
                                        onChange: this.setFieldValue.bind(this),
                                        helperText: this.props.state.errorText.password,
                                        error: !this.props.state.errorText.password === ''
                                    })
                                )
                            ),
                            _react2.default.createElement(
                                _Grid2.default,
                                { container: true, justify: 'center' },
                                _react2.default.createElement(
                                    _Grid2.default,
                                    { item: true, xs: 11 },
                                    _react2.default.createElement(_TextField2.default, {
                                        id: 'passwordConfirm',
                                        name: 'passwordConfirm',
                                        value: this.props.state.form.passwordConfirm,
                                        label: 'Password Confirm',
                                        fullWidth: true,
                                        onChange: this.setFieldValue.bind(this),
                                        helperText: this.props.state.errorText.passwordConfirm,
                                        error: !this.props.state.errorText.passwordConfirm === ''
                                    })
                                )
                            ),
                            _react2.default.createElement(
                                _Grid2.default,
                                { container: true, justify: 'center' },
                                _react2.default.createElement(
                                    _Grid2.default,
                                    { item: true, xs: 11 },
                                    _react2.default.createElement(_TextField2.default, {
                                        id: 'email',
                                        name: 'email',
                                        value: this.props.state.form.email,
                                        label: 'E-Mail',
                                        fullWidth: true,
                                        onChange: this.setFieldValue.bind(this),
                                        helperText: this.props.state.errorText.email,
                                        error: !this.props.state.errorText.email === ''
                                    })
                                )
                            ),
                            _react2.default.createElement(
                                _Grid2.default,
                                { container: true, justify: 'center' },
                                _react2.default.createElement(
                                    _Grid2.default,
                                    { item: true, xs: 11 },
                                    _react2.default.createElement(_TextField2.default, {
                                        id: 'emailConfirm',
                                        name: 'emailConfirm',
                                        value: this.props.state.form.emailConfirm,
                                        label: 'E-Mail Confirm',
                                        fullWidth: true,
                                        onChange: this.setFieldValue.bind(this),
                                        helperText: this.props.state.errorText.emailConfirm,
                                        error: !this.props.state.errorText.emailConfirm === ''
                                    })
                                )
                            ),
                            _react2.default.createElement(
                                _Grid2.default,
                                { container: true, justify: 'center' },
                                _react2.default.createElement(
                                    _Grid2.default,
                                    { item: true, xs: 11 },
                                    _react2.default.createElement(_TextField2.default, {
                                        id: 'phone',
                                        name: 'phone',
                                        value: this.props.state.form.phone,
                                        label: 'Phone',
                                        fullWidth: true,
                                        onChange: this.setFieldValue.bind(this)
                                    })
                                )
                            ),
                            _react2.default.createElement(
                                _Grid2.default,
                                { container: true, justify: 'center' },
                                _react2.default.createElement(
                                    _Grid2.default,
                                    { item: true, xl: 11 },
                                    _react2.default.createElement(_reactGoogleRecaptcha2.default, {
                                        ref: 'recaptcha',
                                        sitekey: '6Lc96ykUAAAAAGeDP0ImqbVXuu6PEwPoR9vuV6Al',
                                        onChange: this.setCaptchaValue.bind(this)
                                    })
                                )
                            ),
                            _react2.default.createElement(
                                _Grid2.default,
                                { container: true, justify: 'center' },
                                _react2.default.createElement(
                                    _Grid2.default,
                                    { item: true, xl: 11 },
                                    _react2.default.createElement(
                                        _Button2.default,
                                        {
                                            id: 'register',
                                            raised: true,
                                            color: 'primary',
                                            onClick: this.register.bind(this)
                                        },
                                        'Register'
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(_Grid2.default, { item: true, xs: 1 })
            );
        }
    }]);

    return RegistrationForm;
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

exports.default = (0, _styles.withStyles)(styles)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(RegistrationForm));

/***/ }),

/***/ 925:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.registerUser = exports.emailUsed = exports.setFieldErrorText = exports.validateForm = exports.setFieldValue = exports.userAvailable = undefined;

var _axios = __webpack_require__(33);

var _axios2 = _interopRequireDefault(_axios);

var _Validation = __webpack_require__(427);

var _Validation2 = _interopRequireDefault(_Validation);

var _navigationActions = __webpack_require__(94);

var _navigationActions2 = _interopRequireDefault(_navigationActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setFieldErrorText(attribute, value) {
    return {
        type: 'FNDTN_REGISTRATION_SET_FIELD_ERROR_TEXT',
        payload: { attribute: attribute, value: value }
    };
} /* 
   * To change this license header, choose License Headers in Project Properties.
   * To change this template file, choose Tools | Templates
   * and open the template in the editor.
   */


function setFieldValue(attribute, value) {
    return {
        type: 'FNDTN_REGISTRATION_SET_FIELD_VALUE',
        payload: { attribute: attribute, value: value }
    };
}

function validateForm(dispatch, attribute, form) {
    //ToDo validate first
    //ToDo validate last
    //ToDo validate username
    //ToDo validate email
    //ToDo validate password
    //ToDo validate phone
}

function registerUser(disptach, user) {
    _axios2.default.post('/services/public/user/registration/register/user', user).then(function (res) {
        console.log(res.data.message);
    }).catch(function (error) {
        console.log(error);
    });
}

function userAvailable(dispatch, username) {
    var minLength = 4;
    var maxLength = 32;

    var valid = new RegExp('^[a-z](?:\w*(?:[\.\-_]\w+)?)').test(username);
    var between = username.length >= minLength && username.length <= maxLength;
    if (valid && between) {
        _axios2.default.get('/services/public/user/registration/available/' + username).then(function (res) {
            if (res.data.available) {
                dispatch(setFieldErrorText('username', null));
            } else {
                dispatch(setFieldErrorText('username', 'Username unavailable'));
            }
        }).catch(function (error) {
            dispatch(setFieldErrorText('username', 'Unable to validate username'));
        });
    } else {
        dispatch(setFieldErrorText('username', 'Username format invalid.'));
    }
}

function emailUsed(dispatch, email) {
    var valid = _Validation2.default.email(email);
    if (valid) {
        _axios2.default.get('/services/public/user/registration/emailUsed/' + email).then(function (res) {
            if (!res.data.used) {
                dispatch(setFieldErrorText('email', null));
            } else {
                dispatch(setFieldErrorText('email', 'E-Mail already in use'));
            }
        }).catch(function (error) {
            dispatch(setFieldErrorText('email', 'E-Mail usage not verified'));
        });
    } else {
        dispatch(setFieldErrorText('email', 'E-mail format invalid.'));
    }
}

exports.userAvailable = userAvailable;
exports.setFieldValue = setFieldValue;
exports.validateForm = validateForm;
exports.setFieldErrorText = setFieldErrorText;
exports.emailUsed = emailUsed;
exports.registerUser = registerUser;

/***/ })

},[915]);