import { Server } from "socket.io";
import express from "express";
import * as http from 'node:http';

const app = express()
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*", methods: ["GET", "POST"], }
});

let rooms = [];

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

    io.emit("user-joined", room.users)
  });

  socket.on('game-action', () => {
    io.emit('fetch-game-data')
  });

  socket.on("leave-room", ({ roomId, userId }) => {
    if (rooms.length > 0) {
      let room = rooms.find((room) => room.roomId === roomId);
      const user = room.users.find(user => user.userId === userId);

      user.sockets = user.sockets.filter(
        (socket) => socket.id !== socket.id
      );

      if (user.sockets.length === 0) {
        rooms = rooms.filter((room) => {
          if (room.roomId !== roomId) {
            return room;
          }

          room.users = room.users.filter((user) => user.userId !== userId);

          return room;
        });

        room = rooms.find((room) => room.roomId === roomId);
        io.emit("user-joined", room.users)
      }
    }
  })
});

io.listen(4000);
