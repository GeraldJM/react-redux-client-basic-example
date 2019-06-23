import { CHANGE_MESSAGE, CHANGE_RECIPIENT } from '../actions/action-types';

const initalState = {
    message: 'Hello',
    recipient: 'World'
}

const reducer = (state = initalState, action) => {
    let { message, recipient } = state;
    switch(action.type) {
        case CHANGE_MESSAGE:
            return {...action.payload, recipient };
        case CHANGE_RECIPIENT:
            return {...action.payload, message };
        default:
            return state;
    }
}

export default reducer;