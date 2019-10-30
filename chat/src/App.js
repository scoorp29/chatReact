import React, {Component} from 'react';
import Chat from './components/Chat';
import Login from './components/Login';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import reducers from "./reducers/messages";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Provider store={store}>
                        <Route path="/chat">
                                <Chat />
                        </Route>
                        <Route exact path="/">
                            <Login />
                        </Route>
                        </Provider>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;
