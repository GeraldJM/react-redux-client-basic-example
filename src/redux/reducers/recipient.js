import { CHANGE_RECIPIENT } from '../actions/action-types';

const initalState = {
    recipient: 'World'
}

const reducer = (state = initalState, action) => {
    switch(action.type) {
        case CHANGE_RECIPIENT:
            return { recipient: action.payload }
        default:
            return state;
    }
}

export default reducer;