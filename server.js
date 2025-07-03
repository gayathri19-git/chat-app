const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Create an Express application
const app = express();
const server = http.createServer(app);

// Initialize Socket.IO
const io = socketIo(server);

// Serve static files (like index.html, style.css, script.js)
app.use(express.static('public'));

// Handle a new connection from a client
io.on('connection', (socket) => {
  console.log('a user connected');

  // Listen for chat messages from the client
  socket.on('chat message', (msg) => {
    // Emit the message to all connected clients
    io.emit('chat message', msg);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// Start the server on port 4000
server.listen(4000, () => {
  console.log('🚀 Server running at http://localhost:4000');
});
