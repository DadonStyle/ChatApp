import { useRef } from 'react';
import './App.css'
import { useSockets } from './context/socket.context';
import RoomsContainer from './containers/Rooms';
import MessagesContainer from './containers/Messages';

function App() {
  const { socket, userName, setUserName  } = useSockets();
  const userNameRef = useRef<any>(null);

  const handleSetUserName = () => {
    const userNameInput = userNameRef.current.value;
    if (!userNameInput) {
      return;
    }
    setUserName(userNameInput);

    localStorage.setItem("user", userNameInput);
  }

  return (
    <div>
    {!userName &&
    <div>
      <input type='text' placeholder='User Name' ref={userNameRef} />
      <button type='submit' onClick={handleSetUserName}>Save</button>
    </div>
    }
    {userName &&
    <>
      <RoomsContainer />
      <MessagesContainer />
    </>
    }
    </div>
  )
}

export default App
