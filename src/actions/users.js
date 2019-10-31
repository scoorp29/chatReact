import * as types from '../constants/ActionTypes';

export function addUser(username) {
    return {
        type: types.ADD_USER,
        username
    };
}