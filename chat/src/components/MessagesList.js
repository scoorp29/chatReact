import React from 'react';
import MessageItem from "./MessageItem";
import {connect} from "react-redux";
import styles from './styles/MessagesStyles';

const MessagesList = ({messages}) => {
    console.log(messages);
    return (
        <ul style={styles.ul} >
            {
                messages.map((message, m) => {
                    return <div className={"row"} key={m}><MessageItem username={message.username} message={message.messages}/></div>;
                })
            }
        </ul>
    )
};

const mapStateToProps = state => ({
    messages: state.messages,
});

const connectComponent = connect(mapStateToProps);
export default connectComponent(MessagesList);