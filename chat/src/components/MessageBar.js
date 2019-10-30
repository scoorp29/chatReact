import React from 'react';
import {connect} from "react-redux";
import {addMessage} from "../actions/messages";
import messages from "../reducers/messages";

const MessageBar = (dispach) => {
    return (
        <div>


            <form
                action="."
                onSubmit={e => {
                    e.preventDefault();
                    const username = document.getElementById("uniqueIdName").value
                    const message = document.getElementById("uniqueIdMessage").value;
                    connectComponent(addMessage(username, message))
                }
                }
            >
                <label htmlFor="name">
                    Name:&nbsp;
                    <input type="text" id="uniqueIdName" placeholder={'Enter your name...'}/>
                </label>
                <input type="text" id="uniqueIdMessage" placeholder={'Enter message...'}/>
                <input type="submit" value={'Send'}/>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    messages: state
});

const mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage: (username, message) => {
            dispatch(addMessage(username, message))
        }
    }
};


const connectComponent = connect(mapDispatchToProps,mapStateToProps);
export default connectComponent(MessageBar);