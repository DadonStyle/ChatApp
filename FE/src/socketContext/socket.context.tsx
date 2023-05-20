import { createContext, useContext, useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import { SOCKET_URL } from '../config/default';
import EVENTS from '../config/events';
import { toast } from 'react-toastify';

interface RoomMessage {
    roomId?: string,
    message: string,
    userName: string,
    time?: string
}

interface Context {
    socket: Socket;
    userName?: string;
    setUserName: Function;
    roomId?: string;
    rooms: Record<string, { name: string }>;
    messages?: Array<RoomMessage>;
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
    const [messages, setMessages] = useState<Array<any>>([]);

    useEffect(() => {
        window.onfocus = () => {
            document.title = 'Chat App';
        }
    }, [])

    socket.on("connect", () => {
    });

    socket.on(EVENTS.SERVER.ROOMS, (value) => {
        setRooms(value);
    });

    socket.on(EVENTS.SERVER.JOINED_ROOM, (value) => {
        setRoomId(value);

        setMessages([]);
    });

    socket.on(EVENTS.SERVER.ROOM_MESSAGE, ({ message, userName, time }: RoomMessage) => {
        if (!document.hasFocus()) {
            document.title = "New message..."
        }
        setMessages([...messages || [], { message, userName, time }]);
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