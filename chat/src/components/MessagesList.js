import React from 'react';
import MessageItem from "./MessageItem";
import {connect} from "react-redux";

const MessagesList = ({messages}) => {
    return (
        <ul>
            {
                messages.map((message, m) => {
                    return <MessageItem message={message.messages}/>;
                })
            }
        </ul>
    )
};

const mapStateToProps = state => ({
    messages: state,
});

const connectComponent = connect(mapStateToProps);
export default connectComponent(MessagesList);