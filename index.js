const express = require("express");
const app = express();
const server = require("http").Server(app);
const bodyParser = require('body-parser');
const io = require("socket.io")(server);
const UsersRouter = require('./users/routes.config');
const PrompterRouter = require('./prompter/routes.config');
const AuthorizationRouter = require('./authorization/routes.config');
require('dotenv').config()

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
AuthorizationRouter.routesConfig(app);
UsersRouter.routesConfig(app);
PrompterRouter.routesConfig(app);
server.listen(PORT, () => console.log(`Listen on *: ${PORT}`));

io.on("connection", socket => {
    const { id } = socket.client;
    console.log(`User connected: ${id}`);
    socket.on("isPlaying", msg => {
        console.log(`${id} user isPlaying: ${msg}`);
        io.emit("isPlaying", msg);
    });
});

app.get('/', function (req, res) {
    res.send({
        isSuccess: false,
        mongoUrl: process.env.MONGOURL,
    })
})

