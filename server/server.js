const io = require('socket.io')();
// const { initGame, gameLoop, getUpdatedVelocity } = require('./game');
// const { FRAME_RATE } = require('./constants');
// const { makeid } = require('./utils');

// const state = {};
// const clientRooms = {};

io.on('connection', client => {

});

// function startGameInterval(roomName) {
//   const intervalId = setInterval(() => {
//     const winner = gameLoop(state[roomName]);
    
//     if (!winner) {
//       emitGameState(roomName, state[roomName])
//     } else {
//       emitGameOver(roomName, winner);
//       state[roomName] = null;
//       clearInterval(intervalId);
//     }
//   }, 1000 / FRAME_RATE);
// }

// function emitGameState(room, gameState) {
//   // Send this event to everyone in the room.
//   io.sockets.in(room)
//     .emit('gameState', JSON.stringify(gameState));
// }

// function emitGameOver(room, winner) {
//   io.sockets.in(room)
//     .emit('gameOver', JSON.stringify({ winner }));
// }

io.listen(3000);
