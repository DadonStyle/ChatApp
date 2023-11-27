import styled from "styled-components";

let S = {};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: auto;
  font-weight: 700;
  font-size: 25px;
  gap: 60px;
`;

const HeaderWrapper = styled.div`
  display: flex;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 6px;
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
  HeaderWrapper,
  InputWrapper,
  Button,
};
