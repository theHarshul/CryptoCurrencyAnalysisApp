var mongodb = require('mongodb');

function User(user){
    this.verified = false;
    this.name = {};
    this.account = {};
    this.emails = [];
    this.phones = [];
    this.addresses = [];
    this.websites = [];
    this.eventDates = [];

    this.setId = function(value){
        if(value){
            this._id = new mongodb.ObjectId(value);
        }
    };
    
    this.setVerified = function(value){ this.verified = value; };
    this.setFirst = function(value){ this.name.first = value || ''; };
    this.setMiddle = function(value){ this.name.middle = value || ''; };
    this.setLast = function(value){ this.name.last = value || ''; };
    this.setPrefered = function(value){ this.name.prefered = value || this.name.first; };
    this.setJob = function(value){ this.job = value || {}; };
    this.setUsername = function(value){ this.account.username = value || ''; };
    this.setPassword = function(value){ this.account.password = value || ''; };
    this.addEmail = function(value){ if(value) this.emails.push(value); };
    this.setEmails = function(value){ this.emails = value || []; };
    this.addPhone = function(value){ if(value) this.phones.push(value); };
    this.setPhones = function(value){ this.phones = value || []; };
    this.setAddresses = function(value){ this.addresses = value || []; };
    this.setBirthday = function(value){ this.birthday = value || ''; };
    this.setWebsites = function(value){ this.websites = value || []; };
    this.setEventDates = function(value){ this.eventDates = value || []; };
    this.setInstantMessageIds = function(value){ this.instantMessageIds = value || []; };
    
    this.getVerified = function(){ return this.verified; };
    this.getId = function(){ return this._id; };
    this.getFirst = function(){ return this.name.first; };
    this.getMiddle = function(){ return this.name.middle; };
    this.getLast = function(){ return this.name.last; };
    this.getUsername = function(){ return this.account.username; };
    this.getEmails = function(){ return this.emails; };
    this.getEmail = function(index){ return this.emails[index]; };
    this.getPassword = function(){ return this.account.password; };
    this.getPhones = function(){ return this.phones; };
    this.getPhone = function(index){ return this.phones[index]; };
    this.getAddresses = function(){ return this.addresses; };
    this.getAddress = function(index){ return this.addresses[index]; };
    this.getBirthday = function(){ return this.birthday; };
    this.getWebsites = function(){ return this.websites; };
    this.getWebsite = function(index){ return this.website[index]; };
    this.getEventDates = function(){ return this.eventDates; };
    this.getEventDate = function(index){ return this.eventDates[index]; };
    this.getInstantMessageIds = function(){ return this.instantMessageIds; };
    this.getInstantMessageId = function(index){ return this.instantMessageIds[index]; };
    
    this.isValid = function(){ return(true); };
    
    this.record = function(){
        var user = {
            _id: this._id,
            verified: this.verified,
            name: {
                first: this.name.first,
                middle: this.name.middle,
                last: this.name.last,
                prefered: this.name.prefered
            },
            account: {
                username: this.account.username,
                password: this.account.password
            },
            emails: this.emails,
            phones: this.phones,
            addresses: this.addresses,
            birthday: this.birthday,
            eventDates: this.eventDates,
            websites: this.websites,
            instantMessageIds: this.instantMessageIds
        };
        
        return(user);
    };
    
    this.setUser = function(user){
        this.setId( user._id );
        this.setVerified( user.verified );
        this.setFirst( user.name.first );
        this.setMiddle( user.name.middle );
        this.setLast( user.name.last );
        this.setPrefered( user.name.prefered );
        this.setUsername( user.account.username );
        this.setPassword( user.account.password );
        this.setEmails( user.emails );
        this.setPhones( user.phones );
        this.setAddresses( user.addresses );
        this.setBirthday( user.birthday );
        this.setEventDates( user.eventDates );
        this.setWebsites( user.websites );
        this.setInstantMessageIds( user.instantMessageIds );
    };
};

module.exports = User;