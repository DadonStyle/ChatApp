import React, { useState } from "react";
import S from "./styled";

interface IInput {
  refProps: any,
  placeholderProps: string
}

export const Input = ({ refProps, placeholderProps }: IInput) => {
  return <S.Input type="text" placeholder={placeholderProps} ref={refProps} />;
};

export default Input;
