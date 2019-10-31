import React from 'react';
import MessagesListContainer from "../container/MessagesListContainer";
import MessageBarContainer from "../container/MessageBarContainer";
import styles from './styles/ChatStyles';
import Emoji from 'react-emoji-render';
import  { Redirect } from 'react-router-dom'

const Chat = (username) => {

    if (username.username === '') {
        return <Redirect to='/'  />;
    }

    return (
        <div>
            <h1 style={styles.title}><Emoji text={"MiChat 💬"}/></h1>
            <MessagesListContainer />
            <MessageBarContainer />
        </div>
    )
};

export default Chat;