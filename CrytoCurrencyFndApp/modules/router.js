var config = require('./config');
var acl = require('./accessControlList');
var path = require('path');

var app = require('../app');

module.exports = function(middlewareInit){
    config.env.logger.info('Step 3 - resources.init');
    return(
        config.env.app.db.collection(config.env.collections.resources).find({}).toArrayAsync()
        .then(registerResources)
    );
};

function registerResources(resources){
    resources.forEach( function(resource){
        config.env.logger.debug('\tLoading Resource: '+resource.url);
        acl.addResourceToACL(resource.url, {_id : resource._id, _static: resource.static, _public: resource.public, _protected: resource.protected});
        if(!resource.static){
            app.use(resource.url, require(path.join(config.env.path.routes,resource.file)));
        }
    });
    return(true);
}