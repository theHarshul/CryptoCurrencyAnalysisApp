/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const defaultFeedback = {
    message: ''
};

var feedbackReducer = (state = defaultFeedback, action) => {
    switch(action.type){
        case 'FEEDBACK_POST_MESSAGE': {
            state = Object.assign({}, ...state, {message: action.payload});
            break;
        }
    }
    return(state);
};

export default feedbackReducer;