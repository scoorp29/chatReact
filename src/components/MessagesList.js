import React from 'react';
import MessageItem from "./MessageItem";
import styles from './styles/MessagesStyles';

const MessagesList = ({messages}) => {
    console.log(messages);
    return (
        <div>
            <ul style={styles.ul}>
                {
                    messages.map((message, m) => {
                        return <div className={"row"} key={m}><MessageItem username={message.username} message={message.message}/></div>;
                    })
                }
            </ul>
        </div>
    )
};

export default MessagesList;