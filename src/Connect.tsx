import { io, Socket } from 'socket.io-client';

let socket: Socket = io();

export default socket;