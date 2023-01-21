const { Server } = require("socket.io");

const io = function (server) {
  return new Server(server);
};
module.exports = io;
