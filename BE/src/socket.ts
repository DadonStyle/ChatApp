import { Server, Socket } from "socket.io";
import logger from "./utills/logger";
import { nanoid } from 'nanoid';

const EVENTS = {
    conenction: 'connect',
    CLIENT: {
        CREATE_ROOM: 'CREATE_ROOM',
        SEND_ROOM_MESSAGE: 'SEND_ROOM_MESSAGE',
    },
    SERVER: {
        ROOMS: 'ROOMS',
        JOINED_ROOM: 'JOINED_ROOM'
    }
}

const rooms: Record<string, { name: string }> = {};

const socket = ({ io }: { io: Server }) => {
    logger.info("Socket enabled");

    io.on(EVENTS.conenction, (socket: Socket) => {
        logger.info(`User connected ${socket.id}`)
        socket.on(EVENTS.CLIENT.CREATE_ROOM, ({roomName}) => {
            console.log({roomName})
            // create a roomId
            const roomId = nanoid();

            // add a new room to the rooms object
            rooms[roomId] = {
                name: roomName
            }

            socket.join(roomId);

            // broadcast an event saying there is a new room
            socket.broadcast.emit(EVENTS.SERVER.ROOMS, rooms);

            // emit back to the room creator with all the rooms
            socket.emit(EVENTS.SERVER.ROOMS, rooms);

            // emit event back the room creator saying they have joined a room
            socket.emit(EVENTS.SERVER.JOINED_ROOM, roomId);
        })
    })
}

export default socket;