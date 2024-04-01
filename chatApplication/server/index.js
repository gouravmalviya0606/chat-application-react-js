const http = require("http");
const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");

const app = express();
const port = 4500 || process.env.port;

const users = [{}];
app.use(cors());

app.get("/", (req, res) => {
  res.send("ITS WORKING");
});

const server = http.createServer(app);

const io = socketIO(server);

io.on("connection", (socket) => {
  console.log("new connection");
  // ({}) de-searching
  socket.on("joined", ({ user }) => {
    users[socket.id] = user;
    console.log(`${user} has joined`);

    socket.emit("welcome", {
      user: "Admin",
      message: `welcome to the chat, ${users[socket.id]} `,
    }); // jisne join kia hai usko message gyga
    socket.emit("userJoined", 'jhfsdjhfskhdfbsdjh'); // jisne join kia uske seva sbko send hoga
  });


  socket.on("message", ({ message, id }) => {
    io.emit("sendMessage", { user: users[id], message, id });
  });

  socket.on("disconnect", () => {
    socket.broadcast.emit("leave", {
      user: "Admin",
      message: `${users[socket.id]} user has left`,
    });
  });
});

server.listen(port, () => {
  console.log(`server is working on http://localhost:${port}`);
});
