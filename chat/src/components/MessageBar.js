import React from 'react';
import styles from './styles/BarStyles';

const MessageBar = ({username, addMessage})  => {

    return (
        <div >
            <form id={"myForm"}
                  onSubmit={e => {
                      e.preventDefault();
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

export default MessageBar;