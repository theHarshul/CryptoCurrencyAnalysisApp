/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function setFooterMessage(message){
    return {
        type: "FEEDBACK_POST_MESSAGE",
        payload: message
    };
};

export {setFooterMessage}

