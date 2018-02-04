var config = require('./config');
var promise = require('bluebird');
var mongodb = promise.promisifyAll(require('mongodb'));

module.exports = function(app){
    'use strict';
    return mongodb.MongoClient.connectAsync(
                'mongodb://'+config.env.mongo.host+
                ':'+config.env.mongo.port+
                '/'+config.env.mongo.db)
        .then(function(database){
            config.env.logger.info('Step 1 - storage.init');
            config.env.setAttribute('app.db', database);
            return(true);
        }).catch( (error) => {
            config.env.logger.error('Faild storage connection: ', error);
        });
};
