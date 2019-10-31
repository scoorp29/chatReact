import React from 'react';
import Emoji from 'react-emoji-render';
import styles from './styles/MessagesStyles';

const MessageItem = ({username, message}) => {
    return (
            <li style={styles.li} >
                <p
                    style={styles.messageText}>{username && username.toString()} : {message && <Emoji text={ message.toString() } />}
                </p>
            </li>
    )
};

export default MessageItem;