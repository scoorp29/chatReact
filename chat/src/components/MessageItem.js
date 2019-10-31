import React from 'react';
import Emoji from 'react-emoji-render';
import styles from './styles/MessagesStyles';

const MessageItem = ({username, message}) => {
    return (
            <li style={styles.li}>
                <p
                    style={styles.messageText}>{username} : <Emoji text={ message } />
                    { message.length === 0 && <Emoji text="Pas de message &#x1F388;" /> }
                </p>
            </li>
    )
};

export default MessageItem;