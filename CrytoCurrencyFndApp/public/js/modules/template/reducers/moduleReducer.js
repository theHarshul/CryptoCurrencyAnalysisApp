import stateStorage from '../../../util/stateStorage';

const defaultState = stateStorage.get('templateState') || {};

var templateReducer = (state = defaultState, action) => {
    switch(action.type){
        case 'TEMPLATE_SET': {
            state = Object.assign({}, ...state, {message: "Hello World"});
            stateStorage.set('templateState', state);
            break;
        }
    }
    return(state);
};

export default templateReducer;