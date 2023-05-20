import { useRef, useEffect } from "react";
import { useSockets } from "./socketContext/socket.context";
import RoomsContainer from "./containers/Rooms/Rooms";
import MessagesContainer from "./containers/Messages/Messages";
import { Login } from "./containers/Login/Login";
import S from "./styled";

function App() {
  const { userName, setUserName } = useSockets();
  const userNameRef = useRef<any>(null);

  const handleSetUserName = () => {
    const userNameInput = userNameRef.current.value;
    if (!userNameInput) {
      return;
    }
    setUserName(userNameInput);

    localStorage.setItem("user", userNameInput);
  };

  return (
    <S.Wrapper>
      {!userName && (
        <div>
          <Login
            userNameRef={userNameRef}
            handleSetUserName={handleSetUserName}
          />
        </div>
      )}
      {userName && (
        <>
          <S.SideBarWrapper>
            <RoomsContainer />
          </S.SideBarWrapper>
          <S.BodyWrapper>
            <MessagesContainer />
          </S.BodyWrapper>
        </>
      )}
    </S.Wrapper>
  );
}

export default App;
