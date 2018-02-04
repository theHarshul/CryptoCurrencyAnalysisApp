/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function setUser(user){
    return {
        type: "SET_USER",
        payload: user
    };
};

function unsetUser(){
    return {
        type: "UNSET_USER"
    };
};

export {setUser, unsetUser}