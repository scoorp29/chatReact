import React from 'react';
import {connect} from "react-redux";
import {addMessage} from "../actions/messages";
import styles from './styles/BarStyles';

const MessageBar = ({addMessage})  => {

    return (
        <div >
            <form id={"myForm"}
                onSubmit={e => {
                    e.preventDefault();
                    const message = document.getElementById("uniqueIdMessage").value;
                    addMessage("TODO", message);
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

const mapDispatchToProps = { addMessage };
export default connect(null, mapDispatchToProps)(MessageBar);