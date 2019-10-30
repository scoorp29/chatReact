import * as types from '../constants/ActionTypes';

export function addMessage(messages) {
    return {
        type: types.ADD_MESSAGE,
        messages
    };
}

export function addUsername(username) {
    return {
        type: types.ADD_USERNAME,
        username
    };
}