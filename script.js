const socket = io();

// Send message on button click
document.getElementById('send').onclick = function() {
    const message = document.getElementById('message').value;
    if (message) {
        socket.emit('chat message', message);
        document.getElementById('message').value = '';
    }
};

// Receive message and display it
socket.on('chat message', function(msg) {
    const messageElement = document.createElement('div');
    messageElement.textContent = msg;
    document.getElementById('messages').appendChild(messageElement);
});
