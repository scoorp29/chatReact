import {ADD_MESSAGE} from '../constants/ActionTypes';

const INITIAL_STATE = [
        {
            user: 'Bob',
            messages: 'Pas de Message!'
        },
    ];

const messages = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state, user: action.user, messages: action.messages
            };
        default:
            return state;
    }
}

export default messages;