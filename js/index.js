const WebSocket = require('ws');
const readLineSync = require('readline-sync');

const selectedHost = readLineSync.question("Qual o IP de conexao? ");
const selectedPort = readLineSync.question("Qual a porta de conexao? ");
const tokenAccess = readLineSync.question("Qual o seu token de acesso? ");

try {
    const ws = new WebSocket("ws://" + selectedHost + ":" + selectedPort  + "?token=" + tokenAccess);

    ws.on('error', (err) => {
        console.error('Erro de conexão:', err);
    });

    ws.on('open', () => {
        console.log("Conectado ao servidor!");

        ws.send(JSON.stringify({
            type: "message",
            data: "Hello World"
        }));

        console.log("Uma mensagem foi enviada para o servidor!");
    });

    ws.onmessage = (event) => {
        const obj = event.data;
        console.log("Resposta do servidor: ", obj);
    }
} catch (e) {
    console.error(`Um erro ocorreu: ${e.message}`);
}