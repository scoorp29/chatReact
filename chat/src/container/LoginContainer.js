import {connect} from "react-redux";
import {addUser} from "../actions/users";
import Login from "../components/Login";

const mapStateToProps = state => ({
    username: state.users.username
});

const mapDispatchToProps = { addUser };

export default connect(mapStateToProps, mapDispatchToProps)(Login);