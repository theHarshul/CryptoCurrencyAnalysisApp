/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import authenticationReducer from './authenticationReducer';
import feedbackReducer from './feedbackReducer';
import menuReducer from './menuReducer';
import navigationReducer from './navigationReducer';
import userReducer from './userReducer';

function coreReducers(){
    var reducerList = {
        authenticationState: authenticationReducer,
        footerState: feedbackReducer,
        menuState: menuReducer,
        navigationState: navigationReducer,
        userState: userReducer
    };
    return(reducerList);
}

export default coreReducers;