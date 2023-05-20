import styled from "styled-components";

let S = {};

const TextArea = styled.textarea`
  overflow: hidden;
  resize: horizontal;
  display: flex;
  border: none;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  text-align: left;
  padding: 10px 10px 0px 30px;
  font-size: 18px;
  font-weight: 400;
  font-family: Impact, Charcoal, sans-serif;
  color: wheat;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: gainsboro;
    opacity: 1; /* Firefox */
  }
`;

export default S = {
  TextArea,
};
