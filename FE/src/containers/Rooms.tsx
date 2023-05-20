import React, { useRef } from 'react'
import { useSockets } from '../context/socket.context';
import EVENTS from '../config/events';

const RoomsContainer = () => {

    const { socket, roomId, rooms } = useSockets();
    const newRoomName = useRef<any>(null);

    const handleCreateRoom = () => {
        // get the room name
        const roomName = newRoomName.current.value || '';
        if (!roomName || roomName?.length < 1) return;

        // emit room created event
        socket.emit(EVENTS.CLIENT.CREATE_ROOM, {roomName});

        // set room name input to empty string
        newRoomName.current.value = ""
    }

    return (
        <nav>
            <div>
                <input placeholder='Room name' ref={newRoomName} />
                <button type='submit' onClick={handleCreateRoom}>CREATE ROOM</button>
            </div>
            {Object.keys(rooms).map((key) => {
                return <div>{rooms[key].name}</div>
            })}
        </nav>
    )
}

export default RoomsContainer;