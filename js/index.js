const WebSocket = require('ws');
const ws = new WebSocket("ws://localhost:3000");

ws.on('open', () => {
    console.log("Conectado ao servidor");

    ws.send(JSON.stringify({
        type: "message",
        data: "Hello World"
    }));
});

ws.onmessage = (event) => {
    const obj = event.data;
    console.log("Resposta do servidor: ", obj);
}