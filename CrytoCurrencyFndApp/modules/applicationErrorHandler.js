/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

var config = require('./config');

var applicationErrorHandler = {
    errors: {},
    getError: function(type, number){
        var that = this;
        return(new Promise(function(resolve){
            var error = that.errors[type+'-'+number];
            if(error){
                resolve(error);
            } else {
                var collection = config.env.app.db.collection(config.env.collections.applicationErrors);

                collection.findOne({ number: number, type: type }, function(error, appError){
                    if(error || !appError){
                        resolve({
                            type:'DFU',
                            number:1000,
                            message:'The error '+type+'-'+number+' has not been defind in the application.'
                        });
                    } else {
                        that.errors[appError.type+'-'+appError.number] = appError;
                        resolve(appError);
                    }
                });
            }
        }));
    }
};

module.exports = applicationErrorHandler; 