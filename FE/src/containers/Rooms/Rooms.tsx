import React, { useEffect, useRef } from "react";
import { useSockets } from "../../socketContext/socket.context";
import EVENTS from "../../config/events";
import Input from "../../components/Input/Input";
import S from "./styled";

const RoomsContainer = () => {
  const { socket, roomId, rooms } = useSockets();

  const handleOnRoomClick = (key: any) => {
    if (key === roomId) return;

    socket.emit(EVENTS.CLIENT.JOIN_ROOM, key);
  };

  if (Object.keys(rooms).length < 1) {
    console.log(socket);
    return <div>Waiting for room creation</div>;
  }

  return (
    <nav>
      <S.Wrapper>
        Rooms:
        {Object.keys(rooms).map((key, index) => {
          return (
            <div key={index}>
              Join{""}
              <S.Button
                disabled={key === roomId}
                onClick={() => handleOnRoomClick(key)}
              >
                {rooms[key].name}
              </S.Button>
            </div>
          );
        })}
      </S.Wrapper>
    </nav>
  );
};

export default RoomsContainer;
