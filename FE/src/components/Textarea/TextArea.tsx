import React, { useState } from 'react';
import S from './styled';

export const TextArea = ({ refProps }: any) => {
  // responsible for expanding when the text is long
  const adjustHeight = () => {
    refProps.current.style.height = 'inherit';
    refProps.current.style.height = `${refProps.current.scrollHeight}px`;
  };

  return (
    <S.TextArea
      placeholder='What you are thinking'
      ref={refProps}
      onChange={adjustHeight}
      rows={1}
    ></S.TextArea>
  );
};

export default TextArea;
