/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import stateStorage from '../../util/stateStorage';

const defaultState = stateStorage.get('userState') || {};

var userReducer = (state = defaultState, action) => {
    var newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'SET_USER': {
            state = JSON.parse(JSON.stringify(action.payload));
            stateStorage.set('userState', state);
            break;
        }
        case 'UNSET_USER': {
            state = {};
            stateStorage.remove('userState');
            break;
        }
    }
    return(state);
};

export default userReducer;