import styled from "styled-components";

let S = {};

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  gap: 10px;
`;

const Button = styled.button`
  display: flex;
  border: none;
  border-radius: 50px;
  color: wheat;
  background-color: gray;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: gainsboro;
    opacity: 1; /* Firefox */
  }
`;

export default S = {
  Wrapper,
  Button,
};
