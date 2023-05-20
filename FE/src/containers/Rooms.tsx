import React, { useEffect, useRef } from 'react'
import { useSockets } from '../socketContext/socket.context';
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

    const handleOnRoomClick = (key: any) => {
        if (key === roomId) return;
        
        socket.emit(EVENTS.CLIENT.JOIN_ROOM, key)
    }

    return (
        <nav>
            <div>
                <input placeholder='Room name' ref={newRoomName} />
                <button type='submit' onClick={handleCreateRoom}>CREATE ROOM</button>
            </div>
            {Object.keys(rooms).map((key, index) => {
                return <div key={index}>Join <button disabled={key === roomId} onClick={() => handleOnRoomClick(key)}>{rooms[key].name}</button></div>
            })}
        </nav>
    )
}

export default RoomsContainer;