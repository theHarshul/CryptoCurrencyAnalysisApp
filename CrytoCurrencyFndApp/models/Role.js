var mongodb = require('mongodb');

function Role(role){
    
    if(role){this.setRole(role);};

    this.setId = function(value){
        if(value){
            this._id = new mongodb.ObjectId(value);
        }
    };
    
    this.setName = function(value){ this.name = value || ''; };
    
    this.getId = function(){ return this._id; };
    this.getName = function(){ return this.name; };
    
    this.isValid = function(){ return(true); };
    
    this.record = function(){
        var role = {
            _id: this._id,
            name: this.name
        };
        
        return(role);
    };
    
    this.setRole = function(role){
        this.setId( role._id );
        this.setName( role.name );
    };
};

module.exports = Role;
