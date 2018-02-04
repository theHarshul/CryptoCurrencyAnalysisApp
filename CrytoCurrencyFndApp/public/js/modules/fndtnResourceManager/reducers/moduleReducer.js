import stateStorage from '../../../util/stateStorage';

const defaultState = {
    edit: false,
    index:-1,
    resources:[],
    form:{
        _id:'',
        name:'',
        file:'',
        url:'',
        static:false,
        public:false,
        protected: false
    }
};

var moduleReducer = (state = defaultState, action) => {
    var newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'MODULE_SET': {
            stateStorage.set('moduleState', state);
            break;
        }
        case 'FNDTN_RESOURCE_MANAGER_CLEAR_FORM':{
            newState.form = {
                _id:'',
                name:'',
                file:'',
                url:'',
                static:false,
                public:false,
                protected: false
            };
            newState.index = -1;
            break;
        }
        case 'FNDTN_RESOURCE_MANAGER_SET_RESOURCES': {
            newState.resources = action.payload;
            break;
        }
        case 'FNDTN_RESOURCE_MANAGER_SET_FORM_VALUE':{
            newState.form[action.payload.field] = action.payload.value;
            break;
        }
        case 'FNDTN_RESOURCE_MANAGER_EDIT_RESOURCE':{
            newState.form = action.payload.resource;
            newState.index = action.payload.index;
            newState.edit = true;
            break;
        }
        case 'FNDTN_RESOURCE_MANAGER_CANCEL_EDIT':{
            newState.edit = false;
            break;
        }
        case 'FNDTN_RESOURCE_MANAGER_SAVE_RESOURCE':{
            if(action.payload.index >= 0){
                newState.resources[action.payload.index] = action.payload.resource;
            } else {
                newState.resources.push(action.payload.resource);
            }
            break;
        }
        case 'FNDTN_RESOURCE_MANAGER_DELETE_RESOURCE':{
            var resources = newState.resources.slice();
            resources.splice(action.payload.index, 1);
            newState.resources = resources;
            break;
        }
    }
    return(newState);
};

export default moduleReducer;