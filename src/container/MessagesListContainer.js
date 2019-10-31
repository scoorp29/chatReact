import {connect} from "react-redux";
import React from 'react';
import MessagesList from "../components/MessagesList";
import {getMessages} from "../actions/messages";

class MessagesListContainer extends React.Component {
/*
    componentDidMount() {
        this.props.getMessages();
    }
*/

    render() {
        return (
            <MessagesList messages={this.props.messages}/>
        )
    }
}

const mapStateToProps = state => ({
    messages: state.messages.messages,
});

const mapDispatchToProps = { getMessages };

export default connect(mapStateToProps, mapDispatchToProps)(MessagesListContainer);