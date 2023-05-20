import styled from "styled-components";

let S = {};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;

const SideBarWrapper = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  left: 0;
  height: 100%;
  background-color: wheat;
  width: 250px;
`;

const BodyWrapper = styled.div`
  display: flex;
`;

export default S = {
  Wrapper,
  SideBarWrapper,
  BodyWrapper,
};
