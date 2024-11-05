import { io } from 'socket.io-client';
import { useAuth } from '../../auth/hooks/useAuth.ts';
import { useParams } from 'react-router-dom';

export const socket = io('http://localhost:4000', {
  autoConnect: false
});

export const useSocket = () => {
  const { authSelector } = useAuth();
  const params = useParams();

  const joinToRoom = () => {
    socket.connect();

    socket.on("connect", () => {
      socket.emit('join-to-room', {
        roomId: params.id,
        name: authSelector.user.name,
        userId: authSelector.user.id,
      });
    });
  }

  const fetchGameData = (callback: any) => {
    socket.on("fetch-game-data", () => {
      console.log('data obtenida');
      callback();
    })
  }

  const sendGameAction = () => {
    socket.emit("game-action", { roomId: params.id })
  }

  return {
    socket,
    joinToRoom,
    sendGameAction,
    fetchGameData,
  }
}