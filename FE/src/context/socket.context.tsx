import { createContext, useContext, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { SOCKET_URL } from '../config/default';

interface Context {
    socket: Socket;
    userName?: string;
    setUserName: Function;
    roomId?: string;
    rooms: object;
}

const socket = io(SOCKET_URL);

socket.on("connect", () => {
    console.log(socket.id); // true
});

const SocketContext = createContext<Context>({ socket, setUserName: () => false, rooms: {} });

const SocketsProvider = (props: any) => {
    const [userName, setUserName] = useState('');
    const [roomId, setRoomId] = useState('');
    const [rooms, setRooms] = useState({});

    return <SocketContext.Provider value={{ socket, userName, setUserName, roomId, rooms }} {...props} />
}

export const useSockets = () => useContext(SocketContext);

export default SocketsProvider;