import store from "../store/store";

const URL = 'wss://srrj6.sse.codesandbox.io/';

const ws = new WebSocket(URL);

ws.onmessage = evt => {
   const messageLoad = JSON.parse(evt.data);
   store.dispatch(messageLoad);
};

export default ws;