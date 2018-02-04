webpackJsonp([8],{

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactRedux = __webpack_require__(15);

var _store = __webpack_require__(689);

var _store2 = _interopRequireDefault(_store);

var _styles = __webpack_require__(17);

var _Layout = __webpack_require__(691);

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

/***/ 689:
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

var _moduleReducer = __webpack_require__(690);

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

/***/ 690:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stateStorage = __webpack_require__(44);

var _stateStorage2 = _interopRequireDefault(_stateStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = {
    portfolioData: [],
    form: {
        ticker: '',
        funds: 0,
        withFees: false,
        tickerList: []
    },
    lineData: {
        labels: ['Scatter'],
        datasets: []
    },
    radarData: {},
    selectedNode: 80
};

function lineDataTransform(dataSet) {
    var transformedDataSet = [];
    dataSet.forEach(function (dataPoint) {
        transformedDataSet.push({ x: dataPoint.risk, y: dataPoint.rateOfReturn });
    });

    var dataset = [{
        label: 'My First dataset',
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 2,
        pointHitRadius: 10,
        data: transformedDataSet
    }];
    return dataset;
}

function raderDataTransformation(dataSet, node) {
    var lables = [];
    var data = [];
    dataSet[node].coinList.forEach(function (datapoint) {
        lables.push(datapoint.coinName);
        data.push(datapoint.investment);
    });

    var dataset = [{
        label: 'Distribution',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: data
    }];

    var transformedDataSet = {
        lables: lables,
        datasets: dataset
    };

    return transformedDataSet;
}

var templateReducer = function templateReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments[1];

    var jsonString = JSON.stringify(state);
    var newState = JSON.parse(jsonString);
    switch (action.type) {
        case 'CRYPTO_CHART_ADD_TICKER':
            {
                newState.tickerList.push(action.payload);
                break;
            }
        case 'CRYPTO_CHART_SET_PORTFOLIO_DATA':
            {
                newState.portfolioData = action.payload;
                break;
            }
        case 'CRYPTO_CHART_SET_LINE_DATA':
            {
                newState.lineData.datasets = lineDataTransform(newState.portfolioData);
                break;
            }
        case 'CRYPTO_CHART_SET_RADAR_DATA':
            {
                newState.radarData = raderDataTransformation(newState.portfolioData, newState.selectedNode);
                break;
            }
        case 'CRYPTO_CHART_SET_FORM_VALUE':
            {
                newState.form[action.payload.field] = action.payload.value;
                break;
            }
    }
    return newState;
};

exports.default = templateReducer;

/***/ }),

/***/ 691:
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

var _AppBody = __webpack_require__(692);

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

/***/ 692:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(24);

var _CryptoCurrencyChart = __webpack_require__(693);

var _CryptoCurrencyChart2 = _interopRequireDefault(_CryptoCurrencyChart);

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
                        return _react2.default.createElement(_CryptoCurrencyChart2.default, null);
                    } })
            );
        }
    }]);

    return AppBody;
}(_react2.default.Component);

exports.default = AppBody;

/***/ }),

/***/ 693:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _reactChartjs = __webpack_require__(913);

var _Icon = __webpack_require__(21);

var _Icon2 = _interopRequireDefault(_Icon);

var _IconButton = __webpack_require__(23);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Grid = __webpack_require__(22);

var _Grid2 = _interopRequireDefault(_Grid);

var _Paper = __webpack_require__(18);

var _Paper2 = _interopRequireDefault(_Paper);

var _TextField = __webpack_require__(26);

var _TextField2 = _interopRequireDefault(_TextField);

var _Switch = __webpack_require__(79);

var _Switch2 = _interopRequireDefault(_Switch);

