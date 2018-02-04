/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Cookie = {
    get: function (name){
        var list = document.cookie.split(';');
        var cookies = {};
        for( var i=0; i<list.length; i++){
            cookies[list[i].split('=')[0].trim()] = list[i].split('=')[1];
        }
        return( cookies[name] );
    },
    
    set: function (name, value, options){
        document.cookie = name+'='+value;
    },
    
    delete: function (name){
        document.cookie = name+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
};

export default Cookie;