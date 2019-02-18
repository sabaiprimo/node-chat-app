var socket = io();
        
socket.on('connect', function () {
    console.log('Connected to Server');
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (message){
    console.log('new message', message);
});

socket.on('newEmail', function (email){
    console.log('New email', email);
});