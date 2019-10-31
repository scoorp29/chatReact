import React from 'react';
import styles from './styles/LoginStyles';
import {
    useHistory,
} from "react-router-dom";
import Emoji from "react-emoji-render";

const Login = ({username, addUser}) => {
    let history = useHistory();
    const handleSubmit = (e => {
        e.preventDefault();
        history.push('/chat')
    });

    return (
        <div>
            <h1 style={styles.title}><Emoji text={"MiChat 💬"}/></h1>
            <form style={styles.myForm} id={"myForm"} onSubmit={handleSubmit}>
                <input style={styles.input} type="text" name="username" value={username} placeholder={'Enter votre nom'}
                       onChange={({ target }) => addUser(target.value)} />
            </form>
        </div>
    )
};

export default Login;
