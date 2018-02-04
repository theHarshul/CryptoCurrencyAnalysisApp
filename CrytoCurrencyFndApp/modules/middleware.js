var express      = require('express');
var favicon      = require('serve-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var fs           = require('fs');
var jwt          = require('express-jwt');

var config = require('./config');
var certParser = require('./certParser');
var accessControl = require('./accessControl');
var twilio = require('twilio');

var app = require('../app');

module.exports = function(storageInit){
    'use strict';

    config.env.logger.info('Step 2 - middleware.init');

    // view engine setup
    app.set('views', config.env.path.views);
    app.set('view engine', 'pug');

    // uncomment after placing your favicon in /public
    app.use(favicon('./public/images/gasPump.jpg'));
    config.env.setAttribute('jwt.cert', certParser.parsePrivate());
    //config.env.setAttribute('sms.provider.client', twilio(config.env.sms.provider.accountId, config.env.sms.provider.authToken));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(accessControl);
    app.use(require('less-middleware')(config.env.path.public));
    app.use(express.static(config.env.path.public));
    return(true);
};
