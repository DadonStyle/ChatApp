import styled from "styled-components";

let S = {};

const Input = styled.input`
  display: flex;
  border: none;
  border-radius: 50px;
  padding-left: 40px;
  font-size: 18px;
  font-weight: 400;
  font-family: Impact, Charcoal, sans-serif;
  min-height: 40px;
  background-color: gray;
  color: wheat;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: gainsboro;
    opacity: 1; /* Firefox */
  }
`;

export default S = {
  Input,
};
