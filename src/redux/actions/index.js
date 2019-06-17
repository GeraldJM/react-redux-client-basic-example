import { CHANGE_RECIPIENT } from './action-types';

const changeRecipient = (input) => {
    return {
        type: CHANGE_RECIPIENT,
        payload: input
    }
}

export {
    changeRecipient
}