import React from 'react';
import styles from './styles/BarStyles';
import {addMessage} from "../actions/messages";
import {connect} from "react-redux";

const MessageBar = ({username, addMessage})  => {
    return (
        <div >
            <form id={"myForm"}
                  onSubmit={e => {
                      e.preventDefault();
                      console.log(e);
                      const message = document.getElementById("uniqueIdMessage").value;
                      addMessage(username, message);
                      document.getElementById("myForm").reset();
                  }
                  }
            >
                <input style={styles.input} type="text" id="uniqueIdMessage" placeholder={'Enter message...'}/>
                <button style={styles.button} className='btn btn-default' type="submit" value={'Send'}>Send</button>
            </form>
        </div>
    )
};

const mapStateToProps = state => ({
    username: state.users.username,
    messages: state.messages.messages.messages,
});

const mapDispatchToProps = { addMessage };

export default connect(mapStateToProps, mapDispatchToProps)(MessageBar);