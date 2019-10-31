import * as types from '../constants/ActionTypes';

export function addMessage(username, messages) {
    return {
        type: types.ADD_MESSAGE,
        username,
        messages
    };
}
