import React from 'react';
import Emoji from 'react-emoji-render';
import styles from './styles/MessagesStyles';

const MessageItem = ({username, message}) => {
    return (
            <li style={styles.li}>
                <p
                    style={styles.messageText}>{username} : <Emoji text={ message } />

                </p>
            </li>
    )
};

export default MessageItem;