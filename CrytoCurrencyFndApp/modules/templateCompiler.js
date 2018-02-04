var config  = require('./config');
var fs      = require('fs');
var jade    = require('jade');

module.exports = function(){
    var collection = config.env.app.db.collection(config.env.collections.templates);
    collection.deleteMany({});
    
    fs.readdir(config.env.path.templateSource, function( error, files){
        config.env.logger.info('Compiling Folder: '+config.env.path.templateSource);
        
        if(error) throw error;
        
        files.forEach(function(file){
            config.env.logger.info('\t File:'+file);
            
            var fileNameParts = file.split('.');
            var template = fileNameParts[0];
            var type = fileNameParts[fileNameParts.length - 1];
            var data;
            switch(type){
                case 'jade':{
                        var fn = jade.compileFile(config.env.path.templateSource + '/' + file, {});
                        data = fn();
                    }
                    break;
                case 'html':{
                        data = fs.readFileSync(config.env.path.templateSource + '/' + file, 'utf8');
                    }
                    break;
            };
            
            collection.insert({
                "template" : template,
                "sourceFile" : file,
                "html" : data
                }, function (err, data) {
                    if (err) {
                        // If it failed, return error
                        config.env.logger.info("Error inserting template:"+file+":"+err.message);
                    }
                });
        });
    });
};