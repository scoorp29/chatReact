import { ADD_MESSAGE, LOAD_MESSAGES_PENDING, LOAD_MESSAGES_SUCCESS, LOAD_MESSAGES_ERROR } from '../constants/ActionTypes';

const INITIAL_STATE = {
    messages: [
        {
            username:'Anonymous',
            message: 'No message yet !'
        }
    ]
};

const messages = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {...state, messages: [...state.messages, {username: action.username, message: action.message}]};
        case LOAD_MESSAGES_PENDING:
            return {...state, loading:true};
        case LOAD_MESSAGES_SUCCESS:
            return {...state, message: action.message, loading:false};
        case LOAD_MESSAGES_ERROR:
            return {...state, loading:false, error:action.error};
        default:
            return state;
    }
};

export default messages;