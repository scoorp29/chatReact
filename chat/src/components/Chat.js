import React from 'react';
import MessagesList from "./MessagesList";
import MessageBar from "./MessageBar";
import {connect} from 'react-redux';
import {addMessage} from '../actions/messages'

const ws = new WebSocket("ws://localhost:50000");

const Chat = () => {
    return (
        <div>
            <h1>Chat</h1>
            <MessagesList/>
            <MessageBar/>
        </div>
    )
};

export default Chat;