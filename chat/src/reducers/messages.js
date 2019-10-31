import { ADD_MESSAGE } from '../constants/ActionTypes';

const INITIAL_STATE = {
    messages: [
        {
            username:'Anonymous',
            messages: ''
        }
    ]
};

const messages = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {...state, messages: [...state.messages, {username: action.username, messages: action.messages}]};
        default:
            return state;
    }
};

export default messages;