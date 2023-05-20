import React, { useRef, useState } from 'react'
import { useSockets } from '../socketContext/socket.context';
import EVENTS from '../config/events';
import S from './styled';

const MessagesContainer = () => {
  const {socket, messages, roomId, userName, setMessages} = useSockets();
  const newMessageRef = useRef<any>('');

  const handleSendMessage = () => {
    const message = newMessageRef.current.value;
    if (!message) {
      return;
    }

    socket.emit(EVENTS.CLIENT.SEND_ROOM_MESSAGE, {roomId, message, userName});

    const date = new Date();

    setMessages([
      ...messages || [],
      {
        userName: 'You',
        message,
        time: `${date.getHours()}:${date.getMinutes()}}`
      }
    ])
    newMessageRef.current.value = '';
  }

  if (!roomId) {
    return <div />
  }

  return (
    <S.Wrapper>
      {messages?.map((message, index) => {
        return <p key={index}>{message.message}</p>
      })}

      <div>
        <S.TextArea
          rows={1}
          placeholder='What you are thinking'
          ref={newMessageRef}
        ></S.TextArea>
        <button id='msgSendBtn' onClick={handleSendMessage}>Send</button>
      </div>
    </S.Wrapper>
  )
}

export default MessagesContainer;