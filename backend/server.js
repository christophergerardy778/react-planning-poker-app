import { Server } from "socket.io";
import express from "express";
import * as http from 'node:http';

const app = express()
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*", methods: ["GET", "POST"], }
});

const rooms = [];

io.on("connection", (socket) => {
  socket.on("join-to-room", ({ roomId, userId, name }) => {
    let room = rooms.find((room) => room.roomId === roomId);

    if (!room) {
      room = {
        roomId,
        users: [],
      }

      rooms.push(room);
    }

    let user = room.users.find(
      (room) => room.userId === userId
    );

    if (!user) {
      user = {
        userId,
        name,
        sockets: [],
      };

      room.users.push(user);
    }

    if (!user.sockets.includes(socket.id)) {
      user.sockets.push(socket.id);
      socket.join(roomId);
    }
  });

  socket.on('game-action', ({ roomId }) => {
    io.emit('fetch-game-data')
  });
});

io.listen(4000);
