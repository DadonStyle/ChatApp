import styled from 'styled-components';

let S = {};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
`;

const SideBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
