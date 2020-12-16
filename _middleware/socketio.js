module.exports = (io) => {
  io.sockets.on('connection', function (socket) {
    socket.emit('message', 'socket connected');
  });

};
