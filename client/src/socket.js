import { io } from "socket.io-client";

const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:3001'
//El estado susccrito a redux del usuario

export const socket = io(URL, {
    autoConnect: false,
})