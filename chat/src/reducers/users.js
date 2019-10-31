import {ADD_USER} from '../constants/ActionTypes';

const INITIAL_STATE = {
    username: '',
};

const users = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_USER:
            return {...state, username: action.username}
        default:
            return state;
    }
}

export default users;