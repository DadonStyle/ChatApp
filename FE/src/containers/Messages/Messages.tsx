import React, { useRef, useState } from "react";
import { useSockets } from "../../socketContext/socket.context";
import EVENTS from "../../config/events";
import S from "./styled";
import TextArea from "../../components/Textarea/TextArea";
import Input from "../../components/Input/Input";

const MessagesContainer = () => {
  const { socket, messages, roomId, userName, setMessages } = useSockets();
  const newMessageRef = useRef<any>("");
  const newRoomName = useRef<any>(null);

  const handleSendMessage = () => {
    const message = newMessageRef.current.value;
    if (!message) {
      return;
    }

    socket.emit(EVENTS.CLIENT.SEND_ROOM_MESSAGE, { roomId, message, userName });

    const date = new Date();

    setMessages([
      ...(messages || []),
      {
        userName: "You",
        message,
        time: `${date.getHours()}:${date.getMinutes()}}`,
      },
    ]);
    newMessageRef.current.value = "";
  };

  const handleCreateRoom = () => {
    // get the room name
    const roomName = newRoomName.current.value || "";
    if (!roomName || roomName?.length < 1) return;

    // emit room created event
    socket.emit(EVENTS.CLIENT.CREATE_ROOM, { roomName });

    // set room name input to empty string
    newRoomName.current.value = "";
  };

  if (!roomId) {
    return (
      <div>
        <Input placeholderProps="Room name" refProps={newRoomName} />
        <S.Button type="submit" onClick={handleCreateRoom}>
          CREATE ROOM
        </S.Button>
      </div>
    );
  }

  return (
    <S.Wrapper>
      {messages?.map((message, index) => {
        return <p key={index}>{message.message}</p>;
      })}

      <S.SendMessageWrapper>
        <TextArea refProps={newMessageRef}></TextArea>
        <button id="msgSendBtn" onClick={handleSendMessage}>
          Send
        </button>
      </S.SendMessageWrapper>
    </S.Wrapper>
  );
};

export default MessagesContainer;