var _moduleActions = __webpack_require__(694);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this license header, choose License Headers in Project Properties.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To change this template file, choose Tools | Templates
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * and open the template in the editor.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var CryptoCurrencyChart = function (_React$Component) {
    _inherits(CryptoCurrencyChart, _React$Component);

    function CryptoCurrencyChart() {
        _classCallCheck(this, CryptoCurrencyChart);

        return _possibleConstructorReturn(this, (CryptoCurrencyChart.__proto__ || Object.getPrototypeOf(CryptoCurrencyChart)).call(this));
    }

    _createClass(CryptoCurrencyChart, [{
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
        key: 'add',
        value: function add(event) {
            this.props.dispatch(clearForm());
            this.props.dispatch((0, _moduleActions.addTicker)(this.props.state.form.ticker));
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Grid2.default,
                    { container: true },
                    _react2.default.createElement(
                        _Grid2.default,
                        { item: true, xs: 3 },
                        _react2.default.createElement(_TextField2.default, {
                            id: 'ticker',
                            name: 'ticker',
                            value: this.props.state.form.name,
                            onChange: this.setFormValue.bind(this),
                            label: 'Ticker',
                            fullWidth: true
                        }),
                        _react2.default.createElement(
                            _IconButton2.default,
                            {
                                id: 'add',
                                onClick: this.add.bind(this)
                            },
                            _react2.default.createElement(
                                _Icon2.default,
                                null,
                                'add'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _Grid2.default,
                        { item: true, xs: 3 },
                        _react2.default.createElement(_TextField2.default, {
                            id: 'funds',
                            name: 'funds',
                            value: this.props.state.form.name,
                            onChange: this.setFormValue.bind(this),
                            label: 'Funds',
                            fullWidth: true
                        })
                    ),
                    _react2.default.createElement(
                        _Grid2.default,
                        { item: true, xs: 3 },
                        _react2.default.createElement(_Switch2.default, {
                            id: 'withFees',
                            name: 'withFees',
                            checked: this.props.state.form.withFees,
                            onClick: this.toggleFormValue.bind(this)
                        })
                    )
                ),
                _react2.default.createElement(
                    _Grid2.default,
                    { container: true },
                    _react2.default.createElement(
                        _Grid2.default,
                        { item: true, xs: 5 },
                        _react2.default.createElement(_reactChartjs.Scatter, {
                            data: this.props.state.lineData
                        })
                    ),
                    _react2.default.createElement(_Grid2.default, { item: true, xs: 2 }),
                    _react2.default.createElement(
                        _Grid2.default,
                        { item: true, xs: 5 },
                        _react2.default.createElement(_reactChartjs.Radar, {
                            data: this.props.state.radarData
                        })
                    )
                )
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            (0, _moduleActions.getPortfolioData)(this.props.dispatch, 10000, false, ['fund1', 'fund2']);
        }
    }]);

    return CryptoCurrencyChart;
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CryptoCurrencyChart);

/***/ }),

/***/ 694:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setFormValue = exports.getPortfolioData = exports.setPortfolioData = exports.addTicker = undefined;

var _axios = __webpack_require__(33);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setFormValue(field, value) {
    return {
        type: 'CRYPTO_CHART_SET_FORM_VALUE',
        payload: { field: field, value: value }
    };
} /* 
   * To change this license header, choose License Headers in Project Properties.
   * To change this template file, choose Tools | Templates
   * and open the template in the editor.
   */

function addTicker(ticker) {
    return {
        type: 'CRYPTO_CHART_ADD_TICKER',
        payload: ticker
    };
}

function setPortfolioData(data) {
    return {
        type: 'CRYPTO_CHART_SET_PORTFOLIO_DATA',
        payload: data
    };
}

function setLineData() {
    return {
        type: 'CRYPTO_CHART_SET_LINE_DATA'
    };
}

function setRadarData() {
    return {
        type: 'CRYPTO_CHART_SET_RADAR_DATA'
    };
}

function getPortfolioData(dispatch, funds, withFees, tickerList) {
    //    axios.post('/services/public/python/cryptoData/portfolio/'+funds+'/'+withFees,{coinList:tickerList}).then((res)=>{
    //        dispatch(setPortfolioData(res.data));
    //    }).catch((error)=>{
    //        console.log(error.response.data);
    //        dispatch(setFooterMessage('Unable to load all resources for the selected role: '+error.response.data.message));
    //    });

    dispatch(setPortfolioData(dataSet));
    dispatch(setLineData());
    dispatch(setRadarData());
}

exports.addTicker = addTicker;
exports.setPortfolioData = setPortfolioData;
exports.getPortfolioData = getPortfolioData;
exports.setFormValue = setFormValue;


