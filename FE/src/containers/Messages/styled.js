import styled from "styled-components";

let S = {};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  p {
    display: flex;
    background-color: white;
    border-radius: 50px;
    height: 40px;
    padding: 10px;
    width: fit-content;
    align-items: center;
    text-align: left;
  }
`;

const SendMessageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
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
  SendMessageWrapper,
  Button,
};
