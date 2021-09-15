const cors = require('cors');
const config = require('./config/config');
const { errorConverter, errorHandler } = require('./middlewares/error');
const { socketService } = require('./services')

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {
  Server
} = require("socket.io");
const io = new Server(server, {cors: { origin: '*'}});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socketService.socketHandler(socket);
});

server.listen(config.wsport, () => {
  console.log(`listening on *:${config.wsport}`);
});

const corsOptions = {
  origin: '*',
};

// enable cors
app.use(cors(corsOptions));

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;
