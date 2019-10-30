import React from 'react';
import MessagesList from "./MessagesList";
import MessageBar from "./MessageBar";
import styles from './styles/ChatStyles';
import Emoji from 'react-emoji-render';

const Chat = () => {
    return (
        <div>
            <h1 style={styles.title}><Emoji text={"MiChat 💬"}/></h1>
            <MessagesList/>
            <MessageBar/>
        </div>
    )
};

export default Chat;