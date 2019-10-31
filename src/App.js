import React, {Component} from 'react';
import ChatContainer from "./container/ChatContainer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux';
import store from "./store/store";
import LoginContainer from "./container/LoginContainer";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Provider store={store}>
                        <Route path="/chat">
                                <ChatContainer />
                        </Route>
                        <Route exact path="/">
                            <LoginContainer/>
                        </Route>
                        </Provider>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;
