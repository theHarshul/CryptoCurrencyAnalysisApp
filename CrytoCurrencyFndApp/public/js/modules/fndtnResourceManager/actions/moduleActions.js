/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import axios from 'axios';

//Actions
import {setFooterMessage} from '../../../core/actions/footerActions';

function setResources(resources){
    return({
        type: 'FNDTN_RESOURCE_MANAGER_SET_RESOURCES',
        payload: resources
    });
}

function setFormValue(field, value){
    return({
        type: 'FNDTN_RESOURCE_MANAGER_SET_FORM_VALUE',
        payload: {field:field, value: value}
    });
}

function editResource(resource, index){
    return({
        type: 'FNDTN_RESOURCE_MANAGER_EDIT_RESOURCE',
        payload: {resource:resource, index:index}
    });
}

function clearForm(){
    return({
        type: 'FNDTN_RESOURCE_MANAGER_CLEAR_FORM'
    });
}

function cancelEdit(){
    return({
        type: 'FNDTN_RESOURCE_MANAGER_CANCEL_EDIT'
    });
}

function _saveResource(resource, index){
    return({
        type: 'FNDTN_RESOURCE_MANAGER_SAVE_RESOURCE',
        payload: {resource: resource, index: index}
    });
}

function _deleteResource(index){
    return({
        type: 'FNDTN_RESOURCE_MANAGER_DELETE_RESOURCE',
        payload: {index: index}
    });
}

function saveResource(dispatch, resource, index){
    axios.post('/services/private/fndtn/resources', resource).then( (res) => {
        dispatch(_saveResource(resource, index));
        dispatch(clearForm());
        dispatch(cancelEdit());
    }).catch((error) => {
        console.log(error.response.data);
        dispatch(setFooterMessage('Unable to save resource: '+error.response.data.message));
    });
}

function deleteResource(dispatch, resource, index){
    var resourceId = resource._id;
    axios.delete('/services/private/fndtn/resources/'+resourceId).then( (res) => {
        dispatch(_deleteResource(index));
        dispatch(setFooterMessage('Resource deleted.'));
    }).catch( (error) => {
        console.log(error.response.data);
        dispatch(setFooterMessage('Unable to delete resource: '+error.response.data.message));
    });
}

function loadResources(dispatch, search){
    axios.post('/services/private/fndtn/resources/find', search).then ((res) => {
        dispatch(setFooterMessage('Resources loaded.'));
        dispatch(setResources(res.data.resources));
    }).catch((error) => {
        console.log(error.response.data);
        dispatch(setFooterMessage('Unable to load all resources: '+error.response.data.message));
    });
};

export {loadResources, setFormValue, editResource, saveResource, cancelEdit, deleteResource, clearForm}

