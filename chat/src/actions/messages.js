import * as types from '../constants/ActionTypes';

export function addMessage(user, message) {
    return {
        type: types.ADD_MESSAGE,
        user,
        message
    };
}