import React from 'react';
import styles from './styles/LoginStyles';
import {
    useHistory,
} from "react-router-dom";
import Emoji from "react-emoji-render";

const Login = ({username, addUser}) => {
    let history = useHistory();

    return (
        <div>
            <h1 style={styles.title}><Emoji text={"MiChat 💬"}/></h1>
            <form style={styles.myForm} id={"myForm"}
                  onSubmit={e => {
                      e.preventDefault();
                      const username = document.getElementById("uniqueIdMessage").value;
                      addUser(username);
                      document.getElementById("myForm").reset();
                      history.push('/chat');
                  }
                  }
            >
                <input style={styles.input} type="text" name="username" id="uniqueIdMessage" placeholder={'Enter votre nom'} />
            </form>
        </div>
    )
};

export default Login;
