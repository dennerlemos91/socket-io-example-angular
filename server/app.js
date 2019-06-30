const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const clients = {};

app.get('/', function (req, res) {
  io.emit('teste', Math.random());
});

//SocketIO vem aqui
io.on("connection", (socket) => {
  console.log('user connected');
  socket.emit('teste', 'Mensagem Teste')
});

http.listen(3000, function () {
  console.log('listening on port 3000');
});
