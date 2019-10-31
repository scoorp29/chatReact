import {connect} from "react-redux";
import Chat from "../components/Chat";

const mapStateToProps = state => ({
    username: state.users.username
});

export default connect(mapStateToProps, null)(Chat);