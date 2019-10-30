import React, { Component } from 'react';
import Chat from './components/Chat';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { createStore} from "redux";
import reducers from "./reducers/messages";

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component{
    render() {
        return (
            <Provider store={store}>
                      <Chat />
            </Provider>
        );
    }
}

export default App;
