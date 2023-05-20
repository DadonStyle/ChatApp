import { createContext, useContext, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { SOCKET_URL } from '../config/default';
import EVENTS from '../config/events';

interface Context {
    socket: Socket;
    userName?: string;
    setUserName: Function;
    roomId?: string;
    rooms: Record<string, { name: string }>;
    messages?: Array<any>;
    setMessages: Function;
}

const socket = io(SOCKET_URL);

const SocketContext = createContext<Context>({
    socket,
    setUserName: () => false,
    rooms: {},
    messages: [],
    setMessages: () => false,
});

const SocketsProvider = (props: any) => {
    const [userName, setUserName] = useState('');
    const [roomId, setRoomId] = useState('');
    const [rooms, setRooms] = useState({});
    const [messages, setMessages] = useState([]);

    socket.on("connect", () => {
        console.log(socket.id); // true
    });

    socket.on(EVENTS.SERVER.ROOMS, (value) => {
        setRooms(value);
    });

    socket.on(EVENTS.SERVER.JOINED_ROOM, (value) => {
        setRoomId(value);


        setMessages([]);
    });

    return <SocketContext.Provider value={{
        socket,
        userName,
        setUserName,
        roomId,
        rooms,
        messages,
        setMessages,
    }} {...props} />
}

export const useSockets = () => useContext(SocketContext);

export default SocketsProvider;