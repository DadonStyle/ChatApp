import React, { useRef } from 'react'
import { useSockets } from '../context/socket.context';
import EVENTS from '../config/events';

const MessagesContainer = () => {
  const {socket, messages, roomId, userName, setMessages} = useSockets();
  const newMessageRef = useRef<any>('');

  const handleSendMessage = () => {
    const newMessage = newMessageRef.current.value;
    if (!newMessage) {
      return;
    }

    socket.emit(EVENTS.CLIENT.SEND_ROOM_MESSAGE, {roomId, newMessage, userName});

    const date = new Date();

    setMessages([
      ...messages || [],
      {
        userName: 'You',
        message: newMessage,
        time: `${date.getHours()}:${date.getMinutes}}`
      }
    ])
  }

  if (!roomId) {
    return <div />
  }

  return (
    <div>
      {messages?.map((message, index) => {
        return <p key={index}>{JSON.stringify(message)}</p>
      })}

      <div>
        <textarea
        rows={1}
        placeholder='What you are thinking'
        ref={newMessageRef}
        ></textarea>
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  )
}

export default MessagesContainer;