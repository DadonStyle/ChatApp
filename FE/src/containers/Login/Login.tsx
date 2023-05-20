import React from "react";
import S from "./styled";
import Input from "../../components/Input/Input";

interface ILogin {
  userNameRef: any;
  handleSetUserName: Function;
}

export const Login = ({ userNameRef, handleSetUserName }: ILogin) => {
  return (
    <S.Wrapper>
      <S.HeaderWrapper>Welcome guest !</S.HeaderWrapper>
      <S.InputWrapper>
        <Input placeholderProps={"Enter user name"} refProps={userNameRef} />
        <S.Button onClick={(e) => handleSetUserName(e)}>
          Save
        </S.Button>
      </S.InputWrapper>
    </S.Wrapper>
  );
};
