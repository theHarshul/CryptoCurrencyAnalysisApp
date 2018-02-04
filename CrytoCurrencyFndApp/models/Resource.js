var mongodb = require('mongodb');

function Resource(resource){
    
    if(resource){this.setRole(resource);};

    this.setId = function(value){
        if(value){
            this._id = new mongodb.ObjectId(value);
        }
    };
    
    this.setName = function(value){ this.name = value || ''; };
    this.setFile = function(value){ this.file = value || ''; };
    this.setURL = function(value){ this.url = value || ''; };
    this.setStatic = function(value){ this.static = value || false; };
    this.setPublic = function(value){ this.public = value || false; };
    this.setProtected = function(value){ this.protected = value || false; };
    
    this.getId = function(){ return this._id; };
    this.getName = function(){ return this.name; };
    this.getFile = function(){ return this.file; };
    this.getURL = function(){ return this.url; };
    this.getStatic = function(){ return this.static; };
    this.getPublic = function(){ return this.public; };
    this.getProtected = function(){ return this.protected; };
    
    this.isValid = function(){ return(true); };
    
    this.record = function(){
        var resource = {
            _id: this._id,
            name: this.name,
            file: this.file,
            url: this.url,
            static: this.static,
            public: this.public,
            protected: this.protected
        };
        
        return(resource);
    };
    
    this.setResource = function(resource){
        this.setId( resource._id );
        this.setName( resource.name );
        this.setFile( resource.file );
        this.setURL( resource.url );
        this.setStatic( resource.static );
        this.setPublic( resource.public );
        this.setProtected( resource.protected );
    };
};

module.exports = Resource;
