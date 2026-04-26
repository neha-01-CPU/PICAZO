const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

 Setup the server
const app = express();
app.use(cors());
const server = http.createServer(app);

 Setup Socket.io and allow your HTML file to connect to it
const io = new Server(server, {
  cors {
    origin ,  Allows any browser to connect
    methods [GET, POST]
  }
});

 This array acts as the lobby, holding everyone who joins!
let players = [];

io.on('connection', (socket) = {
  console.log('⚡ A player connected! ID', socket.id);

   1. When your frontend says Hey, I want to join the game!
  socket.on('joinGame', (userData) = {
    const newPlayer = {
      id socket.id,
      name userData.name,
      avatarDef userData.avatarDef
    };
    players.push(newPlayer);
    
    console.log(`👤 ${userData.name} joined the lobby.`);

     Tell ALL connected browsers that a new player joined
    io.emit('playerJoined', newPlayer);

     Give the new player the list of everyone ALREADY in the room
    socket.emit('currentPlayers', players);
  });

   2. When the drawer moves their mouse, broadcast it to everyone else
  socket.on('drawing', (drawData) = {
    socket.broadcast.emit('drawData', drawData);
  });

   3. When someone closes their browser tab
  socket.on('disconnect', () = {
    console.log('❌ A player disconnected. ID', socket.id);
     Remove them from the lobby array
    players = players.filter(p = p.id !== socket.id);
     Tell everyone else to remove this player from their screen
    io.emit('playerLeft', socket.id);
  });
});

 Start the server
const PORT = process.env.PORT  3000;
server.listen(PORT, () = {
  console.log(`🚀 Picazo Server is running on port ${PORT}`);
});ś
