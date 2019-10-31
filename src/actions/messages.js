import { ADD_MESSAGE, LOAD_MESSAGES_PENDING, LOAD_MESSAGES_SUCCESS, LOAD_MESSAGES_ERROR } from '../constants/ActionTypes';
import ws from "../service/websocket";

export function addMessage(username, message) {
    const messageSend = { type: 'ADD_MESSAGE', username: username, message: message };
    ws.send(JSON.stringify(messageSend));

    return {
        type: ADD_MESSAGE,
        username,
        message
    };
}

export function getMessages()
{
    return (dispatch) => {
        dispatch({type: LOAD_MESSAGES_PENDING});

        return fetch("https://my-json-server.typicode.com/tlenclos/formation-react-fake-server/messages")
            .then(response => response.json())
            .then(json => {
                dispatch({type: LOAD_MESSAGES_SUCCESS, messages: json.messages})
            })
            .catch(err => dispatch({type: LOAD_MESSAGES_ERROR, error: err}));
    }
}
