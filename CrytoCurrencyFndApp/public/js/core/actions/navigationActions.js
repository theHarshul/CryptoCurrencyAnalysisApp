/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function inModule(url){
    return {
        type: "NAVIGATE_IN_MODULE",
        payload: url
    };
};

function toModule(url){
    return {
        type: 'NAVIGATE_TO_MODULE',
        payload: url
    };
}

function navigationContext(context){
    return {
        type: 'NAVIGATION_CONTEXT',
        payload: context
    };
}

function navigate (dispatch, url){
    var context = url.substr(0,url.indexOf('#'));
    if(window.location.pathname === context){
        dispatch(inModule(url));
    } else {
        dispatch(toModule(url));
    }
}

export {navigate}
