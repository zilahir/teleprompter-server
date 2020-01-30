const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Listen on *: ${PORT}`));

io.on("connection", socket => {
    const { id } = socket.client;
    console.log(`User connected: ${id}`);
    socket.on("isPlaying", msg => {
        console.log(`${id} user isPlaying: ${msg}`);
        io.emit("isPlaying", msg);
    });
});