var dataSet = [{ "risk": 2.99901437103,
    "rateOfReturn": 2.7017982869,
    "conversion": 0.01,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 0 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 3035 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 0 }, { "coinName": "dcr", "investment": 0 }, { "coinName": "xvg", "investment": 6964 }] }, { "risk": 2.83250725561,
    "rateOfReturn": 2.69152438443,
    "conversion": 0.0112332403298,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 0 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 3621 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 0 }, { "coinName": "dcr", "investment": 0 }, { "coinName": "xvg", "investment": 6378 }] }, { "risk": 2.69319135111,
    "rateOfReturn": 2.68237443623,
    "conversion": 0.0126185688307,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 0 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 4142 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 0 }, { "coinName": "dcr", "investment": 0 }, { "coinName": "xvg", "investment": 5857 }] }, { "risk": 2.57743743583,
    "rateOfReturn": 2.67422825484,
    "conversion": 0.0141747416293,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 0 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 4605 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 0 }, { "coinName": "dcr", "investment": 0 }, { "coinName": "xvg", "investment": 5394 }] }, { "risk": 2.48199109044,
    "rateOfReturn": 2.66698529346,
    "conversion": 0.0159228279334,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 0 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 5018 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 0 }, { "coinName": "dcr", "investment": 0 }, { "coinName": "xvg", "investment": 4981 }] }, { "risk": 2.40359258975,
    "rateOfReturn": 2.66053225811,
    "conversion": 0.0178864952906,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 0 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 5385 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 0 }, { "coinName": "dcr", "investment": 0 }, { "coinName": "xvg", "investment": 4614 }] }, { "risk": 2.33958414308,
    "rateOfReturn": 2.65478637141,
    "conversion": 0.0200923300257,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 0 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 5713 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 0 }, { "coinName": "dcr", "investment": 0 }, { "coinName": "xvg", "investment": 4286 }] }, { "risk": 2.28761096774,
    "rateOfReturn": 2.64967363132,
    "conversion": 0.0225701971963,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 0 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 6004 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 0 }, { "coinName": "dcr", "investment": 0 }, { "coinName": "xvg", "investment": 3995 }] }, { "risk": 2.24555982802,
    "rateOfReturn": 2.64512128881,
    "conversion": 0.0253536449397,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 0 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 6263 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 0 }, { "coinName": "dcr", "investment": 0 }, { "coinName": "xvg", "investment": 3736 }] }, { "risk": 2.2116659012,
    "rateOfReturn": 2.64106857709,
    "conversion": 0.0284803586844,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 0 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 6494 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 0 }, { "coinName": "dcr", "investment": 0 }, { "coinName": "xvg", "investment": 3505 }] }, { "risk": 2.18443205417,
    "rateOfReturn": 2.63746079266,
    "conversion": 0.031992671378,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 0 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 6699 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 0 }, { "coinName": "dcr", "investment": 0 }, { "coinName": "xvg", "investment": 3300 }] }, { "risk": 2.16260607841,
    "rateOfReturn": 2.63424908142,
    "conversion": 0.035938136638,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 0 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 6882 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 0 }, { "coinName": "dcr", "investment": 0 }, { "coinName": "xvg", "investment": 3117 }] }, { "risk": 2.06159016481,
    "rateOfReturn": 2.61771243901,
    "conversion": 0.040370172586,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 0 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 6569 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 568 }, { "coinName": "dcr", "investment": 0 }, { "coinName": "xvg", "investment": 2861 }] }, { "risk": 1.92931618083,
    "rateOfReturn": 2.59516360057,
    "conversion": 0.0453487850813,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 0 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 6018 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 1399 }, { "coinName": "dcr", "investment": 0 }, { "coinName": "xvg", "investment": 2581 }] }, { "risk": 1.81767233962,
    "rateOfReturn": 2.5750910989,
    "conversion": 0.0509413801482,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 0 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 5528 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 2140 }, { "coinName": "dcr", "investment": 0 }, { "coinName": "xvg", "investment": 2331 }] }, { "risk": 1.72406947243,
    "rateOfReturn": 2.55722229314,
    "conversion": 0.0572236765935,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 0 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 5091 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 2798 }, { "coinName": "dcr", "investment": 0 }, { "coinName": "xvg", "investment": 2109 }] }, { "risk": 1.64611477285,
    "rateOfReturn": 2.54131521295,
    "conversion": 0.0642807311728,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 0 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 4702 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 3385 }, { "coinName": "dcr", "investment": 0 }, { "coinName": "xvg", "investment": 1911 }] }, { "risk": 1.58161037911,
    "rateOfReturn": 2.52715449017,
    "conversion": 0.0722080901839,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 0 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 4356 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 3907 }, { "coinName": "dcr", "investment": 0 }, { "coinName": "xvg", "investment": 1735 }] }, { "risk": 1.52856214001,
    "rateOfReturn": 2.5145490265,
    "conversion": 0.081113083079,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 0 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 4048 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 4372 }, { "coinName": "dcr", "investment": 0 }, { "coinName": "xvg", "investment": 1578 }] }, { "risk": 1.48517414673,
    "rateOfReturn": 2.50332672111,
    "conversion": 0.0911162756115,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 0 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 3774 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 4786 }, { "coinName": "dcr", "investment": 0 }, { "coinName": "xvg", "investment": 1439 }] }, { "risk": 1.44986893608,
    "rateOfReturn": 2.49333672161,
    "conversion": 0.10235310219,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 0 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 3530 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 5154 }, { "coinName": "dcr", "investment": 0 }, { "coinName": "xvg", "investment": 1315 }] }, { "risk": 1.42127336011,
    "rateOfReturn": 2.48444544038,
    "conversion": 0.11497569954,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 0 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 3313 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 5482 }, { "coinName": "dcr", "investment": 0 }, { "coinName": "xvg", "investment": 1204 }] }, { "risk": 1.39249577707,
    "rateOfReturn": 2.47451994648,
    "conversion": 0.129154966501,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 0 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 3095 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 5710 }, { "coinName": "dcr", "investment": 98 }, { "coinName": "xvg", "investment": 1095 }] }, { "risk": 1.36045545604,
    "rateOfReturn": 2.46246615561,
    "conversion": 0.14508287785,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 0 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 2862 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 5810 }, { "coinName": "dcr", "investment": 345 }, { "coinName": "xvg", "investment": 980 }] }, { "risk": 1.33451643038,
    "rateOfReturn": 2.45173512691,
    "conversion": 0.162975083462,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 0 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 2656 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 5899 }, { "coinName": "dcr", "investment": 565 }, { "coinName": "xvg", "investment": 879 }] }, { "risk": 1.3135964938,
    "rateOfReturn": 2.44218218905,
    "conversion": 0.18307382803,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 0 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 2471 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 5978 }, { "coinName": "dcr", "investment": 761 }, { "coinName": "xvg", "investment": 788 }] }, { "risk": 1.29677889695,
    "rateOfReturn": 2.43367839231,
    "conversion": 0.205651230835,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 0 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 2307 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 6049 }, { "coinName": "dcr", "investment": 935 }, { "coinName": "xvg", "investment": 707 }] }, { "risk": 1.28329476876,
    "rateOfReturn": 2.42610822423,
    "conversion": 0.231012970008,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 0 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 2162 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 6111 }, { "coinName": "dcr", "investment": 1090 }, { "coinName": "xvg", "investment": 635 }] }, { "risk": 1.27250717136,
    "rateOfReturn": 2.41936904116,
    "conversion": 0.25950242114,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 0 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 2032 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 6167 }, { "coinName": "dcr", "investment": 1228 }, { "coinName": "xvg", "investment": 571 }] }, { "risk": 1.26389282328,
    "rateOfReturn": 2.41336974242,
    "conversion": 0.291505306283,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 0 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 1916 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 6217 }, { "coinName": "dcr", "investment": 1351 }, { "coinName": "xvg", "investment": 514 }] }, { "risk": 1.255554613,
    "rateOfReturn": 2.40682556897,
    "conversion": 0.327454916288,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 31 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 1809 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 6243 }, { "coinName": "dcr", "investment": 1452 }, { "coinName": "xvg", "investment": 462 }] }, { "risk": 1.23349848398,
    "rateOfReturn": 2.38780461957,
    "conversion": 0.367837977183,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 403 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 1670 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 6070 }, { "coinName": "dcr", "investment": 1460 }, { "coinName": "xvg", "investment": 395 }] }, { "risk": 1.21573424767,
    "rateOfReturn": 2.37087088519,
    "conversion": 0.413201240012,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 734 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 1546 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 5916 }, { "coinName": "dcr", "investment": 1466 }, { "coinName": "xvg", "investment": 336 }] }, { "risk": 1.20147182525,
    "rateOfReturn": 2.3557982529,
    "conversion": 0.464158883361,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1028 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 1435 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 5779 }, { "coinName": "dcr", "investment": 1472 }, { "coinName": "xvg", "investment": 284 }] }, { "risk": 1.19004670768,
    "rateOfReturn": 2.34237922755,
    "conversion": 0.5214008288,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1291 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 1337 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 5656 }, { "coinName": "dcr", "investment": 1477 }, { "coinName": "xvg", "investment": 237 }] }, { "risk": 1.1809149323,
    "rateOfReturn": 2.33043466084,
    "conversion": 0.585702081806,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1524 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 1250 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 5548 }, { "coinName": "dcr", "investment": 1481 }, { "coinName": "xvg", "investment": 195 }] }, { "risk": 1.17362756557,
    "rateOfReturn": 2.31980133727,
    "conversion": 0.657933224658,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1732 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 1172 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 5451 }, { "coinName": "dcr", "investment": 1485 }, { "coinName": "xvg", "investment": 158 }] }, { "risk": 1.16781895998,
    "rateOfReturn": 2.31033342477,
    "conversion": 0.739072203353,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1917 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 1103 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 5364 }, { "coinName": "dcr", "investment": 1489 }, { "coinName": "xvg", "investment": 125 }] }, { "risk": 1.16319394209,
    "rateOfReturn": 2.30190248513,
    "conversion": 0.830217568132,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 2082 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 1041 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 0 }, { "coinName": "eth", "investment": 5288 }, { "coinName": "dcr", "investment": 1492 }, { "coinName": "xvg", "investment": 95 }] }, { "risk": 1.13503693668,
    "rateOfReturn": 2.24350663261,
    "conversion": 0.932603346883,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 2115 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 951 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 367 }, { "coinName": "eth", "investment": 5053 }, { "coinName": "dcr", "investment": 1449 }, { "coinName": "xvg", "investment": 62 }] }, { "risk": 1.08855368555,
    "rateOfReturn": 2.14151447555,
    "conversion": 1.04761575279,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 2034 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 836 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 1054 }, { "coinName": "eth", "investment": 4681 }, { "coinName": "dcr", "investment": 1366 }, { "coinName": "xvg", "investment": 27 }] }, { "risk": 1.05042278124,
    "rateOfReturn": 2.05112715816,
    "conversion": 1.17681195243,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1959 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 733 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 1665 }, { "coinName": "eth", "investment": 4350 }, { "coinName": "dcr", "investment": 1290 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 1.01998951515,
    "rateOfReturn": 1.97267034255,
    "conversion": 1.32194114847,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1884 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 638 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 2204 }, { "coinName": "eth", "investment": 4057 }, { "coinName": "dcr", "investment": 1216 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.995209246147,
    "rateOfReturn": 1.90282221426,
    "conversion": 1.48496826225,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1816 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 552 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 2683 }, { "coinName": "eth", "investment": 3796 }, { "coinName": "dcr", "investment": 1150 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.975124281594,
    "rateOfReturn": 1.84064243196,
    "conversion": 1.6681005372,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1756 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 476 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 3110 }, { "coinName": "eth", "investment": 3564 }, { "coinName": "dcr", "investment": 1091 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.95890909447,
    "rateOfReturn": 1.78529067798,
    "conversion": 1.87381742286,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1703 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 409 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 3490 }, { "coinName": "eth", "investment": 3357 }, { "coinName": "dcr", "investment": 1038 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.945861746261,
    "rateOfReturn": 1.73601684899,
    "conversion": 2.10490414451,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1656 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 349 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 3829 }, { "coinName": "eth", "investment": 3173 }, { "coinName": "dcr", "investment": 992 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.935393513071,
    "rateOfReturn": 1.69215613398,
    "conversion": 2.36448941265,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1613 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 295 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 4130 }, { "coinName": "eth", "investment": 3009 }, { "coinName": "dcr", "investment": 950 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.927013071592,
    "rateOfReturn": 1.65310817389,
    "conversion": 2.65608778295,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1576 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 248 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 4398 }, { "coinName": "eth", "investment": 2863 }, { "coinName": "dcr", "investment": 913 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.920317868596,
    "rateOfReturn": 1.61834913579,
    "conversion": 2.98364724028,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1542 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 205 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 4637 }, { "coinName": "eth", "investment": 2733 }, { "coinName": "dcr", "investment": 880 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.914976204121,
    "rateOfReturn": 1.58740012647,
    "conversion": 3.35160265094,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1512 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 167 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 4849 }, { "coinName": "eth", "investment": 2617 }, { "coinName": "dcr", "investment": 851 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.910721293946,
    "rateOfReturn": 1.55985203478,
    "conversion": 3.76493580679,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1486 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 134 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 5038 }, { "coinName": "eth", "investment": 2515 }, { "coinName": "dcr", "investment": 825 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.907335129579,
    "rateOfReturn": 1.53532794292,
    "conversion": 4.22924287439,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1462 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 104 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 5207 }, { "coinName": "eth", "investment": 2423 }, { "coinName": "dcr", "investment": 802 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.904641293531,
    "rateOfReturn": 1.51348453125,
    "conversion": 4.7508101621,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1441 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 77 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 5357 }, { "coinName": "eth", "investment": 2341 }, { "coinName": "dcr", "investment": 781 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.902502790405,
    "rateOfReturn": 1.4940572402,
    "conversion": 5.33669923121,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1422 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 53 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 5490 }, { "coinName": "eth", "investment": 2269 }, { "coinName": "dcr", "investment": 763 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.900804157278,
    "rateOfReturn": 1.47676029293,
    "conversion": 5.99484250319,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1406 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 32 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 5609 }, { "coinName": "eth", "investment": 2204 }, { "coinName": "dcr", "investment": 746 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.89945546712,
    "rateOfReturn": 1.46135940599,
    "conversion": 6.73415065775,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1391 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 13 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 5715 }, { "coinName": "eth", "investment": 2147 }, { "coinName": "dcr", "investment": 732 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.898400936699,
    "rateOfReturn": 1.44786088942,
    "conversion": 7.56463327555,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1377 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 0 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 5808 }, { "coinName": "eth", "investment": 2094 }, { "coinName": "dcr", "investment": 718 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.897493696584,
    "rateOfReturn": 1.43478783425,
    "conversion": 8.49753435909,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1359 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 24 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 5875 }, { "coinName": "eth", "investment": 2038 }, { "coinName": "dcr", "investment": 702 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.89672960052,
    "rateOfReturn": 1.42246166994,
    "conversion": 9.54548456662,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1343 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 54 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 5930 }, { "coinName": "eth", "investment": 1985 }, { "coinName": "dcr", "investment": 686 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.896123791307,
    "rateOfReturn": 1.41149213954,
    "conversion": 10.7226722201,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1328 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 81 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 5979 }, { "coinName": "eth", "investment": 1938 }, { "coinName": "dcr", "investment": 672 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.895643410041,
    "rateOfReturn": 1.40172721443,
    "conversion": 12.0450354026,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1314 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 104 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6023 }, { "coinName": "eth", "investment": 1896 }, { "coinName": "dcr", "investment": 660 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.895262451672,
    "rateOfReturn": 1.39303264808,
    "conversion": 13.5304777458,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1302 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 126 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6062 }, { "coinName": "eth", "investment": 1859 }, { "coinName": "dcr", "investment": 649 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.894960416696,
    "rateOfReturn": 1.38529223684,
    "conversion": 15.1991108295,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1292 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 144 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6097 }, { "coinName": "eth", "investment": 1826 }, { "coinName": "dcr", "investment": 639 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.894720973905,
    "rateOfReturn": 1.37840124789,
    "conversion": 17.0735264747,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1282 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 161 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6128 }, { "coinName": "eth", "investment": 1796 }, { "coinName": "dcr", "investment": 630 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.894531162052,
    "rateOfReturn": 1.37226636252,
    "conversion": 19.1791026167,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1274 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 176 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6155 }, { "coinName": "eth", "investment": 1770 }, { "coinName": "dcr", "investment": 622 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.894380707459,
    "rateOfReturn": 1.3668048016,
    "conversion": 21.5443469003,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1267 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 189 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6180 }, { "coinName": "eth", "investment": 1747 }, { "coinName": "dcr", "investment": 615 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.894261475104,
    "rateOfReturn": 1.36194354188,
    "conversion": 24.2012826479,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1260 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 201 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6201 }, { "coinName": "eth", "investment": 1726 }, { "coinName": "dcr", "investment": 609 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.8941669743,
    "rateOfReturn": 1.35761598095,
    "conversion": 27.1858824273,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1254 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 212 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6221 }, { "coinName": "eth", "investment": 1707 }, { "coinName": "dcr", "investment": 604 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.894092077123,
    "rateOfReturn": 1.35376353302,
    "conversion": 30.5385550883,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1249 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 221 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6238 }, { "coinName": "eth", "investment": 1691 }, { "coinName": "dcr", "investment": 599 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.894032717918,
    "rateOfReturn": 1.35033402809,
    "conversion": 34.3046928631,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1244 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 230 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6253 }, { "coinName": "eth", "investment": 1676 }, { "coinName": "dcr", "investment": 594 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.893985674452,
    "rateOfReturn": 1.34728106805,
    "conversion": 38.5352859371,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1240 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 237 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6267 }, { "coinName": "eth", "investment": 1663 }, { "coinName": "dcr", "investment": 591 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.893948393028,
    "rateOfReturn": 1.34456339828,
    "conversion": 43.2876128108,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1236 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 244 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6279 }, { "coinName": "eth", "investment": 1651 }, { "coinName": "dcr", "investment": 587 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.893918850716,
    "rateOfReturn": 1.34214442839,
    "conversion": 48.6260158007,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1233 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 250 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6290 }, { "coinName": "eth", "investment": 1641 }, { "coinName": "dcr", "investment": 584 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.893895442996,
    "rateOfReturn": 1.3399915561,
    "conversion": 54.6227721768,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1230 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 255 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6300 }, { "coinName": "eth", "investment": 1632 }, { "coinName": "dcr", "investment": 581 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.893876724996,
    "rateOfReturn": 1.33805673639,
    "conversion": 61.3590727341,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1227 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 259 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6308 }, { "coinName": "eth", "investment": 1623 }, { "coinName": "dcr", "investment": 579 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.893862007017,
    "rateOfReturn": 1.33634661747,
    "conversion": 68.9261210435,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1225 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 264 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6316 }, { "coinName": "eth", "investment": 1616 }, { "coinName": "dcr", "investment": 577 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.893850512331,
    "rateOfReturn": 1.33484699172,
    "conversion": 77.4263682681,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1223 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 267 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6323 }, { "coinName": "eth", "investment": 1610 }, { "coinName": "dcr", "investment": 575 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.893841247996,
    "rateOfReturn": 1.33349003242,
    "conversion": 86.9749002618,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1221 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 271 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6329 }, { "coinName": "eth", "investment": 1604 }, { "coinName": "dcr", "investment": 573 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.89383393941,
    "rateOfReturn": 1.33228754292,
    "conversion": 97.7009957299,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1219 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 274 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6334 }, { "coinName": "eth", "investment": 1599 }, { "coinName": "dcr", "investment": 572 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.893828131205,
    "rateOfReturn": 1.33121370683,
    "conversion": 109.749876549,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1218 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 276 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6339 }, { "coinName": "eth", "investment": 1594 }, { "coinName": "dcr", "investment": 570 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.89382354852,
    "rateOfReturn": 1.33026247109,
    "conversion": 123.284673944,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1217 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 279 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6343 }, { "coinName": "eth", "investment": 1590 }, { "coinName": "dcr", "investment": 569 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.893819904721,
    "rateOfReturn": 1.32941275045,
    "conversion": 138.488637139,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1216 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 281 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6347 }, { "coinName": "eth", "investment": 1587 }, { "coinName": "dcr", "investment": 568 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.893817013364,
    "rateOfReturn": 1.32865526056,
    "conversion": 155.567614393,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1214 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 282 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6350 }, { "coinName": "eth", "investment": 1583 }, { "coinName": "dcr", "investment": 567 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.893814721248,
    "rateOfReturn": 1.32798057457,
    "conversion": 174.752840001,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1214 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 284 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6353 }, { "coinName": "eth", "investment": 1580 }, { "coinName": "dcr", "investment": 566 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.893812907953,
    "rateOfReturn": 1.32738088577,
    "conversion": 196.304065004,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1213 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 286 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6356 }, { "coinName": "eth", "investment": 1578 }, { "coinName": "dcr", "investment": 565 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.893811476158,
    "rateOfReturn": 1.32684892227,
    "conversion": 220.51307399,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1212 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 287 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6359 }, { "coinName": "eth", "investment": 1576 }, { "coinName": "dcr", "investment": 565 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.89381034221,
    "rateOfReturn": 1.32637578177,
    "conversion": 247.707635599,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1211 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 288 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6361 }, { "coinName": "eth", "investment": 1574 }, { "coinName": "dcr", "investment": 564 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.893809439431,
    "rateOfReturn": 1.32595289528,
    "conversion": 278.255940221,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1211 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 289 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6363 }, { "coinName": "eth", "investment": 1572 }, { "coinName": "dcr", "investment": 563 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.893808739205,
    "rateOfReturn": 1.32558478406,
    "conversion": 312.571584969,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1210 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 290 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6364 }, { "coinName": "eth", "investment": 1570 }, { "coinName": "dcr", "investment": 563 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.893808168218,
    "rateOfReturn": 1.32524778705,
    "conversion": 351.119173422,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1210 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 291 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6366 }, { "coinName": "eth", "investment": 1569 }, { "coinName": "dcr", "investment": 563 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.893807710893,
    "rateOfReturn": 1.32494443234,
    "conversion": 394.420605944,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1209 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 291 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6367 }, { "coinName": "eth", "investment": 1567 }, { "coinName": "dcr", "investment": 562 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.893807354257,
    "rateOfReturn": 1.32467818432,
    "conversion": 443.062145758,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1209 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 292 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6368 }, { "coinName": "eth", "investment": 1566 }, { "coinName": "dcr", "investment": 562 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.893807071719,
    "rateOfReturn": 1.32444164334,
    "conversion": 497.702356433,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1209 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 293 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6369 }, { "coinName": "eth", "investment": 1565 }, { "coinName": "dcr", "investment": 562 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.893806848088,
    "rateOfReturn": 1.3242313229,
    "conversion": 559.081018251,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1208 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 293 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6370 }, { "coinName": "eth", "investment": 1564 }, { "coinName": "dcr", "investment": 561 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.893806670806,
    "rateOfReturn": 1.32404388341,
    "conversion": 628.029144183,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1208 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 294 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6371 }, { "coinName": "eth", "investment": 1564 }, { "coinName": "dcr", "investment": 561 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.893806530394,
    "rateOfReturn": 1.32387710283,
    "conversion": 705.480231072,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1208 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 294 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6372 }, { "coinName": "eth", "investment": 1563 }, { "coinName": "dcr", "investment": 561 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.89380641909,
    "rateOfReturn": 1.32372857202,
    "conversion": 792.482898354,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1208 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 294 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6373 }, { "coinName": "eth", "investment": 1562 }, { "coinName": "dcr", "investment": 561 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.893806330617,
    "rateOfReturn": 1.3235960973,
    "conversion": 890.215085445,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1208 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 295 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6373 }, { "coinName": "eth", "investment": 1562 }, { "coinName": "dcr", "investment": 560 }, { "coinName": "xvg", "investment": 0 }] }, { "risk": 0.893806260647,
    "rateOfReturn": 1.32347865458,
    "conversion": 1000.0,
    "coinList": [{ "coinName": "dgb", "investment": 0 }, { "coinName": "dash", "investment": 1207 }, { "coinName": "vtc", "investment": 0 }, { "coinName": "xem", "investment": 0 }, { "coinName": "doge", "investment": 0 }, { "coinName": "ltc", "investment": 295 }, { "coinName": "xmr", "investment": 0 }, { "coinName": "btc", "investment": 6374 }, { "coinName": "eth", "investment": 1561 }, { "coinName": "dcr", "investment": 560 }, { "coinName": "xvg", "investment": 0 }] }];

/***/ })

},[688]);