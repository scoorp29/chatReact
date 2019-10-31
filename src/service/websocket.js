import store from "../store/store";

const URL = 'wss://qz6nv.sse.codesandbox.io/';

const ws = new WebSocket(URL);

ws.onmessage = evt => {
   const messageLoad = JSON.parse(evt.data);
   store.dispatch(messageLoad);
};

export default ws;