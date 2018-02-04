/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var stateStorage = {};

stateStorage.get = (stateName) => {
    return JSON.parse(localStorage.getItem(stateName)) || undefined;
};
    
stateStorage.set = (stateName, state) => {
        localStorage.setItem(stateName, JSON.stringify(state));
};

stateStorage.remove = (stateName) => {
        localStorage.removeItem(stateName);
};

export default stateStorage;