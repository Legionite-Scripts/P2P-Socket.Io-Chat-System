// plugins/socket.io.client.js
import { io } from 'socket.io-client';

export default defineNuxtPlugin(() => {
  const socket = io('http://localhost:7000'); // Adjust the URL to your Socket.io server

  return {
    provide: {
      socket
    }
  };
});
