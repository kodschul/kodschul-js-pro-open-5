// const express = require("express");
// const app = express();
const http = require("http");
const server = http.createServer();
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// app.use(cors())

io.on("connection", (socket) => {
  console.log("Welcome: ", socket.id);

  socket.on("chat", (data) => {
    io.emit("new_chat", { ...data, senderId: socket.id });
    console.log(`${socket.id} said: ${JSON.stringify(data)}`);
  });
});

server.listen(3000, () => {
  console.log("running on: http://localhost:3000");
});
