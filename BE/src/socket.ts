import { Server, Socket } from "socket.io";
import logger from "./utills/logger";

const EVENTS = {
    conenction: 'connect',
    CLIENT: {
        CREATE_ROOM: 'CREATE_ROOM'
    }
}

const socket = ({ io }: { io: Server }) => {
    logger.info("Socket enabled");

    io.on(EVENTS.conenction, (socket: Socket) => {
        logger.info(`User connected ${socket.id}`)
        socket.on(EVENTS.CLIENT.CREATE_ROOM, ({roomName}) => console.log({roomName}))
    })
}

export default socket;