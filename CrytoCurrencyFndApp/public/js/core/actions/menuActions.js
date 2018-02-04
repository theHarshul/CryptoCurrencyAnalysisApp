/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import axios from 'axios';

function setMenuState(){
    return({type: 'SET_MENU_STATE'});
}

function openMenuDrawer(){
    return({type: 'OPEN_MENU_DRAWER'});
}

function closeMenuDrawer(){
    return({type: 'CLOSE_MENU_DRAWER'});
}

function getUserMenu(dispatch, user){
    axios.get('');
}

//Actions
export {
    getUserMenu,
    setMenuState,
    openMenuDrawer,
    closeMenuDrawer
}
