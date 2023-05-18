import { Server, Socket } from "socket.io";
import logger from "./utills/logger";

const EVENTS = {
    conenction: 'conenction'
}

const socket = ({ io }: { io: Server }) => {
    logger.info("Socket enabled");

    io.on(EVENTS.conenction, (socket: Socket) => {
        logger.info(`User connected ${socket.id}`)
    })
}

export default socket