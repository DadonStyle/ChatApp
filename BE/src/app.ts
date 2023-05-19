import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import config from "config";
import logger from "./utills/logger";
import { version } from '../package.json'; // in tsconfig.json,  resolveJsonModule: true
import socket from './socket';

const port = config.get<number>("port");
const host = config.get<string>("host");
const corsOrigin = config.get<string>("corsOrigin");

const app = express();

const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: corsOrigin,
        credentials: true,
    },
});

app.get('/', (_, res) => res.send('Server up'));
// host is for Docker, should be 0.0.0
httpServer.listen(port, host, () => {
    logger.info(`Server is listening, ${version}`);
    logger.info(`http://${host}:${port}`)

    socket({ io });
});