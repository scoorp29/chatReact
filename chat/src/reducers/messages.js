import {ADD_MESSAGE, ADD_USERNAME} from '../constants/ActionTypes';

const INITIAL_STATE = {
    username: null,
    messages: [
        {
            username: 'test',
            messages: 'test'
        }
    ]
};

const messages = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return { ...state, messages: [...state.messages, {username: action.username, messages: action.messages}] };
        case ADD_USERNAME:
            return { ...state, username: action.username }
                default:
            return state;
    }
}

export default messages;