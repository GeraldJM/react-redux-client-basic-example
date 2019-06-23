import { CHANGE_RECIPIENT } from './action-types';
import { CHANGE_MESSAGE } from './action-types';


const changeMessage = (input) => {
    return {
        type: CHANGE_MESSAGE,
        payload: {
            message: input
        }
    }
}

const changeRecipient = (input) => {
    return {
        type: CHANGE_RECIPIENT,
        payload: {
            recipient: input
        }
    }
}

export {
    changeMessage,
    changeRecipient
}