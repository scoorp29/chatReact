import {connect} from "react-redux";
import {addMessage} from "../actions/messages";
import MessageBar from "../components/MessageBar";

const mapStateToProps = state => ({
    username: state.users.username,
    messages: state.messages.messages.messages,
});

const mapDispatchToProps = { addMessage };

export default connect(mapStateToProps, mapDispatchToProps)(MessageBar);