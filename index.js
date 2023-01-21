const express = require("express");

const serverIO = require("./socket/index");

const socketRoom = require("./routes/createRoom");
const bodyParser = require("body-parser").json();
// const roomNumber = require("./public/js/socket");

const app = express();
const http = require("http");
const server = http.createServer(app);
const io = serverIO(server);
app.use(express.static("public"));
app.use(bodyParser);
app.use("/room", socketRoom);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  // console.log(socket.rooms);
});
server.listen(3000, () => {
  console.log("listening on *:3000");
});
